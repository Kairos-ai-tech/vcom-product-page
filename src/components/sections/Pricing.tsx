import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["pricing"]; locale?: string };

export function Pricing({ dict }: Props) {
  const [l1, l2, l3] = dict.headlineLines;
  return (
    <section
      id="pricing"
      className="border-b-[var(--pixel)] border-[var(--panel-border)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-[var(--accent-blue)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {l1} <br /> {l2} <br /> {l3}
          </h2>
          <p className="font-body mt-4 text-[var(--foreground)]/80">
            {dict.body}
          </p>
        </div>

        <ul className="grid gap-6 lg:grid-cols-3">
          {dict.tiers.map((t, i) => (
            <li
              key={t.name}
              className={`pixel-panel-lg pixel-hover-lift anim-pop-in delay-${i + 1} flex flex-col p-6`}
              style={{
                background: t.bg,
                color: t.accent,
                transform: t.highlight
                  ? "translateY(calc(var(--pixel) * -2))"
                  : undefined,
              }}
            >
              <div className="flex items-baseline justify-between">
                <p className="text-sm">{t.name}</p>
                {t.highlight && (
                  <span
                    className="pixel-tag anim-glow"
                    style={{
                      background: "var(--accent-red)",
                      color: "var(--background)",
                    }}
                  >
                    {dict.mostChosen}
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl">{t.price}</span>
                <span className="font-body text-sm">{t.sub}</span>
              </div>
              <p className="font-body mt-2 text-sm">{t.pitch}</p>

              <ul className="font-body mt-6 grid flex-1 gap-2 text-sm">
                {t.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className="pixel-button active:pixel-button-press mt-6 self-start"
                style={{
                  background: t.highlight
                    ? "var(--accent-green)"
                    : "var(--panel)",
                }}
              >
                {t.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
