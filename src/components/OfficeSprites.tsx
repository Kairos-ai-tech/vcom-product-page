// Top-down pixel sprites for the vcom office. Style target: dense,
// readable-at-a-glance dioramas in the spirit of indie pixel sims
// (RimWorld, Stardew Valley UI panels). Every room packs a primary
// workstation (multi-monitor with varied UI dashboards), a chair, the
// seated character, a status label, and a rotating cast of side props —
// printer table, filing cabinet, whiteboard, potted plant, trash bin —
// so each room reads like a workplace rather than a placeholder.
//
// All sprites are pure SVG with shapeRendering="crispEdges" so the
// pixel grid survives any scale.

import { Minifig, type CharName } from "@/components/Minifig";

const dark = "var(--panel-border)";
const screen = "#0e1830";
const screenSoft = "#1a2540";
const wood = "#7a3f1a";
const woodLight = "#a05a2a";

// ----------------------------------------------------------------------
// Workstation — long desk slab with 4 monitors. Each monitor renders a
// different "dashboard" (bar chart, line, data table, donut) so the
// scene reads as actual work, not three identical screens.

export function Workstation({
  monitorColors,
  width = 156,
}: {
  monitorColors: [string, string, string];
  width?: number;
}) {
  const [c1, c2, c3] = monitorColors;
  return (
    <svg
      viewBox="0 0 52 26"
      width={width}
      height={(width * 26) / 52}
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* desk slab — wood with darker top edge */}
      <rect x="0" y="8" width="52" height="14" fill={wood} />
      <rect x="0" y="8" width="52" height="1" fill={dark} />
      <rect x="0" y="21" width="52" height="1" fill={dark} />
      <rect x="0" y="8" width="1" height="14" fill={dark} />
      <rect x="51" y="8" width="1" height="14" fill={dark} />
      {/* wood grain */}
      <rect x="2" y="11" width="48" height="1" fill={woodLight} opacity="0.4" />
      <rect x="2" y="15" width="48" height="1" fill={woodLight} opacity="0.4" />

      {/* four monitors lined along back of desk */}
      <BarMonitor x={1} barA={c1} barB={c2} />
      <LineMonitor x={14} accent={c2} />
      <TableMonitor x={27} accent={c3} />
      <DonutMonitor x={40} accent={c1} />

      {/* keyboard + mouse on desk top */}
      <rect x="6" y="23" width="22" height="2" fill="#222335" />
      <rect x="6" y="23" width="22" height="1" fill={dark} />
      <rect x="7" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="9" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="11" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="13" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="15" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="17" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="19" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="21" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="23" y="24" width="1" height="1" fill="#6a6a8a" />
      <rect x="25" y="24" width="1" height="1" fill="#6a6a8a" />
      {/* mouse */}
      <rect x="31" y="24" width="2" height="2" fill="#222335" />
      <rect x="31" y="24" width="2" height="1" fill={dark} />
      {/* coffee mug */}
      <rect x="36" y="23" width="3" height="3" fill="var(--accent-red)" />
      <rect x="36" y="23" width="3" height="1" fill={dark} />
      <rect x="36" y="25" width="3" height="1" fill={dark} />
      <rect x="36" y="23" width="1" height="3" fill={dark} />
      <rect x="38" y="23" width="1" height="3" fill={dark} />
      {/* sticky notes */}
      <rect x="43" y="23" width="2" height="2" fill="var(--accent-yellow)" />
      <rect x="46" y="24" width="2" height="2" fill="var(--accent-pink)" />
    </svg>
  );
}

function BarMonitor({ x, barA, barB }: { x: number; barA: string; barB: string }) {
  return (
    <g>
      <rect x={x + 5} y={7} width="2" height="1" fill={dark} />
      <rect x={x} y={0} width="12" height="8" fill={dark} />
      <rect x={x + 1} y={1} width="10" height="6" fill={screen} />
      {/* mini bar chart */}
      <rect x={x + 2} y={5} width="1" height="1" fill={barA} />
      <rect x={x + 3} y={4} width="1" height="2" fill={barA} />
      <rect x={x + 4} y={3} width="1" height="3" fill={barA} />
      <rect x={x + 5} y={2} width="1" height="4" fill={barB} />
      <rect x={x + 6} y={4} width="1" height="2" fill={barA} />
      <rect x={x + 7} y={3} width="1" height="3" fill={barB} />
      <rect x={x + 8} y={5} width="1" height="1" fill={barA} />
      <rect x={x + 9} y={4} width="1" height="2" fill={barB} />
      {/* baseline */}
      <rect x={x + 2} y={6} width="8" height="1" fill="#3a4a6a" />
    </g>
  );
}

function LineMonitor({ x, accent }: { x: number; accent: string }) {
  return (
    <g>
      <rect x={x + 5} y={7} width="2" height="1" fill={dark} />
      <rect x={x} y={0} width="12" height="8" fill={dark} />
      <rect x={x + 1} y={1} width="10" height="6" fill={screenSoft} />
      {/* grid */}
      <rect x={x + 2} y={3} width="8" height="1" fill="#2a3550" opacity="0.6" />
      <rect x={x + 2} y={5} width="8" height="1" fill="#2a3550" opacity="0.6" />
      {/* line chart */}
      <rect x={x + 2} y={5} width="1" height="1" fill={accent} />
      <rect x={x + 3} y={4} width="1" height="1" fill={accent} />
      <rect x={x + 4} y={4} width="1" height="1" fill={accent} />
      <rect x={x + 5} y={3} width="1" height="1" fill={accent} />
      <rect x={x + 6} y={3} width="1" height="1" fill={accent} />
      <rect x={x + 7} y={2} width="1" height="1" fill={accent} />
      <rect x={x + 8} y={2} width="1" height="1" fill={accent} />
      <rect x={x + 9} y={1} width="1" height="1" fill={accent} />
    </g>
  );
}

function TableMonitor({ x, accent }: { x: number; accent: string }) {
  return (
    <g>
      <rect x={x + 5} y={7} width="2" height="1" fill={dark} />
      <rect x={x} y={0} width="12" height="8" fill={dark} />
      <rect x={x + 1} y={1} width="10" height="6" fill={screen} />
      {/* header row */}
      <rect x={x + 2} y={2} width="8" height="1" fill={accent} />
      {/* table rows */}
      <rect x={x + 2} y={4} width="3" height="1" fill="#5a6a8a" />
      <rect x={x + 6} y={4} width="2" height="1" fill="#5a6a8a" />
      <rect x={x + 2} y={5} width="3" height="1" fill="#5a6a8a" />
      <rect x={x + 6} y={5} width="2" height="1" fill="#5a6a8a" />
      <rect x={x + 9} y={4} width="1" height="1" fill={accent} />
      <rect x={x + 9} y={5} width="1" height="1" fill={accent} />
    </g>
  );
}

function DonutMonitor({ x, accent }: { x: number; accent: string }) {
  return (
    <g>
      <rect x={x + 5} y={7} width="2" height="1" fill={dark} />
      <rect x={x} y={0} width="12" height="8" fill={dark} />
      <rect x={x + 1} y={1} width="10" height="6" fill={screenSoft} />
      {/* donut */}
      <rect x={x + 4} y={2} width="4" height="4" fill={accent} />
      <rect x={x + 5} y={3} width="2" height="2" fill={screenSoft} />
      <rect x={x + 4} y={2} width="2" height="1" fill="#ffffff" opacity="0.5" />
      {/* legend dots */}
      <rect x={x + 9} y={3} width="1" height="1" fill={accent} />
      <rect x={x + 9} y={5} width="1" height="1" fill="#5a6a8a" />
    </g>
  );
}

// ----------------------------------------------------------------------
// Office chair — top-down, with visible backrest and wheel base.

export function Chair({ accent }: { accent: string }) {
  return (
    <svg
      viewBox="0 0 14 12"
      width="40"
      height="34"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* backrest — taller piece behind */}
      <rect x="3" y="0" width="8" height="3" fill={accent} />
      <rect x="3" y="0" width="8" height="1" fill={dark} />
      <rect x="3" y="0" width="1" height="3" fill={dark} />
      <rect x="10" y="0" width="1" height="3" fill={dark} />
      {/* seat */}
      <rect x="2" y="3" width="10" height="4" fill={accent} />
      <rect x="2" y="3" width="10" height="1" fill={dark} />
      <rect x="2" y="6" width="10" height="1" fill={dark} />
      <rect x="2" y="3" width="1" height="4" fill={dark} />
      <rect x="11" y="3" width="1" height="4" fill={dark} />
      {/* armrests */}
      <rect x="1" y="4" width="1" height="2" fill={dark} />
      <rect x="12" y="4" width="1" height="2" fill={dark} />
      {/* support post + 5-star wheel base */}
      <rect x="6" y="7" width="2" height="2" fill={dark} />
      <rect x="2" y="9" width="2" height="1" fill={dark} />
      <rect x="6" y="9" width="2" height="1" fill={dark} />
      <rect x="10" y="9" width="2" height="1" fill={dark} />
      <rect x="3" y="10" width="2" height="1" fill="#5a5a7a" />
      <rect x="6" y="10" width="2" height="1" fill="#5a5a7a" />
      <rect x="9" y="10" width="2" height="1" fill="#5a5a7a" />
      <rect x="1" y="11" width="2" height="1" fill="#5a5a7a" />
      <rect x="11" y="11" width="2" height="1" fill="#5a5a7a" />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Cactus — corridor planter detail with pot.

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
      <rect x="0" y="4" width="2" height="4" fill="#4a8a2a" />
      <rect x="0" y="3" width="1" height="1" fill={dark} />
      <rect x="2" y="3" width="1" height="1" fill={dark} />
      <rect x="0" y="8" width="3" height="1" fill={dark} />
      <rect x="8" y="5" width="2" height="3" fill="#4a8a2a" />
      <rect x="8" y="4" width="1" height="1" fill={dark} />
      <rect x="9" y="4" width="1" height="1" fill={dark} />
      <rect x="7" y="8" width="3" height="1" fill={dark} />
      <rect x="3" y="2" width="4" height="9" fill="#4a8a2a" />
      <rect x="3" y="2" width="4" height="1" fill={dark} />
      <rect x="3" y="2" width="1" height="9" fill={dark} />
      <rect x="6" y="2" width="1" height="9" fill={dark} />
      <rect x="4" y="4" width="1" height="1" fill="#2a5a1a" />
      <rect x="5" y="6" width="1" height="1" fill="#2a5a1a" />
      <rect x="4" y="8" width="1" height="1" fill="#2a5a1a" />
      {/* pot */}
      <rect x="2" y="11" width="6" height="3" fill={wood} />
      <rect x="2" y="11" width="6" height="1" fill={dark} />
      <rect x="2" y="13" width="6" height="1" fill={dark} />
      <rect x="2" y="11" width="1" height="3" fill={dark} />
      <rect x="7" y="11" width="1" height="3" fill={dark} />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Potted plant — leafier alternative to the cactus, for indoors.

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
      <rect x="1" y="2" width="2" height="3" fill="#4a8a2a" />
      <rect x="7" y="2" width="2" height="3" fill="#4a8a2a" />
      <rect x="3" y="0" width="4" height="4" fill="#4a8a2a" />
      <rect x="4" y="1" width="2" height="2" fill="#6aaa3a" />
      <rect x="3" y="4" width="4" height="2" fill="#4a8a2a" />
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
// Filing cabinet — three drawers, side prop against a wall.

export function FilingCabinet() {
  return (
    <svg
      viewBox="0 0 10 14"
      width="32"
      height="44"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="0" y="0" width="10" height="14" fill="#9aa5b8" />
      <rect x="0" y="0" width="10" height="1" fill={dark} />
      <rect x="0" y="13" width="10" height="1" fill={dark} />
      <rect x="0" y="0" width="1" height="14" fill={dark} />
      <rect x="9" y="0" width="1" height="14" fill={dark} />
      {/* drawers */}
      <rect x="1" y="4" width="8" height="1" fill={dark} />
      <rect x="1" y="8" width="8" height="1" fill={dark} />
      {/* handles */}
      <rect x="4" y="2" width="2" height="1" fill={dark} />
      <rect x="4" y="6" width="2" height="1" fill={dark} />
      <rect x="4" y="10" width="2" height="1" fill={dark} />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Printer / scanner stack on a side table.

export function PrinterTable() {
  return (
    <svg
      viewBox="0 0 16 14"
      width="48"
      height="42"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      {/* side table */}
      <rect x="0" y="8" width="16" height="6" fill={wood} />
      <rect x="0" y="8" width="16" height="1" fill={dark} />
      <rect x="0" y="13" width="16" height="1" fill={dark} />
      <rect x="0" y="8" width="1" height="6" fill={dark} />
      <rect x="15" y="8" width="1" height="6" fill={dark} />
      {/* printer body */}
      <rect x="2" y="2" width="12" height="6" fill="#cdd2dc" />
      <rect x="2" y="2" width="12" height="1" fill={dark} />
      <rect x="2" y="7" width="12" height="1" fill={dark} />
      <rect x="2" y="2" width="1" height="6" fill={dark} />
      <rect x="13" y="2" width="1" height="6" fill={dark} />
      {/* paper tray */}
      <rect x="4" y="0" width="8" height="2" fill="#ffffff" />
      <rect x="4" y="0" width="8" height="1" fill={dark} />
      {/* status LEDs */}
      <rect x="11" y="4" width="1" height="1" fill="var(--accent-green)" />
      <rect x="11" y="6" width="1" height="1" fill="var(--accent-yellow)" />
      {/* output slot */}
      <rect x="4" y="6" width="6" height="1" fill={dark} />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Whiteboard — back-wall fixture, doubles as a poster mount.

export function Whiteboard({ accent }: { accent: string }) {
  return (
    <svg
      viewBox="0 0 24 10"
      width="84"
      height="35"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="0" y="0" width="24" height="9" fill="#f5f5e8" />
      <rect x="0" y="0" width="24" height="1" fill={dark} />
      <rect x="0" y="8" width="24" height="1" fill={dark} />
      <rect x="0" y="0" width="1" height="9" fill={dark} />
      <rect x="23" y="0" width="1" height="9" fill={dark} />
      {/* marker tray */}
      <rect x="0" y="9" width="24" height="1" fill={dark} />
      {/* scribbles */}
      <rect x="2" y="2" width="6" height="1" fill={accent} />
      <rect x="2" y="4" width="10" height="1" fill="#5a6a8a" />
      <rect x="2" y="6" width="4" height="1" fill="#5a6a8a" />
      <rect x="14" y="2" width="1" height="4" fill={accent} />
      <rect x="14" y="2" width="6" height="1" fill={accent} />
      <rect x="19" y="2" width="1" height="4" fill={accent} />
      <rect x="14" y="5" width="6" height="1" fill={accent} />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Trash bin — small floor prop.

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
      <rect x="0" y="1" width="6" height="1" fill="#cdd2dc" />
      <rect x="0" y="1" width="6" height="1" fill={dark} />
      <rect x="1" y="2" width="4" height="6" fill="#9aa5b8" />
      <rect x="1" y="2" width="4" height="1" fill={dark} />
      <rect x="1" y="7" width="4" height="1" fill={dark} />
      <rect x="1" y="2" width="1" height="6" fill={dark} />
      <rect x="4" y="2" width="1" height="6" fill={dark} />
      <rect x="2" y="4" width="1" height="3" fill={dark} opacity="0.5" />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Room — packed top-down view: workstation, character on chair, side
// table with printer, whiteboard on back wall, potted plant in the
// corner. Status label hovers above the character.

export function Room({
  name,
  accent,
  floor,
  label,
  state,
  monitorColors,
}: {
  name: CharName;
  accent: string;
  floor: string;
  label: string;
  state: "idle" | "working" | "waiting";
  monitorColors: [string, string, string];
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
      style={{ background: floor }}
    >
      {/* tile-grid floor pattern */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 18px, rgba(0,0,0,0.28) 18px 19px), repeating-linear-gradient(90deg, transparent 0 18px, rgba(0,0,0,0.28) 18px 19px)",
        }}
      />
      {/* inner shadow — soft vignette for depth */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 32px rgba(0,0,0,0.45)" }}
      />

      {/* back-wall trim — dark band */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-2"
        style={{ background: "var(--panel-border)" }}
      />

      {/* name plaque, top-left */}
      <span
        className="pixel-tag absolute top-3 left-2 z-30"
        style={{ background: accent, color: "var(--ink-on-accent)" }}
      >
        {name}
      </span>

      {/* whiteboard on back wall, top-right */}
      <div className="absolute top-3 right-2 z-10">
        <Whiteboard accent={accent} />
      </div>

      {/* workstation centered, behind the character */}
      <div className="absolute top-[32%] left-1/2 z-10 -translate-x-1/2">
        <Workstation monitorColors={monitorColors} />
      </div>

      {/* chair behind character */}
      <div className="absolute bottom-[14%] left-1/2 z-15 -translate-x-1/2">
        <Chair accent={accent} />
      </div>

      {/* seated character */}
      <div className="absolute bottom-[22%] left-1/2 z-20 -translate-x-1/2">
        <Minifig name={name} size={42} state={state} />
      </div>

      {/* status label hovering above the character */}
      <div className="absolute top-[64%] left-1/2 z-30 -translate-x-1/2 -translate-y-full whitespace-nowrap text-center">
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

      {/* side props — printer on the right, filing cabinet on the left,
          potted plant + trash bin in the bottom corners */}
      <div className="absolute top-[34%] left-1 z-10">
        <FilingCabinet />
      </div>
      <div className="absolute top-[34%] right-1 z-10">
        <PrinterTable />
      </div>
      <div className="absolute bottom-1 left-1 z-20">
        <PottedPlant size={28} />
      </div>
      <div className="absolute bottom-1 right-1 z-20">
        <TrashBin />
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Corridor — interstitial brown floor strip with cacti.

export function Corridor({ count = 5 }: { count?: number }) {
  return (
    <div
      className="relative flex items-center justify-around overflow-hidden border-[var(--pixel)] border-[var(--panel-border)] py-3"
      style={{ background: "#3a2a1a" }}
    >
      <span
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 14px, rgba(0,0,0,0.35) 14px 15px), repeating-linear-gradient(0deg, transparent 0 14px, rgba(255,255,255,0.04) 14px 15px)",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 24px rgba(0,0,0,0.55)" }}
      />
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="relative z-10">
          <Cactus size={30} />
        </span>
      ))}
    </div>
  );
}

// Character → floor + monitor palette.
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

export const CHAR_ACCENT: Record<CharName, string> = {
  ANNA: "var(--accent-pink)",
  KAI: "var(--accent-red)",
  OLIVER: "var(--accent-green)",
};
