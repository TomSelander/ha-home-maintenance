import { Task, TaskTemplate, IntegrationConfig, HomeAssistant } from "../types";
import { DOMAIN } from "../const";

export const loadTasks = (hass: HomeAssistant): Promise<Task[]> =>
  hass.callWS<Task[]>({ type: `${DOMAIN}/get_tasks` });

export const loadTask = (hass: HomeAssistant, taskId: string): Promise<Task> =>
  hass.callWS<Task>({ type: `${DOMAIN}/get_task`, task_id: taskId });

export const saveTask = (hass: HomeAssistant, task: Partial<Task>): Promise<Task> =>
  hass.callWS<Task>({ type: `${DOMAIN}/add_task`, ...task });

export const updateTask = (hass: HomeAssistant, taskId: string, task: Partial<Task>): Promise<Task> =>
  hass.callWS<Task>({ type: `${DOMAIN}/update_task`, task_id: taskId, ...task });

export const completeTask = (hass: HomeAssistant, taskId: string): Promise<Task> =>
  hass.callWS<Task>({ type: `${DOMAIN}/complete_task`, task_id: taskId });

export const removeTask = (hass: HomeAssistant, taskId: string): Promise<void> =>
  hass.callWS<void>({ type: `${DOMAIN}/remove_task`, task_id: taskId });

export const getConfig = (hass: HomeAssistant): Promise<IntegrationConfig> =>
  hass.callWS<IntegrationConfig>({ type: `${DOMAIN}/get_config` });

export const loadTemplates = (hass: HomeAssistant): Promise<TaskTemplate[]> =>
  hass.callWS<TaskTemplate[]>({ type: `${DOMAIN}/get_templates` });

export const loadTags = async (hass: HomeAssistant): Promise<any[]> => {
  try {
    return await hass.callWS<any[]>({ type: "tag/list" });
  } catch {
    return [];
  }
};

export const loadLabelRegistry = async (hass: HomeAssistant): Promise<any[]> => {
  try {
    return await hass.callWS<any[]>({ type: "config/label_registry/list" });
  } catch {
    return [];
  }
};
