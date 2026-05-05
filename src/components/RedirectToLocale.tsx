"use client";

import { useEffect } from "react";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

// Client-side locale picker for the static-export root index. Reads
// navigator.language, maps to one of our supported locales, then
// hard-replaces the URL. basePath-aware via window.location pathname.

type Props = { fallback: string };

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

export function RedirectToLocale({ fallback }: Props) {
  useEffect(() => {
    const target = `/${pick()}/`;
    // basePath is stripped from window.location.pathname automatically
    // by the browser; we only need to compute the locale-relative path.
    if (locales.length) window.location.replace(target);
    else window.location.replace(fallback);
  }, [fallback]);
  return null;
}
