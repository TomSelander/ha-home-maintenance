# Home Maintenance Pro — Claude Instructions

## Version Bumping

Always bump the version (both files) whenever any functional change is made:

- `custom_components/ha_home_maintenance/panel/src/const.ts` — `VERSION` constant
- `custom_components/ha_home_maintenance/manifest.json` — `version` field

Use semantic versioning: patch (x.x.+1) for bug fixes, minor (x.+1.0) for new features.

## Translations

All translation strings live in `custom_components/ha_home_maintenance/translations/<lang>.json`.

- `config` and `options` keys — HA config/options flow strings (standard HA format)
- `panel` key — all panel UI strings, template titles/descriptions, and category names

`translations/en.json` is the source of truth. `strings.json` must always be kept in sync with it (copy on change).

`panel/localize/localize.ts` imports from `translations/en.json`. To add a new language:
1. Create `translations/<lang>.json` mirroring the structure of `en.json`
2. Import it in `localize.ts` and add an entry to the `languages` map
3. Rebuild the panel

Template strings use slug-based keys derived from the English title: `tpl_title_<slug>` / `tpl_desc_<slug>`. Category keys follow `category_<slug>`. Missing keys fall back to English automatically.

## Frontend Build

After modifying any TypeScript source files under `panel/src/` or `panel/localize/`, or after changing `translations/en.json`, rebuild the panel:

```
cd custom_components/ha_home_maintenance/panel && node build.mjs
```

The compiled output goes to `panel/dist/main.js`.

## Docs

Update `README.md` feature list when adding or changing user-visible behaviour.
