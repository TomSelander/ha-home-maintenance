"""The Home Maintenance integration."""

from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.util import dt as dt_util

_LOGGER = logging.getLogger(__name__)
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er

from homeassistant.components import frontend

from .const import (
    CONF_ADMIN_ONLY,
    CONF_SIDEBAR_TITLE,
    DOMAIN,
    NAME,
    SERVICE_RESET_LAST_PERFORMED,
)
from .panel import async_register_panel
from .store import TaskStore
from .websocket import async_register_websockets

PLATFORMS = ["binary_sensor"]


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
        try:
            frontend.async_remove_panel(hass, DOMAIN)
        except (ValueError, KeyError):
            _LOGGER.debug("Panel already removed or not registered")
    return unload_ok


def _register_services(hass: HomeAssistant, store: TaskStore) -> None:
    """Register integration services."""

    async def handle_reset_last_performed(call: ServiceCall) -> None:
        try:
            # entity_id may come from call.target (newer HA) or call.data (older HA)
            target = getattr(call, "target", None) or {}
            entity_ids = target.get("entity_id") or call.data.get("entity_id")
            if isinstance(entity_ids, str):
                entity_ids = [entity_ids]
            date_str = call.data.get(
                "date", dt_util.now().strftime("%Y-%m-%d")
            )

            # Find task by entity unique_id
            ent_reg = er.async_get(hass)
            for entity_id in (entity_ids or []):
                ent_entry = ent_reg.async_get(entity_id)
                if ent_entry and ent_entry.unique_id:
                    task_id = ent_entry.unique_id.replace(f"{DOMAIN}_", "")
                    await store.async_update_task(
                        task_id, {"last_performed": date_str}
                    )
        except Exception:
            _LOGGER.exception(
                "Error resetting last_performed for %s",
                (getattr(call, "target", None) or {}).get("entity_id") or call.data.get("entity_id"),
            )

    hass.services.async_register(
        DOMAIN, SERVICE_RESET_LAST_PERFORMED, handle_reset_last_performed
    )
