// Pixel minifigs ported from the vcom app shell. Same sprite geometry so
// marketing characters and in-app characters read as the same beings.
// `state` toggles the bob/blink animations used on the office screen mock.

export type CharName = "ANNA" | "KAI" | "OLIVER";

type Props = {
  name: CharName;
  size?: number;
  state?: "idle" | "working" | "waiting";
};

export function Minifig({ name, size = 64, state = "idle" }: Props) {
  const skin = "#ffd1a3";
  const dark = "var(--panel-border)";
  const height = Math.round((size * 18) / 16);

  const animClass =
    state === "working"
      ? "anim-bob"
      : state === "waiting"
        ? "anim-blink"
        : "";

  return (
    <svg
      viewBox="0 0 16 18"
      width={size}
      height={height}
      shapeRendering="crispEdges"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
      className={animClass}
    >
      <rect x="4" y="2" width="8" height="6" fill={skin} />
      <rect x="6" y="5" width="1" height="2" fill={dark} />
      <rect x="9" y="5" width="1" height="2" fill={dark} />
      <rect x="7" y="8" width="2" height="1" fill={skin} />

      <rect x="3" y="17" width="4" height="1" fill={dark} />
      <rect x="9" y="17" width="4" height="1" fill={dark} />

      {name === "ANNA" && <Anna skin={skin} dark={dark} />}
      {name === "KAI" && <Kai skin={skin} dark={dark} />}
      {name === "OLIVER" && <Oliver skin={skin} dark={dark} />}
    </svg>
  );
}

type Sprite = { skin: string; dark: string };

function Anna({ skin }: Sprite) {
  const hair = "#1a1530";
  const blouse = "var(--accent-blue)";
  const heart = "var(--accent-pink)";
  const lip = "var(--accent-red)";
  const skirt = "#3a2a4a";
  return (
    <>
      <rect x="3" y="1" width="10" height="2" fill={hair} />
      <rect x="3" y="3" width="2" height="6" fill={hair} />
      <rect x="11" y="3" width="2" height="6" fill={hair} />
      <rect x="4" y="3" width="8" height="1" fill={hair} />
      <rect x="7" y="7" width="2" height="1" fill={lip} />
      <rect x="3" y="9" width="10" height="5" fill={blouse} />
      <rect x="2" y="9" width="1" height="4" fill={blouse} />
      <rect x="13" y="9" width="1" height="4" fill={blouse} />
      <rect x="2" y="13" width="1" height="1" fill={skin} />
      <rect x="13" y="13" width="1" height="1" fill={skin} />
      <rect x="4" y="14" width="3" height="3" fill={skirt} />
      <rect x="9" y="14" width="3" height="3" fill={skirt} />
      <rect x="7" y="10" width="1" height="1" fill={heart} />
      <rect x="9" y="10" width="1" height="1" fill={heart} />
      <rect x="6" y="11" width="4" height="1" fill={heart} />
      <rect x="7" y="12" width="2" height="1" fill={heart} />
    </>
  );
}

function Kai({ skin, dark }: Sprite) {
  const hair = "#7a3f1a";
  const polo = "var(--accent-yellow)";
  const stripe = "#ffffff";
  const jeans = "var(--accent-blue)";
  const mic = "var(--accent-red)";
  return (
    <>
      <rect x="4" y="2" width="8" height="2" fill={hair} />
      <rect x="3" y="3" width="1" height="2" fill={hair} />
      <rect x="12" y="3" width="1" height="2" fill={hair} />
      <rect x="4" y="0" width="1" height="2" fill={hair} />
      <rect x="6" y="0" width="1" height="2" fill={hair} />
      <rect x="9" y="0" width="1" height="2" fill={hair} />
      <rect x="11" y="0" width="1" height="2" fill={hair} />
      <rect x="6" y="7" width="4" height="1" fill={dark} />
      <rect x="3" y="9" width="10" height="5" fill={polo} />
      <rect x="2" y="9" width="1" height="4" fill={polo} />
      <rect x="13" y="9" width="1" height="4" fill={polo} />
      <rect x="3" y="11" width="10" height="1" fill={stripe} />
      <rect x="2" y="13" width="1" height="1" fill={skin} />
      <rect x="13" y="13" width="1" height="1" fill={skin} />
      <rect x="4" y="14" width="3" height="3" fill={jeans} />
      <rect x="9" y="14" width="3" height="3" fill={jeans} />
      <rect x="4" y="0" width="8" height="1" fill={dark} />
      <rect x="3" y="1" width="1" height="2" fill={dark} />
      <rect x="12" y="1" width="1" height="2" fill={dark} />
      <rect x="3" y="5" width="1" height="2" fill={dark} />
      <rect x="2" y="7" width="2" height="1" fill={dark} />
      <rect x="4" y="8" width="1" height="1" fill={mic} />
    </>
  );
}

function Oliver({ skin, dark }: Sprite) {
  const hair = "#1a1530";
  const blazer = "var(--accent-red)";
  const shirt = "#ffffff";
  const tie = "#1a1530";
  const trousers = "#2a2347";
  return (
    <>
      <rect x="4" y="1" width="8" height="2" fill={hair} />
      <rect x="3" y="2" width="1" height="3" fill={hair} />
      <rect x="12" y="2" width="1" height="3" fill={hair} />
      <rect x="9" y="2" width="1" height="1" fill={skin} />
      <rect x="5" y="4" width="3" height="1" fill={dark} />
      <rect x="5" y="7" width="3" height="1" fill={dark} />
      <rect x="5" y="5" width="1" height="2" fill={dark} />
      <rect x="7" y="5" width="1" height="2" fill={dark} />
      <rect x="8" y="4" width="3" height="1" fill={dark} />
      <rect x="8" y="7" width="3" height="1" fill={dark} />
      <rect x="8" y="5" width="1" height="2" fill={dark} />
      <rect x="10" y="5" width="1" height="2" fill={dark} />
      <rect x="7" y="7" width="2" height="1" fill={dark} />
      <rect x="3" y="9" width="10" height="5" fill={blazer} />
      <rect x="2" y="9" width="1" height="4" fill={blazer} />
      <rect x="13" y="9" width="1" height="4" fill={blazer} />
      <rect x="7" y="9" width="2" height="2" fill={shirt} />
      <rect x="6" y="9" width="1" height="1" fill={shirt} />
      <rect x="9" y="9" width="1" height="1" fill={shirt} />
      <rect x="7" y="11" width="2" height="3" fill={tie} />
      <rect x="2" y="13" width="1" height="1" fill={skin} />
      <rect x="13" y="13" width="1" height="1" fill={skin} />
      <rect x="4" y="14" width="3" height="3" fill={trousers} />
      <rect x="9" y="14" width="3" height="3" fill={trousers} />
    </>
  );
}
