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

/**
 * Returns the canonical URL path for a given locale.
 * Default locale (`pt-br`) lives at the root `/` without a slug;
 * secondary locales use their slug (e.g. `/en-us`).
 */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
