import { Room, Corridor, ROOM_PALETTE, CHAR_ACCENT } from "@/components/OfficeSprites";

// Hero scene — top-down ¾ overworld view of the vcom office. Three
// rooms in a row (Anna · Kai · Oliver), each with a diamond-checker
// floor, a back-wall counter strip with shelves, a workstation, the
// seated character, and side props. A grass corridor with tufts and
// cacti sits below. A document sprite travels left-to-right on a ~6s
// loop, representing the morning handoff.

type Props = { ariaLabel: string };

export function HeroOffice({ ariaLabel }: Props) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="pixel-panel-lg scanlines relative w-full overflow-hidden p-3 sm:p-4"
      style={{ background: "var(--sim-wall)" }}
    >
      <div className="grid gap-2 sm:grid-cols-3">
        <Room
          name="ANNA"
          accent={CHAR_ACCENT.ANNA}
          floor={ROOM_PALETTE.ANNA.floor}
          floorDiag={ROOM_PALETTE.ANNA.floorDiag}
          label="refund policy"
          state="working"
          monitorColors={ROOM_PALETTE.ANNA.monitorColors}
          shelves={ROOM_PALETTE.ANNA.shelves}
        />
        <Room
          name="KAI"
          accent={CHAR_ACCENT.KAI}
          floor={ROOM_PALETTE.KAI.floor}
          floorDiag={ROOM_PALETTE.KAI.floorDiag}
          label="needs you"
          state="waiting"
          monitorColors={ROOM_PALETTE.KAI.monitorColors}
          shelves={ROOM_PALETTE.KAI.shelves}
        />
        <Room
          name="OLIVER"
          accent={CHAR_ACCENT.OLIVER}
          floor={ROOM_PALETTE.OLIVER.floor}
          floorDiag={ROOM_PALETTE.OLIVER.floorDiag}
          label="facilitating"
          state="idle"
          monitorColors={ROOM_PALETTE.OLIVER.monitorColors}
          shelves={ROOM_PALETTE.OLIVER.shelves}
        />
      </div>

      <div className="mt-2">
        <Corridor count={5} />
      </div>

      {/* Document in transit — travels left-to-right across the corridor */}
      <span aria-hidden className="hero-doc pointer-events-none absolute bottom-[5%] left-[14%] z-30">
        <Doc />
      </span>
    </div>
  );
}

function Doc() {
  return (
    <svg
      viewBox="0 0 8 10"
      width="20"
      height="25"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="0" y="0" width="8" height="10" fill="#fff7e0" />
      <rect x="0" y="0" width="8" height="1" fill="var(--panel-border)" />
      <rect x="0" y="9" width="8" height="1" fill="var(--panel-border)" />
      <rect x="0" y="0" width="1" height="10" fill="var(--panel-border)" />
      <rect x="7" y="0" width="1" height="10" fill="var(--panel-border)" />
      <rect x="2" y="3" width="4" height="1" fill="var(--panel-border)" />
      <rect x="2" y="5" width="4" height="1" fill="var(--panel-border)" />
      <rect x="2" y="7" width="3" height="1" fill="var(--panel-border)" />
    </svg>
  );
}
