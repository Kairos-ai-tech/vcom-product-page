import { PixelStar, PixelHeart, PixelCoin } from "@/components/PixelSprites";

type Props = { items: string[]; bg?: string };

// Horizontal scrolling strip placed between sections. Items are
// duplicated so the keyframe -50% translate gives a seamless loop.
// Hover pauses the marquee.
export function MarqueeTicker({ items, bg = "var(--accent-yellow)" }: Props) {
  const seq = [...items, ...items];
  return (
    <div
      className="overflow-hidden border-y-[var(--pixel)] border-[var(--panel-border)]"
      style={{ background: bg }}
      role="presentation"
      aria-hidden
    >
      <div className="marquee-track py-3">
        {seq.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="flex shrink-0 items-center gap-4 px-6 text-sm text-[var(--ink-on-accent)]"
          >
            <span>{it}</span>
            <Decor index={i} />
          </span>
        ))}
      </div>
    </div>
  );
}

function Decor({ index }: { index: number }) {
  const which = index % 3;
  if (which === 0) return <PixelStar size={18} color="var(--ink-on-accent)" />;
  if (which === 1) return <PixelHeart size={16} />;
  return <PixelCoin size={20} color="var(--accent-red)" />;
}
