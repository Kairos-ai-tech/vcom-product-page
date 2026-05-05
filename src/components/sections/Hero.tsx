import Link from "next/link";
import { Minifig } from "@/components/Minifig";
import {
  PixelCoin,
  PixelStar,
  PixelHeart,
  PixelSparkle,
} from "@/components/PixelSprites";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["hero"]; locale: string };

export function Hero({ dict, locale }: Props) {
  const [l1, l2, l3] = dict.headlineLines;
  return (
    <section className="relative overflow-hidden border-b-[var(--pixel)] border-[var(--panel-border)]">
      {/* Subtle paper-grid backdrop, pushed behind everything. */}
      <div className="absolute inset-0 dot-grid" aria-hidden />

      {/* Floating decorations — coins/star/heart at fixed positions on
          the hero canvas. Hidden on small screens to keep the headline
          breathing room. */}
      <FloatingDecor />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div className="flex flex-col justify-center gap-6">
          <p className="eyebrow text-[var(--accent-red)] anim-pop-in">
            {dict.eyebrow}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl">
            <span className="block anim-pop-in delay-1">{l1}</span>
            <span className="block anim-pop-in delay-2">{l2}</span>
            <span className="anim-pop-in delay-3 inline-block bg-[var(--accent-yellow)] px-3 py-1 text-[var(--ink-on-accent)]">
              {l3}
            </span>
          </h1>
          <p className="font-body anim-pop-in delay-4 max-w-lg text-[var(--foreground)]/85">
            {dict.body}
          </p>

          <ul className="font-body grid gap-2 text-sm">
            {dict.bullets.map((b, i) => (
              <li key={b} className={`anim-pop-in delay-${5 + i}`}>
                <span className="anim-rainbow inline-block">►</span> {b}
              </li>
            ))}
          </ul>

          <div
            id="cta"
            className="anim-pop-in delay-8 mt-2 flex flex-wrap items-center gap-4"
          >
            <Link
              href={`/${locale}#waitlist`}
              className="pixel-button active:pixel-button-press anim-glow"
              style={{ background: "var(--accent-green)" }}
            >
              {dict.primaryCta}
            </Link>
            <Link
              href={`/${locale}#standup`}
              className="pixel-button active:pixel-button-press"
              style={{ background: "var(--panel)" }}
            >
              {dict.secondaryCta}
            </Link>
          </div>

          <p className="font-body flex items-center gap-2 text-xs text-[var(--foreground)]/60">
            <PixelSparkle size={10} /> {dict.fineprint}{" "}
            <PixelSparkle size={10} />
          </p>
        </div>

        <HeroBoard dict={dict} />
      </div>
    </section>
  );
}

function FloatingDecor() {
  return (
    <>
      <div className="anim-float pointer-events-none absolute right-[8%] top-[12%] hidden lg:block">
        <div className="anim-coin">
          <PixelCoin size={36} />
        </div>
      </div>
      <div
        className="anim-float pointer-events-none absolute left-[6%] top-[58%] hidden lg:block"
        style={{ animationDelay: "0.4s" }}
      >
        <PixelStar size={26} color="var(--accent-pink)" />
      </div>
      <div
        className="anim-float pointer-events-none absolute right-[42%] top-[8%] hidden lg:block"
        style={{ animationDelay: "1.1s" }}
      >
        <PixelHeart size={20} />
      </div>
      <div className="anim-sparkle pointer-events-none absolute left-[40%] top-[20%] hidden md:block">
        <PixelSparkle size={14} />
      </div>
      <div
        className="anim-sparkle pointer-events-none absolute right-[18%] top-[70%] hidden md:block"
        style={{ animationDelay: "0.8s" }}
      >
        <PixelSparkle size={12} />
      </div>
    </>
  );
}

function HeroBoard({ dict }: { dict: Dict["hero"] }) {
  const tiles: { name: "ANNA" | "KAI" | "OLIVER"; role: string; bg: string }[] = [
    { name: "ANNA", role: "HR", bg: "var(--accent-pink)" },
    { name: "KAI", role: "CS", bg: "var(--accent-blue)" },
    { name: "OLIVER", role: "OPS", bg: "var(--accent-green)" },
  ];
  return (
    <div className="pixel-panel-lg pixel-hover-lift scanlines anim-pop-in delay-3 flex flex-col gap-4 bg-[var(--panel)] p-5">
      <div className="flex items-center justify-between">
        <span className="pixel-tag" style={{ background: "var(--accent-yellow)" }}>
          {dict.boardTag}
        </span>
        <span className="font-body text-xs text-[var(--foreground)]/60">
          {dict.boardSub}
        </span>
      </div>

      <ul className="grid grid-cols-3 gap-3">
        {tiles.map((t, i) => (
          <li
            key={t.name}
            className={`pixel-panel pixel-hover-lift anim-pop-in delay-${4 + i} flex flex-col items-center gap-2 p-3`}
            style={{ background: t.bg }}
          >
            <p className="text-[10px] tracking-[0.2em] text-[var(--ink-on-accent)]">
              {t.role}
            </p>
            <Minifig
              name={t.name}
              size={56}
              state={i === 1 ? "working" : i === 2 ? "waiting" : "idle"}
            />
            <p className="text-[10px] text-[var(--ink-on-accent)]">{t.name}</p>
          </li>
        ))}
      </ul>

      <div className="pixel-panel anim-pop-in delay-7 bg-[var(--background)] p-3 font-body text-sm">
        <span className="text-[var(--accent-red)]">oliver →</span>{" "}
        {dict.boardCaption}
        <span className="anim-cursor">▌</span>
      </div>
    </div>
  );
}
