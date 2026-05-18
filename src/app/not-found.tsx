// Root-level 404 — fires when the requested URL doesn't match any locale
// segment or sub-route. Sim-style "ROOM NOT FOUND" with a missing-tile
// floor pattern as the visual cue.

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 text-center"
      style={{ background: "var(--sim-wall)" }}
    >
      {/* missing-tile floor pattern — a checker grid with random gaps */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-conic-gradient(var(--sim-floor-anna) 0 25%, var(--sim-floor-oliver) 0 50%)",
          backgroundSize: "32px 32px",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, transparent 0 24px, rgba(0,0,0,0.55) 24px 80px), radial-gradient(circle at 70% 70%, transparent 0 24px, rgba(0,0,0,0.55) 24px 80px)",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.7)" }}
      />

      <div className="relative z-10 max-w-xl border-[var(--pixel)] border-[var(--panel-border)] bg-[var(--background)] p-8 text-left">
        <p className="font-body text-[10px] tracking-[0.18em] uppercase text-[var(--accent-red)]">
          status · 404
        </p>
        <h1 className="font-display mt-2 text-3xl">room not found</h1>
        <p className="font-body mt-4 text-base text-[var(--foreground)]/80">
          this corridor doesn&apos;t lead anywhere. anna, kai, and oliver
          haven&apos;t taken inventory of this room yet — try the entrance.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/"
            className="pixel-button active:pixel-button-press"
            style={{ background: "var(--accent-green)" }}
          >
            ▶ return to lobby
          </a>
          <a
            href="/#faq"
            className="pixel-button active:pixel-button-press"
            style={{ background: "var(--panel)" }}
          >
            check the faq
          </a>
        </div>
        <p className="font-body mt-6 text-[10px] tracking-[0.15em] uppercase text-[var(--foreground)]/40">
          [err] tile reference null · falling back to /
        </p>
      </div>
    </main>
  );
}
