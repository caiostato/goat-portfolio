export const locales = ["pt-br", "en-us"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-br";

export const localeLabels: Record<Locale, string> = {
  "pt-br": "PT",
  "en-us": "EN",
};

export const htmlLangMap: Record<Locale, string> = {
  "pt-br": "pt-BR",
  "en-us": "en-US",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
