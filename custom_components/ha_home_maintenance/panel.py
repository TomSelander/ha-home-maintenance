"""Panel registration for the Home Maintenance integration."""

from __future__ import annotations

import os

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant
from homeassistant.loader import async_get_integration

from .const import DOMAIN, PANEL_ICON, PANEL_NAME, PANEL_TITLE

PANEL_PATH = os.path.join(os.path.dirname(__file__), "panel", "dist", "main.js")


async def async_register_panel(
    hass: HomeAssistant,
    sidebar_title: str | None = None,
    admin_only: bool = True,
) -> None:
    """Register the custom panel in the HA sidebar."""
    # Static paths cannot be unregistered (aiohttp limitation), so only register once.
    static_path_key = f"{DOMAIN}_static_path_registered"
    if not hass.data.get(static_path_key):
        await hass.http.async_register_static_paths(
            [StaticPathConfig(f"/api/panel_custom/{DOMAIN}", PANEL_PATH, False)]
        )
        hass.data[static_path_key] = True

    # Remove existing panel before re-registering (handles reloads)
    if DOMAIN in hass.data.get("frontend_panels", {}):
        frontend.async_remove_panel(hass, DOMAIN)

    # Cache-bust the bundled panel JS on every integration update -- browsers
    # otherwise keep serving a stale main.js from cache since the URL never
    # changes, even after the backend has fully updated.
    integration = await async_get_integration(hass, DOMAIN)
    module_url = f"/api/panel_custom/{DOMAIN}?v={integration.version}"

    await panel_custom.async_register_panel(
        hass,
        webcomponent_name=PANEL_NAME,
        frontend_url_path=DOMAIN,
        sidebar_title=sidebar_title or PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        module_url=module_url,
        embed_iframe=False,
        require_admin=admin_only,
    )
