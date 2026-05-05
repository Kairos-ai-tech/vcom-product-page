# vcom — product page

Marketing site for **vcom**, a virtual company of AI coworkers (Anna · Kai · Oliver) for solo founders. Pixel / 8-bit / Lego-minifig art style. Multilingual: English, Traditional Chinese, Japanese.

A product by [Kairos.ai](https://kairos.ai). Sister repo: `vcom-frontend` (the app shell), `vcom` (FastAPI backend).

---

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind 4** (`@tailwindcss/postcss`)
- **TypeScript** (strict)
- **Bun** for installs and dev (`bun.lock` is the committed lockfile)
- Static-prerendered (SSG) — every locale page is a CDN-cacheable HTML file at build

No state library. No data-fetching library. No CMS. Pure static.

---

## Quick start

```bash
bun install
bun dev
```

Dev server: `http://localhost:3000` (redirects to `/en` or your `Accept-Language` match).

### Scripts

| | |
|---|---|
| `bun dev` | dev server (Turbopack) |
| `bun run build` | production build |
| `bun start` | run production build |
| `bun run typecheck` | `tsc --noEmit` |

---

## Routes

| Path | Locale | HTML lang |
|---|---|---|
| `/en` | English | `en` |
| `/zh-TW` | 繁體中文 | `zh-Hant-TW` |
| `/ja` | 日本語 | `ja` |
| `/` | redirects per `Accept-Language` → one of the above |

Locale switcher in the nav prefetches all three.

---

## Structure

```
src/
├── app/
│   ├── layout.tsx            # static root layout, owns <html>+<body>+fonts
│   ├── globals.css           # design tokens, pixel utilities, animations
│   └── [locale]/
│       ├── layout.tsx        # SSG via generateStaticParams, sets per-locale metadata
│       └── page.tsx          # composes all sections from dict
├── components/
│   ├── Minifig.tsx           # Anna/Kai/Oliver SVG sprites
│   ├── PixelSprites.tsx      # coin / star / heart / sparkle decorations
│   ├── MarqueeTicker.tsx     # horizontal scrolling strip
│   ├── LanguageSwitcher.tsx  # EN / 繁中 / 日本語 tabs
│   ├── LangSync.tsx          # client effect: keeps <html lang> in sync
│   ├── SiteNav.tsx
│   ├── SiteFooter.tsx
│   └── sections/             # Hero, Insight, Team, Standup, Office, HowItWorks, Pricing, FAQ, CTA
├── i18n/
│   ├── config.ts             # locales registry, BCP-47 mapping
│   ├── types.ts              # Dict shape (typed surface every section reads)
│   ├── getDictionary.ts      # server-only resolver
│   └── dictionaries/         # en.ts, zh-TW.ts, ja.ts
└── proxy.ts                  # bare / → /<locale> redirect (Next 16 proxy convention)
```

Path alias: `@/*` → `src/*`.

---

## Adding / editing copy

All marketing copy lives in `src/i18n/dictionaries/{en,zh-TW,ja}.ts`. The `Dict` type in `src/i18n/types.ts` is the source of truth — adding a new key fails at type-check until all three locales catch up.

```ts
// src/i18n/dictionaries/en.ts
export const en: Dict = {
  hero: {
    headlineLines: ["hire a virtual", "company in", "5 minutes"],
    // ...
  },
};
```

Sections receive their dict slice as a prop:

```tsx
<Hero dict={dict.hero} locale={locale} />
```

---

## Adding a locale

1. Add the locale code to `locales` and `htmlLang` in `src/i18n/config.ts`.
2. Add a label to `localeLabels`.
3. Create `src/i18n/dictionaries/<locale>.ts` (TS error tells you which keys to fill).
4. Register it in `src/i18n/getDictionary.ts`.
5. Add an `Accept-Language` branch in `src/proxy.ts` if you want auto-detection.

That's it. The route `/<locale>` is generated at build via `generateStaticParams`.

---

## Design system

Pixel chrome ported verbatim from `vcom-frontend`. Tokens in `src/app/globals.css`:

- **Palette**: `--accent-red`, `--accent-blue`, `--accent-yellow`, `--accent-green`, `--accent-pink` on a warm cream background. `--ink-on-accent` is locked dark in both light and dark mode.
- **`--pixel: 4px`** drives all borders, shadow offsets, button-press travel.
- **Utilities**: `pixel-panel`, `pixel-panel-lg`, `pixel-button`, `pixel-button-press`, `pixel-tag`, `pixel-hover-lift`.
- **Animations**: `anim-pop-in`, `anim-glow`, `anim-rainbow`, `anim-coin`, `anim-float`, `anim-sparkle`, `anim-bob`, `anim-blink`, `anim-cursor`, `marquee-track`. All wrapped by `prefers-reduced-motion`.

### Fonts

| Use | Font |
|---|---|
| Display headlines (Latin) | **Silkscreen** — clear digits, NES feel |
| Buttons / tags / chrome | **Press Start 2P** |
| Body copy (Latin) | **VT323** |
| Everything (CJK) | **M PLUS 1p** — geometric sans, 500/700 weights |

CJK locales swap fonts via a `.lang-zh` / `.lang-ja` wrapper class on the `[locale]` layout, with system fallback to PingFang TC / Hiragino Sans / Microsoft JhengHei / Yu Gothic / Meiryo.

---

## Performance notes

- Pages are **`●` SSG** — prerendered HTML at build, no per-request server work.
- Locale switches load instantly (HTML pulled from CDN, all three prefetched on mount).
- `image-rendering: pixelated` is scoped to `img, svg` only — text gets proper antialiasing.
- DotGothic16 dropped (covered by M PLUS 1p) — one less font payload.
- Proxy only runs on the bare `/` redirect; locale-prefixed paths bypass it.

---

## Conventions

- Reusing the `vcom-frontend` art vocabulary is intentional — chrome and (future) Rive characters share the same stepped-shadow, 4px-grid, NES-inspired palette so they read as one world.
- Marketing copy stays in dictionaries. No inline strings in section components except aria-labels.
- All `<Link>` to in-locale anchors are written `/${locale}#section` so locale prefix is preserved.
- `Skill` / `superpowers:*` workflows are not used here — this is a content site.

---

## Deploy

### GitHub Pages (current)

`.github/workflows/deploy.yml` builds with `GITHUB_PAGES=true` and pushes the `out/` dir to GitHub Pages on every push to `main`. Live at `https://kairos-ai-tech.github.io/vcom-product-page/`.

One-time repo setup: **Settings → Pages → Source = GitHub Actions**.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/vcom-product-page`. Change to a custom domain by setting it to `""` and adding a `CNAME` to `public/`.

Static export caveats:
- `proxy.ts` does not run — bare `/` is handled by `src/app/page.tsx`, which meta-refreshes to the default locale and runs an Accept-Language detection client-side.
- All in-page anchor links use plain `<a href="#anchor">` (basePath-safe) instead of `<Link href="/${locale}#anchor">` which would force a navigation.

### Vercel (alternative)

Zero config, picks up Next 16 + `proxy.ts`. Skip the `GITHUB_PAGES` env var — Vercel runs the full Next runtime.

Set `NEXT_PUBLIC_SITE_URL` in production so OG / Twitter cards resolve absolute URLs correctly.

---

## License

Proprietary — © Kairos.ai.
