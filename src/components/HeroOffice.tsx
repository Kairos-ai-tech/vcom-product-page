import { Minifig } from "@/components/Minifig";

// Animated hero scene — three desks left-to-right (Anna · Kai · Oliver),
// a document sprite that travels from Anna's desk to Oliver's on a
// ~6-second loop (representing the morning handoff), a "needs you"
// pulse over Kai, and small set-dressing: a potted plant in the
// corner, coffee mug on Anna's desk, retro CRT monitor on Oliver's.
//
// Implementation deliberately stays in plain SVG + CSS keyframes. No
// PixiJS, no canvas, no WebM today — keeps the placeholder cheap and
// lets the final asset slot in later as a static <video> swap. The
// global prefers-reduced-motion rule disables all keyframe animations
// so motion-sensitive visitors see the composed-but-still scene.

type Props = { ariaLabel: string };

export function HeroOffice({ ariaLabel }: Props) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="pixel-panel-lg scanlines relative aspect-[5/4] w-full overflow-hidden"
      style={{
        // Sky / floor split — same vocabulary as the spatial office
        // section, so the hero reads as the same room.
        background:
          "linear-gradient(180deg, var(--accent-blue) 0 64%, #5b3a1f 64% 100%)",
      }}
    >
      {/* Window on the back wall — small static detail behind the desks. */}
      <span
        aria-hidden
        className="absolute left-[8%] top-[8%] block border-[var(--pixel)] border-[var(--panel-border)]"
        style={{
          width: 56,
          height: 40,
          background: "var(--accent-yellow)",
          boxShadow: "inset 0 0 0 var(--pixel) var(--background)",
        }}
      />

      {/* Potted plant — corner detail. Pure SVG, tiny. */}
      <span aria-hidden className="absolute bottom-[6%] left-[4%] block">
        <Plant />
      </span>

      {/* Document in transit — starts at Anna's desk, walks across the
          room to Oliver's, pauses, repeats on a 6s loop. */}
      <span aria-hidden className="absolute bottom-[36%] left-[16%] hero-doc">
        <Doc />
      </span>

      {/* Three desks — equally spaced across the bottom band. */}
      <div className="absolute inset-x-0 bottom-[6%] grid grid-cols-3 items-end px-4">
        <DeskSlot character="ANNA" state="working" decoration="mug" />
        <DeskSlot character="KAI" state="waiting" decoration="bubble" />
        <DeskSlot character="OLIVER" state="idle" decoration="crt" />
      </div>
    </div>
  );
}

function DeskSlot({
  character,
  state,
  decoration,
}: {
  character: "ANNA" | "KAI" | "OLIVER";
  state: "idle" | "working" | "waiting";
  decoration: "mug" | "crt" | "bubble";
}) {
  return (
    <div className="relative flex flex-col items-center">
      {decoration === "bubble" && (
        <span className="anim-glow pixel-tag mb-2" style={{ background: "var(--accent-red)", color: "var(--background)" }}>
          needs you
        </span>
      )}
      <div className="relative">
        <Minifig name={character} size={64} state={state} />
        {decoration === "mug" && (
          <span
            aria-hidden
            className="absolute -right-3 bottom-[40%]"
          >
            <Mug />
          </span>
        )}
        {decoration === "crt" && (
          <span
            aria-hidden
            className="absolute -left-4 bottom-[40%]"
          >
            <CRT />
          </span>
        )}
      </div>
      <Desk />
    </div>
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

function Mug() {
  return (
    <svg
      viewBox="0 0 6 6"
      width="18"
      height="18"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="0" y="1" width="4" height="4" fill="var(--accent-red)" />
      <rect x="0" y="1" width="4" height="1" fill="var(--panel-border)" />
      <rect x="0" y="4" width="4" height="1" fill="var(--panel-border)" />
      <rect x="0" y="1" width="1" height="4" fill="var(--panel-border)" />
      <rect x="3" y="1" width="1" height="4" fill="var(--panel-border)" />
      <rect x="4" y="2" width="1" height="2" fill="var(--panel-border)" />
      <rect x="1" y="0" width="1" height="1" fill="#fff7e0" opacity="0.6" />
    </svg>
  );
}

function CRT() {
  return (
    <svg
      viewBox="0 0 10 8"
      width="28"
      height="22"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="0" y="0" width="10" height="6" fill="var(--panel-border)" />
      <rect x="1" y="1" width="8" height="4" fill="#0a3a0a" />
      <rect x="2" y="2" width="6" height="1" fill="var(--accent-green)" />
      <rect x="2" y="4" width="4" height="1" fill="var(--accent-green)" />
      <rect x="3" y="6" width="4" height="1" fill="var(--panel-border)" />
      <rect x="2" y="7" width="6" height="1" fill="var(--panel-border)" />
    </svg>
  );
}

function Plant() {
  return (
    <svg
      viewBox="0 0 8 10"
      width="36"
      height="45"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="2" y="0" width="1" height="2" fill="var(--accent-green)" />
      <rect x="5" y="0" width="1" height="2" fill="var(--accent-green)" />
      <rect x="1" y="2" width="6" height="2" fill="var(--accent-green)" />
      <rect x="0" y="3" width="2" height="2" fill="var(--accent-green)" />
      <rect x="6" y="3" width="2" height="2" fill="var(--accent-green)" />
      <rect x="2" y="5" width="4" height="1" fill="#3a2a4a" />
      <rect x="2" y="6" width="4" height="3" fill="#7a3f1a" />
      <rect x="2" y="9" width="4" height="1" fill="var(--panel-border)" />
    </svg>
  );
}
