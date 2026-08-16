import * as en from "../../translations/en.json";
import * as de from "../../translations/de.json";
import { TaskTemplate } from "../src/types";

type Translation = { panel?: Record<string, string> };

const languages: Record<string, Translation> = {
  en: en as unknown as Translation,
  de: de as unknown as Translation,
};

const DEFAULT_LANG = "en";

// hass.language can arrive as a bare language code ("de") or a
// language-region tag ("de-DE" / "de_DE"); normalize before lookup.
function normalizeLang(lang?: string): string {
  return (lang || DEFAULT_LANG).toLowerCase().split(/[-_]/)[0];
}

export function localize(key: string, lang: string = DEFAULT_LANG): string {
  const translation = languages[normalizeLang(lang)] || languages[DEFAULT_LANG];
  const defaultPanel = languages[DEFAULT_LANG].panel as Record<string, string>;
  const panel = translation.panel || defaultPanel;
  return panel[key] || defaultPanel[key] || key;
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
