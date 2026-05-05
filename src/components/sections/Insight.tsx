import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["insight"] };

export function Insight({ dict }: Props) {
  // Paragraph 2 contains a __HIGHLIGHT__ marker that we replace with a
  // yellow-marker span. Translators only need to know the marker exists.
  const p2 = dict.paragraphs[1];
  const [before, after] = p2.split("__HIGHLIGHT__");

  return (
    <section className="border-b-[var(--pixel)] border-[var(--panel-border)] bg-[var(--panel)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow text-[var(--accent-blue)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {dict.headlineParts.line1} <br />
            {dict.headlineParts.line2} <br />
            <span className="anim-rainbow">
              {dict.headlineParts.emphasis}
            </span>{" "}
            {dict.headlineParts.rest}
          </h2>
        </div>
        <div className="font-body grid gap-5 text-base text-[var(--foreground)]/85">
          <p>{dict.paragraphs[0]}</p>
          <p>
            {before}
            <span className="bg-[var(--accent-yellow)] px-1 text-[var(--ink-on-accent)]">
              {dict.highlight}
            </span>
            {after}
          </p>
          <p>{dict.paragraphs[2]}</p>
        </div>
      </div>
    </section>
  );
}
