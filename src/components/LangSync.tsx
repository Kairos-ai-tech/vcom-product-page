"use client";

import { useEffect } from "react";
import { htmlLang, type Locale } from "@/i18n/config";

// Client-side bridge: keep <html lang> in sync with the active locale.
// We can't set it server-side without making pages dynamic (root layout
// would need headers() / params). Setting it from a tiny effect runs
// once per route change and lets pages stay fully static-prerendered.

type Props = { locale: Locale };

export function LangSync({ locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
  }, [locale]);
  return null;
}
