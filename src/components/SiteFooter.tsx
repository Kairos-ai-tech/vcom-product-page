import { ScanlinesToggle } from "@/components/ScanlinesToggle";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["footer"]; locale?: Locale };

// Hrefs that look like internal routes get the active locale prefix at
// render time — keeps the dict locale-agnostic. Anchor links, mailto:,
// tel:, and absolute URLs are passed through unchanged.
function resolveHref(href: string, locale?: string): string {
  if (!locale) return href;
  if (href.startsWith("/") && !href.startsWith("//")) {
    return `/${locale}${href}`;
  }
  return href;
}

export function SiteFooter({ dict, locale }: Props) {
  return (
    <footer className="border-t-[var(--pixel)] border-[var(--panel-border)] bg-[var(--panel)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm">vcom</p>
          <p className="font-body mt-1 text-sm text-[var(--foreground)]/70">
            {dict.tagline}
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 text-[10px] tracking-[0.2em] uppercase">
          {dict.links.map((l) => (
            <li key={l.href}>
              <a
                className="hover:text-[var(--accent-red)]"
                href={resolveHref(l.href, locale)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ScanlinesToggle onLabel={dict.crtOn} offLabel={dict.crtOff} />
          <p className="font-body text-xs text-[var(--foreground)]/60">
            {dict.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
