import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";
import { RedirectToLocale } from "@/components/RedirectToLocale";

// Bare `/` lands here on static-export builds (GitHub Pages). Next
// renders root layout's <html><body> around this; the meta refresh
// kicks in even with JS off, and RedirectToLocale upgrades the
// destination per Accept-Language client-side.

const fallback = `/${defaultLocale}/`;

export const metadata: Metadata = {
  title: "vcom — redirecting…",
  // Meta refresh as the no-JS fallback. Setting it via metadata.other
  // lets Next inline it into <head> at build.
  other: { refresh: `0; url=${fallback}` },
};

export default function RootRedirect() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <RedirectToLocale fallback={fallback} />
      <noscript>
        <a href={fallback}>Continue to vcom →</a>
      </noscript>
    </main>
  );
}
