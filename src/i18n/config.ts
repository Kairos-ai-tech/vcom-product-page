// Locale registry. Keep this list, the dictionaries map, and the
// LanguageSwitcher labels in lockstep — adding a locale here without
// adding the dict will explode at build time on getDictionary.

export const locales = ["en", "zh-TW", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  "zh-TW": "繁中",
  ja: "日本語",
};

// Maps app locale → BCP 47 lang attribute for <html lang="">.
export const htmlLang: Record<Locale, string> = {
  en: "en",
  "zh-TW": "zh-Hant-TW",
  ja: "ja",
};
