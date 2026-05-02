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
