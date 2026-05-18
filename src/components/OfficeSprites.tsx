// Top-down pixel sprites shared between the hero animation and the
// /office section. Geometry matches the reference layout: each room
// shows a workstation with two-or-three monitors viewed from above,
// a chair tucked under the desk, and a status label hovering over the
// seated character.
//
// All sprites stay in pure SVG with shapeRendering="crispEdges" so the
// pixel grid survives any scale.

import { Minifig, type CharName } from "@/components/Minifig";

const dark = "var(--panel-border)";
const screen = "#0e1830";

// 3-monitor workstation, top-down. The two coloured bars on each
// screen are the "mini-dashboard" detail from the reference — they
// also colour-key each room to its character without needing copy.
export function Workstation({
  monitorColors,
  width = 132,
}: {
  monitorColors: [string, string, string];
  width?: number;
}) {
  return (
    <svg
      viewBox="0 0 44 24"
      width={width}
      height={(width * 24) / 44}
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* desk slab seen from above */}
      <rect x="0" y="7" width="44" height="12" fill="#7a3f1a" />
      <rect x="0" y="7" width="44" height="1" fill={dark} />
      <rect x="0" y="18" width="44" height="1" fill={dark} />
      <rect x="0" y="7" width="1" height="12" fill={dark} />
      <rect x="43" y="7" width="1" height="12" fill={dark} />

      {/* three monitors lined along the back of the desk */}
      <Monitor x={2} barA={monitorColors[0]} barB={monitorColors[1]} />
      <Monitor x={16} barA={monitorColors[1]} barB={monitorColors[2]} />
      <Monitor x={30} barA={monitorColors[2]} barB={monitorColors[0]} />

      {/* keyboard strip in front */}
      <rect x="4" y="20" width="36" height="3" fill="#222335" />
      <rect x="4" y="20" width="36" height="1" fill={dark} />
      <rect x="5" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="8" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="11" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="14" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="17" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="20" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="23" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="26" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="29" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="32" y="21" width="2" height="1" fill="#5a5a7a" />
      <rect x="35" y="21" width="2" height="1" fill="#5a5a7a" />
    </svg>
  );
}

function Monitor({ x, barA, barB }: { x: number; barA: string; barB: string }) {
  return (
    <g>
      {/* stand */}
      <rect x={x + 5} y={6} width="2" height="1" fill={dark} />
      {/* frame */}
      <rect x={x} y={0} width="12" height="7" fill={dark} />
      {/* screen */}
      <rect x={x + 1} y={1} width="10" height="5" fill={screen} />
      {/* data bars */}
      <rect x={x + 2} y={2} width="8" height="1" fill={barA} />
      <rect x={x + 2} y={4} width="6" height="1" fill={barB} />
    </g>
  );
}

// Single monitor with a "needs you" pulse — used as the CRT alternative
// over Oliver's right-side desk in the original spec. Kept available
// for callers that want a smaller silhouette.
export function MiniMonitor({ accent }: { accent: string }) {
  return (
    <svg
      viewBox="0 0 14 9"
      width="42"
      height="27"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="0" y="0" width="14" height="8" fill={dark} />
      <rect x="1" y="1" width="12" height="6" fill={screen} />
      <rect x="2" y="2" width="10" height="1" fill={accent} />
      <rect x="2" y="4" width="7" height="1" fill={accent} />
      <rect x="5" y="8" width="4" height="1" fill={dark} />
    </svg>
  );
}

export function Chair({ accent }: { accent: string }) {
  return (
    <svg
      viewBox="0 0 12 10"
      width="36"
      height="30"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* seat */}
      <rect x="2" y="3" width="8" height="4" fill={accent} />
      <rect x="2" y="3" width="8" height="1" fill={dark} />
      <rect x="2" y="6" width="8" height="1" fill={dark} />
      <rect x="2" y="3" width="1" height="4" fill={dark} />
      <rect x="9" y="3" width="1" height="4" fill={dark} />
      {/* armrests */}
      <rect x="1" y="4" width="1" height="2" fill={dark} />
      <rect x="10" y="4" width="1" height="2" fill={dark} />
      {/* wheel base */}
      <rect x="5" y="7" width="2" height="2" fill={dark} />
      <rect x="2" y="9" width="2" height="1" fill={dark} />
      <rect x="8" y="9" width="2" height="1" fill={dark} />
      <rect x="5" y="9" width="2" height="1" fill={dark} />
    </svg>
  );
}

export function Cactus({ size = 36 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 10 14"
      width={size}
      height={(size * 14) / 10}
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* arms */}
      <rect x="0" y="4" width="2" height="4" fill="#4a8a2a" />
      <rect x="0" y="3" width="1" height="1" fill={dark} />
      <rect x="2" y="3" width="1" height="1" fill={dark} />
      <rect x="0" y="8" width="3" height="1" fill={dark} />
      <rect x="8" y="5" width="2" height="3" fill="#4a8a2a" />
      <rect x="8" y="4" width="1" height="1" fill={dark} />
      <rect x="9" y="4" width="1" height="1" fill={dark} />
      <rect x="7" y="8" width="3" height="1" fill={dark} />
      {/* trunk */}
      <rect x="3" y="2" width="4" height="9" fill="#4a8a2a" />
      <rect x="3" y="2" width="4" height="1" fill={dark} />
      <rect x="3" y="2" width="1" height="9" fill={dark} />
      <rect x="6" y="2" width="1" height="9" fill={dark} />
      {/* dots */}
      <rect x="4" y="4" width="1" height="1" fill="#2a5a1a" />
      <rect x="5" y="6" width="1" height="1" fill="#2a5a1a" />
      <rect x="4" y="8" width="1" height="1" fill="#2a5a1a" />
      {/* pot */}
      <rect x="2" y="11" width="6" height="3" fill="#7a3f1a" />
      <rect x="2" y="11" width="6" height="1" fill={dark} />
      <rect x="2" y="13" width="6" height="1" fill={dark} />
      <rect x="2" y="11" width="1" height="3" fill={dark} />
      <rect x="7" y="11" width="1" height="3" fill={dark} />
    </svg>
  );
}

// Room — the floor tile with a coloured name plaque in the corner,
// a workstation centered, a chair tucked behind, and the character
// minifig seated at the desk. Status label sits above the character.
export function Room({
  name,
  accent,
  floor,
  label,
  state,
  monitorColors,
  decoration,
}: {
  name: CharName;
  accent: string;
  floor: string;
  label: string;
  state: "idle" | "working" | "waiting";
  monitorColors: [string, string, string];
  decoration?: React.ReactNode;
}) {
  const stateDot =
    state === "waiting"
      ? "var(--accent-red)"
      : state === "working"
        ? "var(--accent-green)"
        : "var(--accent-yellow)";
  return (
    <div
      className="relative aspect-[5/4] overflow-hidden border-[var(--pixel)] border-[var(--panel-border)]"
      style={{ background: floor }}
    >
      {/* subtle floor tile grid — barely-there, just enough to read as a room */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 15px, rgba(0,0,0,0.25) 15px 16px), repeating-linear-gradient(90deg, transparent 0 15px, rgba(0,0,0,0.25) 15px 16px)",
        }}
      />

      {/* name plaque, top-left, character accent */}
      <span
        className="pixel-tag absolute top-2 left-2 z-10"
        style={{ background: accent, color: "var(--ink-on-accent)" }}
      >
        {name}
      </span>

      {/* corner decoration slot (cactus, monitor, etc.) */}
      {decoration && (
        <span className="absolute right-2 bottom-2 z-10">{decoration}</span>
      )}

      {/* workstation stack — desk + monitors, then chair behind the
          character. Stacked with absolute positioning so the desk
          obscures the lower half of the character (seated illusion). */}
      <div className="absolute left-1/2 top-[34%] z-0 -translate-x-1/2">
        <Workstation monitorColors={monitorColors} />
      </div>
      <div className="absolute bottom-[14%] left-1/2 z-10 -translate-x-1/2">
        <Chair accent={accent} />
      </div>
      <div className="absolute bottom-[26%] left-1/2 z-20 -translate-x-1/2">
        <Minifig name={name} size={44} state={state} />
      </div>

      {/* status label — small "● state · task" line above the character.
          Mirrors the reference labels (Idle · manufacturing-main). */}
      <div className="absolute top-[58%] left-1/2 z-30 -translate-x-1/2 -translate-y-full whitespace-nowrap">
        <span
          className="font-body inline-flex items-center gap-1 border-[calc(var(--pixel)/2)] border-[var(--panel-border)] bg-[var(--background)] px-1.5 py-0.5 text-[9px] tracking-[0.08em] uppercase"
          style={{ color: "var(--foreground)" }}
        >
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5"
            style={{ background: stateDot }}
          />
          {state}
        </span>
        <span className="font-body mt-0.5 block text-[10px] leading-tight">
          <span
            className="border-[calc(var(--pixel)/2)] border-[var(--panel-border)] bg-[var(--background)] px-1.5 py-0.5"
            style={{ color: "var(--foreground)" }}
          >
            {label}
          </span>
        </span>
      </div>
    </div>
  );
}

// Corridor strip used between rooms — a brown floor band with evenly
// spaced cacti. Matches the reference's interstitial space.
export function Corridor({ count = 4 }: { count?: number }) {
  return (
    <div
      className="relative flex items-center justify-around overflow-hidden border-[var(--pixel)] border-[var(--panel-border)] py-3"
      style={{ background: "#3a2a1a" }}
    >
      <span
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 12px, rgba(0,0,0,0.3) 12px 13px)",
        }}
      />
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="relative z-10">
          <Cactus size={28} />
        </span>
      ))}
    </div>
  );
}

// Character-to-floor palette. Kept here so HeroOffice and Office stay
// visually identical — the same room reads the same in both surfaces.
export const ROOM_PALETTE: Record<
  CharName,
  { floor: string; monitorColors: [string, string, string] }
> = {
  ANNA: {
    floor: "#4a5468",
    monitorColors: ["var(--accent-pink)", "var(--accent-yellow)", "var(--accent-blue)"],
  },
  OLIVER: {
    floor: "#4d5a55",
    monitorColors: ["var(--accent-green)", "var(--accent-yellow)", "var(--accent-red)"],
  },
  KAI: {
    floor: "#6a5847",
    monitorColors: ["var(--accent-blue)", "var(--accent-red)", "var(--accent-yellow)"],
  },
};

// Character → accent mapping. Used by Room name plaques and chair
// colours so each room is recognisable at a glance.
export const CHAR_ACCENT: Record<CharName, string> = {
  ANNA: "var(--accent-pink)",
  KAI: "var(--accent-red)",
  OLIVER: "var(--accent-green)",
};
