import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TaskTemplate, HomeAssistant, Task } from "../types";
import { loadTemplates, saveTask, loadTasks } from "../data/websockets";
import { sharedStyles } from "../styles";
import { localize, localizeTemplateTitle, localizeTemplateDesc, localizeCategory } from "../../localize/localize";

@customElement("template-picker-view")
export class TemplatePickerView extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ type: Boolean }) public narrow = false;

  @state() private _templates: TaskTemplate[] = [];
  @state() private _searchQuery = "";
  @state() private _expandedCategories: Set<string> = new Set();
  @state() private _importPreview: Record<string, string>[] = [];
  @state() private _showImportDialog = false;
  @state() private _importing = false;
  @state() private _importResult = "";

  static get styles() {
    return [
      sharedStyles,
      css`
        .btn {
          padding: 8px 16px;
          border-radius: 4px;
          border: 1px solid var(--divider-color);
          background: var(--card-background-color);
          color: var(--primary-text-color);
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }
        .btn.primary {
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border: none;
        }
        .btn.primary:hover {
          opacity: 0.9;
        }
        .search-and-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 16px;
        }
        .template-category h2 {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
        }
        .template-category h2:hover {
          color: var(--primary-color);
        }
        .category-count {
          font-size: 14px;
          font-weight: 400;
          color: var(--secondary-text-color);
        }
        .back-btn {
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-text-color);
          --mdc-icon-size: 24px;
        }

        .import-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .import-dialog {
          background: var(--card-background-color, #fff);
          border-radius: 8px;
          padding: 24px;
          max-width: 700px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .import-dialog h2 {
          margin: 0 0 16px;
          font-size: 20px;
          font-weight: 500;
        }

        .import-info {
          font-size: 13px;
          color: var(--secondary-text-color);
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .import-info code {
          background: var(--secondary-background-color);
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 12px;
        }

        .import-preview-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          margin: 16px 0;
        }

        .import-preview-table th,
        .import-preview-table td {
          text-align: left;
          padding: 6px 8px;
          border-bottom: 1px solid var(--divider-color);
        }

        .import-preview-table th {
          font-weight: 600;
          background: var(--secondary-background-color);
          position: sticky;
          top: 0;
        }

        .import-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
          margin-top: 16px;
        }

        .import-result {
          padding: 12px;
          border-radius: 4px;
          margin-top: 12px;
          font-size: 14px;
          background: rgba(76, 175, 80, 0.12);
          color: var(--label-badge-green, #4caf50);
        }

        .import-result.error {
          background: rgba(244, 67, 54, 0.12);
          color: var(--label-badge-red, #f44336);
        }

        input[type="file"] {
          display: none;
        }
      `,
    ];
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this._loadTemplates();
  }

  private async _loadTemplates(): Promise<void> {
    try {
      this._templates = await loadTemplates(this.hass);
      // Expand all categories by default
      const categories = new Set(this._templates.map((t) => t.category));
      this._expandedCategories = categories;
    } catch (err) {
      console.error("Failed to load templates:", err);
      this._templates = [];
    }
  }

  private _getFilteredTemplates(): TaskTemplate[] {
    if (!this._searchQuery.trim()) {
      return this._templates;
    }
    const query = this._searchQuery.toLowerCase().trim();
    return this._templates.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        (t.description && t.description.toLowerCase().includes(query))
    );
  }

  private _groupByCategory(
    templates: TaskTemplate[]
  ): Record<string, TaskTemplate[]> {
    const grouped: Record<string, TaskTemplate[]> = {};
    for (const template of templates) {
      const category = template.category || "Other";
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(template);
    }
    // Sort categories alphabetically
    const sorted: Record<string, TaskTemplate[]> = {};
    for (const key of Object.keys(grouped).sort()) {
      sorted[key] = grouped[key];
    }
    return sorted;
  }

  private _toggleCategory(category: string): void {
    const updated = new Set(this._expandedCategories);
    if (updated.has(category)) {
      updated.delete(category);
    } else {
      updated.add(category);
    }
    this._expandedCategories = updated;
  }

  private _selectTemplate(template: TaskTemplate): void {
    this.dispatchEvent(
      new CustomEvent("select-template", {
        detail: { template },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _createFromScratch(): void {
    this.dispatchEvent(
      new CustomEvent("navigate-to-create", {
        bubbles: true,
        composed: true,
      })
    );
  }

  private _triggerFileInput(): void {
    const input = this.shadowRoot?.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (input) {
      input.value = "";
      input.click();
    }
  }

  private _handleFileSelect(e: Event): void {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const rows = this._parseCsv(text);
      if (rows.length === 0) {
        this._importResult = "No valid rows found in CSV.";
        this._showImportDialog = true;
        return;
      }
      this._importPreview = rows;
      this._importResult = "";
      this._showImportDialog = true;
    };
    reader.onerror = () => {
      this._importResult = "Failed to read file.";
      this._showImportDialog = true;
    };
    reader.readAsText(file);
  }

  private _parseCsv(text: string): Record<string, string>[] {
    const lines = text.split(/\r?\n/).filter((l) => l.trim());
    if (lines.length < 2) return [];

    const headers = this._parseCsvLine(lines[0]).map((h) =>
      h.trim().toLowerCase()
    );
    if (!headers.includes("title")) return [];

    const rows: Record<string, string>[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = this._parseCsvLine(lines[i]);
      const row: Record<string, string> = {};
      for (let j = 0; j < headers.length; j++) {
        row[headers[j]] = (values[j] || "").trim();
      }
      if (row["title"]) {
        rows.push(row);
      }
    }
    return rows;
  }

  private _parseCsvLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inQuotes) {
        if (ch === '"') {
          if (i + 1 < line.length && line[i + 1] === '"') {
            current += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          current += ch;
        }
      } else {
        if (ch === '"') {
          inQuotes = true;
        } else if (ch === ",") {
          result.push(current);
          current = "";
        } else {
          current += ch;
        }
      }
    }
    result.push(current);
    return result;
  }

  private async _doImport(): Promise<void> {
    this._importing = true;
    this._importResult = "";
    let success = 0;
    let failed = 0;

    for (const row of this._importPreview) {
      try {
        const data: Partial<Task> = {
          title: row["title"],
          description: row["description"] || "",
          interval_value: parseInt(row["interval_value"], 10) || 30,
          interval_type: (row["interval_type"] as any) || "days",
          icon: row["icon"] || "mdi:toolbox",
          last_performed: row["last_performed"] || null,
        };
        await saveTask(this.hass, data);
        success++;
      } catch {
        failed++;
      }
    }

    this._importing = false;
    if (failed === 0) {
      this._importResult = `Successfully imported ${success} task${success !== 1 ? "s" : ""}.`;
    } else {
      this._importResult = `Imported ${success}, failed ${failed}.`;
    }
    this._importPreview = [];
  }

  private _closeImportDialog(): void {
    this._showImportDialog = false;
    this._importPreview = [];
    this._importResult = "";
  }

  private async _exportCsv(): Promise<void> {
    let tasks: Task[];
    try {
      tasks = await loadTasks(this.hass);
    } catch {
      return;
    }
    const headers = ["title", "description", "interval_value", "interval_type", "last_performed", "icon", "labels", "notify_when_overdue"];
    const escape = (val: string): string => {
      if (val.includes(",") || val.includes('"') || val.includes("\n")) {
        return `"${val.replace(/"/g, '""')}"`;
      }
      return val;
    };
    const rows = tasks.map((task) =>
      [
        escape(task.title),
        escape(task.description || ""),
        String(task.interval_value),
        task.interval_type,
        task.last_performed || "",
        task.icon || "",
        escape((task.labels || []).join("; ")),
        task.notify_when_overdue ? "true" : "false",
      ].join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "home_maintenance_tasks.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  private _goBack(): void {
    this.dispatchEvent(
      new CustomEvent("navigate-to-list", {
        bubbles: true,
        composed: true,
      })
    );
  }

  private _onSearchInput(e: Event): void {
    this._searchQuery = (e.target as HTMLInputElement).value;
  }

  protected render() {
    const filtered = this._getFilteredTemplates();
    const grouped = this._groupByCategory(filtered);
    const hasResults = Object.keys(grouped).length > 0;

    return html`
      <div>
        <div class="page-header">
          <button class="back-btn" @click=${this._goBack}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <h1>${localize("choose_template", this.hass?.language)}</h1>
        </div>

        <div class="search-and-actions">
          <input
            class="search-bar"
            type="text"
            .placeholder=${localize("search_templates", this.hass?.language)}
            .value=${this._searchQuery}
            @input=${this._onSearchInput}
          />
          <button class="btn" @click=${this._exportCsv}>
            <ha-icon icon="mdi:file-download-outline"></ha-icon>
            ${localize("export_csv", this.hass?.language)}
          </button>
          <button class="btn" @click=${this._triggerFileInput}>
            <ha-icon icon="mdi:file-upload-outline"></ha-icon>
            ${localize("import_csv", this.hass?.language)}
          </button>
          <button class="btn primary" @click=${this._createFromScratch}>
            ${localize("create_from_scratch", this.hass?.language)}
          </button>
        </div>
        <input
          type="file"
          accept=".csv,text/csv"
          @change=${this._handleFileSelect}
        />

        ${hasResults
          ? html`
              ${Object.entries(grouped).map(([category, templates]) => {
                const expanded = this._expandedCategories.has(category);
                return html`
                  <div class="template-category">
                    <h2 @click=${() => this._toggleCategory(category)}>
                      ${localizeCategory(category, this.hass?.language)}
                      <ha-icon
                        icon=${expanded
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"}
                      ></ha-icon>
                      <span class="category-count"
                        >(${templates.length})</span
                      >
                    </h2>
                    ${expanded
                      ? html`
                          <div class="template-grid">
                            ${templates.map(
                              (template) => html`
                                <div
                                  class="template-card"
                                  @click=${() =>
                                    this._selectTemplate(template)}
                                >
                                  <div class="template-header">
                                    <ha-icon
                                      .icon=${template.icon}
                                    ></ha-icon>
                                    <span class="template-title"
                                      >${localizeTemplateTitle(template, this.hass?.language)}</span
                                    >
                                  </div>
                                  <div class="template-desc">
                                    ${localizeTemplateDesc(template, this.hass?.language)}
                                  </div>
                                  <div class="template-interval">
                                    Every ${template.interval_value}
                                    ${localize(template.interval_type, this.hass?.language).toLowerCase()}
                                  </div>
                                </div>
                              `
                            )}
                          </div>
                        `
                      : nothing}
                  </div>
                `;
              })}
            `
          : html`
              <div class="empty-state">
                ${localize("no_results", this.hass?.language)}
              </div>
            `}

        ${this._showImportDialog ? this._renderImportDialog() : nothing}
      </div>
    `;
  }
  private _renderImportDialog() {
    const previewCols = ["title", "description", "interval_value", "interval_type", "last_performed", "icon"];
    const hasPreview = this._importPreview.length > 0;

    return html`
      <div class="import-overlay" @click=${this._closeImportDialog}>
        <div class="import-dialog" @click=${(e: Event) => e.stopPropagation()}>
          <h2>${localize("import_csv", this.hass?.language)}</h2>
          <div class="import-info">
            ${localize("import_csv_info", this.hass?.language)}<br />
            <code>title, description, interval_value, interval_type, last_performed, icon</code>
          </div>

          ${hasPreview
            ? html`
                <div style="overflow-x:auto; max-height:40vh;">
                  <table class="import-preview-table">
                    <thead>
                      <tr>
                        ${previewCols
                          .filter((c) => this._importPreview.some((r) => r[c]))
                          .map((c) => html`<th>${c}</th>`)}
                      </tr>
                    </thead>
                    <tbody>
                      ${this._importPreview.map(
                        (row) => html`
                          <tr>
                            ${previewCols
                              .filter((c) => this._importPreview.some((r) => r[c]))
                              .map((c) => html`<td>${row[c] || ""}</td>`)}
                          </tr>
                        `
                      )}
                    </tbody>
                  </table>
                </div>
                <div class="import-info">
                  ${this._importPreview.length} ${localize("tasks", this.hass?.language).toLowerCase()}
                </div>
              `
            : nothing}

          ${this._importResult
            ? html`<div class="import-result${this._importResult.includes("failed") ? " error" : ""}">${this._importResult}</div>`
            : nothing}

          <div class="import-actions">
            <button class="btn" @click=${this._closeImportDialog}>
              ${this._importResult && !this._importResult.includes("failed")
                ? localize("done", this.hass?.language)
                : localize("cancel", this.hass?.language)}
            </button>
            ${hasPreview && !this._importing
              ? html`
                  <button class="btn primary" @click=${this._doImport}>
                    ${localize("import", this.hass?.language)} (${this._importPreview.length})
                  </button>
                `
              : nothing}
            ${this._importing ? html`<span>${localize("importing", this.hass?.language)}</span>` : nothing}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "template-picker-view": TemplatePickerView;
  }
}
