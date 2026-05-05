import type { Dict } from "@/i18n/types";

const stepColors = [
  "var(--accent-yellow)",
  "var(--accent-pink)",
  "var(--accent-blue)",
  "var(--accent-green)",
];

type Props = { dict: Dict["how"] };

export function HowItWorks({ dict }: Props) {
  const [l1, l2] = dict.headlineLines;
  return (
    <section className="border-b-[var(--pixel)] border-[var(--panel-border)] bg-[var(--panel)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-[var(--accent-red)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {l1} <br /> {l2}
          </h2>
        </div>
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dict.steps.map((s, i) => (
            <li
              key={s.n}
              className={`pixel-panel pixel-hover-lift anim-pop-in delay-${i + 1} flex flex-col gap-3 bg-[var(--background)] p-5`}
            >
              <span
                className="pixel-tag self-start"
                style={{
                  background: stepColors[i % stepColors.length],
                  color: "var(--ink-on-accent)",
                }}
              >
                step {s.n}
              </span>
              <p className="text-sm">{s.title}</p>
              <p className="font-body text-sm text-[var(--foreground)]/80">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
