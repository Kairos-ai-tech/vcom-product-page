"use client";

import { useEffect } from "react";
import { defaultLocale, type Locale } from "@/i18n/config";

// Client-side locale picker for the static-export root index. Reads
// navigator.language, maps to one of our supported locales, then
// hard-replaces the URL with basePath baked in (passed as prop so we
// don't have to read env vars at runtime).

type Props = { fallback: string; basePath: string };

function pick(): Locale {
  if (typeof navigator === "undefined") return defaultLocale;
  for (const tag of (navigator.languages ?? [navigator.language])) {
    const lang = tag.toLowerCase();
    if (lang.startsWith("zh-tw") || lang === "zh-hant" || lang === "zh") return "zh-TW";
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("en")) return "en";
  }
  return defaultLocale;
}

export function RedirectToLocale({ fallback, basePath }: Props) {
  useEffect(() => {
    const target = `${basePath}/${pick()}/`;
    window.location.replace(target || fallback);
  }, [fallback, basePath]);
  return null;
}
