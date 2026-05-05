import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["standup"] };

export function Standup({ dict }: Props) {
  const [l1, l2, l3] = dict.headlineLines;
  return (
    <section
      id="standup"
      className="border-b-[var(--pixel)] border-[var(--panel-border)] bg-[var(--panel)]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-[var(--accent-yellow)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {l1} <br /> {l2} <br />
            <span className="text-[var(--accent-blue)]">{l3}</span>
          </h2>
          <p className="font-body mt-5 text-[var(--foreground)]/85">
            {dict.body}
          </p>
          <ul className="font-body mt-6 grid gap-3 text-base">
            {dict.bullets.map((b) => (
              <li key={b}>► {b}</li>
            ))}
          </ul>
          <p className="font-body mt-5 text-sm text-[var(--foreground)]/70">
            {dict.foot}
          </p>
        </div>

        <StandupMock dict={dict} />
      </div>
    </section>
  );
}

function StandupMock({ dict }: { dict: Dict["standup"] }) {
  return (
    <div className="pixel-panel-lg scanlines bg-[var(--background)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="pixel-tag" style={{ background: "var(--accent-yellow)" }}>
          {dict.mockTag}
        </span>
        <span className="font-body text-xs text-[var(--foreground)]/60">
          {dict.mockSub}
        </span>
      </div>

      <ul className="grid gap-3">
        {dict.items.map((it, i) => (
          <li
            key={it.text}
            className={`pixel-panel pixel-hover-lift anim-pop-in delay-${i + 1} flex items-center gap-3 bg-[var(--panel)] p-3`}
          >
            <span
              className="pixel-tag shrink-0"
              style={{ background: it.bg, color: "var(--ink-on-accent)" }}
            >
              {it.who}
            </span>
            <p className="font-body flex-1 text-sm">{it.text}</p>
            <button
              type="button"
              className="pixel-button active:pixel-button-press text-[10px]"
              style={{ background: "var(--accent-green)" }}
            >
              ▶ {it.action}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t-[var(--pixel)] border-dashed border-[var(--panel-border)] pt-4">
        <p className="font-body text-sm text-[var(--foreground)]/70">
          {dict.mockFoot}
        </p>
        <span className="font-body text-xs">
          {dict.mockComplete}
          <span className="anim-cursor">▌</span>
        </span>
      </div>
    </div>
  );
}
