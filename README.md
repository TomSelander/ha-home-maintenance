# Home Maintenance Pro for Home Assistant

Track recurring home maintenance tasks with a beautiful sidebar panel built right into your Home Assistant instance.

---

## Features

- **Full CRUD operations** — create, read, update, and delete maintenance tasks
- **Template library** — 90+ pre-built tasks covering HVAC, plumbing, electrical, exterior, appliances, and more
- **CSV import/export** — bulk-import tasks from a CSV file via the Browse Templates page, or export all tasks to CSV from the task list
- **Responsive table view** — sort tasks by name, interval, due date, labels, or status; sort preference is persisted across sessions
- **Search and filter** — text search across task titles and descriptions, plus multi-label filtering with clickable chips (OR logic — tasks matching any selected label are shown)
- **Label support** — assign Home Assistant labels to tasks using a visual picker; label colors and icons from HA are shown on chips in the task list and filter bar
- **Overdue notifications** — enable a per-task toggle to receive a persistent notification automatically when a task becomes overdue
- **Completion history** — opt-in per-task tracking of every completion timestamp
- **Binary sensors for overdue detection** — one sensor per task and one global "any overdue" sensor for use in automations and dashboards
- **Button entities** — one 'Complete' button per task for use on dashboards
- **NFC tag support** — scan an NFC tag to instantly mark a task complete
- **Configurable sidebar** — choose a custom panel title and optionally restrict access to admins only
- **Integration icon** — branded icon displayed in the Home Assistant integrations page

---

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance.
2. Go to **Integrations**.
3. Click the three-dot menu in the top-right corner and select **Custom repositories**.
4. Add `https://github.com/TomSelander/ha-home-maintenance` as an **Integration**.
5. Search for **Home Maintenance Pro** and click **Download**.
6. Restart Home Assistant.

### Manual Installation

1. Download the latest release from the [GitHub releases page](https://github.com/TomSelander/ha-home-maintenance/releases).
2. Copy the `custom_components/ha_home_maintenance` directory into your Home Assistant `config/custom_components/` directory.
3. Restart Home Assistant.

---

## Configuration

1. Go to **Settings > Devices & Services**.
2. Click **Add Integration**.
3. Search for and select **Home Maintenance Pro**.
4. Follow the setup wizard.

### Options

After the integration is set up, you can adjust its options at any time via **Settings > Devices & Services > Home Maintenance Pro > Configure**:

| Option | Default | Description |
|---|---|---|
| `admin_only` | `false` | Restrict the sidebar panel to admin users only |
| `sidebar_title` | `"Home Maintenance Pro"` | The title displayed in the sidebar navigation |

---

## Usage

### Creating a Task

1. Open the **Home Maintenance Pro** panel from the sidebar.
2. Click **Add Task**.
3. Fill in the task name, interval (value and type: days/weeks/months), and an optional description.
4. Optionally set the **Last Performed** date if the task has been done before.
5. Click **Save**.

### Using the Template Library

1. Click **Browse Templates** from the task list.
2. Browse or search the 90+ pre-built tasks.
3. Click a template to pre-fill the form, then adjust as needed and click **Save**.

### Importing Tasks from CSV

1. Click **Browse Templates** from the task list.
2. Click the **Import CSV** button.
3. Select a `.csv` file. The required column is `title`; optional columns are `description`, `interval_value`, `interval_type`, `last_performed`, and `icon`.
4. Review the preview table and click **Import** to create all tasks.

Example CSV:

```csv
title,description,interval_value,interval_type,last_performed,icon
Replace HVAC Filter,Change the air filter,90,days,2026-01-15,mdi:air-filter
Clean Gutters,Remove debris from gutters,180,days,,mdi:home-roof
```

### Migrating from Legacy Integration

If you were using the original "home_maintenance" integration (or a fork of it), you can migrate all your existing tasks using the CSV import feature.

#### Migration Steps

1. **Export your legacy data**
   - Locate your legacy integration's storage file at `config/.storage/home_maintenance`
   - Open it in a text editor and review your task data

2. **Create a CSV file**
   - Create a new `.csv` file with the following columns: `title`, `description`, `interval_value`, `interval_type`, `last_performed`, `icon`

3. **Map legacy fields to CSV columns**
   - `name` → `title`
   - `frequency` or `frequency_value` → `interval_value`
   - `frequency_type` or `frequency_unit` → `interval_type` (use `days`, `weeks`, or `months`)
   - `last_done` or `last_completed` → `last_performed` (format: `YYYY-MM-DD`)
   - `icon` → `icon` (e.g., `mdi:air-filter`)
   - Any other notes → `description`

4. **Import via the UI**
   - Go to **Browse Templates** → **Import CSV**
   - Upload your CSV file
   - Review the preview to ensure all fields are correct
   - Click **Import** to create all tasks

#### Example Migration CSV

```csv
title,description,interval_value,interval_type,last_performed,icon
Replace HVAC Filter,Change the air filter,90,days,2026-01-15,mdi:air-filter
Clean Gutters,Remove debris from gutters,180,days,2026-02-10,mdi:home-roof
Drain Furnace Trap,Annual drainage of condensation trap,365,days,2025-01-20,mdi:water-pump-off
```

#### Important Notes

- **Additive import** — The import will not delete your existing tasks. Review and clean up duplicates if needed.
- **Interval format** — The `interval_value` should be a number (e.g., 90, 180, 365) and `interval_type` must be `days`, `weeks`, or `months`.
- **Date format** — Use `YYYY-MM-DD` format for `last_performed` dates. Leave blank if the date is unknown.

### Exporting Tasks to CSV

1. From the task list, click **Export CSV**.
2. A `home_maintenance_tasks.csv` file will be downloaded containing all tasks with their title, description, interval, last performed date, icon, labels, and notification setting.

### Searching and Filtering

- Use the **search box** at the top of the task list to filter by title or description.
- Click **label chips** below the search box to filter by one or more Home Assistant labels. Tasks matching any selected label are shown (OR logic). Click a selected chip again to deselect it, or use the **Clear** button to reset all label filters.

### Editing a Task

1. Click the pencil icon on any row in the task table.
2. Modify any fields and click **Save**.

### Completing a Task

- Click the checkmark icon on a task row to mark it complete. The last performed date is set to today and the next due date advances by the task's interval.
- Alternatively, scan the NFC tag associated with the task (see NFC setup below).

### Overdue Notifications

Each task has a **Notify when overdue** toggle on the create/edit form. When enabled, a persistent notification is created in Home Assistant as soon as the task transitions to overdue status. The notification is automatically deduplicated per task so you only see one at a time.

### Completion History

Each task has a **Track completion history** toggle on the create/edit form. It is off by default. When enabled, every time a task is marked complete a timestamp is recorded. When editing a task with history tracking on, the edit form shows a **Completion History** section listing the most recent 20 completions (newest first). The binary sensor for that task also exposes `completion_count` and `last_completed` attributes for use in automations and dashboards.

### Labels in Automations

Labels assigned to a task are exposed as a `labels` attribute on its binary sensor entity (a list of label names, or an empty list if none are assigned). This lets you condition automations on specific labels — for example, notify only a particular person when their assigned tasks become overdue:

```yaml
condition:
  - condition: template
    value_template: "{{ 'Mike' in state_attr('binary_sensor.my_task', 'labels') }}"
```

### NFC Tags

1. Edit a task and note its **Task ID** displayed in the form.
2. Write the following URL to an NFC tag using any NFC writing app:

   ```
   https://your-ha-instance.local/api/ha_home_maintenance/complete/<task_id>
   ```

3. Scanning the tag will mark the task complete immediately.

---

## Button Entities

Each task exposes a `button` entity named **"\<Task Title\> Complete"**. Pressing the button marks the task as completed (sets last performed to today), identical to clicking the checkmark in the sidebar panel.

Button entities are automatically created when tasks are added and become unavailable when tasks are deleted. They can be placed on any Home Assistant dashboard using the standard **Button card**.

### Example Dashboard Card

```yaml
type: button
entity: button.replace_hvac_filter_complete
name: Mark HVAC Filter Done
icon: mdi:check-circle
```

---

## Automations

Each task exposes a `binary_sensor` entity with a name derived from the task. The sensor is `on` when the task is overdue and `off` when it is current.

A global sensor `binary_sensor.home_maintenance_any_overdue` is `on` whenever at least one task is overdue.

### Example Automation

```yaml
automation:
  alias: "Notify when maintenance is overdue"
  trigger:
    - platform: state
      entity_id: binary_sensor.home_maintenance_any_overdue
      to: "on"
  action:
    - service: notify.mobile_app_your_phone
      data:
        title: "Home Maintenance Pro Overdue"
        message: "One or more home maintenance tasks need attention."
```

---

## Screenshots

![Home Maintenance Pro task list](screenshots/ha-1.png)

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository.
2. Run `scripts/setup` to install all dependencies.
3. Make your changes.
4. Run `scripts/lint` to check Python code style.
5. Run `scripts/develop` to build the frontend bundle.
6. Submit a pull request.
