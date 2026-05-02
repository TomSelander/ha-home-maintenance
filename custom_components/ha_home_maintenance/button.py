"""Button platform for the Home Maintenance integration."""

from __future__ import annotations

import logging

from homeassistant.components.button import ButtonEntity
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
    """Set up button entities from a config entry."""
    store: TaskStore = hass.data[DOMAIN]["store"]
    entities = [
        HomeMaintenanceCompleteButton(store, task, entry)
        for task in store.get_all_tasks()
    ]
    async_add_entities(entities)

    current_task_ids = {task.id for task in store.get_all_tasks()}

    def _on_store_change() -> None:
        new_tasks = store.get_all_tasks()
        new_ids = {t.id for t in new_tasks}
        added = [
            HomeMaintenanceCompleteButton(store, t, entry)
            for t in new_tasks
            if t.id not in current_task_ids
        ]
        if added:
            async_add_entities(added)
        current_task_ids.clear()
        current_task_ids.update(new_ids)

    store.add_listener(_on_store_change)
    entry.async_on_unload(lambda: store.remove_listener(_on_store_change))


class HomeMaintenanceCompleteButton(ButtonEntity):
    """Button that marks a maintenance task as completed."""

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
        self._attr_unique_id = f"{DOMAIN}_{task.id}_complete"
        self._attr_name = f"{task.title} Complete"
        self._attr_icon = "mdi:check-circle"

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
    def available(self) -> bool:
        """Return True if the underlying task still exists."""
        return self._store.get_task(self._task_id) is not None

    async def async_press(self) -> None:
        """Handle the button press — mark the task as completed."""
        await self._store.async_complete_task(self._task_id)
