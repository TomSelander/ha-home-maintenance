export type IntervalType = "days" | "weeks" | "months";

export interface Task {
  id: string;
  title: string;
  description: string;
  interval_value: number;
  interval_type: IntervalType;
  last_performed: string | null;
  tag_id: string | null;
  icon: string;
  labels: string[];
  notify_when_overdue: boolean;
  track_history: boolean;
  completion_history: string[];
}

export interface TaskTemplate {
  category: string;
  title: string;
  description: string;
  interval_value: number;
  interval_type: IntervalType;
  icon: string;
}

export interface IntegrationConfig {
  admin_only: boolean;
  sidebar_title: string;
}

export interface HomeAssistant {
  callWS: <T>(msg: Record<string, unknown>) => Promise<T>;
  connection: {
    sendMessagePromise: (msg: Record<string, unknown>) => Promise<unknown>;
  };
  states: Record<string, unknown>;
  user: {
    is_admin: boolean;
    name: string;
  };
  language: string;
  [key: string]: unknown;
}

export interface Tag {
  id: string;
  name: string;
  tag_id: string;
}

export interface Label {
  label_id: string;
  name: string;
  color: string;
  icon: string | null;
  description: string | null;
}

// HA stores label colors as named keys (e.g. "orange") mapping to Material Design hex values.
export const HA_LABEL_COLOR_MAP: Record<string, string> = {
  "red": "#f44336",
  "pink": "#e91e63",
  "purple": "#9c27b0",
  "deep-purple": "#673ab7",
  "indigo": "#3f51b5",
  "blue": "#2196f3",
  "light-blue": "#03a9f4",
  "cyan": "#00bcd4",
  "teal": "#009688",
  "green": "#4caf50",
  "light-green": "#8bc34a",
  "lime": "#cddc39",
  "yellow": "#ffeb3b",
  "amber": "#ffc107",
  "orange": "#ff9800",
  "deep-orange": "#ff5722",
  "brown": "#795548",
  "grey": "#9e9e9e",
  "blue-grey": "#607d8b",
};

export function resolveHaLabelColor(color: string): string {
  return HA_LABEL_COLOR_MAP[color.toLowerCase()] ?? color;
}

export function labelChipStyle(rawColor: string | null | undefined): string {
  if (!rawColor) return "";
  const c = resolveHaLabelColor(rawColor);
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c)) {
    let hex = c.slice(1);
    if (hex.length === 3) hex = hex.split("").map((ch) => ch + ch).join("");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    // Darken text for light colors so it remains readable on the low-opacity background.
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const textColor = luminance > 0.5
      ? `rgb(${Math.round(r * 0.5)},${Math.round(g * 0.5)},${Math.round(b * 0.5)})`
      : c;
    return `background:rgba(${r},${g},${b},0.12);color:${textColor};`;
  }
  return `border-left:3px solid ${c};padding-left:5px;`;
}

export function labelChipActiveStyle(rawColor: string | null | undefined): string {
  if (!rawColor) return "";
  const c = resolveHaLabelColor(rawColor);
  return `background:${c};color:#fff;`;
}

export interface EntityRegistryEntry {
  entity_id: string;
  unique_id: string;
  platform: string;
  config_entry_id: string;
  device_id: string | null;
  name: string | null;
  icon: string | null;
  original_name: string | null;
}
