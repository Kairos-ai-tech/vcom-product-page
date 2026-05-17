import { locales, localeLabels, type Locale } from "@/i18n/config";

type Props = { current: Locale };

// Compact pixel-styled dropdown using <details>. Zero client JS, native
// keyboard support (Enter/Space toggles), closes on outside click in
// modern browsers via the popover-ish details behavior. Hard <a> nav
// across locales — different .lang wrapper / font stack / <html lang>.
//
// basePath comes from NEXT_PUBLIC_BASE_PATH (set per deploy target).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function LanguageSwitcher({ current }: Props) {
  return (
    <details className="group relative" aria-label="language">
      <summary
        className="pixel-tag flex cursor-pointer list-none items-center gap-1.5 px-2 py-1 text-[10px] tracking-[0.18em] uppercase select-none [&::-webkit-details-marker]:hidden"
        style={{ background: "var(--accent-yellow)", color: "var(--ink-on-accent)" }}
      >
        <span aria-hidden>▼</span>
        <span>{localeLabels[current]}</span>
      </summary>
      <ul
        className="absolute right-0 top-[calc(100%+4px)] z-30 flex min-w-[7rem] flex-col border-[calc(var(--pixel)/2)] border-[var(--panel-border)]"
        style={{ background: "var(--panel)" }}
      >
        {locales.map((l) => {
          const active = l === current;
          return (
            <li key={l}>
              <a
                href={`${basePath}/${l}/`}
                aria-current={active ? "true" : undefined}
                className="block px-3 py-2 text-[10px] tracking-[0.18em] uppercase hover:bg-[var(--accent-yellow)] hover:text-[var(--ink-on-accent)]"
                style={{
                  background: active ? "var(--accent-yellow)" : "transparent",
                  color: active ? "var(--ink-on-accent)" : "var(--foreground)",
                }}
              >
                {localeLabels[l]}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
