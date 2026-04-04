import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, TaskTemplate } from "./types";
import { VERSION } from "./const";

// Import child views so they register as custom elements
import "./views/task-list-view";
import "./views/task-form-view";
import "./views/template-picker-view";

type ViewName = "list" | "create" | "edit" | "templates";

@customElement("ha-home-maintenance-panel")
export class HaHomeMaintenancePanel extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ type: Boolean }) public narrow = false;
  @property({ attribute: false }) public panel: Record<string, unknown> = {};

  @state() private _currentView: ViewName = "list";
  @state() private _editTaskId: string | null = null;
  @state() private _templateData: TaskTemplate | null = null;

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    console.info(`%c ha-home-maintenance %c ${VERSION} `, "color: white; background: #3498db; font-weight: bold;", "color: #3498db; background: white; font-weight: bold;");
  }

  private _onNavigateToCreate(): void {
    this._currentView = "create";
    this._editTaskId = null;
    this._templateData = null;
  }

  private _onNavigateToEdit(e: CustomEvent): void {
    this._currentView = "edit";
    this._editTaskId = e.detail.taskId;
  }

  private _onNavigateToTemplates(): void {
    this._currentView = "templates";
  }

  private _onNavigateToList(): void {
    this._currentView = "list";
  }

  private _onSelectTemplate(e: CustomEvent): void {
    this._currentView = "create";
    this._templateData = e.detail.template;
  }

  protected render() {
    switch (this._currentView) {
      case "list":
        return html`
          <task-list-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            @navigate-to-create=${this._onNavigateToCreate}
            @navigate-to-edit=${this._onNavigateToEdit}
            @navigate-to-templates=${this._onNavigateToTemplates}
          ></task-list-view>
        `;
      case "create":
        return html`
          <task-form-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            .taskId=${null}
            .templateData=${this._templateData}
            @navigate-to-list=${this._onNavigateToList}
          ></task-form-view>
        `;
      case "edit":
        return html`
          <task-form-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            .taskId=${this._editTaskId}
            .templateData=${null}
            @navigate-to-list=${this._onNavigateToList}
          ></task-form-view>
        `;
      case "templates":
        return html`
          <template-picker-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            @select-template=${this._onSelectTemplate}
            @navigate-to-create=${this._onNavigateToCreate}
            @navigate-to-list=${this._onNavigateToList}
          ></template-picker-view>
        `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-home-maintenance-panel": HaHomeMaintenancePanel;
  }
}
