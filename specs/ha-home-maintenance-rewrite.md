# Plan: Home Maintenance Integration Rewrite for Home Assistant

## Task Description
Rewrite the [TJPoorman/home_maintenance](https://github.com/TJPoorman/home_maintenance) Home Assistant custom integration from scratch as a new, improved version. The existing integration tracks recurring household maintenance tasks within Home Assistant using a Python backend and a LitElement/TypeScript frontend panel. The rewrite addresses several UX limitations in the original: broken task editing (clicking edit does not properly navigate to an edit screen), cramped table columns that truncate task names, and the lack of a pre-canned task template library. The new integration will be a clean implementation in the same `ha-home-maintenance` repo.

## Objective
Deliver a fully functional Home Assistant custom integration (`custom_components/ha_home_maintenance/`) that:
1. Provides a sidebar panel for managing recurring home maintenance tasks
2. Supports full CRUD operations with a dedicated edit screen (not a dialog)
3. Includes a library of 50+ pre-canned maintenance task templates with suggested intervals
4. Displays tasks in a responsive, readable table with appropriately sized columns
5. Creates binary sensor entities for each task (overdue = on) for use in automations
6. Supports NFC tag scanning, labels, custom icons, and the `reset_last_performed` service

## Problem Statement
The existing `home_maintenance` integration has several critical UX issues:
- **Broken editing**: Clicking "Edit" on a task opens a dialog that doesn't work reliably (GitHub issues #52, #118 confirm edit/delete menus disappear or get stuck)
- **Cramped table**: The task list table columns (`card-current` hardcoded at 850px max) are too narrow to display full task titles, intervals, and dates
- **No task templates**: Users must manually enter every task from scratch, even for common maintenance items like "Change HVAC Filter" or "Test Smoke Detectors"
- **Styling issues**: The "Add Task" button lacks proper styling (#111), and the overall UI feels unpolished
- **Maintenance concerns**: The original repo may no longer be actively maintained (#120)

## Solution Approach
Build a new integration from scratch, preserving the proven architectural pattern (Python backend + LitElement panel + WebSocket API) while fixing all known issues:

1. **Multi-view frontend**: Replace the single-panel layout with a routed UI — list view, create view, and edit view as separate screens (not dialogs)
2. **Template library**: Add a "Choose from Templates" flow in the create view with categorized pre-canned tasks
3. **Responsive table**: Use `ha-data-table` (HA's built-in component) or a custom flex/grid layout with proper column sizing, sorting, and filtering
4. **Clean Python backend**: Rewrite `store.py`, `websocket.py`, and `binary_sensor.py` with the same patterns but cleaner code and a `description` field on tasks
5. **Preserve compatibility**: Keep the same HA integration patterns (config flow, storage, device/entity registry, services)

## Relevant Files

### Source Reference (TJPoorman/home_maintenance)
These files from the original repo serve as reference for the rewrite:

- `custom_components/home_maintenance/__init__.py` — Integration setup, tag scanning, service registration. Rewrite with same pattern.
- `custom_components/home_maintenance/store.py` — `TaskStore` class using HA `storage.Store`. Rewrite with added `description` field and template support.
- `custom_components/home_maintenance/websocket.py` — WebSocket API (get/add/update/complete/remove tasks). Rewrite with same endpoints + new template endpoints.
- `custom_components/home_maintenance/binary_sensor.py` — `HomeMaintenanceSensor` entity. Rewrite with same overdue logic.
- `custom_components/home_maintenance/config_flow.py` — Config flow with `admin_only` and `sidebar_title` options. Rewrite as-is.
- `custom_components/home_maintenance/const.py` — Constants, schema definitions. Rewrite with updated domain name.
- `custom_components/home_maintenance/panel.py` — Panel registration. Rewrite as-is.
- `custom_components/home_maintenance/panel/src/main.ts` — Single LitElement component (~800 lines). Rewrite as multiple components with routing.
- `custom_components/home_maintenance/panel/src/types.ts` — TypeScript types. Rewrite with added `description` field.
- `custom_components/home_maintenance/panel/src/data/websockets.ts` — WebSocket API calls. Rewrite with same pattern + template calls.
- `custom_components/home_maintenance/panel/src/styles.ts` — CSS styles. Rewrite with responsive table styles.
- `custom_components/home_maintenance/panel/src/const.ts` — Version constant. Rewrite.
- `custom_components/home_maintenance/panel/src/helpers.ts` — Dashboard loader helper. Rewrite as-is.
- `custom_components/home_maintenance/panel/localize/` — Localization (en.json, de.json). Rewrite with expanded strings.
- `custom_components/home_maintenance/panel/package.json` — Build config (esbuild + lit). Rewrite with same toolchain.
- `custom_components/home_maintenance/manifest.json` — Integration manifest. Rewrite with new domain.
- `custom_components/home_maintenance/services.yaml` — Service definitions. Rewrite.
- `custom_components/home_maintenance/translations/` — HA config flow translations. Rewrite.

### New Files
The rewrite will create the following file structure:

```
custom_components/ha_home_maintenance/
├── __init__.py                          # Integration setup (from original pattern)
├── binary_sensor.py                     # Overdue sensor entities
├── config_flow.py                       # Config flow (admin_only, sidebar_title)
├── const.py                             # Constants and schemas
├── manifest.json                        # Integration manifest
├── panel.py                             # Panel registration
├── services.yaml                        # Service definitions
├── store.py                             # TaskStore with template support
├── strings.json                         # HA integration strings
├── translations/
│   └── en.json                          # Config flow translations
├── websocket.py                         # WebSocket API handlers
├── templates.py                         # Pre-canned task template definitions
└── panel/
    ├── package.json                     # Build config (esbuild + lit)
    ├── tsconfig.json                    # TypeScript config
    ├── localize/
    │   ├── localize.ts                  # Localization helper
    │   └── languages/
    │       └── en.json                  # UI strings
    ├── src/
    │   ├── main.ts                      # Entry point, router component
    │   ├── const.ts                     # Version constant
    │   ├── types.ts                     # TypeScript interfaces
    │   ├── styles.ts                    # Shared CSS styles
    │   ├── helpers.ts                   # Dashboard loader
    │   ├── data/
    │   │   └── websockets.ts            # WebSocket API calls
    │   └── views/
    │       ├── task-list-view.ts        # Main table view with responsive columns
    │       ├── task-form-view.ts        # Create/Edit form (full screen, not dialog)
    │       └── template-picker-view.ts  # Pre-canned task template browser
    └── dist/
        └── main.js                      # Built output (bundled)
```

Additional root files:
- `hacs.json` — HACS metadata for community store distribution
- `.ruff.toml` — Python linter config
- `requirements.txt` — Python dev dependencies
- `scripts/` — Development scripts (setup, lint, develop)
- `README.md` — Documentation with screenshots

## Implementation Phases

### Phase 1: Foundation
Set up the project structure, Python backend, and build toolchain:
- Create the `custom_components/ha_home_maintenance/` directory structure
- Implement `const.py`, `manifest.json`, `config_flow.py`, `panel.py`
- Implement `store.py` with the `TaskStore` class (adding `description` field to the data model)
- Implement `websocket.py` with all CRUD WebSocket handlers
- Implement `binary_sensor.py` for overdue detection
- Implement `__init__.py` tying everything together
- Create `templates.py` with 50+ categorized pre-canned tasks
- Set up `panel/package.json` and `tsconfig.json` with esbuild build

### Phase 2: Core Frontend Implementation
Build the TypeScript/Lit frontend with multi-view routing:
- Implement `main.ts` as the root router component with view switching
- Implement `task-list-view.ts` — responsive task table with proper column widths, sorting, status indicators
- Implement `task-form-view.ts` — full-screen create/edit form (replaces the broken dialog approach)
- Implement `template-picker-view.ts` — categorized template browser with search
- Implement `types.ts`, `styles.ts`, `const.ts`, `helpers.ts`
- Implement `data/websockets.ts` for all API communication
- Set up localization (`en.json`)

### Phase 3: Integration & Polish
Wire everything together and ensure quality:
- Build the panel JS bundle
- Test full CRUD flow (create, read, update, delete)
- Test template selection → task creation flow
- Test responsive layout at various screen sizes
- Verify binary sensor entities are created and update correctly
- Verify `reset_last_performed` service works
- Verify NFC tag scanning triggers task completion
- Add `hacs.json`, `README.md`, development scripts
- Final linting and cleanup

## Team Orchestration

- You operate as the team lead and orchestrate the team to execute the plan.
- You're responsible for deploying the right team members with the right context to execute the plan.
- IMPORTANT: You NEVER operate directly on the codebase. You use `Agent` and `Task*` tools to deploy team members to do the building, validating, testing, deploying, and other tasks.
  - This is critical. Your job is to act as a high-level director of the team, not a builder.
  - You'll orchestrate this by using the Task* Tools to manage coordination between team members.
  - Communication is paramount. Use Task* tools to communicate with team members and ensure they're on track.
- Take note of the agentId of each team member — this is how you'll resume or message them.

### Orchestration Mode
Subagent Orchestration — the workstreams have sequential dependencies (backend before frontend, frontend before validation) and benefit from shared context within a single session.

### Team Members

- Builder
  - Name: backend-builder
  - Role: Implement all Python backend files (store, websocket, binary_sensor, config_flow, init, templates, const, panel, services, manifest, translations)
  - Agent Type: builder
  - Model: opus
  - Permission Mode: acceptEdits
  - Resume: true

- Builder
  - Name: frontend-builder
  - Role: Implement all TypeScript/Lit frontend files (router, views, styles, types, websocket client, localization, build config)
  - Agent Type: builder
  - Model: opus
  - Permission Mode: acceptEdits
  - Resume: true

- Builder
  - Name: project-scaffolder
  - Role: Create project scaffolding files (hacs.json, .ruff.toml, requirements.txt, scripts, README.md)
  - Agent Type: builder
  - Model: sonnet
  - Permission Mode: acceptEdits
  - Resume: false

- Builder
  - Name: bundle-builder
  - Role: Install npm dependencies and run esbuild to produce the final dist/main.js bundle
  - Agent Type: builder
  - Model: sonnet
  - Permission Mode: acceptEdits
  - Resume: false

- Validator
  - Name: final-validator
  - Role: Validate all files exist, Python syntax is correct, JS bundle builds, and all acceptance criteria are met
  - Agent Type: validator
  - Model: sonnet
  - Resume: false

## Step by Step Tasks

- IMPORTANT: Execute every step in order, top to bottom. Each task maps directly to a `TaskCreate` call.
- Before you start, run `TaskCreate` to create the initial task list that all team members can see and execute.

### 1. Create Python Backend — Constants, Manifest & Config Flow
- **Task ID**: backend-foundation
- **Depends On**: none
- **Assigned To**: backend-builder
- **Agent Type**: builder
- **Parallel**: false
- Create `custom_components/ha_home_maintenance/const.py` with domain `ha_home_maintenance`, panel constants, service schemas, config schemas. Use `DOMAIN = "ha_home_maintenance"`, `NAME = "Home Maintenance"`, `VERSION = "1.0.0"`.
- Create `custom_components/ha_home_maintenance/manifest.json` with domain, version, dependencies (http, panel_custom, tag), iot_class local_polling.
- Create `custom_components/ha_home_maintenance/config_flow.py` with single-instance config flow, `admin_only` (default True) and `sidebar_title` options.
- Create `custom_components/ha_home_maintenance/strings.json` and `translations/en.json` for config flow UI strings.
- Create `custom_components/ha_home_maintenance/services.yaml` defining `reset_last_performed` service.

### 2. Create Python Backend — Store, Templates & WebSocket API
- **Task ID**: backend-core
- **Depends On**: backend-foundation
- **Assigned To**: backend-builder
- **Agent Type**: builder
- **Parallel**: false
- Create `custom_components/ha_home_maintenance/templates.py` containing a list of 50+ pre-canned maintenance task templates organized by category. Each template: `{"category": str, "title": str, "description": str, "interval_value": int, "interval_type": str, "icon": str}`. Categories: HVAC, Plumbing, Electrical, Exterior, Interior, Appliances, Safety, Lawn & Garden, Seasonal.
- Create `custom_components/ha_home_maintenance/store.py` with `HomeMaintenanceTask` dataclass (id, title, description, interval_value, interval_type, last_performed, tag_id, icon) and `TaskStore` class matching original pattern but with description field.
- Create `custom_components/ha_home_maintenance/websocket.py` with handlers: `get_tasks`, `get_task`, `add_task`, `update_task`, `complete_task`, `remove_task`, `get_config`, plus new `get_templates` handler that returns the template list.

### 3. Create Python Backend — Binary Sensor, Panel & Init
- **Task ID**: backend-entities
- **Depends On**: backend-core
- **Assigned To**: backend-builder
- **Agent Type**: builder
- **Parallel**: false
- Create `custom_components/ha_home_maintenance/binary_sensor.py` with `HomeMaintenanceSensor` extending `BinarySensorEntity`. State is `on` when task is overdue (today >= due date). Attributes: title, description, last_performed, next_due, interval, icon.
- Create `custom_components/ha_home_maintenance/panel.py` to register custom panel serving `panel/dist/main.js`.
- Create `custom_components/ha_home_maintenance/__init__.py` tying together: async_setup, async_setup_entry (init store, register device, forward binary_sensor platform, register panel, register websockets, register services, listen for tag scan events), async_unload_entry, register_services.

### 4. Create Frontend — Build Config, Types & Shared Modules
- **Task ID**: frontend-foundation
- **Depends On**: backend-foundation
- **Assigned To**: frontend-builder
- **Agent Type**: builder
- **Parallel**: true (can start after backend-foundation, parallel with backend-core)
- Create `custom_components/ha_home_maintenance/panel/package.json` with esbuild, lit, typescript, custom-card-helpers, @material/mwc-select, @material/mwc-list, @mdi/js dependencies. Build script: `esbuild src/main.ts --bundle --outfile=dist/main.js --format=esm --target=es2020 --minify`.
- Create `custom_components/ha_home_maintenance/panel/tsconfig.json` targeting ES2020 with ESNext modules.
- Create `custom_components/ha_home_maintenance/panel/src/types.ts` with interfaces: `Task` (id, title, description, interval_value, interval_type, last_performed, tag_id, icon), `TaskTemplate` (category, title, description, interval_value, interval_type, icon), `IntervalType`, `IntegrationConfig`, `Label`, `Tag`, `EntityRegistryEntry`.
- Create `custom_components/ha_home_maintenance/panel/src/const.ts` with `VERSION = "1.0.0"`.
- Create `custom_components/ha_home_maintenance/panel/src/helpers.ts` with `loadConfigDashboard()` helper (same pattern as original).
- Create `custom_components/ha_home_maintenance/panel/localize/localize.ts` and `languages/en.json` with all UI strings.

### 5. Create Frontend — WebSocket Client & Shared Styles
- **Task ID**: frontend-data-layer
- **Depends On**: frontend-foundation
- **Assigned To**: frontend-builder
- **Agent Type**: builder
- **Parallel**: false
- Create `custom_components/ha_home_maintenance/panel/src/data/websockets.ts` with functions: `loadTasks()`, `loadTask(id)`, `saveTasks(payload)`, `updateTask(payload)`, `completeTask(id)`, `removeTask(id)`, `getConfig()`, `loadTemplates()`, `loadTags()`, `loadRegistryEntries()`, `loadLabelRegistry()`. All using `hass.callWS()` or `hass.connection.sendMessagePromise()`.
- Create `custom_components/ha_home_maintenance/panel/src/styles.ts` with shared CSS. Key improvements over original:
  - `.card-current` width increased from 850px to `100%` with max-width of 1200px
  - Table columns use `minmax()` grid or flex with proper minimum widths
  - Task title column gets `flex: 2` (more space), other columns `flex: 1`
  - Responsive breakpoints at 600px and 900px
  - Proper button styling (fixes #111)

### 6. Create Frontend — Task List View (Main Table)
- **Task ID**: frontend-list-view
- **Depends On**: frontend-data-layer
- **Assigned To**: frontend-builder
- **Agent Type**: builder
- **Parallel**: false
- Create `custom_components/ha_home_maintenance/panel/src/views/task-list-view.ts` as a LitElement component:
  - Displays all tasks in a responsive table/grid layout
  - Columns: Icon, Task Title (wide), Interval, Last Performed, Next Due, Status, Actions
  - Task title column uses `flex: 2` or `min-width: 200px` so names are never truncated
  - Status column shows colored indicator (green = OK, yellow = due soon, red = overdue)
  - Actions column has icon buttons: Complete (check), Edit (pencil), Delete (trash) — always visible, not hidden in a menu
  - Sorting by any column (click header)
  - "Add Task" button prominently styled as `ha-fab` (floating action button) or prominent button
  - Narrow/mobile view: card-based layout instead of table
  - Fires custom events: `navigate-to-create`, `navigate-to-edit`, `task-completed`, `task-deleted`

### 7. Create Frontend — Task Form View (Create & Edit)
- **Task ID**: frontend-form-view
- **Depends On**: frontend-data-layer
- **Assigned To**: frontend-builder
- **Agent Type**: builder
- **Parallel**: true (can run parallel with frontend-list-view)
- Create `custom_components/ha_home_maintenance/panel/src/views/task-form-view.ts` as a LitElement component:
  - Full-screen form view (NOT a dialog) for both creating and editing tasks
  - Properties: `taskId` (if editing), `templateData` (if creating from template)
  - Header with back arrow and title ("Create Task" or "Edit Task")
  - Form fields: Title (text), Description (textarea), Interval Value (number), Interval Type (select: days/weeks/months), Last Performed (date picker), Tag (select from HA tags — optional section), Icon (ha-icon-picker — optional section), Labels (multi-select — optional section)
  - Optional fields in an expansion panel labeled "Advanced Settings"
  - When editing: loads existing task data via `loadTask(taskId)` and pre-fills all fields
  - When creating from template: pre-fills title, description, interval_value, interval_type, icon from template data
  - Save button calls `saveTask()` or `updateTask()` as appropriate
  - Cancel button navigates back to list
  - Form validation: title and interval required
  - On successful save, navigates back to list view

### 8. Create Frontend — Template Picker View
- **Task ID**: frontend-template-view
- **Depends On**: frontend-data-layer
- **Assigned To**: frontend-builder
- **Agent Type**: builder
- **Parallel**: true (can run parallel with frontend-list-view and frontend-form-view)
- Create `custom_components/ha_home_maintenance/panel/src/views/template-picker-view.ts` as a LitElement component:
  - Full-screen view showing categorized pre-canned maintenance tasks
  - Header with back arrow and title "Choose a Template"
  - Search/filter input at the top
  - Tasks grouped by category (HVAC, Plumbing, etc.) in expandable sections or card groups
  - Each template shows: icon, title, description, suggested interval
  - Clicking a template navigates to the task-form-view with that template's data pre-filled
  - User can then modify any field before saving
  - "Create from Scratch" button at the top navigates to empty task-form-view

### 9. Create Frontend — Main Router Component
- **Task ID**: frontend-router
- **Depends On**: frontend-list-view, frontend-form-view, frontend-template-view
- **Assigned To**: frontend-builder
- **Agent Type**: builder
- **Parallel**: false
- Create `custom_components/ha_home_maintenance/panel/src/main.ts` as the root LitElement component:
  - Registered as the custom panel element
  - Manages view state: `list` | `create` | `edit` | `templates`
  - Renders the appropriate view component based on state
  - Passes `hass`, `narrow`, and navigation data to child views
  - Handles custom navigation events from child views
  - Header toolbar with title and version
  - On `list` view: shows "Add Task" and "Browse Templates" buttons in toolbar
  - View transitions are simple property swaps (no URL routing needed for HA panels)

### 10. Build Frontend Bundle
- **Task ID**: build-frontend
- **Depends On**: frontend-router
- **Assigned To**: bundle-builder
- **Agent Type**: builder
- **Parallel**: false
- Run `cd custom_components/ha_home_maintenance/panel && npm install`
- Run `npm run build` to produce `dist/main.js`
- Verify the bundle file exists and is non-empty

### 11. Create Project Scaffolding
- **Task ID**: project-scaffolding
- **Depends On**: none
- **Assigned To**: project-scaffolder
- **Agent Type**: builder
- **Parallel**: true (independent of all other tasks)
- Create `hacs.json` with name "Home Maintenance", render_readme true
- Create `.ruff.toml` with Python linting config
- Create `requirements.txt` with dev dependencies
- Create `scripts/setup`, `scripts/develop`, `scripts/lint` shell scripts
- Create `README.md` with project description, installation instructions (HACS + manual), configuration options, feature list, and screenshots section

### 12. Final Validation
- **Task ID**: validate-all
- **Depends On**: build-frontend, backend-entities, project-scaffolding
- **Assigned To**: final-validator
- **Agent Type**: validator
- **Parallel**: false
- Verify all Python files exist and have valid syntax: `python -m py_compile custom_components/ha_home_maintenance/*.py`
- Verify `manifest.json` is valid JSON with correct domain
- Verify `dist/main.js` exists and is non-empty
- Verify `templates.py` contains at least 50 task templates across 5+ categories
- Verify `en.json` localization file contains all required keys
- Verify `hacs.json` is valid
- Verify the task data model includes the `description` field in store.py, types.ts, and websocket.py
- Verify the edit flow: task-form-view accepts a `taskId` property and calls `updateTask()`
- Verify the template flow: template-picker-view exists and navigates to task-form-view with pre-filled data
- Verify table styling: task-list-view uses responsive widths (not hardcoded 850px)
- Run ruff linting on Python files if ruff is available

## Acceptance Criteria

1. **Full CRUD**: Tasks can be created, viewed, edited, and deleted through the panel UI
2. **Edit screen**: Clicking "Edit" on a task navigates to a full-screen edit form (not a dialog) with all fields pre-populated
3. **Template library**: A "Browse Templates" button opens a categorized view of 50+ pre-canned maintenance tasks; selecting one pre-fills the create form
4. **Readable table**: Task list table columns are properly sized — task title is never truncated on desktop; mobile view switches to card layout
5. **Binary sensors**: Each task creates a binary sensor entity that turns `on` when overdue
6. **Service**: `ha_home_maintenance.reset_last_performed` service works with entity_id and optional date
7. **NFC support**: Scanning a tag associated with a task marks it complete
8. **Config flow**: Integration can be added via Settings > Devices & Services with `admin_only` and `sidebar_title` options
9. **HACS compatible**: `hacs.json` and `manifest.json` are properly configured for HACS distribution
10. **Builds cleanly**: `npm run build` produces a valid JS bundle; Python files pass syntax checks and ruff linting

## Validation Commands
Execute these commands to validate the task is complete:

- `python -m py_compile custom_components/ha_home_maintenance/__init__.py` — verify Python entry point compiles
- `python -m py_compile custom_components/ha_home_maintenance/store.py` — verify store compiles
- `python -m py_compile custom_components/ha_home_maintenance/websocket.py` — verify websocket handlers compile
- `python -m py_compile custom_components/ha_home_maintenance/binary_sensor.py` — verify sensor compiles
- `python -m py_compile custom_components/ha_home_maintenance/templates.py` — verify templates compile
- `cd custom_components/ha_home_maintenance/panel && npm run build` — verify frontend builds
- `ls -la custom_components/ha_home_maintenance/panel/dist/main.js` — verify bundle exists
- `python -c "from custom_components.ha_home_maintenance.templates import TASK_TEMPLATES; print(f'{len(TASK_TEMPLATES)} templates')"` — verify 50+ templates
- `ruff check custom_components/ha_home_maintenance/` — verify Python linting passes (if ruff available)

## Notes

- **Domain name**: Using `ha_home_maintenance` (with underscores) as the integration domain to differentiate from the original `home_maintenance`. This avoids conflicts if both are installed.
- **No breaking changes to HA patterns**: The integration follows standard HA custom component patterns — config flow, storage, entity registry, websocket API, custom panel. No addons or Docker containers.
- **Template data is static**: Pre-canned templates are defined in Python and served via a websocket endpoint. They're not editable by users — they're just starting points.
- **Localization**: Starting with English only. The architecture supports additional languages via the `localize/languages/` directory.
- **Build toolchain**: Using esbuild (same as original) for fast, simple bundling. No webpack or rollup complexity needed.
- **Storage migration**: Since this is a new integration (different domain), no data migration from the original is needed. Users would re-create their tasks.
- **Future enhancements** (not in scope for v1.0): Calendar entity, task descriptions with rich text, multi-person assignment, snooze/pause, custom entity ID schemas.
