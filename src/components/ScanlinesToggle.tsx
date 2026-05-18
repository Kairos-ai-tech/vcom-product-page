"use client";

import { useEffect, useState } from "react";

// Optional CRT-scanline overlay across the whole page. Off by default —
// adds a faint deliberate retro vibe for visitors who want it, without
// imposing it on the people scanning the page for the trial CTA.
// Preference persists in localStorage; the body class is the actual
// switch (see globals.css `.crt-on`).
const KEY = "vcom:crt";

export function ScanlinesToggle({ onLabel, offLabel }: { onLabel: string; offLabel: string }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(KEY);
      if (stored === "1") {
        setOn(true);
        document.body.classList.add("crt-on");
      }
    } catch {
      // Storage blocked (private browsing, hardened browsers) — silently skip.
    }
  }, []);

  function toggle() {
    const next = !on;
    setOn(next);
    document.body.classList.toggle("crt-on", next);
    try {
      window.localStorage.setItem(KEY, next ? "1" : "0");
    } catch {
      // Same as above — preference becomes session-only, no error surfaced.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      className="pixel-tag cursor-pointer"
      style={{
        background: on ? "var(--accent-green)" : "var(--panel)",
        color: "var(--ink-on-accent)",
      }}
    >
      {on ? onLabel : offLabel}
    </button>
  );
}
