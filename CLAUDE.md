# Home Maintenance Pro — Claude Instructions

## Version Bumping

Always bump the version (both files) whenever any functional change is made:

- `custom_components/ha_home_maintenance/panel/src/const.ts` — `VERSION` constant
- `custom_components/ha_home_maintenance/manifest.json` — `version` field

Use semantic versioning: patch (x.x.+1) for bug fixes, minor (x.+1.0) for new features.

## Frontend Build

After modifying any TypeScript source files under `panel/src/` or `panel/localize/`, rebuild the panel:

```
cd custom_components/ha_home_maintenance/panel && node build.mjs
```

The compiled output goes to `panel/dist/main.js`.

## Docs

Update `README.md` feature list when adding or changing user-visible behaviour.
