// Standalone tiny pixel decorations — coins, stars, sparkles. Used as
// floating accents around the hero / CTA. Each is a self-contained SVG
// so colors and animation hooks can be applied per usage.

type CoinProps = { size?: number; color?: string };

export function PixelCoin({ size = 32, color = "var(--accent-yellow)" }: CoinProps) {
  const dark = "var(--panel-border)";
  return (
    <svg
      viewBox="0 0 8 8"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="2" y="0" width="4" height="1" fill={dark} />
      <rect x="1" y="1" width="6" height="1" fill={dark} />
      <rect x="0" y="2" width="1" height="4" fill={dark} />
      <rect x="7" y="2" width="1" height="4" fill={dark} />
      <rect x="1" y="6" width="6" height="1" fill={dark} />
      <rect x="2" y="7" width="4" height="1" fill={dark} />
      {/* coin face */}
      <rect x="1" y="2" width="6" height="4" fill={color} />
      <rect x="2" y="1" width="4" height="1" fill={color} />
      <rect x="2" y="6" width="4" height="1" fill={color} />
      {/* $ glyph */}
      <rect x="3" y="2" width="2" height="1" fill={dark} />
      <rect x="3" y="3" width="1" height="1" fill={dark} />
      <rect x="3" y="4" width="2" height="1" fill={dark} />
      <rect x="4" y="5" width="1" height="1" fill={dark} />
      <rect x="3" y="5" width="2" height="1" fill={dark} />
    </svg>
  );
}

type StarProps = { size?: number; color?: string };

export function PixelStar({ size = 24, color = "var(--accent-yellow)" }: StarProps) {
  const dark = "var(--panel-border)";
  return (
    <svg
      viewBox="0 0 7 7"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="3" y="0" width="1" height="1" fill={dark} />
      <rect x="3" y="6" width="1" height="1" fill={dark} />
      <rect x="0" y="3" width="1" height="1" fill={dark} />
      <rect x="6" y="3" width="1" height="1" fill={dark} />
      <rect x="2" y="2" width="3" height="3" fill={color} />
      <rect x="3" y="1" width="1" height="5" fill={color} />
      <rect x="1" y="3" width="5" height="1" fill={color} />
    </svg>
  );
}

type HeartProps = { size?: number };

export function PixelHeart({ size = 18 }: HeartProps) {
  const dark = "var(--panel-border)";
  const fill = "var(--accent-pink)";
  return (
    <svg
      viewBox="0 0 7 6"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="1" y="0" width="2" height="1" fill={dark} />
      <rect x="4" y="0" width="2" height="1" fill={dark} />
      <rect x="0" y="1" width="1" height="2" fill={dark} />
      <rect x="6" y="1" width="1" height="2" fill={dark} />
      <rect x="1" y="3" width="1" height="1" fill={dark} />
      <rect x="5" y="3" width="1" height="1" fill={dark} />
      <rect x="2" y="4" width="1" height="1" fill={dark} />
      <rect x="4" y="4" width="1" height="1" fill={dark} />
      <rect x="3" y="5" width="1" height="1" fill={dark} />
      <rect x="1" y="1" width="2" height="2" fill={fill} />
      <rect x="4" y="1" width="2" height="2" fill={fill} />
      <rect x="2" y="3" width="3" height="1" fill={fill} />
      <rect x="3" y="4" width="1" height="1" fill={fill} />
    </svg>
  );
}

// Tiny "+" sparkle — used as decoration sprinkled around copy.
export function PixelSparkle({ size = 12 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 5 5"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="2" y="0" width="1" height="5" fill="var(--accent-yellow)" />
      <rect x="0" y="2" width="5" height="1" fill="var(--accent-yellow)" />
    </svg>
  );
}
