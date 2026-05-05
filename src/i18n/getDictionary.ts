import "server-only";
import type { Dict } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { zhTW } from "@/i18n/dictionaries/zh-TW";
import { ja } from "@/i18n/dictionaries/ja";

const dictionaries: Record<Locale, Dict> = {
  en,
  "zh-TW": zhTW,
  ja,
};

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
