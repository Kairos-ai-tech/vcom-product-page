import { locales, localeLabels, type Locale } from "@/i18n/config";

type Props = { current: Locale };

// Pixel-tab strip. Plain <a> instead of next/link — cross-locale
// navigation needs a full page load anyway (different .lang wrapper,
// different font stack, different <html lang>), and Link's soft
// client-side nav was getting stuck on the RSC prefetch in static
// export with basePath. Hard navigation is the right model here.
//
// basePath comes from NEXT_PUBLIC_BASE_PATH (set per deploy target).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function LanguageSwitcher({ current }: Props) {
  return (
    <ul className="flex items-stretch gap-1" aria-label="language">
      {locales.map((l) => {
        const active = l === current;
        return (
          <li key={l}>
            <a
              href={`${basePath}/${l}/`}
              aria-current={active ? "true" : undefined}
              className="block border-[calc(var(--pixel)/2)] border-[var(--panel-border)] px-2 py-1 text-[10px] tracking-[0.18em] uppercase"
              style={{
                background: active ? "var(--accent-yellow)" : "var(--panel)",
                color: active ? "var(--ink-on-accent)" : "var(--foreground)",
              }}
            >
              {localeLabels[l]}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
