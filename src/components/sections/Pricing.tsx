"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import type { Dict, PricingTier } from "@/i18n/types";

type Props = { dict: Dict["pricing"]; locale?: string };

export function Pricing({ dict }: Props) {
  const [l1, l2, l3] = dict.headlineLines;
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  // Fire `pricing_viewed` the first time the section scrolls into the
  // viewport — fires once per page load so funnels stay clean.
  const sectionRef = useRef<HTMLElement | null>(null);
  const firedRef = useRef(false);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || firedRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            track("pricing_viewed");
            io.disconnect();
            return;
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="border-b-[var(--pixel)] border-[var(--panel-border)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow text-[var(--accent-blue)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {l1} <br /> {l2} <br /> {l3}
          </h2>
          <p className="font-body mt-4 text-[var(--foreground)]/80">
            {dict.body}
          </p>
        </div>

        <BillingToggle
          billing={billing}
          setBilling={setBilling}
          monthlyLabel={dict.billing.monthlyLabel}
          annualLabel={dict.billing.annualLabel}
        />

        <ul className="mt-8 grid items-stretch gap-6 lg:grid-cols-3">
          {dict.tiers.map((t, i) => (
            <PricingCard
              key={t.id}
              tier={t}
              billing={billing}
              delayIndex={i + 1}
            />
          ))}
        </ul>

        <p className="font-body mt-8 text-center text-sm text-[var(--foreground)]/70">
          {dict.footnote}
        </p>
        <p className="mt-3 text-center">
          <a
            href={dict.enterprise.href}
            className="font-body text-sm text-[var(--accent-blue)] underline-offset-4 hover:underline"
          >
            {dict.enterprise.text}
          </a>
        </p>
      </div>
    </section>
  );
}

function BillingToggle({
  billing,
  setBilling,
  monthlyLabel,
  annualLabel,
}: {
  billing: "monthly" | "annual";
  setBilling: (v: "monthly" | "annual") => void;
  monthlyLabel: string;
  annualLabel: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="billing period"
      className="pixel-panel inline-flex items-center gap-0 bg-[var(--panel)] p-1"
    >
      {(["monthly", "annual"] as const).map((v) => {
        const active = billing === v;
        return (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setBilling(v)}
            className="cursor-pointer px-4 py-2 text-[10px] tracking-[0.2em] uppercase"
            style={{
              background: active ? "var(--accent-yellow)" : "transparent",
              color: "var(--ink-on-accent)",
            }}
          >
            {v === "monthly" ? monthlyLabel : annualLabel}
          </button>
        );
      })}
    </div>
  );
}

function PricingCard({
  tier,
  billing,
  delayIndex,
}: {
  tier: PricingTier;
  billing: "monthly" | "annual";
  delayIndex: number;
}) {
  const view = billing === "monthly" ? tier.monthly : tier.annual;
  // Each tier maps to a sim "machine console": Free = single inbox terminal,
  // Solo = the full workstation (highlighted), Studio = the multi-bay rack.
  // The icon SVG below the nameplate gives the tier a distinct silhouette.
  return (
    <li
      className={`pixel-panel-lg pixel-hover-lift anim-pop-in delay-${delayIndex} relative flex flex-col overflow-hidden`}
      style={{
        background: tier.bg,
        color: tier.accent,
        transform: tier.highlight
          ? "translateY(calc(var(--pixel) * -2))"
          : undefined,
      }}
    >
      {tier.badge && (
        <span
          className="pixel-tag anim-glow absolute -top-3 left-1/2 z-20 -translate-x-1/2"
          style={{
            background: "var(--accent-red)",
            color: "var(--background)",
          }}
        >
          {tier.badge}
        </span>
      )}

      {/* console nameplate — name + tier rank as a hard-edged header */}
      <div
        className="flex items-center justify-between border-b-[var(--pixel)] border-[var(--panel-border)] px-5 py-3"
        style={{ background: "var(--panel-border)" }}
      >
        <span className="font-display text-xs tracking-[0.25em] uppercase text-[var(--background)]">
          {tier.name}
        </span>
        <span className="font-body text-[10px] tracking-[0.18em] uppercase text-[var(--background)]/70">
          tier · 0{delayIndex}
        </span>
      </div>

      {/* digital-readout price strip */}
      <div
        className="border-b-[calc(var(--pixel)/2)] border-[var(--panel-border)] px-5 py-4"
        style={{ background: "var(--sim-screen)" }}
      >
        <div className="flex items-baseline gap-2">
          <span className="font-display text-3xl text-[var(--accent-green)]">
            {view.price}
          </span>
          <span className="font-body text-sm text-[var(--background)]/80">
            {view.sub}
          </span>
        </div>
        {view.note && (
          <p className="font-body mt-1 text-xs text-[var(--background)]/60">
            {view.note}
          </p>
        )}
        {tier.addon && (
          <p className="font-body mt-1 text-sm text-[var(--accent-yellow)]">
            {tier.addon}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <span className="shrink-0">
            <TierIcon id={tier.id} />
          </span>
          <p className="font-body text-sm">{tier.pitch}</p>
        </div>

        <ul className="font-body mt-5 grid flex-1 gap-1.5 text-sm">
          {tier.features.map((f) => (
            <li
              key={f.text}
              className="flex items-start gap-2 border-[calc(var(--pixel)/2)] border-[var(--panel-border)]/30 bg-[var(--background)]/40 px-2 py-1"
            >
              <span
                aria-hidden
                style={{
                  color:
                    f.glyph === "✓"
                      ? "var(--accent-green)"
                      : "var(--accent-red)",
                }}
              >
                {f.glyph}
              </span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>

        <a
          href={tier.ctaHref ?? "#waitlist"}
          onClick={() => {
            if (tier.id !== "free") {
              track("trial_started_cta_clicked", { tier: tier.id, billing });
            } else {
              track("signup_clicked", { tier: tier.id });
            }
          }}
          className="pixel-button active:pixel-button-press mt-6 self-start"
          style={{
            background: tier.highlight
              ? "var(--accent-green)"
              : "var(--panel)",
          }}
        >
          {tier.cta}
        </a>
      </div>
    </li>
  );
}

function TierIcon({ id }: { id: "free" | "solo" | "studio" }) {
  // Tier silhouettes: free = one monitor, solo = workstation, studio = rack
  const dark = "var(--panel-border)";
  const screen = "var(--sim-screen)";
  if (id === "free") {
    return (
      <svg viewBox="0 0 14 12" width="42" height="36" shapeRendering="crispEdges" aria-hidden>
        <rect x="2" y="1" width="10" height="7" fill={dark} />
        <rect x="3" y="2" width="8" height="5" fill={screen} />
        <rect x="4" y="3" width="6" height="1" fill="var(--accent-green)" />
        <rect x="4" y="5" width="4" height="1" fill="var(--accent-green)" />
        <rect x="6" y="8" width="2" height="1" fill={dark} />
        <rect x="4" y="9" width="6" height="1" fill={dark} />
      </svg>
    );
  }
  if (id === "solo") {
    return (
      <svg viewBox="0 0 22 12" width="56" height="32" shapeRendering="crispEdges" aria-hidden>
        {/* two monitors + tower */}
        <rect x="1" y="1" width="8" height="6" fill={dark} />
        <rect x="2" y="2" width="6" height="4" fill={screen} />
        <rect x="3" y="3" width="4" height="1" fill="var(--accent-pink)" />
        <rect x="3" y="5" width="3" height="1" fill="var(--accent-yellow)" />
        <rect x="10" y="1" width="8" height="6" fill={dark} />
        <rect x="11" y="2" width="6" height="4" fill={screen} />
        <rect x="12" y="3" width="4" height="1" fill="var(--accent-blue)" />
        <rect x="12" y="5" width="3" height="1" fill="var(--accent-green)" />
        <rect x="19" y="2" width="3" height="9" fill={dark} />
        <rect x="20" y="4" width="1" height="1" fill="var(--accent-green)" />
        {/* desk */}
        <rect x="0" y="8" width="22" height="2" fill="var(--sim-wood)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 18 14" width="48" height="36" shapeRendering="crispEdges" aria-hidden>
      {/* server rack */}
      <rect x="1" y="0" width="16" height="14" fill={dark} />
      <rect x="2" y="1" width="14" height="2" fill={screen} />
      <rect x="3" y="2" width="3" height="1" fill="var(--accent-green)" />
      <rect x="7" y="2" width="2" height="1" fill="var(--accent-yellow)" />
      <rect x="2" y="4" width="14" height="2" fill={screen} />
      <rect x="3" y="5" width="4" height="1" fill="var(--accent-blue)" />
      <rect x="8" y="5" width="2" height="1" fill="var(--accent-green)" />
      <rect x="2" y="7" width="14" height="2" fill={screen} />
      <rect x="3" y="8" width="5" height="1" fill="var(--accent-red)" />
      <rect x="9" y="8" width="3" height="1" fill="var(--accent-green)" />
      <rect x="2" y="10" width="14" height="2" fill={screen} />
      <rect x="3" y="11" width="3" height="1" fill="var(--accent-pink)" />
      <rect x="7" y="11" width="4" height="1" fill="var(--accent-yellow)" />
    </svg>
  );
}
