"use client";

import { track } from "@/lib/analytics";
import { HeroOffice } from "@/components/HeroOffice";
import { PixelSparkle } from "@/components/PixelSprites";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["hero"]; locale?: string };

export function Hero({ dict }: Props) {
  const [l1, l2] = dict.headlineLines;
  return (
    <section className="relative overflow-hidden border-b-[var(--pixel)] border-[var(--panel-border)]">
      <div className="absolute inset-0 dot-grid" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:min-h-[80vh] lg:grid-cols-2 lg:py-24">
        {/* Left: the animated pixel office — the centerpiece moved
            above the fold per the new positioning. */}
        <div className="anim-pop-in order-2 lg:order-1">
          <HeroOffice ariaLabel={dict.sceneAria} />
        </div>

        {/* Right: copy stack. */}
        <div
          id="cta"
          className="order-1 flex flex-col justify-center gap-5 lg:order-2"
        >
          <p className="eyebrow text-[var(--accent-red)] anim-pop-in">
            {dict.eyebrow}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl">
            <span className="block anim-pop-in delay-1">{l1}</span>
            <span className="anim-pop-in delay-2 inline-block bg-[var(--accent-yellow)] px-3 py-1 text-[var(--ink-on-accent)]">
              {l2}
            </span>
          </h1>
          <p className="font-body anim-pop-in delay-3 max-w-lg text-[var(--foreground)]/85">
            {dict.subhead}
          </p>

          <ul className="font-body anim-pop-in delay-4 grid gap-2 text-sm">
            {dict.features.map((f, i) => (
              <li key={f} className={`anim-pop-in delay-${4 + i}`}>
                <span className="anim-rainbow inline-block">►</span> {f}
              </li>
            ))}
          </ul>

          <div className="anim-pop-in delay-7 mt-2 flex flex-wrap items-center gap-4">
            <a
              href="#waitlist"
              onClick={() =>
                track("trial_started_cta_clicked", { source: "hero_primary" })
              }
              className="pixel-button active:pixel-button-press anim-glow"
              style={{ background: "var(--accent-green)" }}
            >
              {dict.primaryCta}
            </a>
            <a
              href="#standup"
              className="pixel-button active:pixel-button-press"
              style={{ background: "var(--panel)" }}
            >
              {dict.secondaryCta}
            </a>
            <span className="font-body text-xs text-[var(--foreground)]/60">
              {dict.primaryCtaNote}
            </span>
          </div>

          <p className="font-body anim-pop-in delay-8 flex items-center gap-2 text-xs text-[var(--foreground)]/60">
            <PixelSparkle size={10} /> {dict.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
