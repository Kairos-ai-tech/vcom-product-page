"use client";

import { track } from "@/lib/analytics";
import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["faq"] };

export function FAQ({ dict }: Props) {
  const [l1, l2, l3] = dict.headlineLines;
  return (
    <section
      id="faq"
      className="border-b-[var(--pixel)] border-[var(--panel-border)] bg-[var(--panel)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow text-[var(--accent-pink)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {l1} <br /> {l2} <br /> {l3}
          </h2>
        </div>
        <ul className="grid gap-3">
          {dict.items.map((f, i) => {
            const rowNum = String(i + 1).padStart(2, "0");
            return (
              <li
                key={f.q}
                className={`pixel-panel pixel-hover-lift anim-pop-in delay-${(i % 6) + 1} overflow-hidden bg-[var(--background)] p-0`}
              >
                <details
                  onToggle={(e) => {
                    if ((e.target as HTMLDetailsElement).open) {
                      track("faq_expanded", { question: f.q });
                    }
                  }}
                  className="group"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 p-4 text-sm [&::-webkit-details-marker]:hidden">
                    <span className="font-body w-8 shrink-0 text-[10px] tracking-[0.15em] text-[var(--foreground)]/40">
                      {rowNum}
                    </span>
                    <span
                      className="pixel-tag shrink-0"
                      style={{
                        background: "var(--accent-red)",
                        color: "var(--background)",
                      }}
                    >
                      {dict.qLabel}
                    </span>
                    <span className="flex-1">{f.q}</span>
                    <span
                      aria-hidden
                      className="font-body text-base text-[var(--foreground)]/60 group-open:hidden"
                    >
                      <span className="anim-cursor">▶</span>
                    </span>
                    <span
                      aria-hidden
                      className="font-body hidden text-base text-[var(--accent-green)] group-open:inline"
                    >
                      ▼
                    </span>
                  </summary>
                  <div className="border-t-[calc(var(--pixel)/2)] border-dashed border-[var(--panel-border)]/50 bg-[var(--panel)] px-4 py-4">
                    <div className="flex items-start gap-3">
                      <span className="w-8 shrink-0" aria-hidden />
                      <span
                        className="pixel-tag shrink-0"
                        style={{
                          background: "var(--accent-green)",
                          color: "var(--ink-on-accent)",
                        }}
                      >
                        {dict.aLabel}
                      </span>
                      <p className="font-body flex-1 text-base text-[var(--foreground)]/85">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </details>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
