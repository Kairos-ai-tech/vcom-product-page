# vcom Assets Inventory

This file lists every visual asset the marketing site renders. Most
assets today are inline SVG sprites (under `src/components/`) — those
are versioned with the code. The list below covers asset slots that
either ship as static files or need a pixel-artist pass to replace
the placeholder SVG with finished pixel art.

> **Style anchor.** Top-down sim-style pixel art (think RimWorld /
> Stardew Valley interiors, not Pokémon overworld). Warm cream palette
> with navy `#1a1530` outlines, 4px pixel base, 32-colour ceiling.
> Avoid CSS gradients on sprite art — use dithered (checkerboard) two-
> to three-tone shading.

## Inline SVG sprites (no replacement needed)

These already ship as code and scale via `image-rendering: pixelated`.
Listed for reference so an artist can replicate the silhouette if a
raster version is ever needed.

| Sprite | File | Notes |
|---|---|---|
| Anna · Kai · Oliver minifigs | `src/components/Minifig.tsx` | 16×18 viewBox, idle/working/waiting animations via CSS |
| Office workstation (4 monitors) | `src/components/OfficeSprites.tsx` | bar / line / table / donut dashboards |
| Office chair (top-down) | `src/components/OfficeSprites.tsx` | backrest + 5-star wheelbase |
| Cactus, potted plant | `src/components/OfficeSprites.tsx` | corridor + indoor variants |
| Filing cabinet | `src/components/OfficeSprites.tsx` | 3-drawer side prop |
| Printer + paper tray | `src/components/OfficeSprites.tsx` | sits on a wood side table |
| Whiteboard | `src/components/OfficeSprites.tsx` | back-wall fixture with scribbles |
| Trash bin | `src/components/OfficeSprites.tsx` | corner prop |
| Pricing tier icons (free / solo / studio) | `src/components/sections/Pricing.tsx` | 1-monitor / workstation / server-rack silhouettes |
| HowItWorks step icons | `src/components/sections/HowItWorks.tsx` | USB plug · speech bubble · quill · stamp |
| Footer skyline silhouette | `src/components/SiteFooter.tsx` | 200×30 viewBox, far + near buildings + lit windows |
| Doc-in-transit (hero animation) | `src/components/HeroOffice.tsx` | 8×10 viewBox |
| Pixel logo (nav) | `src/components/SiteNav.tsx` | 12×12 mascot tile |

## Static file slots — placeholder ⇒ final art

| Slot | Path | Dimensions | Purpose | Status |
|---|---|---|---|---|
| Favicon (multi-res) | `public/favicon.ico` *(missing)* | 16×16 + 32×32 | Browser tab icon. Currently relying on Next default. | **placeholder** — needs a pixel artist or a generated favicon set |
| Apple touch icon | `public/apple-touch-icon.png` *(missing)* | 180×180 | iOS home-screen icon | **placeholder** |
| Open Graph hero | `public/og/hero.png` *(missing — referenced from `src/app/[locale]/layout.tsx`)* | 1200×630 | Social share preview. Should reproduce the hero scene with the headline overlaid in a pixel dialog box. | **placeholder** — `<meta og:image>` currently points at `/og/hero.png`; ship a real PNG before launch |
| Manifest icons | `public/icons/icon-192.png`, `public/icons/icon-512.png` | 192×192, 512×512 | PWA manifest icons | **placeholder** |
| Email header banner | n/a in this repo (lives in the email-send service) | 1200×400 | Pixel-art header banner used in trial-day-7 / 12 / 21 emails | **placeholder** — produce alongside email templates |

## Replacement notes for an artist

- Every sprite uses `var(--panel-border)` (`#1a1530`) for outlines.
  Match it 1:1 in finished art.
- Floor palette uses `var(--sim-floor-anna)` `#4a5468`,
  `var(--sim-floor-oliver)` `#4d5a55`, `var(--sim-floor-kai)`
  `#6a5847`. These were chosen so the three rooms are visually
  distinct without competing with the character accent colours.
- Character accents: Anna `--accent-pink`, Oliver `--accent-green`,
  Kai `--accent-red`. Keep these as the dominant secondary colour on
  any asset that depicts a specific character.
- Animations live in `src/app/globals.css` under `@keyframes
  pixel-bob`, `pixel-blink`, `pixel-glow`, `pixel-pop-in`,
  `hero-doc-walk`. Don't introduce new motion without a static
  fallback frame and a `prefers-reduced-motion: reduce` rule.
- All raster assets ship as PNG-8 or WebP. Target page weight is
  under 500KB total.

## Final-asset tracking

When a placeholder gets replaced with finished pixel art:

1. Drop the file at the path listed above (no rename).
2. Update the **Status** column to ✅ with a one-line note about
   who produced it and when.
3. If the file shape changed (e.g. PNG → WebP), update the consuming
   component to load the new path.

No file under `public/` is auto-generated. Commit assets directly.
