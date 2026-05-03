import * as en from "../../translations/en.json";
import { TaskTemplate } from "../src/types";

type Translation = { panel?: Record<string, string> };

const languages: Record<string, Translation> = {
  en: en as unknown as Translation,
};

const DEFAULT_LANG = "en";

export function localize(key: string, lang: string = DEFAULT_LANG): string {
  const translation = languages[lang] || languages[DEFAULT_LANG];
  const panel = translation.panel || (languages[DEFAULT_LANG].panel as Record<string, string>);
  return panel[key] || key;
}

function toKey(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

export function localizeTemplateTitle(template: TaskTemplate, lang: string = DEFAULT_LANG): string {
  const key = `tpl_title_${toKey(template.title)}`;
  const result = localize(key, lang);
  return result === key ? template.title : result;
}

export function localizeTemplateDesc(template: TaskTemplate, lang: string = DEFAULT_LANG): string {
  const key = `tpl_desc_${toKey(template.title)}`;
  const result = localize(key, lang);
  return result === key ? (template.description || "") : result;
}

export function localizeCategory(category: string, lang: string = DEFAULT_LANG): string {
  const key = `category_${toKey(category)}`;
  const result = localize(key, lang);
  return result === key ? category : result;
}
