"""Constants for the Home Maintenance integration."""

from __future__ import annotations

DOMAIN = "ha_home_maintenance"
NAME = "Home Maintenance Pro"
VERSION = "1.3.0"

# Panel constants
PANEL_URL = "/api/panel_custom/ha_home_maintenance"
PANEL_TITLE = "Home Maintenance Pro"
PANEL_ICON = "mdi:toolbox"
PANEL_NAME = "ha-home-maintenance-panel"

# Config schema constants
CONF_ADMIN_ONLY = "admin_only"
CONF_SIDEBAR_TITLE = "sidebar_title"

# Interval type constants
INTERVAL_DAYS = "days"
INTERVAL_WEEKS = "weeks"
INTERVAL_MONTHS = "months"

# Service constants
SERVICE_RESET_LAST_PERFORMED = "reset_last_performed"
