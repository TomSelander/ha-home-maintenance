"""Config flow for Home Maintenance integration."""

from __future__ import annotations

from typing import Any

import voluptuous as vol  # type: ignore[import-untyped]
from homeassistant import config_entries  # type: ignore[import-untyped]
from homeassistant.config_entries import (  # type: ignore[import-untyped]
    ConfigFlow,
    ConfigFlowResult,
    OptionsFlow,
)
from homeassistant.core import callback  # type: ignore[import-untyped]

from .const import CONF_ADMIN_ONLY, CONF_SIDEBAR_TITLE, DOMAIN


class HaHomeMaintenanceConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Home Maintenance."""

    VERSION = 1

    async def async_step_user(
        self,
        user_input: dict[str, Any] | None = None,
    ) -> ConfigFlowResult:
        """Handle the initial step."""
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        if user_input is not None:
            return self.async_create_entry(title="Home Maintenance Pro", data={})

        return self.async_show_form(step_id="user")

    @staticmethod
    @callback
    def async_get_options_flow(
        config_entry: config_entries.ConfigEntry,
    ) -> HaHomeMaintenanceOptionsFlow:
        """Get the options flow for this handler."""
        return HaHomeMaintenanceOptionsFlow()


class HaHomeMaintenanceOptionsFlow(OptionsFlow):
    """Handle options flow for Home Maintenance."""

    async def async_step_init(
        self,
        user_input: dict[str, Any] | None = None,
    ) -> ConfigFlowResult:
        """Manage the options."""
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema(
                {
                    vol.Required(
                        CONF_ADMIN_ONLY,
                        default=self.config_entry.options.get(CONF_ADMIN_ONLY, True),
                    ): bool,
                    vol.Required(
                        CONF_SIDEBAR_TITLE,
                        default=self.config_entry.options.get(
                            CONF_SIDEBAR_TITLE, "Maintenance"
                        ),
                    ): str,
                }
            ),
        )
