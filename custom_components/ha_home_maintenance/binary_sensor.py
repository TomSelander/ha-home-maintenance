"""Binary sensor platform for the Home Maintenance integration."""

from __future__ import annotations

import logging
from datetime import datetime, timedelta

from homeassistant.components.binary_sensor import BinarySensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN, NAME, VERSION
from .store import HomeMaintenanceTask, TaskStore

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up binary sensor entities from a config entry."""
    store: TaskStore = hass.data[DOMAIN]["store"]

    # Create sensors for existing tasks
    entities = [
        HomeMaintenanceSensor(store, task, entry)
        for task in store.get_all_tasks()
    ]
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
        if task is None or task.last_performed is None:
            return True  # Never performed = overdue

        try:
            last = datetime.strptime(task.last_performed, "%Y-%m-%d")
        except (ValueError, TypeError):
            _LOGGER.warning(
                "Invalid last_performed date '%s' for task '%s'",
                task.last_performed,
                task.title,
            )
            return True
        due = self._add_interval(last, task.interval_type, task.interval_value)
        return datetime.now() >= due

    @property
    def extra_state_attributes(self) -> dict:
        """Return extra state attributes for the entity."""
        task = self._store.get_task(self._task_id)
        if task is None:
            return {}

        next_due = self._calculate_next_due(task)
        return {
            "title": task.title,
            "description": task.description,
            "last_performed": task.last_performed,
            "next_due": next_due,
            "interval": f"{task.interval_value} {task.interval_type}",
            "icon": task.icon,
            "tag_id": task.tag_id,
            "track_history": task.track_history,
            "completion_count": len(task.completion_history) if task.track_history else None,
            "last_completed": task.completion_history[-1] if task.track_history and task.completion_history else None,
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

    async def _handle_update(self, event) -> None:
        """Handle task-updated events by refreshing state."""
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
    def _add_interval(
        base: datetime, interval_type: str, interval_value: int
    ) -> datetime:
        """Return base + interval."""
        if interval_type == "days":
            return base + timedelta(days=interval_value)
        if interval_type == "weeks":
            return base + timedelta(weeks=interval_value)
        if interval_type == "months":
            # Approximate months as 30 days
            return base + timedelta(days=interval_value * 30)
        return base + timedelta(days=interval_value)

    def _calculate_next_due(self, task: HomeMaintenanceTask) -> str | None:
        """Return the next-due date as an ISO string, or None."""
        if task.last_performed is None:
            return None
        try:
            last = datetime.strptime(task.last_performed, "%Y-%m-%d")
        except (ValueError, TypeError):
            return None
        due = self._add_interval(last, task.interval_type, task.interval_value)
        return due.strftime("%Y-%m-%d")
