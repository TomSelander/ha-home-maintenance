import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Task, Label, HomeAssistant } from "../types";
import { loadTasks, completeTask, removeTask, loadLabelRegistry } from "../data/websockets";
import { sharedStyles } from "../styles";
import { localize } from "../../localize/localize";

type SortColumn = "title" | "interval" | "last_performed" | "next_due" | "labels" | "status";
type SortDirection = "asc" | "desc";

const SORT_STORAGE_KEY = "ha_home_maintenance_sort";

@customElement("task-list-view")
export class TaskListView extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ type: Boolean }) public narrow = false;

  @state() private _tasks: Task[] = [];
  @state() private _labels: Label[] = [];
  @state() private _searchQuery = "";
  @state() private _selectedLabels: Set<string> = new Set();
  @state() private _sortColumn: SortColumn = "title";
  @state() private _sortDirection: SortDirection = "asc";
  @state() private _loading = true;

  private _loadSortPreference(): void {
    try {
      const stored = localStorage.getItem(SORT_STORAGE_KEY);
      if (stored) {
        const { column, direction } = JSON.parse(stored);
        if (column) this._sortColumn = column;
        if (direction) this._sortDirection = direction;
      }
    } catch {
      // ignore
    }
  }

  private _saveSortPreference(): void {
    try {
      localStorage.setItem(SORT_STORAGE_KEY, JSON.stringify({ column: this._sortColumn, direction: this._sortDirection }));
    } catch {
      // ignore
    }
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
          transition: background-color 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }

        .btn:hover {
          background: var(--secondary-background-color);
        }

        .btn.primary {
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border-color: var(--primary-color);
        }

        .btn.primary:hover {
          opacity: 0.9;
        }

        .empty-state .empty-actions {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 16px;
        }

        .loading {
          text-align: center;
          padding: 48px 16px;
          color: var(--secondary-text-color);
        }

        .filter-bar {
          display: flex;
          gap: 12px;
          padding: 0 0 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .filter-bar input {
          flex: 1;
          min-width: 200px;
          max-width: 400px;
          padding: 8px 12px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 14px;
          font-family: inherit;
          box-sizing: border-box;
        }

        .filter-bar input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .filter-bar select {
          padding: 8px 12px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 14px;
          font-family: inherit;
        }

        .filter-bar select:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .sort-select {
          padding: 8px 12px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 14px;
          font-family: inherit;
        }

        .sort-select:focus {
          outline: none;
          border-color: var(--primary-color);
        }
      `,
    ];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._loadSortPreference();
    this._loadData();
  }

  private async _loadData(): Promise<void> {
    this._loading = true;
    try {
      const [tasks, labels] = await Promise.all([
        loadTasks(this.hass),
        loadLabelRegistry(this.hass),
      ]);
      this._tasks = tasks;
      this._labels = labels;
    } catch (err) {
      console.error("Failed to load data:", err);
      this._tasks = [];
      this._labels = [];
    }
    this._loading = false;
  }

  private async _loadTasks(): Promise<void> {
    try {
      this._tasks = await loadTasks(this.hass);
    } catch (err) {
      console.error("Failed to load tasks:", err);
      this._tasks = [];
    }
  }

  private get _filteredTasks(): Task[] {
    let tasks = this._tasks;
    const query = this._searchQuery.toLowerCase().trim();
    if (query) {
      tasks = tasks.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          (t.description && t.description.toLowerCase().includes(query))
      );
    }
    if (this._selectedLabels.size > 0) {
      tasks = tasks.filter(
        (t) => t.labels && t.labels.some((id) => this._selectedLabels.has(id))
      );
    }
    return tasks;
  }

  private get _sortedTasks(): Task[] {
    const tasks = [...this._filteredTasks];
    const dir = this._sortDirection === "asc" ? 1 : -1;

    tasks.sort((a, b) => {
      let cmp = 0;
      switch (this._sortColumn) {
        case "title":
          cmp = a.title.localeCompare(b.title);
          break;
        case "interval":
          cmp = this._intervalToDays(a) - this._intervalToDays(b);
          break;
        case "last_performed": {
          const aDate = a.last_performed ? this._parseLocalDate(a.last_performed).getTime() : 0;
          const bDate = b.last_performed ? this._parseLocalDate(b.last_performed).getTime() : 0;
          cmp = aDate - bDate;
          break;
        }
        case "next_due": {
          const aDue = this._getNextDueTimestamp(a);
          const bDue = this._getNextDueTimestamp(b);
          cmp = aDue - bDue;
          break;
        }
        case "labels": {
          const aLabel = a.labels?.length ? a.labels.map((id) => this._getLabelName(id)).sort().join(", ") : "";
          const bLabel = b.labels?.length ? b.labels.map((id) => this._getLabelName(id)).sort().join(", ") : "";
          cmp = aLabel.localeCompare(bLabel);
          break;
        }
        case "status": {
          const order = { overdue: 0, due_soon: 1, ok: 2 };
          cmp = (order[this._getStatus(a)] ?? 3) - (order[this._getStatus(b)] ?? 3);
          break;
        }
      }
      return cmp * dir;
    });

    return tasks;
  }

  private _intervalToDays(task: Task): number {
    const v = task.interval_value;
    switch (task.interval_type) {
      case "days":
        return v;
      case "weeks":
        return v * 7;
      case "months":
        return v * 30;
      default:
        return v;
    }
  }

  private _getNextDueTimestamp(task: Task): number {
    if (!task.last_performed) {
      return 0; // Never performed sorts first (most urgent)
    }
    const lastDate = this._parseLocalDate(task.last_performed);
    const dueDate = new Date(lastDate);
    switch (task.interval_type) {
      case "days":
        dueDate.setDate(dueDate.getDate() + task.interval_value);
        break;
      case "weeks":
        dueDate.setDate(dueDate.getDate() + task.interval_value * 7);
        break;
      case "months":
        dueDate.setMonth(dueDate.getMonth() + task.interval_value);
        break;
    }
    return dueDate.getTime();
  }

  private _getNextDueString(task: Task): string {
    if (!task.last_performed) {
      return localize("never", this.hass?.language);
    }
    const ts = this._getNextDueTimestamp(task);
    return new Date(ts).toLocaleDateString();
  }

  private _getStatus(task: Task): "overdue" | "due_soon" | "ok" {
    if (!task.last_performed) {
      return "overdue";
    }
    const now = Date.now();
    const dueTs = this._getNextDueTimestamp(task);
    if (dueTs <= now) {
      return "overdue";
    }
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    if (dueTs - now <= sevenDays) {
      return "due_soon";
    }
    return "ok";
  }

  private _getStatusLabel(status: "overdue" | "due_soon" | "ok"): string {
    const lang = this.hass?.language;
    switch (status) {
      case "overdue":
        return localize("overdue", lang);
      case "due_soon":
        return localize("due_soon", lang);
      case "ok":
        return localize("ok", lang);
    }
  }

  private _getStatusClass(status: "overdue" | "due_soon" | "ok"): string {
    switch (status) {
      case "overdue":
        return "status-overdue";
      case "due_soon":
        return "status-due-soon";
      case "ok":
        return "status-ok";
    }
  }

  private _formatInterval(task: Task): string {
    const type = localize(task.interval_type, this.hass?.language);
    return `${task.interval_value} ${type.toLowerCase()}`;
  }

  private _parseLocalDate(dateStr: string): Date {
    // Treat YYYY-MM-DD as local midnight, not UTC midnight
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  private _formatDate(dateStr: string | null): string {
    if (!dateStr) {
      return localize("never", this.hass?.language);
    }
    return this._parseLocalDate(dateStr).toLocaleDateString();
  }

  private _sort(column: SortColumn): void {
    if (this._sortColumn === column) {
      this._sortDirection = this._sortDirection === "asc" ? "desc" : "asc";
    } else {
      this._sortColumn = column;
      this._sortDirection = "asc";
    }
    this._saveSortPreference();
  }

  private _sortIndicator(column: SortColumn): string {
    if (this._sortColumn !== column) return "";
    return this._sortDirection === "asc" ? " ▲" : " ▼";
  }

  private async _completeTask(task: Task): Promise<void> {
    try {
      await completeTask(this.hass, task.id);
      await this._loadTasks();
    } catch (err) {
      console.error("Failed to complete task:", err);
    }
  }

  private _editTask(task: Task): void {
    this.dispatchEvent(
      new CustomEvent("navigate-to-edit", {
        bubbles: true,
        composed: true,
        detail: { taskId: task.id },
      })
    );
  }

  private async _deleteTask(task: Task): Promise<void> {
    const msg = localize("confirm_delete", this.hass?.language);
    if (!window.confirm(msg)) return;
    try {
      await removeTask(this.hass, task.id);
      await this._loadTasks();
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  }

  private _navigateToCreate(): void {
    this.dispatchEvent(
      new CustomEvent("navigate-to-create", {
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleSearchInput(e: Event): void {
    this._searchQuery = (e.target as HTMLInputElement).value;
  }

  private _toggleLabelFilter(labelId: string): void {
    const updated = new Set(this._selectedLabels);
    if (updated.has(labelId)) {
      updated.delete(labelId);
    } else {
      updated.add(labelId);
    }
    this._selectedLabels = updated;
    this.requestUpdate();
  }

  private _clearLabelFilters(): void {
    this._selectedLabels = new Set();
    this.requestUpdate();
  }

  private _handleSortChange(e: Event): void {
    const value = (e.target as HTMLSelectElement).value;
    const [column, direction] = value.split("-") as [SortColumn, SortDirection];
    this._sortColumn = column;
    this._sortDirection = direction;
    this._saveSortPreference();
  }

  private _getLabelName(labelId: string): string {
    const label = this._labels.find((l) => l.label_id === labelId);
    return label ? label.name : labelId;
  }

  private _getLabel(labelId: string): Label | undefined {
    return this._labels.find((l) => l.label_id === labelId);
  }

  private _labelChipStyle(label: Label | undefined): string {
    if (!label?.color) return "";
    const c = label.color;
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c)) {
      let hex = c.slice(1);
      if (hex.length === 3) hex = hex.split("").map((ch) => ch + ch).join("");
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `background:rgba(${r},${g},${b},0.12);color:${c};`;
    }
    return `border-left:3px solid ${c};padding-left:5px;`;
  }

  private _renderLabelChip(labelId: string) {
    const label = this._getLabel(labelId);
    const name = label ? label.name : labelId;
    const style = this._labelChipStyle(label);
    return html`<span class="label-chip" style=${style}>
      ${label?.icon ? html`<ha-icon .icon=${label.icon}></ha-icon>` : nothing}${name}
    </span>`;
  }

  private _renderFilterChip(label: Label) {
    const style = this._labelChipStyle(label);
    const isActive = this._selectedLabels.has(label.label_id);
    const activeStyle = isActive && label.color ? `background:${label.color};color:#fff;` : isActive ? "" : style;
    return html`<button
      class="filter-chip ${isActive ? "active" : ""}"
      style=${isActive ? activeStyle : style}
      @click=${() => this._toggleLabelFilter(label.label_id)}
    >
      ${label.icon ? html`<ha-icon .icon=${label.icon}></ha-icon>` : nothing}${label.name}
    </button>`;
  }

  private _navigateToTemplates(): void {
    this.dispatchEvent(
      new CustomEvent("navigate-to-templates", {
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    if (this._loading) {
      return html`<div class="loading">Loading...</div>`;
    }

    return html`
      <div class="task-list">
        <div class="page-header">
          <h1>${localize("panel_title", this.hass?.language)}</h1>
          <div class="header-actions">
            <button class="btn" @click=${this._navigateToTemplates}>
              ${localize("browse_templates", this.hass?.language)}
            </button>
            <button class="btn primary" @click=${this._navigateToCreate}>
              ${localize("add_task", this.hass?.language)}
            </button>
          </div>
        </div>

        ${this._tasks.length === 0
          ? this._renderEmptyState()
          : html`
              ${this._renderFilterBar()}
              ${this._renderTable()}
            `}
      </div>
    `;
  }

  private _renderEmptyState() {
    return html`
      <div class="empty-state">
        <p>${localize("no_tasks", this.hass?.language)}</p>
        <div class="empty-actions">
          <button class="btn" @click=${this._navigateToTemplates}>
            ${localize("browse_templates", this.hass?.language)}
          </button>
          <button class="btn primary" @click=${this._navigateToCreate}>
            ${localize("add_task", this.hass?.language)}
          </button>
        </div>
      </div>
    `;
  }

  private _renderFilterBar() {
    // Collect unique label IDs used across tasks
    const usedLabelIds = new Set<string>();
    for (const task of this._tasks) {
      if (task.labels) {
        for (const id of task.labels) {
          usedLabelIds.add(id);
        }
      }
    }
    const registryIds = new Set(this._labels.map((l) => l.label_id));
    const availableLabels = this._labels.filter((l) => usedLabelIds.has(l.label_id));
    // Custom labels: used in tasks but not in the HA label registry
    const customLabelIds = [...usedLabelIds].filter((id) => !registryIds.has(id));

    return html`
      <div class="filter-bar">
        <input
          type="text"
          placeholder="${localize("search_tasks", this.hass?.language)}"
          .value=${this._searchQuery}
          @input=${this._handleSearchInput}
        />
        ${availableLabels.length > 0 || customLabelIds.length > 0
          ? html`
              <div class="filter-chips">
                ${availableLabels.map((l) => this._renderFilterChip(l))}
                ${customLabelIds.map((id) => {
                  const isActive = this._selectedLabels.has(id);
                  return html`<button
                    class="filter-chip ${isActive ? "active" : ""}"
                    @click=${() => this._toggleLabelFilter(id)}
                  >${id}</button>`;
                })}
                ${this._selectedLabels.size > 0
                  ? html`<button class="filter-chip clear-chip" @click=${this._clearLabelFilters}>${localize("clear", this.hass?.language)}</button>`
                  : nothing}
              </div>
            `
          : nothing}
        <select class="sort-select" @change=${this._handleSortChange}>
          <option value="title-asc" ?selected=${this._sortColumn === "title" && this._sortDirection === "asc"}>
            ${localize("title", this.hass?.language)} ▲
          </option>
          <option value="title-desc" ?selected=${this._sortColumn === "title" && this._sortDirection === "desc"}>
            ${localize("title", this.hass?.language)} ▼
          </option>
          <option value="status-asc" ?selected=${this._sortColumn === "status" && this._sortDirection === "asc"}>
            ${localize("status", this.hass?.language)} ▲
          </option>
          <option value="status-desc" ?selected=${this._sortColumn === "status" && this._sortDirection === "desc"}>
            ${localize("status", this.hass?.language)} ▼
          </option>
          <option value="interval-asc" ?selected=${this._sortColumn === "interval" && this._sortDirection === "asc"}>
            ${localize("interval", this.hass?.language)} ▲
          </option>
          <option value="interval-desc" ?selected=${this._sortColumn === "interval" && this._sortDirection === "desc"}>
            ${localize("interval", this.hass?.language)} ▼
          </option>
          <option value="last_performed-asc" ?selected=${this._sortColumn === "last_performed" && this._sortDirection === "asc"}>
            ${localize("last_performed", this.hass?.language)} ▲
          </option>
          <option value="last_performed-desc" ?selected=${this._sortColumn === "last_performed" && this._sortDirection === "desc"}>
            ${localize("last_performed", this.hass?.language)} ▼
          </option>
          <option value="next_due-asc" ?selected=${this._sortColumn === "next_due" && this._sortDirection === "asc"}>
            ${localize("next_due", this.hass?.language)} ▲
          </option>
          <option value="next_due-desc" ?selected=${this._sortColumn === "next_due" && this._sortDirection === "desc"}>
            ${localize("next_due", this.hass?.language)} ▼
          </option>
        </select>
      </div>
    `;
  }

  private _renderTable() {
    return html`
      <div class="task-table-header">
        <div></div>
        <div class="col-header" @click=${() => this._sort("title")}>
          ${localize("title", this.hass?.language)}${this._sortIndicator("title")}
        </div>
        <div class="col-header" @click=${() => this._sort("interval")}>
          ${localize("interval", this.hass?.language)}${this._sortIndicator("interval")}
        </div>
        <div class="col-header hide-medium" @click=${() => this._sort("last_performed")}>
          ${localize("last_performed", this.hass?.language)}${this._sortIndicator("last_performed")}
        </div>
        <div class="col-header hide-medium" @click=${() => this._sort("next_due")}>
          ${localize("next_due", this.hass?.language)}${this._sortIndicator("next_due")}
        </div>
        <div class="col-header hide-medium" @click=${() => this._sort("labels")}>
          ${localize("labels", this.hass?.language)}${this._sortIndicator("labels")}
        </div>
        <div class="col-header" @click=${() => this._sort("status")}>
          ${localize("status", this.hass?.language)}${this._sortIndicator("status")}
        </div>
        <div>${localize("actions", this.hass?.language)}</div>
      </div>

      ${this._sortedTasks.map((task) => this._renderTaskRow(task))}
    `;
  }

  private _renderTaskRow(task: Task) {
    const status = this._getStatus(task);
    const statusLabel = this._getStatusLabel(status);
    const statusClass = this._getStatusClass(status);

    return html`
      <div class="task-table-row">
        <div class="task-icon">
          <ha-icon .icon=${task.icon || "mdi:wrench"}></ha-icon>
        </div>
        <div class="task-title">
          ${task.title}
          ${task.description
            ? html`<div class="subtitle">${task.description}</div>`
            : nothing}
        </div>
        <div>${this._formatInterval(task)}</div>
        <div class="hide-medium">${this._formatDate(task.last_performed)}</div>
        <div class="hide-medium">${this._getNextDueString(task)}</div>
        <div class="hide-medium task-labels">
          ${task.labels && task.labels.length > 0
            ? task.labels.map((id) => this._renderLabelChip(id))
            : nothing}
        </div>
        <div>
          <span class="status-indicator ${statusClass}">${statusLabel}</span>
        </div>
        <div class="action-buttons">
          <button
            class="action-btn complete"
            title="${localize("complete", this.hass?.language)}"
            @click=${() => this._completeTask(task)}
          >
            <ha-icon .icon=${"mdi:check"}></ha-icon>
          </button>
          <button
            class="action-btn edit"
            title="${localize("edit", this.hass?.language)}"
            @click=${() => this._editTask(task)}
          >
            <ha-icon .icon=${"mdi:pencil"}></ha-icon>
          </button>
          <button
            class="action-btn delete"
            title="${localize("delete", this.hass?.language)}"
            @click=${() => this._deleteTask(task)}
          >
            <ha-icon .icon=${"mdi:delete"}></ha-icon>
          </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "task-list-view": TaskListView;
  }
}
