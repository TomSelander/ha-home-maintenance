import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Task, TaskTemplate, HomeAssistant, IntervalType } from "../types";
import { loadTask, saveTask, updateTask, loadTags } from "../data/websockets";
import { sharedStyles } from "../styles";
import { localize } from "../../localize/localize";

@customElement("task-form-view")
export class TaskFormView extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ type: Boolean }) public narrow = false;
  @property({ type: String }) public taskId: string | null = null;
  @property({ attribute: false }) public templateData: TaskTemplate | null = null;

  @state() private _title = "";
  @state() private _description = "";
  @state() private _intervalValue = 30;
  @state() private _intervalType: IntervalType = "days";
  @state() private _lastPerformed = "";
  @state() private _tagId = "";
  @state() private _icon = "mdi:toolbox";
  @state() private _labels: string[] = [];
  @state() private _notifyWhenOverdue = false;
  @state() private _trackHistory = false;
  @state() private _completionHistory: string[] = [];
  @state() private _loading = false;
  @state() private _showAdvanced = false;
  @state() private _tags: any[] = [];

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
        }
        .btn.primary {
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border: none;
        }
        .btn.primary:hover {
          opacity: 0.9;
        }
        .btn:hover {
          opacity: 0.85;
        }
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .icon-preview {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .icon-preview input {
          flex: 1;
        }
        .icon-preview ha-icon {
          --mdc-icon-size: 24px;
          color: var(--secondary-text-color);
          flex-shrink: 0;
        }
        .error-message {
          color: var(--label-badge-red, #f44336);
          font-size: 12px;
          margin-top: 4px;
        }
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
        }
        .toggle-label input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
        .loading-overlay {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
          color: var(--secondary-text-color);
        }
      `,
    ];
  }

  protected async firstUpdated(): Promise<void> {
    this._loading = true;
    try {
      await this._loadTags();

      if (this.taskId) {
        await this._loadExistingTask();
      } else if (this.templateData) {
        this._populateFromTemplate(this.templateData);
      }
    } finally {
      this._loading = false;
    }
  }

  private async _loadTags(): Promise<void> {
    try {
      this._tags = await loadTags(this.hass);
    } catch {
      this._tags = [];
    }
  }

  private async _loadExistingTask(): Promise<void> {
    if (!this.taskId) return;
    try {
      const task = await loadTask(this.hass, this.taskId);
      this._title = task.title;
      this._description = task.description || "";
      this._intervalValue = task.interval_value;
      this._intervalType = task.interval_type;
      this._lastPerformed = task.last_performed || "";
      this._tagId = task.tag_id || "";
      this._icon = task.icon || "mdi:toolbox";
      this._labels = task.labels || [];
      this._notifyWhenOverdue = task.notify_when_overdue || false;
      this._trackHistory = task.track_history || false;
      this._completionHistory = task.completion_history || [];
    } catch (err) {
      console.error("Failed to load task:", err);
    }
  }

  private _populateFromTemplate(template: TaskTemplate): void {
    this._title = template.title;
    this._description = template.description || "";
    this._intervalValue = template.interval_value;
    this._intervalType = template.interval_type;
    this._icon = template.icon || "mdi:toolbox";
  }

  private _handleTitleInput(e: Event): void {
    this._title = (e.target as HTMLInputElement).value;
  }

  private _handleDescriptionInput(e: Event): void {
    this._description = (e.target as HTMLTextAreaElement).value;
  }

  private _handleIntervalValueInput(e: Event): void {
    this._intervalValue = parseInt((e.target as HTMLInputElement).value, 10) || 1;
  }

  private _handleIntervalTypeChange(e: Event): void {
    this._intervalType = (e.target as HTMLSelectElement).value as IntervalType;
  }

  private _handleLastPerformedInput(e: Event): void {
    this._lastPerformed = (e.target as HTMLInputElement).value;
  }

  private _handleTagChange(e: Event): void {
    this._tagId = (e.target as HTMLSelectElement).value;
  }

  private _handleIconInput(e: Event): void {
    this._icon = (e.target as HTMLInputElement).value;
  }

  private _handleNotifyToggle(e: Event): void {
    this._notifyWhenOverdue = (e.target as HTMLInputElement).checked;
  }

  private _handleTrackHistoryToggle(e: Event): void {
    this._trackHistory = (e.target as HTMLInputElement).checked;
  }

  private _toggleAdvanced(): void {
    this._showAdvanced = !this._showAdvanced;
  }

  private _validate(): boolean {
    if (!this._title.trim()) {
      return false;
    }
    if (!this._intervalValue || this._intervalValue < 1) {
      return false;
    }
    return true;
  }

  private async _save(): Promise<void> {
    if (!this._validate()) {
      return;
    }

    this._loading = true;
    try {
      const data: Partial<Task> = {
        title: this._title.trim(),
        description: this._description.trim(),
        interval_value: this._intervalValue,
        interval_type: this._intervalType,
        last_performed: this._lastPerformed || null,
        tag_id: this._tagId || null,
        icon: this._icon || "mdi:toolbox",
        labels: this._labels,
        notify_when_overdue: this._notifyWhenOverdue,
        track_history: this._trackHistory,
      };

      if (this.taskId) {
        await updateTask(this.hass, this.taskId, data);
      } else {
        await saveTask(this.hass, data);
      }

      this._navigateToList();
    } catch (err) {
      console.error("Failed to save task:", err);
    } finally {
      this._loading = false;
    }
  }

  private _cancel(): void {
    this._navigateToList();
  }

  private _navigateToList(): void {
    this.dispatchEvent(
      new CustomEvent("navigate-to-list", {
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    if (this._loading) {
      return html`
        <div class="loading-overlay">Loading...</div>
      `;
    }

    const isEdit = !!this.taskId;
    const pageTitle = isEdit
      ? localize("edit_task", this.hass?.language)
      : localize("create_task", this.hass?.language);

    return html`
      <div>
        <div class="page-header">
          <button class="back-btn action-btn" @click=${this._cancel}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <h1>${pageTitle}</h1>
        </div>

        <div class="form-container">
          <div class="form-field">
            <label>${localize("title", this.hass?.language)} *</label>
            <input
              type="text"
              .value=${this._title}
              @input=${this._handleTitleInput}
              placeholder=${localize("title", this.hass?.language)}
              required
            />
            ${!this._title.trim() && this._title !== ""
              ? html`<div class="error-message">${localize("required_field", this.hass?.language)}</div>`
              : nothing}
          </div>

          <div class="form-field">
            <label>${localize("description", this.hass?.language)}</label>
            <textarea
              .value=${this._description}
              @input=${this._handleDescriptionInput}
              placeholder=${localize("description", this.hass?.language)}
            ></textarea>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>${localize("interval_value", this.hass?.language)} *</label>
              <input
                type="number"
                min="1"
                .value=${String(this._intervalValue)}
                @input=${this._handleIntervalValueInput}
                required
              />
            </div>
            <div class="form-field">
              <label>${localize("interval_type", this.hass?.language)}</label>
              <select .value=${this._intervalType} @change=${this._handleIntervalTypeChange}>
                <option value="days" ?selected=${this._intervalType === "days"}>
                  ${localize("days", this.hass?.language)}
                </option>
                <option value="weeks" ?selected=${this._intervalType === "weeks"}>
                  ${localize("weeks", this.hass?.language)}
                </option>
                <option value="months" ?selected=${this._intervalType === "months"}>
                  ${localize("months", this.hass?.language)}
                </option>
              </select>
            </div>
          </div>

          <div class="form-field">
            <label>${localize("last_performed", this.hass?.language)}</label>
            <input
              type="date"
              .value=${this._lastPerformed}
              @input=${this._handleLastPerformedInput}
            />
          </div>

          <div class="form-field">
            <label class="toggle-label">
              <input
                type="checkbox"
                .checked=${this._notifyWhenOverdue}
                @change=${this._handleNotifyToggle}
              />
              ${localize("notify_when_overdue", this.hass?.language)}
            </label>
          </div>

          <div class="form-field">
            <label class="toggle-label">
              <input
                type="checkbox"
                .checked=${this._trackHistory}
                @change=${this._handleTrackHistoryToggle}
              />
              ${localize("track_history", this.hass?.language)}
            </label>
          </div>

          ${isEdit && (this._trackHistory || this._completionHistory.length > 0)
            ? html`
                <div class="history-section">
                  <h3>${localize("completion_history", this.hass?.language)}</h3>
                  ${this._completionHistory.length > 0
                    ? html`<ul class="history-list">
                        ${this._completionHistory.slice().reverse().slice(0, 20).map(
                          (date) => html`<li>${new Date(date).toLocaleString()}</li>`
                        )}
                      </ul>`
                    : html`<p class="history-empty">${localize("no_history", this.hass?.language)}</p>`
                  }
                </div>
              `
            : nothing}

          <div class="expansion-panel">
            <div class="expansion-header" @click=${this._toggleAdvanced}>
              ${localize("advanced_settings", this.hass?.language)}
              <ha-icon
                icon=${this._showAdvanced ? "mdi:chevron-up" : "mdi:chevron-down"}
              ></ha-icon>
            </div>
            ${this._showAdvanced
              ? html`
                  <div class="expansion-content">
                    <div class="form-field">
                      <label>${localize("tag", this.hass?.language)}</label>
                      <select .value=${this._tagId} @change=${this._handleTagChange}>
                        <option value="">-- None --</option>
                        ${this._tags.map(
                          (tag) => html`
                            <option value=${tag.id} ?selected=${this._tagId === tag.id}>
                              ${tag.name || tag.id}
                            </option>
                          `
                        )}
                      </select>
                    </div>

                    <div class="form-field">
                      <label>${localize("icon", this.hass?.language)}</label>
                      <div class="icon-preview">
                        <input
                          type="text"
                          .value=${this._icon}
                          @input=${this._handleIconInput}
                          placeholder="mdi:toolbox"
                        />
                        <ha-icon .icon=${this._icon}></ha-icon>
                      </div>
                    </div>

                    <div class="form-field">
                      <label>${localize("labels", this.hass?.language)}</label>
                      <input
                        type="text"
                        .value=${this._labels.join(", ")}
                        @input=${this._handleLabelsInput}
                        placeholder="label1, label2"
                      />
                    </div>
                  </div>
                `
              : nothing}
          </div>

          <div class="form-actions">
            <button class="btn" @click=${this._cancel} ?disabled=${this._loading}>
              ${localize("cancel", this.hass?.language)}
            </button>
            <button class="btn primary" @click=${this._save} ?disabled=${this._loading}>
              ${localize("save", this.hass?.language)}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private _handleLabelsInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this._labels = value
      .split(",")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "task-form-view": TaskFormView;
  }
}
