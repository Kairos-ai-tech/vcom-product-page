"use client";

import { Minifig } from "@/components/Minifig";
import { track } from "@/lib/analytics";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["cta"] };

export function CTA({ dict }: Props) {
  const [l1, l2, l3] = dict.headlineLines;
  return (
    <section
      id="waitlist"
      className="border-b-[var(--pixel)] border-[var(--panel-border)]"
      style={{ background: "var(--accent-yellow)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow text-[var(--ink-on-accent)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl text-[var(--ink-on-accent)] sm:text-4xl">
            {l1} <br /> {l2} <br />
            <span className="anim-glow inline-block bg-[var(--background)] px-3 py-1">
              {l3}
            </span>
          </h2>
          <p className="font-body mt-5 max-w-lg text-[var(--ink-on-accent)]">
            {dict.body}
          </p>

          {/* Email signup styled as a terminal login: prompt prefix +
              blinking caret on the placeholder makes the input read as
              an actual command line, not a generic form field. */}
          <form
            className="mt-6 max-w-xl border-[var(--pixel)] border-[var(--panel-border)] p-3"
            style={{ background: "var(--sim-screen)" }}
            action="#"
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = String(fd.get("email") ?? "");
              track("signup_clicked", { source: "waitlist", hasEmail: email.length > 0 });
            }}
          >
            <p className="font-body text-[10px] tracking-[0.18em] uppercase text-[var(--background)]/60">
              vcom · waitlist.sh
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="flex flex-1 items-center gap-2 border-[calc(var(--pixel)/2)] border-[var(--background)]/30 bg-[var(--sim-screen-soft)] px-3 py-2">
                <span className="font-body text-[var(--accent-green)]" aria-hidden>
                  &gt;
                </span>
                <label htmlFor="email" className="sr-only">
                  {dict.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={dict.emailPlaceholder}
                  className="font-mono w-full bg-transparent text-base text-[var(--background)] placeholder:text-[var(--background)]/40 focus:outline-none"
                  style={{ borderRadius: 0 }}
                />
                <span aria-hidden className="anim-cursor text-[var(--accent-green)]">
                  ▌
                </span>
              </div>
              <button
                type="submit"
                className="pixel-button active:pixel-button-press"
                style={{ background: "var(--accent-green)" }}
              >
                {dict.submit}
              </button>
            </div>
            <p className="font-body mt-2 text-[10px] text-[var(--background)]/50">
              [ok] press enter to submit · status: ready
            </p>
          </form>

          <p className="font-body mt-3 text-xs text-[var(--ink-on-accent)]/80">
            {dict.fineprint}
          </p>
        </div>

        <div className="flex items-end justify-center gap-4 sm:gap-6">
          <div className="anim-pop-in delay-1">
            <Minifig name="ANNA" size={88} state="working" />
          </div>
          <div className="anim-pop-in delay-2">
            <Minifig name="OLIVER" size={88} state="idle" />
          </div>
          <div className="anim-pop-in delay-3">
            <Minifig name="KAI" size={88} state="waiting" />
          </div>
        </div>
      </div>
    </section>
  );
}
