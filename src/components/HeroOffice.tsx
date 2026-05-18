import { Room, Corridor, ROOM_PALETTE, CHAR_ACCENT } from "@/components/OfficeSprites";

// Hero scene — top-down floorplan of the vcom office. Three rooms in a
// row (Anna · Kai · Oliver), each rendered as a packed workplace
// diorama: workstation with four monitors, office chair, seated
// character, filing cabinet, printer table, whiteboard on the back
// wall, potted plant and trash bin in the corners. A corridor strip
// below the rooms holds cacti.
//
// A document sprite travels from Anna's room toward Oliver's on a ~6s
// loop, representing the morning handoff. Motion uses CSS keyframes
// and respects the global prefers-reduced-motion rule.

type Props = { ariaLabel: string };

export function HeroOffice({ ariaLabel }: Props) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="pixel-panel-lg scanlines relative w-full overflow-hidden p-3 sm:p-4"
      style={{ background: "#2a2335" }}
    >
      <div className="grid gap-2 sm:grid-cols-3">
        <Room
          name="ANNA"
          accent={CHAR_ACCENT.ANNA}
          floor={ROOM_PALETTE.ANNA.floor}
          label="refund policy"
          state="working"
          monitorColors={ROOM_PALETTE.ANNA.monitorColors}
        />
        <Room
          name="KAI"
          accent={CHAR_ACCENT.KAI}
          floor={ROOM_PALETTE.KAI.floor}
          label="needs you"
          state="waiting"
          monitorColors={ROOM_PALETTE.KAI.monitorColors}
        />
        <Room
          name="OLIVER"
          accent={CHAR_ACCENT.OLIVER}
          floor={ROOM_PALETTE.OLIVER.floor}
          label="facilitating"
          state="idle"
          monitorColors={ROOM_PALETTE.OLIVER.monitorColors}
        />
      </div>

      <div className="mt-2">
        <Corridor count={5} />
      </div>

      {/* Document in transit — travels left-to-right just below the
          rooms across the top of the corridor strip. */}
      <span aria-hidden className="hero-doc pointer-events-none absolute top-[44%] left-[14%] z-30">
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
