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
    <footer
      className="relative overflow-hidden border-t-[var(--pixel)] border-[var(--panel-border)]"
      style={{ background: "var(--panel)" }}
    >
      {/* pixel cityscape silhouette sitting along the top edge of the
          footer — gives the page a horizon line as the user scrolls out */}
      <Skyline />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-20 pb-10 sm:flex-row sm:items-center sm:justify-between">
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

// Tiny pixel cityscape — buildings of varying heights with lit windows,
// drawn in two tones of dark navy so it reads as a silhouette. Sits at
// the top of the footer panel.
function Skyline() {
  return (
    <svg
      viewBox="0 0 200 30"
      preserveAspectRatio="none"
      width="100%"
      height="60"
      shapeRendering="crispEdges"
      aria-hidden
      className="absolute inset-x-0 top-0 block"
      style={{ imageRendering: "pixelated" }}
    >
      {/* sky band */}
      <rect x="0" y="0" width="200" height="30" fill="var(--panel)" />
      {/* far buildings */}
      <rect x="0" y="14" width="14" height="16" fill="#3a3550" />
      <rect x="12" y="10" width="10" height="20" fill="#3a3550" />
      <rect x="20" y="16" width="18" height="14" fill="#3a3550" />
      <rect x="36" y="6" width="14" height="24" fill="#3a3550" />
      <rect x="48" y="12" width="20" height="18" fill="#3a3550" />
      <rect x="66" y="4" width="10" height="26" fill="#3a3550" />
      <rect x="74" y="14" width="18" height="16" fill="#3a3550" />
      <rect x="90" y="10" width="16" height="20" fill="#3a3550" />
      <rect x="104" y="6" width="12" height="24" fill="#3a3550" />
      <rect x="114" y="16" width="22" height="14" fill="#3a3550" />
      <rect x="134" y="8" width="14" height="22" fill="#3a3550" />
      <rect x="146" y="14" width="18" height="16" fill="#3a3550" />
      <rect x="162" y="4" width="12" height="26" fill="#3a3550" />
      <rect x="172" y="12" width="16" height="18" fill="#3a3550" />
      <rect x="186" y="16" width="14" height="14" fill="#3a3550" />

      {/* nearer buildings — slightly darker for depth */}
      <rect x="6" y="20" width="10" height="10" fill="var(--panel-border)" />
      <rect x="40" y="22" width="12" height="8" fill="var(--panel-border)" />
      <rect x="78" y="22" width="10" height="8" fill="var(--panel-border)" />
      <rect x="120" y="20" width="14" height="10" fill="var(--panel-border)" />
      <rect x="156" y="22" width="12" height="8" fill="var(--panel-border)" />
      <rect x="190" y="20" width="10" height="10" fill="var(--panel-border)" />

      {/* lit windows */}
      <rect x="14" y="14" width="2" height="2" fill="var(--accent-yellow)" />
      <rect x="40" y="12" width="2" height="2" fill="var(--accent-yellow)" />
      <rect x="44" y="20" width="2" height="2" fill="var(--accent-yellow)" />
      <rect x="68" y="8" width="2" height="2" fill="var(--accent-pink)" />
      <rect x="68" y="16" width="2" height="2" fill="var(--accent-yellow)" />
      <rect x="96" y="14" width="2" height="2" fill="var(--accent-yellow)" />
      <rect x="108" y="10" width="2" height="2" fill="var(--accent-blue)" />
      <rect x="138" y="14" width="2" height="2" fill="var(--accent-yellow)" />
      <rect x="166" y="10" width="2" height="2" fill="var(--accent-green)" />
      <rect x="176" y="16" width="2" height="2" fill="var(--accent-yellow)" />

      {/* tiny aerial — radio tower with blinking light */}
      <rect x="80" y="0" width="1" height="22" fill="var(--panel-border)" />
      <rect x="79" y="4" width="3" height="1" fill="var(--panel-border)" />
      <rect x="78" y="6" width="5" height="1" fill="var(--panel-border)" />
      <rect x="80" y="0" width="1" height="1" fill="var(--accent-red)" />
    </svg>
  );
}
