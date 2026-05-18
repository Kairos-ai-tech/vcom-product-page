import "server-only";
import type { Dict } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { zhTW } from "@/i18n/dictionaries/zh-TW";
import { ja } from "@/i18n/dictionaries/ja";
import { es } from "@/i18n/dictionaries/es";
import { fr } from "@/i18n/dictionaries/fr";

const dictionaries: Record<Locale, Dict> = {
  en,
  "zh-TW": zhTW,
  ja,
  es,
  fr,
};

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
