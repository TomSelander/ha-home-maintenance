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
