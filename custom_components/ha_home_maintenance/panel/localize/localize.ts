import * as en from "./languages/en.json";

const languages: Record<string, Record<string, string>> = {
  en: en as unknown as Record<string, string>,
};

const DEFAULT_LANG = "en";

export function localize(key: string, lang: string = DEFAULT_LANG): string {
  const strings = languages[lang] || languages[DEFAULT_LANG];
  return strings[key] || key;
}
