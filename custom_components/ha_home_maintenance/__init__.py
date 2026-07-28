"""The Home Maintenance integration."""

from __future__ import annotations

import logging

import voluptuous as vol
from homeassistant.components import frontend
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import ServiceValidationError
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.util import dt as dt_util

from .const import (
    CONF_ADMIN_ONLY,
    CONF_SIDEBAR_TITLE,
    DOMAIN,
    NAME,
    SERVICE_COMPLETE_TASK,
    SERVICE_CREATE_TASK,
    SERVICE_MARK_OVERDUE,
    SERVICE_RESET_LAST_PERFORMED,
)
from .panel import async_register_panel
from .store import TaskStore
from .websocket import async_register_websockets

_LOGGER = logging.getLogger(__name__)

PLATFORMS = ["binary_sensor", "button"]


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the Home Maintenance integration (YAML — unused)."""
    hass.data.setdefault(DOMAIN, {})
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Home Maintenance from a config entry."""
    # Initialize store
    store = TaskStore(hass)
    await store.async_load()

    hass.data[DOMAIN] = {
        "store": store,
        "entry": entry,
    }

    # Register device
    device_registry = dr.async_get(hass)
    device_registry.async_get_or_create(
        config_entry_id=entry.entry_id,
        identifiers={(DOMAIN, entry.entry_id)},
        name=NAME,
        manufacturer="Home Maintenance Pro",
    )

    # Register WebSocket API
    async_register_websockets(hass)

    # Register panel
    admin_only = entry.options.get(CONF_ADMIN_ONLY, True)
    sidebar_title = entry.options.get(CONF_SIDEBAR_TITLE, "Maintenance")
    await async_register_panel(
        hass, sidebar_title=sidebar_title, admin_only=admin_only
    )

    # Forward platforms
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    # Register services
    _register_services(hass, store)

    # Listen for NFC tag scans
    async def _handle_tag_scan(event) -> None:
        try:
            tag_id = event.data.get("tag_id")
            if tag_id:
                for task in store.get_all_tasks():
                    if task.tag_id == tag_id:
                        await store.async_complete_task(task.id)
        except Exception:
            _LOGGER.exception("Error handling NFC tag scan")

    unsub_tag = hass.bus.async_listen("tag_scanned", _handle_tag_scan)
    entry.async_on_unload(unsub_tag)

    # Listen for options updates
    entry.async_on_unload(entry.add_update_listener(_async_update_listener))

    return True


async def _async_update_listener(
    hass: HomeAssistant, entry: ConfigEntry
) -> None:
    """Handle options update -- re-register panel with new settings."""
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(
    hass: HomeAssistant, entry: ConfigEntry
) -> bool:
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(
        entry, PLATFORMS
    )
    if unload_ok:
        hass.data.pop(DOMAIN, None)
        if DOMAIN in hass.data.get("frontend_panels", {}):
            frontend.async_remove_panel(hass, DOMAIN)
    return unload_ok


def _resolve_task_ids(hass: HomeAssistant, call: ServiceCall) -> list[str]:
    """Resolve the task ids targeted by a service call's entity_id(s)."""
    target = getattr(call, "target", None) or {}
    entity_ids = target.get("entity_id") or call.data.get("entity_id")
    if isinstance(entity_ids, str):
        entity_ids = [entity_ids]

    ent_reg = er.async_get(hass)
    task_ids = []
    for entity_id in entity_ids or []:
        ent_entry = ent_reg.async_get(entity_id)
        if ent_entry and ent_entry.unique_id:
            task_ids.append(ent_entry.unique_id.replace(f"{DOMAIN}_", ""))
    return task_ids


CREATE_TASK_SCHEMA = vol.Schema(
    {
        vol.Required("title"): vol.All(str, vol.Length(min=1)),
        vol.Optional("description"): str,
        vol.Optional("interval_value"): int,
        vol.Optional("interval_type"): vol.In(["days", "weeks", "months"]),
        vol.Optional("icon"): str,
        vol.Optional("labels"): [str],
        vol.Optional("notify_when_overdue"): bool,
        vol.Optional("track_history"): bool,
        vol.Optional("tag_id"): str,
    },
    extra=vol.ALLOW_EXTRA,
)

COMPLETE_TASK_SCHEMA = vol.Schema(
    {vol.Optional("title"): vol.All(str, vol.Length(min=1))},
    extra=vol.ALLOW_EXTRA,
)


def _register_services(hass: HomeAssistant, store: TaskStore) -> None:
    """Register integration services."""

    async def handle_reset_last_performed(call: ServiceCall) -> None:
        try:
            date_str = call.data.get(
                "date", dt_util.now().strftime("%Y-%m-%d")
            )
            for task_id in _resolve_task_ids(hass, call):
                await store.async_update_task(
                    task_id, {"last_performed": date_str}
                )
        except Exception:
            _LOGGER.exception("Error resetting last_performed")

    async def handle_mark_overdue(call: ServiceCall) -> None:
        try:
            for task_id in _resolve_task_ids(hass, call):
                await store.async_update_task(
                    task_id, {"last_performed": None}
                )
        except Exception:
            _LOGGER.exception("Error marking task overdue")

    async def handle_create_task(call: ServiceCall) -> None:
        try:
            title = call.data["title"]
            if store.get_task_by_title(title) is not None:
                _LOGGER.debug(
                    "Task '%s' already exists, skipping create_task", title
                )
                return

            task_data: dict[str, object] = {"title": title}
            for field_name in (
                "description",
                "interval_value",
                "interval_type",
                "icon",
                "labels",
                "notify_when_overdue",
                "track_history",
                "tag_id",
            ):
                if field_name in call.data:
                    task_data[field_name] = call.data[field_name]
            await store.async_add_task(task_data)
        except Exception:
            _LOGGER.exception(
                "Error creating task '%s'", call.data.get("title")
            )

    async def handle_complete_task(call: ServiceCall) -> None:
        title = call.data.get("title")
        task_ids = _resolve_task_ids(hass, call)
        if not title and not task_ids:
            raise ServiceValidationError(
                "complete_task requires either an entity target or a 'title' field"
            )
        try:
            if title:
                task = store.get_task_by_title(title)
                if task is None:
                    _LOGGER.warning(
                        "No task found with title '%s' to complete", title
                    )
                    return
                await store.async_complete_task(task.id)
                return
            for task_id in task_ids:
                await store.async_complete_task(task_id)
        except Exception:
            _LOGGER.exception("Error completing task")

    hass.services.async_register(
        DOMAIN, SERVICE_RESET_LAST_PERFORMED, handle_reset_last_performed
    )
    hass.services.async_register(
        DOMAIN, SERVICE_MARK_OVERDUE, handle_mark_overdue
    )
    hass.services.async_register(
        DOMAIN, SERVICE_CREATE_TASK, handle_create_task, schema=CREATE_TASK_SCHEMA
    )
    hass.services.async_register(
        DOMAIN,
        SERVICE_COMPLETE_TASK,
        handle_complete_task,
        schema=COMPLETE_TASK_SCHEMA,
    )
