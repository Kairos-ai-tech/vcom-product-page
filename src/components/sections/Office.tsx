import { Minifig } from "@/components/Minifig";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["office"] };

const stateColors = ["var(--accent-blue)", "var(--accent-yellow)", "var(--accent-red)", "var(--accent-green)"];

export function Office({ dict }: Props) {
  const [l1, l2] = dict.headlineLines;
  return (
    <section
      id="office"
      className="border-b-[var(--pixel)] border-[var(--panel-border)]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.3fr_1fr]">
        <OfficeMock dict={dict} />
        <div className="flex flex-col justify-center gap-5">
          <p className="eyebrow text-[var(--accent-pink)]">{dict.eyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl">
            {l1} <br /> {l2}
          </h2>
          <p className="font-body text-[var(--foreground)]/85">{dict.body}</p>
          <ul className="font-body grid gap-2 text-sm">
            {dict.states.map((s, i) => {
              const [head, ...rest] = s.split(" — ");
              return (
                <li key={s}>
                  ► <span style={{ color: stateColors[i] }}>{head}</span>
                  {rest.length ? <> — {rest.join(" — ")}</> : null}
                </li>
              );
            })}
          </ul>
          <p className="font-body text-sm text-[var(--foreground)]/70">
            {dict.coda}
          </p>
        </div>
      </div>
    </section>
  );
}

function OfficeMock({ dict }: { dict: Dict["office"] }) {
  return (
    <div
      className="pixel-panel-lg scanlines relative overflow-hidden p-6"
      style={{
        background:
          "linear-gradient(180deg, var(--accent-blue) 0 60%, #5b3a1f 60% 100%)",
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="pixel-tag" style={{ background: "var(--accent-yellow)" }}>
          {dict.mockTag}
        </span>
        <span className="font-body text-xs text-[var(--background)]">
          {dict.mockOnline}
        </span>
      </div>

      <ul className="grid grid-cols-3 gap-3">
        {dict.desks.map((d, i) => (
          <li
            key={d.name}
            className={`pixel-panel pixel-hover-lift anim-pop-in delay-${i + 1} flex flex-col items-center gap-2 bg-[var(--panel)] p-3`}
          >
            <Minifig name={d.name} size={48} state={d.state} />
            <Desk />
            <p className="text-[9px] tracking-[0.2em] text-[var(--foreground)]">
              {d.name}
            </p>
            <span
              className={`pixel-tag ${d.state === "waiting" ? "anim-glow" : ""}`}
              style={{ background: d.color, color: "var(--ink-on-accent)" }}
            >
              {d.label}
            </span>
          </li>
        ))}
      </ul>

      <div
        className="mt-5 h-[var(--pixel)] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--panel-border) 0 var(--pixel), transparent var(--pixel) calc(var(--pixel) * 4))",
        }}
      />

      <div className="mt-5 grid gap-2">
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

function Desk() {
  return (
    <svg
      viewBox="0 0 16 6"
      width="56"
      height="22"
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
