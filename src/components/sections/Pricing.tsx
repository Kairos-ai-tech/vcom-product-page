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
  return (
    <li
      className={`pixel-panel-lg pixel-hover-lift anim-pop-in delay-${delayIndex} relative flex flex-col p-6`}
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
          className="pixel-tag anim-glow absolute -top-3 left-1/2 -translate-x-1/2"
          style={{
            background: "var(--accent-red)",
            color: "var(--background)",
          }}
        >
          {tier.badge}
        </span>
      )}

      <p className="text-sm">{tier.name}</p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-2xl">{view.price}</span>
        <span className="font-body text-sm">{view.sub}</span>
      </div>
      {view.note && (
        <p className="font-body mt-1 text-xs opacity-70">{view.note}</p>
      )}
      {tier.addon && (
        <p className="font-body mt-1 text-sm">{tier.addon}</p>
      )}
      <p className="font-body mt-2 text-sm">{tier.pitch}</p>

      <ul className="font-body mt-6 grid flex-1 gap-2 text-sm">
        {tier.features.map((f) => (
          <li key={f.text}>
            <span
              className={f.glyph === "✓" ? "" : "opacity-50"}
              aria-hidden
            >
              {f.glyph}
            </span>{" "}
            {f.text}
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
    </li>
  );
}
