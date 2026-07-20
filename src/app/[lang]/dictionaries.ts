import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  "pt-br": () => import("@/dictionaries/pt-br").then((m) => m.default),
  "en-us": () => import("@/dictionaries/en-us").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
