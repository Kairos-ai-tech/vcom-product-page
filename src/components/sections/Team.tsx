import { Minifig } from "@/components/Minifig";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["team"] };

export function Team({ dict }: Props) {
  return (
    <section
      id="team"
      className="border-b-[var(--pixel)] border-[var(--panel-border)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-[var(--accent-green)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {dict.headline}
          </h2>
          <p className="font-body mt-4 text-[var(--foreground)]/85">
            {dict.body}
          </p>
        </div>

        <ul className="grid gap-8 lg:grid-cols-3">
          {dict.cards.map((c, i) => (
            <li
              key={c.name}
              className={`pixel-panel-lg pixel-hover-lift anim-pop-in delay-${i + 1} flex flex-col bg-[var(--panel)]`}
            >
              <div
                className="flex items-center justify-between gap-4 border-b-[var(--pixel)] border-[var(--panel-border)] p-5"
                style={{ background: c.bg }}
              >
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-[var(--ink-on-accent)]">
                    {c.role}
                  </p>
                  <p className="mt-1 text-sm text-[var(--ink-on-accent)]">
                    {c.display}
                  </p>
                </div>
                <Minifig name={c.name} size={56} />
              </div>

              <div className="flex flex-1 flex-col gap-5 p-5">
                <p className="font-body text-sm">{c.tagline}</p>

                <div>
                  <p className="eyebrow mb-2 text-[var(--accent-green)]">
                    {dict.labels.does}
                  </p>
                  <ul className="font-body grid gap-1 text-sm">
                    {c.does.map((d) => (
                      <li key={d}>✓ {d}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="eyebrow mb-2 text-[var(--accent-red)]">
                    {dict.labels.doesNot}
                  </p>
                  <ul className="font-body grid gap-1 text-sm">
                    {c.doesNot.map((d) => (
                      <li key={d}>✗ {d}</li>
                    ))}
                  </ul>
                </div>

                <div className="pixel-panel mt-auto bg-[var(--background)] p-3">
                  <p className="eyebrow mb-2 text-[var(--accent-blue)]">
                    {dict.labels.signature}
                  </p>
                  <p className="font-body text-sm">{c.signature}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
