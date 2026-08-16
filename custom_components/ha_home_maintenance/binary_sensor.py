"""Binary sensor platform for the Home Maintenance integration."""

from __future__ import annotations

import logging
from datetime import timedelta

from homeassistant.components.binary_sensor import (
    BinarySensorDeviceClass,
    BinarySensorEntity,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.event import async_track_time_interval
from homeassistant.util import dt as dt_util

from .const import DOMAIN, NAME, VERSION
from .store import HomeMaintenanceTask, TaskStore, calculate_next_due

_LOGGER = logging.getLogger(__name__)

# How often each sensor re-evaluates its overdue status. Overdue is purely a
# function of wall-clock time, so we need a periodic tick to detect transitions
# when no store changes occur.
OVERDUE_CHECK_INTERVAL = timedelta(hours=1)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up binary sensor entities from a config entry."""
    store: TaskStore = hass.data[DOMAIN]["store"]

    # Create sensors for existing tasks, plus a single aggregate sensor that
    # reports whether any task is overdue. The aggregate sensor is always
    # created on setup so it is available out of the box on a fresh install,
    # even before any tasks exist.
    entities: list[BinarySensorEntity] = [
        HomeMaintenanceSensor(store, task, entry)
        for task in store.get_all_tasks()
    ]
    entities.append(HomeMaintenanceAnyOverdueSensor(store, entry))
    async_add_entities(entities)

    # Listen for store changes to add/remove sensors
    current_task_ids = {task.id for task in store.get_all_tasks()}

    def _on_store_change() -> None:
        new_tasks = store.get_all_tasks()
        new_ids = {t.id for t in new_tasks}
        # Add entities for newly created tasks
        added = [
            HomeMaintenanceSensor(store, t, entry)
            for t in new_tasks
            if t.id not in current_task_ids
        ]
        if added:
            async_add_entities(added)
        current_task_ids.clear()
        current_task_ids.update(new_ids)
        # Schedule state updates for existing entities
        hass.bus.async_fire(f"{DOMAIN}_tasks_updated")

    store.add_listener(_on_store_change)

    # Clean up listener on unload
    entry.async_on_unload(lambda: store.remove_listener(_on_store_change))


class HomeMaintenanceSensor(BinarySensorEntity):
    """Binary sensor that is ON when a maintenance task is overdue."""

    _attr_has_entity_name = True

    def __init__(
        self,
        store: TaskStore,
        task: HomeMaintenanceTask,
        entry: ConfigEntry,
    ) -> None:
        self._store = store
        self._task_id = task.id
        self._entry = entry
        self._attr_unique_id = f"{DOMAIN}_{task.id}"
        self._attr_name = task.title
        self._attr_icon = task.icon
        self._was_overdue: bool = False

    @property
    def device_info(self) -> DeviceInfo:
        """Return device info to link this entity to the integration device."""
        return DeviceInfo(
            identifiers={(DOMAIN, self._entry.entry_id)},
            name=NAME,
            manufacturer="Home Maintenance Pro",
            sw_version=VERSION,
        )

    @property
    def is_on(self) -> bool:
        """Return True if the task is overdue."""
        task = self._store.get_task(self._task_id)
        if task is None:
            return True
        return self._task_is_overdue(task)

    @classmethod
    def _task_is_overdue(cls, task: HomeMaintenanceTask) -> bool:
        """Return True if the given task is currently overdue."""
        if not cls._is_in_season(task):
            return False  # Out of season tasks never report overdue
        if task.last_performed is None:
            return True  # Never performed = overdue

        next_due = calculate_next_due(task)
        if next_due is None:
            _LOGGER.warning(
                "Invalid last_performed date '%s' for task '%s'",
                task.last_performed,
                task.title,
            )
            return True
        return dt_util.now().date() >= next_due

    @property
    def extra_state_attributes(self) -> dict:
        """Return extra state attributes for the entity."""
        task = self._store.get_task(self._task_id)
        if task is None:
            return {}

        next_due = calculate_next_due(task)
        return {
            "title": task.title,
            "description": task.description,
            "last_performed": task.last_performed,
            "next_due": next_due.isoformat() if next_due else None,
            "interval": f"{task.interval_value} {task.interval_type}",
            "icon": task.icon,
            "tag_id": task.tag_id,
            "track_history": task.track_history,
            "completion_count": len(task.completion_history) if task.track_history else None,
            "last_completed": task.completion_history[-1] if task.track_history and task.completion_history else None,
            "labels": task.labels,
            "active_months": task.active_months,
            "in_season": self._is_in_season(task),
        }

    @property
    def available(self) -> bool:
        """Return True if the underlying task still exists."""
        return self._store.get_task(self._task_id) is not None

    async def async_added_to_hass(self) -> None:
        """Register event listener when entity is added."""
        self._was_overdue = self.is_on
        self.async_on_remove(
            self.hass.bus.async_listen(
                f"{DOMAIN}_tasks_updated", self._handle_update
            )
        )
        # Tasks can transition to overdue purely by time passing, without any
        # store mutation. Poll on an interval so we still detect that and
        # surface the persistent notification.
        self.async_on_remove(
            async_track_time_interval(
                self.hass, self._handle_tick, OVERDUE_CHECK_INTERVAL
            )
        )

    async def _handle_tick(self, _now) -> None:
        await self._refresh_and_notify()

    async def _handle_update(self, event) -> None:
        """Handle task-updated events by refreshing state."""
        await self._refresh_and_notify()

    async def _refresh_and_notify(self) -> None:
        is_overdue = self.is_on
        task = self._store.get_task(self._task_id)
        if (
            is_overdue
            and not self._was_overdue
            and task is not None
            and task.notify_when_overdue
        ):
            await self.hass.services.async_call(
                "persistent_notification",
                "create",
                {
                    "title": "Maintenance Overdue",
                    "message": f'"{task.title}" is overdue and needs attention.',
                    "notification_id": f"{DOMAIN}_{self._task_id}_overdue",
                },
            )
        self._was_overdue = is_overdue
        self.async_write_ha_state()

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------

    @staticmethod
    def _is_in_season(task: HomeMaintenanceTask) -> bool:
        """Return True if the task is currently within its active months."""
        if not task.active_months:
            return True
        return dt_util.now().month in task.active_months


class HomeMaintenanceAnyOverdueSensor(BinarySensorEntity):
    """Binary sensor that is ON when at least one maintenance task is overdue.

    This aggregate sensor is created automatically on setup (no per-task
    configuration required) so users have a single entity to key generic
    "you have overdue maintenance" automations/notifications off of, instead
    of having to combine every per-task sensor themselves.
    """

    _attr_has_entity_name = True
    _attr_device_class = BinarySensorDeviceClass.PROBLEM
    _attr_icon = "mdi:calendar-alert"

    def __init__(self, store: TaskStore, entry: ConfigEntry) -> None:
        self._store = store
        self._entry = entry
        self._attr_unique_id = f"{DOMAIN}_any_overdue"
        self._attr_name = "Any Overdue"
        # Pin the entity_id rather than letting it fall out of the
        # has_entity_name/device-name auto-generation. README has documented
        # this exact entity_id since the integration's first commit.
        self.entity_id = "binary_sensor.home_maintenance_any_overdue"

    @property
    def device_info(self) -> DeviceInfo:
        """Return device info to link this entity to the integration device."""
        return DeviceInfo(
            identifiers={(DOMAIN, self._entry.entry_id)},
            name=NAME,
            manufacturer="Home Maintenance Pro",
            sw_version=VERSION,
        )

    @property
    def is_on(self) -> bool:
        """Return True if any task is currently overdue."""
        return bool(self._overdue_tasks())

    @property
    def extra_state_attributes(self) -> dict:
        """Return extra state attributes for the entity."""
        overdue = self._overdue_tasks()
        return {
            "overdue_count": len(overdue),
            "overdue_tasks": [task.title for task in overdue],
        }

    async def async_added_to_hass(self) -> None:
        """Register event listener when entity is added."""
        self.async_on_remove(
            self.hass.bus.async_listen(
                f"{DOMAIN}_tasks_updated", self._handle_update
            )
        )
        # Tasks can transition to overdue purely by time passing, without any
        # store mutation. Poll on an interval so we still detect that.
        self.async_on_remove(
            async_track_time_interval(
                self.hass, self._handle_tick, OVERDUE_CHECK_INTERVAL
            )
        )

    async def _handle_tick(self, _now) -> None:
        self.async_write_ha_state()

    async def _handle_update(self, event) -> None:
        """Handle task-updated events by refreshing state."""
        self.async_write_ha_state()

    def _overdue_tasks(self) -> list[HomeMaintenanceTask]:
        """Return the list of tasks that are currently overdue."""
        return [
            task
            for task in self._store.get_all_tasks()
            if HomeMaintenanceSensor._task_is_overdue(task)
        ]
