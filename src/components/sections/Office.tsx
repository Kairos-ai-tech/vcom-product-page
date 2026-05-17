import { Minifig } from "@/components/Minifig";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["office"] };

// State legends below the scene use the same colour vocabulary as the
// tags on the desks, so the eye links them without text doing the work.
const stateColors = [
  "var(--accent-blue)",
  "var(--accent-yellow)",
  "var(--accent-red)",
  "var(--accent-green)",
];

export function Office({ dict }: Props) {
  const [l1, l2] = dict.headlineLines;
  return (
    <section
      id="office"
      className="border-b-[var(--pixel)] border-[var(--panel-border)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow text-[var(--accent-pink)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-4xl">
            {l1} <br /> {l2}
          </h2>
          <p className="font-body mt-4 text-[var(--foreground)]/85">
            {dict.body}
          </p>
        </div>

        <OfficeScene dict={dict} />

        <StateLegends states={dict.states} />

        <p className="font-body mt-6 text-center text-sm text-[var(--foreground)]/70">
          {dict.coda}
        </p>
      </div>
    </section>
  );
}

function OfficeScene({ dict }: { dict: Dict["office"] }) {
  return (
    <div
      role="region"
      aria-label="vcom spatial office — three desks, three coworkers"
      className="pixel-panel-lg scanlines relative overflow-hidden p-6 sm:p-10"
      style={{
        background:
          "linear-gradient(180deg, var(--accent-blue) 0 62%, #5b3a1f 62% 100%)",
      }}
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="pixel-tag" style={{ background: "var(--accent-yellow)" }}>
          {dict.mockTag}
        </span>
        <span className="font-body text-xs text-[var(--background)]">
          {dict.mockOnline}
        </span>
      </div>

      <ul className="grid gap-5 sm:grid-cols-3">
        {dict.desks.map((d, i) => (
          <DeskCard
            key={d.name}
            name={d.name}
            label={d.label}
            state={d.state}
            color={d.color}
            delayIndex={i + 1}
          />
        ))}
      </ul>

      <div
        className="mt-8 h-[var(--pixel)] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--panel-border) 0 var(--pixel), transparent var(--pixel) calc(var(--pixel) * 4))",
        }}
      />

      <div className="mt-6 grid gap-2">
        {dict.handoffs.map((h, i) => (
          <Handoff
            key={h.msg}
            from={h.from}
            fromColor={i === 0 ? "var(--accent-pink)" : "var(--accent-blue)"}
            to={h.to}
            toColor={i === 0 ? "var(--accent-green)" : "var(--accent-yellow)"}
            msg={h.msg}
          />
        ))}
      </div>
    </div>
  );
}

function DeskCard({
  name,
  label,
  state,
  color,
  delayIndex,
}: {
  name: "ANNA" | "KAI" | "OLIVER";
  label: string;
  state: "idle" | "working" | "waiting";
  color: string;
  delayIndex: number;
}) {
  return (
    <li
      tabIndex={0}
      aria-label={`${name}, ${state}: ${label}`}
      className={`group pixel-panel pixel-hover-lift anim-pop-in delay-${delayIndex} relative flex flex-col items-center gap-3 bg-[var(--panel)] p-5 focus:outline-none focus-visible:ring-[var(--pixel)] focus-visible:ring-[var(--accent-blue)]`}
    >
      <Minifig name={name} size={84} state={state} />
      <Desk />
      <p className="text-[10px] tracking-[0.2em] text-[var(--foreground)]">
        {name}
      </p>
      <span
        className={`pixel-tag ${state === "waiting" ? "anim-glow" : ""}`}
        style={{ background: color, color: "var(--ink-on-accent)" }}
      >
        {label}
      </span>

      {/* Hover/focus tooltip — sits above the card, no layout shift. */}
      <span
        aria-hidden
        className="font-body pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap border-[calc(var(--pixel)/2)] border-[var(--panel-border)] bg-[var(--background)] px-2 py-1 text-xs opacity-0 transition-opacity duration-100 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {state} · {label}
      </span>
    </li>
  );
}

function StateLegends({ states }: { states: string[] }) {
  return (
    <ul
      aria-label="character state legend"
      className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      {states.map((s, i) => {
        const [head, ...rest] = s.split(" — ");
        return (
          <li
            key={s}
            className="pixel-panel flex items-center gap-3 bg-[var(--panel)] p-3"
          >
            <StateDemo index={i} />
            <div className="font-body flex flex-col text-sm">
              <span
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: stateColors[i] }}
              >
                {head}
              </span>
              {rest.length > 0 && (
                <span className="text-[var(--foreground)]/75">
                  {rest.join(" — ")}
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function StateDemo({ index }: { index: number }) {
  // 0 idle, 1 working, 2 waiting, 3 collaborating — each picks a
  // representative micro-scene. The fourth uses two minifigs at one
  // desk to make "collaborating" legible without copy.
  if (index === 3) {
    return (
      <span className="flex shrink-0 items-end gap-1">
        <Minifig name="ANNA" size={28} state="working" />
        <Minifig name="OLIVER" size={28} state="working" />
      </span>
    );
  }
  const map: { name: "ANNA" | "KAI" | "OLIVER"; state: "idle" | "working" | "waiting" }[] = [
    { name: "OLIVER", state: "idle" },
    { name: "ANNA", state: "working" },
    { name: "KAI", state: "waiting" },
  ];
  const cfg = map[index];
  return (
    <span className="shrink-0">
      <Minifig name={cfg.name} size={36} state={cfg.state} />
    </span>
  );
}

function Desk() {
  return (
    <svg
      viewBox="0 0 16 6"
      width="84"
      height="32"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="3" y="0" width="10" height="3" fill="var(--panel-border)" />
      <rect x="4" y="1" width="8" height="1" fill="var(--accent-green)" />
      <rect x="0" y="3" width="16" height="2" fill="#7a3f1a" />
      <rect x="0" y="5" width="3" height="1" fill="var(--panel-border)" />
      <rect x="13" y="5" width="3" height="1" fill="var(--panel-border)" />
    </svg>
  );
}

function Handoff({
  from,
  fromColor,
  to,
  toColor,
  msg,
}: {
  from: string;
  fromColor: string;
  to: string;
  toColor: string;
  msg: string;
}) {
  return (
    <div className="pixel-panel flex items-center gap-2 bg-[var(--background)] p-2">
      <span
        className="pixel-tag"
        style={{ background: fromColor, color: "var(--ink-on-accent)" }}
      >
        {from}
      </span>
      <span className="text-xs">→</span>
      <span
        className="pixel-tag"
        style={{ background: toColor, color: "var(--ink-on-accent)" }}
      >
        {to}
      </span>
      <p className="font-body ml-2 text-sm">{msg}</p>
    </div>
  );
}
