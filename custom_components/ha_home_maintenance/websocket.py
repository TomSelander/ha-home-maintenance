"""WebSocket API handlers for the Home Maintenance integration."""

from __future__ import annotations

from dataclasses import asdict
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from .const import CONF_ADMIN_ONLY, CONF_SIDEBAR_TITLE, DOMAIN
from .store import TaskStore
from .templates import TASK_TEMPLATES

_NOT_READY = "not_ready"
_NOT_READY_MSG = "Integration not ready"


def async_register_websockets(hass: HomeAssistant) -> None:
    """Register all WebSocket commands."""
    websocket_api.async_register_command(hass, ws_get_tasks)
    websocket_api.async_register_command(hass, ws_get_task)
    websocket_api.async_register_command(hass, ws_add_task)
    websocket_api.async_register_command(hass, ws_update_task)
    websocket_api.async_register_command(hass, ws_complete_task)
    websocket_api.async_register_command(hass, ws_remove_task)
    websocket_api.async_register_command(hass, ws_get_templates)
    websocket_api.async_register_command(hass, ws_get_config)


def _get_store(hass: HomeAssistant) -> TaskStore | None:
    """Return the TaskStore instance from hass.data, or None."""
    domain_data = hass.data.get(DOMAIN)
    if domain_data is None:
        return None
    return domain_data.get("store")


# --------------------------------------------------------------------------
# Get all tasks
# --------------------------------------------------------------------------
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/get_tasks",
    }
)
@websocket_api.async_response
async def ws_get_tasks(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return all maintenance tasks."""
    store = _get_store(hass)
    if store is None:
        connection.send_error(msg["id"], _NOT_READY, _NOT_READY_MSG)
        return
    tasks = store.get_all_tasks()
    connection.send_result(msg["id"], [asdict(t) for t in tasks])


# --------------------------------------------------------------------------
# Get single task
# --------------------------------------------------------------------------
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/get_task",
        vol.Required("task_id"): str,
    }
)
@websocket_api.async_response
async def ws_get_task(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return a single maintenance task by id."""
    store = _get_store(hass)
    if store is None:
        connection.send_error(msg["id"], _NOT_READY, _NOT_READY_MSG)
        return
    task = store.get_task(msg["task_id"])
    if task is None:
        connection.send_error(msg["id"], "not_found", "Task not found")
        return
    connection.send_result(msg["id"], asdict(task))


# --------------------------------------------------------------------------
# Add task
# --------------------------------------------------------------------------
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/add_task",
        vol.Required("title"): str,
        vol.Optional("description", default=""): str,
        vol.Optional("interval_value", default=30): int,
        vol.Optional("interval_type", default="days"): str,
        vol.Optional("tag_id"): vol.Any(str, None),
        vol.Optional("icon", default="mdi:toolbox"): str,
        vol.Optional("labels", default=[]): [str],
        vol.Optional("last_performed"): vol.Any(str, None),
        vol.Optional("notify_when_overdue", default=False): bool,
        vol.Optional("track_history", default=False): bool,
    }
)
@websocket_api.async_response
async def ws_add_task(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Add a new maintenance task."""
    store = _get_store(hass)
    if store is None:
        connection.send_error(msg["id"], _NOT_READY, _NOT_READY_MSG)
        return
    task_data: dict[str, Any] = {
        "title": msg["title"],
        "description": msg.get("description", ""),
        "interval_value": msg.get("interval_value", 30),
        "interval_type": msg.get("interval_type", "days"),
        "icon": msg.get("icon", "mdi:toolbox"),
        "labels": msg.get("labels", []),
        "notify_when_overdue": msg.get("notify_when_overdue", False),
        "track_history": msg.get("track_history", False),
    }
    if "tag_id" in msg:
        task_data["tag_id"] = msg["tag_id"]
    if "last_performed" in msg:
        task_data["last_performed"] = msg["last_performed"]
    task = await store.async_add_task(task_data)
    connection.send_result(msg["id"], asdict(task))


# --------------------------------------------------------------------------
# Update task
# --------------------------------------------------------------------------
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/update_task",
        vol.Required("task_id"): str,
        vol.Optional("title"): str,
        vol.Optional("description"): str,
        vol.Optional("interval_value"): int,
        vol.Optional("interval_type"): str,
        vol.Optional("last_performed"): vol.Any(str, None),
        vol.Optional("tag_id"): vol.Any(str, None),
        vol.Optional("icon"): str,
        vol.Optional("labels"): [str],
        vol.Optional("notify_when_overdue"): bool,
        vol.Optional("track_history"): bool,
    }
)
@websocket_api.async_response
async def ws_update_task(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Update an existing maintenance task."""
    store = _get_store(hass)
    if store is None:
        connection.send_error(msg["id"], _NOT_READY, _NOT_READY_MSG)
        return
    task_data: dict[str, Any] = {}
    for key in (
        "title",
        "description",
        "interval_value",
        "interval_type",
        "last_performed",
        "tag_id",
        "icon",
        "labels",
        "notify_when_overdue",
        "track_history",
    ):
        if key in msg:
            task_data[key] = msg[key]
    task = await store.async_update_task(msg["task_id"], task_data)
    if task is None:
        connection.send_error(msg["id"], "not_found", "Task not found")
        return
    connection.send_result(msg["id"], asdict(task))


# --------------------------------------------------------------------------
# Complete task
# --------------------------------------------------------------------------
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/complete_task",
        vol.Required("task_id"): str,
    }
)
@websocket_api.async_response
async def ws_complete_task(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Mark a maintenance task as completed today."""
    store = _get_store(hass)
    if store is None:
        connection.send_error(msg["id"], _NOT_READY, _NOT_READY_MSG)
        return
    task = await store.async_complete_task(msg["task_id"])
    if task is None:
        connection.send_error(msg["id"], "not_found", "Task not found")
        return
    connection.send_result(msg["id"], asdict(task))


# --------------------------------------------------------------------------
# Remove task
# --------------------------------------------------------------------------
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/remove_task",
        vol.Required("task_id"): str,
    }
)
@websocket_api.async_response
async def ws_remove_task(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Remove a maintenance task."""
    store = _get_store(hass)
    if store is None:
        connection.send_error(msg["id"], _NOT_READY, _NOT_READY_MSG)
        return
    removed = await store.async_remove_task(msg["task_id"])
    if not removed:
        connection.send_error(msg["id"], "not_found", "Task not found")
        return
    connection.send_result(msg["id"], {"success": True})


# --------------------------------------------------------------------------
# Get templates
# --------------------------------------------------------------------------
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/get_templates",
    }
)
@websocket_api.async_response
async def ws_get_templates(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return the list of pre-canned task templates."""
    connection.send_result(msg["id"], TASK_TEMPLATES)


# --------------------------------------------------------------------------
# Get config
# --------------------------------------------------------------------------
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/get_config",
    }
)
@websocket_api.async_response
async def ws_get_config(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return the integration configuration options."""
    domain_data = hass.data.get(DOMAIN) or {}
    config: dict[str, Any] = domain_data.get("config", {})
    connection.send_result(
        msg["id"],
        {
            CONF_ADMIN_ONLY: config.get(CONF_ADMIN_ONLY, False),
            CONF_SIDEBAR_TITLE: config.get(CONF_SIDEBAR_TITLE, "Home Maintenance Pro"),
        },
    )
