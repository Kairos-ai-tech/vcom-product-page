import type { Dict } from "@/i18n/types";

const stepColors = [
  "var(--accent-yellow)",
  "var(--accent-pink)",
  "var(--accent-blue)",
  "var(--accent-green)",
];

type Props = { dict: Dict["how"] };

// 4 steps rendered as numbered log entries with sim-style icons. Each
// step's icon is a tiny SVG that telegraphs the action (cable, speech,
// quill, stamp) — the icon is also tinted by the step's accent so the
// row reads at a glance.
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
          {dict.steps.map((s, i) => {
            const accent = stepColors[i % stepColors.length];
            return (
              <li
                key={s.n}
                className={`pixel-panel pixel-hover-lift anim-pop-in delay-${i + 1} relative flex flex-col gap-3 overflow-hidden bg-[var(--background)] p-5`}
              >
                {/* big translucent step numeral, top-right corner */}
                <span
                  aria-hidden
                  className="font-display absolute -top-2 right-2 text-5xl opacity-10"
                >
                  {s.n}
                </span>

                <div className="flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center border-[var(--pixel)] border-[var(--panel-border)]"
                    style={{ background: accent }}
                  >
                    <StepIcon index={i} />
                  </span>
                  <div>
                    <span
                      className="pixel-tag inline-block"
                      style={{ background: accent, color: "var(--ink-on-accent)" }}
                    >
                      step {s.n}
                    </span>
                    <p className="mt-1 text-sm">{s.title}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-[var(--foreground)]/80">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function StepIcon({ index }: { index: number }) {
  // 0 connect (USB plug) · 1 introduce (speech bubble) · 2 draft (quill)
  // · 3 approve (stamp). Each is a 12×12 pixel sprite with the dark
  // outline that matches every other sprite in the system.
  const dark = "var(--panel-border)";
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 12 12" width="32" height="32" shapeRendering="crispEdges" aria-hidden>
          {/* USB plug body */}
          <rect x="4" y="1" width="4" height="6" fill="var(--ink-on-accent)" />
          <rect x="4" y="1" width="4" height="1" fill={dark} />
          <rect x="4" y="1" width="1" height="6" fill={dark} />
          <rect x="7" y="1" width="1" height="6" fill={dark} />
          {/* prongs */}
          <rect x="3" y="2" width="1" height="1" fill="#cdd2dc" />
          <rect x="8" y="2" width="1" height="1" fill="#cdd2dc" />
          <rect x="3" y="4" width="1" height="1" fill="#cdd2dc" />
          <rect x="8" y="4" width="1" height="1" fill="#cdd2dc" />
          {/* cable */}
          <rect x="5" y="7" width="2" height="4" fill={dark} />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 12 12" width="32" height="32" shapeRendering="crispEdges" aria-hidden>
          <rect x="1" y="1" width="10" height="7" fill="var(--background)" />
          <rect x="1" y="1" width="10" height="1" fill={dark} />
          <rect x="1" y="7" width="10" height="1" fill={dark} />
          <rect x="1" y="1" width="1" height="7" fill={dark} />
          <rect x="10" y="1" width="1" height="7" fill={dark} />
          {/* tail */}
          <rect x="3" y="8" width="2" height="1" fill={dark} />
          <rect x="3" y="9" width="1" height="1" fill={dark} />
          {/* dots */}
          <rect x="3" y="4" width="2" height="1" fill={dark} />
          <rect x="6" y="4" width="2" height="1" fill={dark} />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 12 12" width="32" height="32" shapeRendering="crispEdges" aria-hidden>
          {/* paper */}
          <rect x="2" y="2" width="6" height="8" fill="#fff7e0" />
          <rect x="2" y="2" width="6" height="1" fill={dark} />
          <rect x="2" y="9" width="6" height="1" fill={dark} />
          <rect x="2" y="2" width="1" height="8" fill={dark} />
          <rect x="7" y="2" width="1" height="8" fill={dark} />
          <rect x="3" y="4" width="3" height="1" fill={dark} />
          <rect x="3" y="6" width="3" height="1" fill={dark} />
          {/* quill */}
          <rect x="7" y="1" width="3" height="1" fill="var(--ink-on-accent)" />
          <rect x="8" y="2" width="3" height="1" fill="var(--ink-on-accent)" />
          <rect x="9" y="3" width="2" height="1" fill="var(--ink-on-accent)" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 12 12" width="32" height="32" shapeRendering="crispEdges" aria-hidden>
          {/* stamp handle */}
          <rect x="3" y="1" width="6" height="3" fill="var(--ink-on-accent)" />
          <rect x="3" y="1" width="6" height="1" fill={dark} />
          <rect x="3" y="3" width="6" height="1" fill={dark} />
          {/* stamp base */}
          <rect x="2" y="4" width="8" height="2" fill="var(--accent-red)" />
          <rect x="2" y="4" width="8" height="1" fill={dark} />
          <rect x="2" y="5" width="8" height="1" fill={dark} />
          {/* ink mark — OK */}
          <rect x="4" y="8" width="1" height="2" fill={dark} />
          <rect x="6" y="8" width="1" height="1" fill={dark} />
          <rect x="6" y="9" width="2" height="1" fill={dark} />
          <rect x="7" y="8" width="1" height="1" fill={dark} />
        </svg>
      );
  }
  return null;
}
