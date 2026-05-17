import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["insight"] };

export function Insight({ dict }: Props) {
  const [h1, h2] = dict.headlineLines;
  return (
    <section className="border-b-[var(--pixel)] border-[var(--panel-border)] bg-[var(--panel)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-[var(--accent-blue)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {h1} <br />
            <span className="anim-rainbow">{h2}</span>
          </h2>
        </div>
        <div className="font-body grid gap-6 text-base text-[var(--foreground)]/85">
          <p>{dict.paragraph}</p>
          <blockquote
            className="pixel-panel relative bg-[var(--background)] p-5"
            style={{ borderLeft: "calc(var(--pixel) * 2) solid var(--accent-yellow)" }}
          >
            <p className="font-body text-lg leading-snug">{dict.callout}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
