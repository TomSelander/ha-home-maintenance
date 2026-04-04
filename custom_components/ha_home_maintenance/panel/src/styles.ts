import { css } from "lit";

export const sharedStyles = css`
  :host {
    display: block;
    padding: 16px;
    --primary-color: var(--ha-card-header-color, var(--primary-text-color));
  }

  .page-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0 16px;
  }

  .page-header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    flex: 1;
  }

  .page-header .back-btn {
    cursor: pointer;
    --mdc-icon-size: 24px;
  }

  /* Task table - responsive, NOT hardcoded 850px */
  .task-table {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    border-collapse: collapse;
  }

  .task-table-header {
    display: grid;
    grid-template-columns: 48px 2fr 1fr 1fr 1fr 1fr 100px 120px;
    gap: 8px;
    padding: 12px 16px;
    background: var(--table-header-background-color, var(--secondary-background-color));
    border-bottom: 1px solid var(--divider-color);
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    cursor: pointer;
    user-select: none;
  }

  .task-table-row {
    display: grid;
    grid-template-columns: 48px 2fr 1fr 1fr 1fr 1fr 100px 120px;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--divider-color);
    align-items: center;
    transition: background-color 0.2s;
  }

  .task-table-row:hover {
    background: var(--table-row-background-color, rgba(0, 0, 0, 0.04));
  }

  .task-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
  }

  .task-title {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 200px;
  }

  .task-title .subtitle {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-weight: 400;
  }

  /* Status indicators */
  .status-indicator {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }

  .status-ok {
    background: rgba(76, 175, 80, 0.12);
    color: var(--label-badge-green, #4caf50);
  }

  .status-due-soon {
    background: rgba(255, 152, 0, 0.12);
    color: var(--label-badge-yellow, #ff9800);
  }

  .status-overdue {
    background: rgba(244, 67, 54, 0.12);
    color: var(--label-badge-red, #f44336);
  }

  /* Action buttons */
  .action-buttons {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .action-btn {
    cursor: pointer;
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    border: none;
    background: none;
    padding: 4px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s, background-color 0.2s;
  }

  .action-btn:hover {
    background: var(--secondary-background-color);
  }

  .action-btn.complete:hover {
    color: var(--label-badge-green, #4caf50);
  }

  .action-btn.edit:hover {
    color: var(--primary-color);
  }

  .action-btn.delete:hover {
    color: var(--label-badge-red, #f44336);
  }

  /* FAB / Add button */
  .fab {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 10;
  }

  .header-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  /* Form styles */
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px 0;
  }

  .form-field {
    margin-bottom: 16px;
  }

  .form-field label {
    display: block;
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
    font-weight: 500;
  }

  .form-field input,
  .form-field textarea,
  .form-field select {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 14px;
    font-family: inherit;
    box-sizing: border-box;
  }

  .form-field textarea {
    min-height: 80px;
    resize: vertical;
  }

  .form-field input:focus,
  .form-field textarea:focus,
  .form-field select:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .form-row {
    display: flex;
    gap: 16px;
  }

  .form-row .form-field {
    flex: 1;
  }

  .form-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding-top: 16px;
  }

  /* Template browser */
  .template-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 16px 0;
  }

  .template-category {
    margin-bottom: 24px;
  }

  .template-category h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 12px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--divider-color);
  }

  .template-card {
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
    background: var(--card-background-color);
  }

  .template-card:hover {
    border-color: var(--primary-color);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .template-card .template-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .template-card .template-title {
    font-weight: 500;
  }

  .template-card .template-desc {
    font-size: 13px;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
  }

  .template-card .template-interval {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Search input */
  .search-bar {
    width: 100%;
    max-width: 400px;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
    box-sizing: border-box;
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 48px 16px;
    color: var(--secondary-text-color);
  }

  .empty-state ha-svg-icon {
    --mdc-icon-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  /* Expansion panel for advanced settings */
  .expansion-panel {
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    margin-top: 16px;
  }

  .expansion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: 500;
    user-select: none;
  }

  .expansion-content {
    padding: 0 16px 16px;
  }

  /* Mobile responsive */
  @media (max-width: 900px) {
    .page-header {
      flex-wrap: wrap;
    }

    .page-header h1 {
      flex: 1 1 100%;
    }

    .header-actions {
      flex-wrap: wrap;
    }

    .task-table-header {
      grid-template-columns: 40px 2fr 1fr 100px 100px;
    }
    .task-table-row {
      grid-template-columns: 40px 2fr 1fr 100px 100px;
    }
    .hide-medium {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .task-table-header {
      display: none;
    }

    .task-table-row {
      display: grid;
      grid-template-columns: 32px 1fr auto auto;
      gap: 4px 8px;
      padding: 10px 12px;
      align-items: center;
    }

    /* Row 1: icon | title | status | actions */
    .task-table-row .task-icon {
      grid-row: 1 / 3;
      grid-column: 1;
      --mdc-icon-size: 18px;
    }

    .task-table-row .task-title {
      grid-row: 1;
      grid-column: 2;
      min-width: 0;
    }

    .task-table-row .task-title .subtitle {
      display: none;
    }

    /* Status badge */
    .task-table-row > div:nth-child(7) {
      grid-row: 1;
      grid-column: 3;
    }

    /* Action buttons */
    .task-table-row .action-buttons {
      grid-row: 1;
      grid-column: 4;
    }

    /* Row 2: interval text under the title */
    .task-table-row > div:nth-child(3) {
      grid-row: 2;
      grid-column: 2 / -1;
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    .form-row {
      flex-direction: column;
      gap: 0;
    }

    .template-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Label chips */
  .task-labels {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
  }

  .label-chip {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    white-space: nowrap;
  }

  /* Sort indicator */
  .sort-indicator {
    font-size: 10px;
    margin-left: 4px;
  }

  /* Column header clickable */
  .col-header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .col-header:hover {
    color: var(--primary-text-color);
  }
`;
