"""Backend localization for user-facing strings (e.g. notifications).

Mirrors panel/localize/localize.ts: reads the "panel" section of
translations/<lang>.json, falling back to English for missing languages
or keys.
"""

from __future__ import annotations

import json
from functools import cache
from pathlib import Path

from homeassistant.core import HomeAssistant

_TRANSLATIONS_DIR = Path(__file__).parent / "translations"
_DEFAULT_LANG = "en"


@cache
def _load_panel_strings(lang: str) -> dict[str, str]:
    path = _TRANSLATIONS_DIR / f"{lang}.json"
    if not path.exists():
        return {}
    with path.open(encoding="utf-8") as f:
        return json.load(f).get("panel", {})


def _normalize_lang(lang: str | None) -> str:
    return (lang or _DEFAULT_LANG).lower().split("-")[0].split("_")[0]


def localize(hass: HomeAssistant, key: str, **kwargs: object) -> str:
    """Return the localized panel string for key in hass's configured language."""
    lang = _normalize_lang(hass.config.language)
    strings = _load_panel_strings(lang)
    default_strings = _load_panel_strings(_DEFAULT_LANG)
    text = strings.get(key) or default_strings.get(key) or key
    return text.format(**kwargs) if kwargs else text
