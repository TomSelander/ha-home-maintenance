"""Task storage for the Home Maintenance integration."""

from __future__ import annotations

import logging
import uuid
from dataclasses import asdict, dataclass, field
from datetime import datetime
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

_LOGGER = logging.getLogger(__name__)

STORAGE_VERSION = 1
STORAGE_KEY = "ha_home_maintenance"


@dataclass
class HomeMaintenanceTask:
    """Representation of a single maintenance task."""

    id: str = field(default_factory=lambda: uuid.uuid4().hex)
    title: str = ""
    description: str = ""
    interval_value: int = 30
    interval_type: str = "days"
    last_performed: str | None = None  # ISO date string
    tag_id: str | None = None
    icon: str = "mdi:toolbox"
    labels: list[str] = field(default_factory=list)
    notify_when_overdue: bool = False


class TaskStore:
    """Manages persistence of maintenance tasks via HA storage helper."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._hass = hass
        self._store: Store = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self._tasks: dict[str, HomeMaintenanceTask] = {}
        self._listeners: list = []

    async def async_load(self) -> None:
        """Load tasks from storage."""
        try:
            data = await self._store.async_load()
        except Exception:
            _LOGGER.exception("Failed to load maintenance tasks from storage")
            return
        if data and "tasks" in data:
            for task_data in data["tasks"]:
                try:
                    # Filter to only known fields to handle schema changes
                    known = {f.name for f in HomeMaintenanceTask.__dataclass_fields__.values()}
                    filtered = {k: v for k, v in task_data.items() if k in known}
                    task = HomeMaintenanceTask(**filtered)
                    self._tasks[task.id] = task
                except Exception:
                    _LOGGER.exception(
                        "Skipping malformed task data: %s", task_data
                    )

    async def async_save(self) -> None:
        """Save tasks to storage."""
        data: dict[str, Any] = {
            "tasks": [asdict(t) for t in self._tasks.values()]
        }
        await self._store.async_save(data)

    def get_all_tasks(self) -> list[HomeMaintenanceTask]:
        """Return a list of all tasks."""
        return list(self._tasks.values())

    def get_task(self, task_id: str) -> HomeMaintenanceTask | None:
        """Return a single task by id, or None."""
        return self._tasks.get(task_id)

    async def async_add_task(
        self, task_data: dict[str, Any]
    ) -> HomeMaintenanceTask:
        """Create and persist a new task."""
        task = HomeMaintenanceTask(**task_data)
        self._tasks[task.id] = task
        await self.async_save()
        self._notify_listeners()
        return task

    async def async_update_task(
        self, task_id: str, task_data: dict[str, Any]
    ) -> HomeMaintenanceTask | None:
        """Update an existing task. Returns None if not found."""
        task = self._tasks.get(task_id)
        if task is None:
            return None
        for key, value in task_data.items():
            if hasattr(task, key) and key != "id":
                setattr(task, key, value)
        await self.async_save()
        self._notify_listeners()
        return task

    async def async_complete_task(
        self, task_id: str
    ) -> HomeMaintenanceTask | None:
        """Mark a task as completed today. Returns None if not found."""
        task = self._tasks.get(task_id)
        if task is None:
            return None
        task.last_performed = datetime.now().strftime("%Y-%m-%d")
        await self.async_save()
        self._notify_listeners()
        return task

    async def async_remove_task(self, task_id: str) -> bool:
        """Remove a task. Returns True if deleted, False if not found."""
        if task_id in self._tasks:
            del self._tasks[task_id]
            await self.async_save()
            self._notify_listeners()
            return True
        return False

    def add_listener(self, listener: Any) -> None:
        """Register a callback that fires when tasks change."""
        self._listeners.append(listener)

    def remove_listener(self, listener: Any) -> None:
        """Unregister a previously registered listener."""
        try:
            self._listeners.remove(listener)
        except ValueError:
            pass

    def _notify_listeners(self) -> None:
        """Call all registered listeners."""
        for listener in self._listeners:
            try:
                listener()
            except Exception:
                _LOGGER.exception("Error in task store listener")
