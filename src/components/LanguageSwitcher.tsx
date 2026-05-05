import Link from "next/link";
import { locales, localeLabels, type Locale } from "@/i18n/config";

type Props = { current: Locale };

// Pixel-tab strip. Inactive tabs are panels; active tab gets the yellow
// accent. Uses real <Link> so locale switches navigate via the [locale]
// segment (which keeps the Static prerender intact for each language).
export function LanguageSwitcher({ current }: Props) {
  return (
    <ul className="flex items-stretch gap-1" aria-label="language">
      {locales.map((l) => {
        const active = l === current;
        return (
          <li key={l}>
            <Link
              href={`/${l}`}
              prefetch
              aria-current={active ? "true" : undefined}
              className="block border-[calc(var(--pixel)/2)] border-[var(--panel-border)] px-2 py-1 text-[10px] tracking-[0.18em] uppercase"
              style={{
                background: active ? "var(--accent-yellow)" : "var(--panel)",
                color: active ? "var(--ink-on-accent)" : "var(--foreground)",
              }}
            >
              {localeLabels[l]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
