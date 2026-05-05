import { Minifig } from "@/components/Minifig";
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

          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            action="#"
            method="post"
          >
            <label htmlFor="email" className="sr-only">
              {dict.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={dict.emailPlaceholder}
              className="w-full max-w-md border-[var(--pixel)] border-[var(--panel-border)] bg-[var(--background)] px-3 py-3 font-mono text-base text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none"
              style={{ borderRadius: 0 }}
            />
            <button
              type="submit"
              className="pixel-button active:pixel-button-press"
              style={{ background: "var(--accent-green)" }}
            >
              {dict.submit}
            </button>
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
