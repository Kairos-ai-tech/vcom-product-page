import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["footer"]; locale: string };

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
                href={l.href.startsWith("mailto:") ? l.href : `/${locale}${l.href}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-body text-xs text-[var(--foreground)]/60">
          {dict.copyright}
        </p>
      </div>
    </footer>
  );
}
