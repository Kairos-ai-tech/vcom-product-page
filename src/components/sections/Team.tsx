import { Minifig } from "@/components/Minifig";
import { ROOM_PALETTE, CHAR_ACCENT } from "@/components/OfficeSprites";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["team"] };

// Each card is rendered as an "operator dossier" — a sim-style employee
// record. The portrait sits in a tinted "room cell" matching the
// character's floor colour from the spatial office, so a reader who
// recognises Anna's slate-blue room recognises her here too. Lists are
// colour-chipped (green = does, red = does not) and the signature
// quote sits in a dialog-box callout at the foot of the card.
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
          {dict.cards.map((c, i) => {
            const palette = ROOM_PALETTE[c.name];
            const accent = CHAR_ACCENT[c.name];
            return (
              <li
                key={c.name}
                className={`pixel-panel-lg pixel-hover-lift anim-pop-in delay-${i + 1} flex flex-col bg-[var(--panel)]`}
              >
                {/* portrait cell — tinted with the character's floor colour */}
                <div
                  className="relative overflow-hidden border-b-[var(--pixel)] border-[var(--panel-border)]"
                  style={{ background: palette.floor }}
                >
                  {/* faint tile-grid pattern matches the office room */}
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent 0 16px, rgba(0,0,0,0.28) 16px 17px), repeating-linear-gradient(90deg, transparent 0 16px, rgba(0,0,0,0.28) 16px 17px)",
                    }}
                  />
                  {/* dossier strip header */}
                  <div
                    className="relative flex items-center justify-between border-b-[calc(var(--pixel)/2)] border-[var(--panel-border)] px-4 py-2"
                    style={{ background: accent }}
                  >
                    <p className="font-display text-[10px] tracking-[0.25em] text-[var(--ink-on-accent)]">
                      OPERATOR · {c.name}
                    </p>
                    <p className="font-body text-[10px] tracking-[0.18em] uppercase text-[var(--ink-on-accent)]">
                      ID · 00{i + 1}
                    </p>
                  </div>
                  <div className="relative flex items-end justify-between gap-3 px-5 pt-5 pb-3">
                    <div>
                      <p className="font-display text-xs tracking-[0.18em] text-[var(--background)]">
                        {c.role}
                      </p>
                      <p className="font-body mt-1 text-lg text-[var(--background)]">
                        {c.display}
                      </p>
                    </div>
                    <span
                      className="border-[var(--pixel)] border-[var(--panel-border)] p-1"
                      style={{ background: accent }}
                    >
                      <Minifig name={c.name} size={72} state="working" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-5">
                  <p className="font-body text-sm">{c.tagline}</p>

                  <div>
                    <p className="eyebrow mb-2 text-[var(--accent-green)]">
                      {dict.labels.does}
                    </p>
                    <ul className="grid gap-1.5">
                      {c.does.map((d) => (
                        <li
                          key={d}
                          className="font-body flex items-start gap-2 border-[calc(var(--pixel)/2)] border-[var(--accent-green)] bg-[var(--accent-green)]/10 px-2 py-1 text-sm"
                        >
                          <span aria-hidden className="text-[var(--accent-green)]">
                            ✓
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="eyebrow mb-2 text-[var(--accent-red)]">
                      {dict.labels.doesNot}
                    </p>
                    <ul className="grid gap-1.5">
                      {c.doesNot.map((d) => (
                        <li
                          key={d}
                          className="font-body flex items-start gap-2 border-[calc(var(--pixel)/2)] border-[var(--accent-red)] bg-[var(--accent-red)]/10 px-2 py-1 text-sm"
                        >
                          <span aria-hidden className="text-[var(--accent-red)]">
                            ✗
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* signature — dialog-box callout */}
                  <div
                    className="relative mt-auto border-[var(--pixel)] border-[var(--panel-border)] bg-[var(--background)] p-3"
                  >
                    <span
                      aria-hidden
                      className="absolute -top-[var(--pixel)] left-4 h-[var(--pixel)] w-8"
                      style={{ background: accent }}
                    />
                    <p className="eyebrow mb-2 text-[var(--accent-blue)]">
                      {dict.labels.signature}
                    </p>
                    <p className="font-body text-sm">{c.signature}</p>
                    <span
                      aria-hidden
                      className="anim-blink mt-2 inline-block text-[var(--accent-blue)]"
                    >
                      ▼
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
