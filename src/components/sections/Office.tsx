import { Minifig } from "@/components/Minifig";
import {
  Room,
  Corridor,
  ROOM_PALETTE,
  CHAR_ACCENT,
} from "@/components/OfficeSprites";
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
      aria-label="vcom spatial office — top-down view, three rooms"
      className="pixel-panel-lg scanlines relative overflow-hidden p-4 sm:p-6"
      style={{ background: "#2a2335" }}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="pixel-tag" style={{ background: "var(--accent-yellow)" }}>
          {dict.mockTag}
        </span>
        <span className="font-body text-xs text-[var(--background)]">
          {dict.mockOnline}
        </span>
      </div>

      {/* Three rooms in a row, separated by the dark wall colour bleeding
          through the gap. Stacks to a single column on small screens. */}
      <ul className="grid gap-3 sm:grid-cols-3">
        {dict.desks.map((d) => {
          const palette = ROOM_PALETTE[d.name];
          return (
            <li
              key={d.name}
              tabIndex={0}
              aria-label={`${d.name}, ${d.state}: ${d.label}`}
              className="anim-pop-in focus:outline-none focus-visible:ring-[var(--pixel)] focus-visible:ring-[var(--accent-blue)]"
            >
              <Room
                name={d.name}
                accent={CHAR_ACCENT[d.name]}
                floor={palette.floor}
                floorDiag={palette.floorDiag}
                label={d.label}
                state={d.state}
                monitorColors={palette.monitorColors}
                shelves={palette.shelves}
              />
            </li>
          );
        })}
      </ul>

      {/* Corridor band with cacti — the connective space between rooms. */}
      <div className="mt-3">
        <Corridor count={6} />
      </div>

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
