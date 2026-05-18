// Top-down ¾ overworld sprites anchored on GBA-era Pokémon (R/S/E,
// FR/LG). Floors use the iconic diamond crosshatch tile, furniture
// renders in ¾ view (visible front face under the top), and each
// room has a back-wall counter holding shelves and equipment.
//
// All sprites are pure SVG with shapeRendering="crispEdges" so the
// pixel grid survives any scale.

import { Minifig, type CharName } from "@/components/Minifig";

const dark = "var(--panel-border)";
const screen = "var(--sim-screen)";
const screenSoft = "var(--sim-screen-soft)";
const wood = "var(--sim-wood)";
const woodLight = "var(--sim-wood-light)";
const woodDark = "var(--sim-wood-dark)";

// ----------------------------------------------------------------------
// Diamond floor — the R/S/E Pokémon Mart tile. CSS-only: a base colour
// crossed by two repeating-linear-gradients at ±45° in the diagonal
// colour. Returns a style object the consumer spreads onto the room.

export function diamondFloor(base: string, diag: string): React.CSSProperties {
  return {
    background: base,
    backgroundImage: `
      repeating-linear-gradient(45deg, transparent 0 15px, ${diag} 15px 16px),
      repeating-linear-gradient(-45deg, transparent 0 15px, ${diag} 15px 16px)
    `,
  };
}

// ----------------------------------------------------------------------
// Workstation — ¾ view: monitors stand on a desk slab whose front face
// is visible below the top, like Pokémon Mart counters. Two screens
// rather than four for a cleaner overworld silhouette.

export function Workstation({
  monitorColors,
  width = 140,
}: {
  monitorColors: [string, string, string];
  width?: number;
}) {
  const [c1, c2, c3] = monitorColors;
  return (
    <svg
      viewBox="0 0 44 22"
      width={width}
      height={(width * 22) / 44}
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* desk top (looking down) */}
      <rect x="0" y="9" width="44" height="6" fill={wood} />
      <rect x="0" y="9" width="44" height="1" fill={dark} />
      {/* desk front face — ¾ view */}
      <rect x="0" y="15" width="44" height="6" fill={woodDark} />
      <rect x="0" y="15" width="44" height="1" fill={dark} />
      <rect x="0" y="21" width="44" height="1" fill={dark} />
      <rect x="0" y="9" width="1" height="13" fill={dark} />
      <rect x="43" y="9" width="1" height="13" fill={dark} />
      {/* drawer lines on the front face */}
      <rect x="11" y="15" width="1" height="6" fill={dark} />
      <rect x="22" y="15" width="1" height="6" fill={dark} />
      <rect x="33" y="15" width="1" height="6" fill={dark} />
      {/* small drawer handles */}
      <rect x="5" y="18" width="2" height="1" fill={dark} />
      <rect x="16" y="18" width="2" height="1" fill={dark} />
      <rect x="27" y="18" width="2" height="1" fill={dark} />
      <rect x="38" y="18" width="2" height="1" fill={dark} />

      {/* three monitors sitting on the back edge */}
      <Monitor x={3} barA={c1} barB={c2} />
      <Monitor x={17} barA={c2} barB={c3} variant="line" />
      <Monitor x={31} barA={c3} barB={c1} variant="table" />
    </svg>
  );
}

function Monitor({
  x,
  barA,
  barB,
  variant = "bar",
}: {
  x: number;
  barA: string;
  barB: string;
  variant?: "bar" | "line" | "table";
}) {
  return (
    <g>
      {/* monitor frame (front face — ¾) */}
      <rect x={x} y={0} width="10" height="8" fill={dark} />
      <rect x={x + 1} y={1} width="8" height="6" fill={screen} />
      {/* dashboard content */}
      {variant === "bar" && (
        <>
          <rect x={x + 2} y={5} width="1" height="1" fill={barA} />
          <rect x={x + 3} y={4} width="1" height="2" fill={barA} />
          <rect x={x + 4} y={3} width="1" height="3" fill={barB} />
          <rect x={x + 5} y={2} width="1" height="4" fill={barB} />
          <rect x={x + 6} y={4} width="1" height="2" fill={barA} />
          <rect x={x + 7} y={3} width="1" height="3" fill={barB} />
          <rect x={x + 2} y={6} width="6" height="1" fill={screenSoft} />
        </>
      )}
      {variant === "line" && (
        <>
          <rect x={x + 2} y={4} width="6" height="1" fill={screenSoft} opacity="0.6" />
          <rect x={x + 2} y={5} width="1" height="1" fill={barA} />
          <rect x={x + 3} y={4} width="1" height="1" fill={barA} />
          <rect x={x + 4} y={4} width="1" height="1" fill={barA} />
          <rect x={x + 5} y={3} width="1" height="1" fill={barA} />
          <rect x={x + 6} y={2} width="1" height="1" fill={barA} />
          <rect x={x + 7} y={2} width="1" height="1" fill={barB} />
        </>
      )}
      {variant === "table" && (
        <>
          <rect x={x + 2} y={2} width="6" height="1" fill={barA} />
          <rect x={x + 2} y={4} width="2" height="1" fill={screenSoft} />
          <rect x={x + 5} y={4} width="3" height="1" fill={screenSoft} />
          <rect x={x + 2} y={5} width="2" height="1" fill={screenSoft} />
          <rect x={x + 5} y={5} width="3" height="1" fill={barB} />
        </>
      )}
      {/* monitor stand */}
      <rect x={x + 4} y={8} width="2" height="1" fill={dark} />
    </g>
  );
}

// ----------------------------------------------------------------------
// Back-wall counter — the R/S/E "Pokémon Mart" counter strip. Cream top
// face with a darker edge, holds a row of objects (computers,
// containers, books) that telegraph the room's purpose.

export function BackCounter({
  items,
}: {
  items: Array<"computer" | "books" | "container" | "folder" | "monitor">;
}) {
  return (
    <svg
      viewBox="0 0 64 12"
      width="100%"
      height="44"
      preserveAspectRatio="xMidYMid meet"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* counter top (looking down) */}
      <rect x="0" y="6" width="64" height="3" fill="var(--sim-counter)" />
      <rect x="0" y="6" width="64" height="1" fill={dark} />
      {/* counter front face */}
      <rect x="0" y="9" width="64" height="3" fill="var(--sim-counter-edge)" />
      <rect x="0" y="9" width="64" height="1" fill={dark} />
      <rect x="0" y="11" width="64" height="1" fill={dark} />
      {/* items on top of counter */}
      {items.slice(0, 5).map((item, i) => (
        <g key={i} transform={`translate(${i * 12 + 2} 0)`}>
          <CounterItem kind={item} />
        </g>
      ))}
    </svg>
  );
}

function CounterItem({ kind }: { kind: "computer" | "books" | "container" | "folder" | "monitor" }) {
  if (kind === "computer") {
    return (
      <g>
        <rect x={0} y={1} width="8" height="5" fill={dark} />
        <rect x={1} y={2} width="6" height="3" fill={screen} />
        <rect x={1} y={2} width="6" height="1" fill="var(--accent-green)" />
        <rect x={1} y={3} width="4" height="1" fill="var(--accent-blue)" />
      </g>
    );
  }
  if (kind === "monitor") {
    return (
      <g>
        <rect x={0} y={0} width="8" height="6" fill={dark} />
        <rect x={1} y={1} width="6" height="4" fill={screen} />
        <rect x={2} y={2} width="4" height="1" fill="var(--accent-yellow)" />
        <rect x={2} y={3} width="3" height="1" fill="var(--accent-pink)" />
      </g>
    );
  }
  if (kind === "books") {
    return (
      <g>
        <rect x={0} y={1} width="2" height="5" fill="var(--accent-red)" />
        <rect x={2} y={1} width="2" height="5" fill="var(--accent-blue)" />
        <rect x={4} y={2} width="2" height="4" fill="var(--accent-green)" />
        <rect x={6} y={1} width="2" height="5" fill="var(--accent-yellow)" />
        <rect x={0} y={1} width="8" height="1" fill={dark} />
        <rect x={0} y={5} width="8" height="1" fill={dark} />
      </g>
    );
  }
  if (kind === "folder") {
    return (
      <g>
        <rect x={0} y={1} width="8" height="5" fill="var(--accent-yellow)" />
        <rect x={0} y={1} width="8" height="1" fill={dark} />
        <rect x={0} y={5} width="8" height="1" fill={dark} />
        <rect x={0} y={1} width="1" height="5" fill={dark} />
        <rect x={7} y={1} width="1" height="5" fill={dark} />
        <rect x={2} y={3} width="4" height="1" fill={dark} />
      </g>
    );
  }
  // container — a small color-coded box like a Pokémon ball stand but
  // styled as a generic supply container. Keeps us trademark-clear.
  return (
    <g>
      <rect x={0} y={1} width="8" height="5" fill="var(--accent-red)" />
      <rect x={0} y={1} width="8" height="1" fill={dark} />
      <rect x={0} y={5} width="8" height="1" fill={dark} />
      <rect x={0} y={3} width="8" height="1" fill="var(--background)" />
      <rect x={3} y={3} width="2" height="1" fill={dark} />
    </g>
  );
}

// ----------------------------------------------------------------------
// Office chair — ¾ view with back rest taller than seat.

export function Chair({ accent }: { accent: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      width="40"
      height="40"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* tall backrest */}
      <rect x="3" y="0" width="8" height="5" fill={accent} />
      <rect x="3" y="0" width="8" height="1" fill={dark} />
      <rect x="3" y="0" width="1" height="5" fill={dark} />
      <rect x="10" y="0" width="1" height="5" fill={dark} />
      <rect x="4" y="1" width="6" height="1" fill="var(--background)" opacity="0.3" />
      {/* seat top */}
      <rect x="2" y="5" width="10" height="3" fill={accent} />
      <rect x="2" y="5" width="10" height="1" fill={dark} />
      <rect x="2" y="5" width="1" height="3" fill={dark} />
      <rect x="11" y="5" width="1" height="3" fill={dark} />
      {/* seat front face — darker */}
      <rect x="2" y="8" width="10" height="2" fill={woodDark} />
      <rect x="2" y="8" width="10" height="1" fill={dark} />
      <rect x="2" y="9" width="10" height="1" fill={dark} />
      {/* support stem + base */}
      <rect x="6" y="10" width="2" height="2" fill={dark} />
      <rect x="3" y="12" width="8" height="2" fill={dark} />
      <rect x="3" y="13" width="8" height="1" fill="#5a5a7a" />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Speech bubble — Pokémon-style alert. A white oval with `!` inside,
// pointing down to the character below.

export function SpeechBubble({ glyph = "!" }: { glyph?: string }) {
  return (
    <svg
      viewBox="0 0 12 14"
      width="28"
      height="32"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* bubble body */}
      <rect x="1" y="0" width="10" height="9" fill="var(--background)" />
      <rect x="1" y="0" width="10" height="1" fill={dark} />
      <rect x="1" y="8" width="10" height="1" fill={dark} />
      <rect x="0" y="1" width="1" height="7" fill={dark} />
      <rect x="11" y="1" width="1" height="7" fill={dark} />
      {/* tail */}
      <rect x="5" y="9" width="3" height="1" fill="var(--background)" />
      <rect x="4" y="9" width="1" height="1" fill={dark} />
      <rect x="8" y="9" width="1" height="1" fill={dark} />
      <rect x="6" y="10" width="2" height="1" fill="var(--background)" />
      <rect x="5" y="10" width="1" height="1" fill={dark} />
      <rect x="8" y="10" width="1" height="1" fill={dark} />
      <rect x="7" y="11" width="1" height="1" fill={dark} />
      {/* glyph (! by default) */}
      <text
        x="6"
        y="6.5"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="6"
        fontWeight="bold"
        fill="var(--accent-red)"
      >
        {glyph}
      </text>
    </svg>
  );
}

// ----------------------------------------------------------------------
// Outdoor decor — grass tuft, used in corridors and edges.

export function GrassTuft({ size = 24 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 8 6"
      width={size}
      height={(size * 6) / 8}
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="0" y="3" width="2" height="2" fill="var(--sim-grass)" />
      <rect x="2" y="2" width="1" height="3" fill="var(--sim-grass)" />
      <rect x="3" y="1" width="1" height="4" fill="var(--sim-grass)" />
      <rect x="4" y="2" width="1" height="3" fill="var(--sim-grass)" />
      <rect x="5" y="3" width="1" height="2" fill="var(--sim-grass)" />
      <rect x="6" y="3" width="2" height="2" fill="var(--sim-grass)" />
      <rect x="3" y="0" width="1" height="1" fill="var(--sim-grass)" />
      {/* darker shading at base */}
      <rect x="0" y="5" width="8" height="1" fill="var(--sim-grass-dark)" />
      <rect x="3" y="1" width="1" height="1" fill="var(--sim-grass-dark)" />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Cactus — keeps the original silhouette but softer outline so it fits
// the lighter palette.

export function Cactus({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 10 14"
      width={size}
      height={(size * 14) / 10}
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="0" y="4" width="2" height="4" fill="var(--sim-grass)" />
      <rect x="0" y="3" width="1" height="1" fill={dark} />
      <rect x="2" y="3" width="1" height="1" fill={dark} />
      <rect x="0" y="8" width="3" height="1" fill={dark} />
      <rect x="8" y="5" width="2" height="3" fill="var(--sim-grass)" />
      <rect x="8" y="4" width="1" height="1" fill={dark} />
      <rect x="9" y="4" width="1" height="1" fill={dark} />
      <rect x="7" y="8" width="3" height="1" fill={dark} />
      <rect x="3" y="2" width="4" height="9" fill="var(--sim-grass)" />
      <rect x="3" y="2" width="4" height="1" fill={dark} />
      <rect x="3" y="2" width="1" height="9" fill={dark} />
      <rect x="6" y="2" width="1" height="9" fill={dark} />
      <rect x="4" y="4" width="1" height="1" fill="var(--sim-grass-dark)" />
      <rect x="5" y="6" width="1" height="1" fill="var(--sim-grass-dark)" />
      <rect x="4" y="8" width="1" height="1" fill="var(--sim-grass-dark)" />
      {/* pot */}
      <rect x="2" y="11" width="6" height="3" fill={wood} />
      <rect x="2" y="11" width="6" height="1" fill={dark} />
      <rect x="2" y="13" width="6" height="1" fill={dark} />
      <rect x="2" y="11" width="1" height="3" fill={dark} />
      <rect x="7" y="11" width="1" height="3" fill={dark} />
      <rect x="3" y="12" width="4" height="1" fill={woodLight} opacity="0.5" />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Potted plant — leafier alternative to the cactus.

export function PottedPlant({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 10 12"
      width={size}
      height={(size * 12) / 10}
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="1" y="2" width="2" height="3" fill="var(--sim-grass)" />
      <rect x="7" y="2" width="2" height="3" fill="var(--sim-grass)" />
      <rect x="3" y="0" width="4" height="4" fill="var(--sim-grass)" />
      <rect x="4" y="1" width="2" height="2" fill="#8acc4a" />
      <rect x="3" y="4" width="4" height="2" fill="var(--sim-grass)" />
      <rect x="1" y="5" width="8" height="1" fill={dark} />
      <rect x="3" y="0" width="4" height="1" fill={dark} />
      <rect x="1" y="2" width="1" height="3" fill={dark} />
      <rect x="8" y="2" width="1" height="3" fill={dark} />
      {/* pot */}
      <rect x="2" y="6" width="6" height="5" fill={wood} />
      <rect x="2" y="6" width="6" height="1" fill={dark} />
      <rect x="2" y="10" width="6" height="1" fill={dark} />
      <rect x="2" y="6" width="1" height="5" fill={dark} />
      <rect x="7" y="6" width="1" height="5" fill={dark} />
      <rect x="3" y="8" width="4" height="1" fill={woodLight} opacity="0.5" />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Filing cabinet — short, ¾ view, fits against a side wall.

export function FilingCabinet() {
  return (
    <svg
      viewBox="0 0 10 14"
      width="30"
      height="42"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* top face */}
      <rect x="0" y="0" width="10" height="3" fill="var(--sim-metal-light)" />
      <rect x="0" y="0" width="10" height="1" fill={dark} />
      <rect x="0" y="2" width="10" height="1" fill={dark} />
      {/* front face */}
      <rect x="0" y="3" width="10" height="11" fill="var(--sim-metal)" />
      <rect x="0" y="3" width="10" height="1" fill={dark} />
      <rect x="0" y="13" width="10" height="1" fill={dark} />
      <rect x="0" y="3" width="1" height="11" fill={dark} />
      <rect x="9" y="3" width="1" height="11" fill={dark} />
      {/* drawers */}
      <rect x="1" y="6" width="8" height="1" fill={dark} />
      <rect x="1" y="9" width="8" height="1" fill={dark} />
      {/* handles */}
      <rect x="4" y="4" width="2" height="1" fill={dark} />
      <rect x="4" y="7" width="2" height="1" fill={dark} />
      <rect x="4" y="10" width="2" height="1" fill={dark} />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Printer + paper tray on a side table — ¾ view.

export function PrinterTable() {
  return (
    <svg
      viewBox="0 0 14 14"
      width="42"
      height="42"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* table top */}
      <rect x="0" y="7" width="14" height="2" fill={wood} />
      <rect x="0" y="7" width="14" height="1" fill={dark} />
      {/* table front */}
      <rect x="0" y="9" width="14" height="5" fill={woodDark} />
      <rect x="0" y="9" width="14" height="1" fill={dark} />
      <rect x="0" y="13" width="14" height="1" fill={dark} />
      <rect x="0" y="9" width="1" height="5" fill={dark} />
      <rect x="13" y="9" width="1" height="5" fill={dark} />
      {/* printer body */}
      <rect x="2" y="2" width="10" height="5" fill="var(--sim-metal-light)" />
      <rect x="2" y="2" width="10" height="1" fill={dark} />
      <rect x="2" y="6" width="10" height="1" fill={dark} />
      <rect x="2" y="2" width="1" height="5" fill={dark} />
      <rect x="11" y="2" width="1" height="5" fill={dark} />
      {/* paper tray */}
      <rect x="4" y="0" width="6" height="2" fill="var(--background)" />
      <rect x="4" y="0" width="6" height="1" fill={dark} />
      {/* status LEDs */}
      <rect x="9" y="4" width="1" height="1" fill="var(--accent-green)" />
      <rect x="10" y="4" width="1" height="1" fill="var(--accent-yellow)" />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Trash bin — short cylinder, ¾ view.

export function TrashBin() {
  return (
    <svg
      viewBox="0 0 6 8"
      width="20"
      height="26"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="0" y="1" width="6" height="1" fill="var(--sim-metal-light)" />
      <rect x="0" y="1" width="6" height="1" fill={dark} />
      <rect x="1" y="2" width="4" height="6" fill="var(--sim-metal)" />
      <rect x="1" y="2" width="4" height="1" fill={dark} />
      <rect x="1" y="7" width="4" height="1" fill={dark} />
      <rect x="1" y="2" width="1" height="6" fill={dark} />
      <rect x="4" y="2" width="1" height="6" fill={dark} />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Room — top-down ¾ overworld view. Diamond checker floor, a back-wall
// counter strip with shelf items, a workstation in the middle, the
// character seated in a chair (¾ view), side props (filing cabinet,
// printer table), and a corner planter.

export function Room({
  name,
  accent,
  floor,
  floorDiag,
  label,
  state,
  monitorColors,
  shelves,
}: {
  name: CharName;
  accent: string;
  floor: string;
  floorDiag: string;
  label: string;
  state: "idle" | "working" | "waiting";
  monitorColors: [string, string, string];
  shelves: Array<"computer" | "books" | "container" | "folder" | "monitor">;
}) {
  const stateDot =
    state === "waiting"
      ? "var(--accent-red)"
      : state === "working"
        ? "var(--accent-green)"
        : "var(--accent-yellow)";
  return (
    <div
      className="relative aspect-[4/5] overflow-hidden border-[var(--pixel)] border-[var(--panel-border)]"
      style={diamondFloor(floor, floorDiag)}
    >
      {/* back-wall strip — slightly darker tone that anchors the counter */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[18%]"
        style={{ background: "var(--sim-counter-edge)", opacity: 0.4 }}
      />

      {/* name plaque, top-left */}
      <span
        className="pixel-tag absolute top-2 left-2 z-30"
        style={{ background: accent, color: "var(--ink-on-accent)" }}
      >
        {name}
      </span>

      {/* back-wall counter with shelf items */}
      <div className="absolute inset-x-2 top-7 z-10">
        <BackCounter items={shelves} />
      </div>

      {/* workstation centered, behind the character */}
      <div className="absolute top-[42%] left-1/2 z-10 -translate-x-1/2">
        <Workstation monitorColors={monitorColors} />
      </div>

      {/* chair behind character */}
      <div className="absolute bottom-[10%] left-1/2 z-15 -translate-x-1/2">
        <Chair accent={accent} />
      </div>

      {/* seated character */}
      <div className="absolute bottom-[20%] left-1/2 z-20 -translate-x-1/2">
        <Minifig name={name} size={44} state={state} />
      </div>

      {/* Pokémon-style speech bubble for the waiting state */}
      {state === "waiting" && (
        <div className="anim-bob absolute bottom-[44%] left-[58%] z-30">
          <SpeechBubble glyph="!" />
        </div>
      )}

      {/* status label — small "● state · task" line below the character */}
      <div className="absolute bottom-[2%] left-1/2 z-30 -translate-x-1/2 whitespace-nowrap text-center">
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

      {/* side props */}
      <div className="absolute top-[42%] left-1 z-10">
        <FilingCabinet />
      </div>
      <div className="absolute top-[42%] right-1 z-10">
        <PrinterTable />
      </div>
      <div className="absolute top-[28%] left-2 z-10">
        <PottedPlant size={24} />
      </div>
      <div className="absolute top-[28%] right-2 z-10">
        <TrashBin />
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Corridor — outdoor grass band between rooms. Replaces the dark brown
// interior corridor with a Pokémon-route-style grass strip.

export function Corridor({ count = 5 }: { count?: number }) {
  return (
    <div
      className="relative flex items-center justify-around overflow-hidden border-[var(--pixel)] border-[var(--panel-border)] py-3"
      style={{ background: "var(--sim-corridor)" }}
    >
      {/* checker pattern, lighter version on grass */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 12px, var(--sim-grass-dark) 12px 13px), repeating-linear-gradient(-45deg, transparent 0 12px, var(--sim-grass-dark) 12px 13px)",
          opacity: 0.25,
        }}
      />
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="relative z-10 flex items-end gap-1">
          {i % 2 === 0 ? <GrassTuft size={22} /> : <Cactus size={26} />}
        </span>
      ))}
    </div>
  );
}

// Character → floor + diagonal + monitor palette + shelf items.
export const ROOM_PALETTE: Record<
  CharName,
  {
    floor: string;
    floorDiag: string;
    monitorColors: [string, string, string];
    shelves: Array<"computer" | "books" | "container" | "folder" | "monitor">;
  }
> = {
  ANNA: {
    floor: "var(--sim-floor-anna)",
    floorDiag: "var(--sim-floor-anna-diag)",
    monitorColors: ["var(--accent-pink)", "var(--accent-yellow)", "var(--accent-blue)"],
    shelves: ["folder", "books", "computer", "folder", "container"],
  },
  OLIVER: {
    floor: "var(--sim-floor-oliver)",
    floorDiag: "var(--sim-floor-oliver-diag)",
    monitorColors: ["var(--accent-green)", "var(--accent-yellow)", "var(--accent-red)"],
    shelves: ["computer", "monitor", "books", "folder", "computer"],
  },
  KAI: {
    floor: "var(--sim-floor-kai)",
    floorDiag: "var(--sim-floor-kai-diag)",
    monitorColors: ["var(--accent-blue)", "var(--accent-red)", "var(--accent-yellow)"],
    shelves: ["monitor", "container", "computer", "books", "container"],
  },
};

export const CHAR_ACCENT: Record<CharName, string> = {
  ANNA: "var(--accent-pink)",
  KAI: "var(--accent-red)",
  OLIVER: "var(--accent-green)",
};
