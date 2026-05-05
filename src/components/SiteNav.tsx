import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["nav"]; locale: Locale };

export function SiteNav({ dict, locale }: Props) {
  return (
    <header className="sticky top-0 z-20 border-b-[var(--pixel)] border-[var(--panel-border)] bg-[var(--background)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <PixelLogo />
          <span className="text-sm">vcom</span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {dict.links.map((l) => (
            <li key={l.href}>
              <a
                href={`/${locale}${l.href}`}
                className="text-[10px] tracking-[0.25em] uppercase hover:text-[var(--accent-red)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={locale} />
          <a
            href={`/${locale}#cta`}
            className="pixel-button active:pixel-button-press hidden sm:inline-block"
            style={{ background: "var(--accent-green)" }}
          >
            {dict.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}

function PixelLogo() {
  return (
    <svg
      viewBox="0 0 12 12"
      width="28"
      height="28"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="0" y="0" width="12" height="12" fill="var(--accent-yellow)" />
      <rect x="0" y="0" width="12" height="2" fill="var(--panel-border)" />
      <rect x="0" y="10" width="12" height="2" fill="var(--panel-border)" />
      <rect x="0" y="0" width="2" height="12" fill="var(--panel-border)" />
      <rect x="10" y="0" width="2" height="12" fill="var(--panel-border)" />
      <rect x="3" y="3" width="2" height="2" fill="var(--accent-red)" />
      <rect x="7" y="3" width="2" height="2" fill="var(--accent-blue)" />
      <rect x="5" y="6" width="2" height="2" fill="var(--accent-green)" />
    </svg>
  );
}
