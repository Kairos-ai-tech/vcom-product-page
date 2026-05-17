// Shape every section reads from. Pulling this into a single typed
// surface keeps translators (and future-me) honest: missing a key fails
// at type-check, not at runtime in production.

export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: { href: string; label: string }[];
    cta: string;
  };
  hero: {
    eyebrow: string;
    headlineLines: [string, string, string]; // 3 lines, last is highlighted
    body: string;
    bullets: [string, string, string];
    primaryCta: string;
    secondaryCta: string;
    fineprint: string;
    boardTag: string;
    boardSub: string;
    boardCaption: string; // teaser line under the tiles, oliver →
  };
  marquee: string[];
  insight: {
    eyebrow: string;
    headlineParts: { line1: string; line2: string; emphasis: string; rest: string };
    paragraphs: [string, string, string];
    highlight: string; // inline yellow-marker phrase inside paragraph 2
  };
  team: {
    eyebrow: string;
    headline: string;
    body: string;
    labels: { does: string; doesNot: string; signature: string };
    cards: TeamCard[];
  };
  standup: {
    eyebrow: string;
    headlineLines: [string, string, string]; // last highlighted
    body: string;
    bullets: [string, string, string, string];
    foot: string;
    mockTag: string;
    mockSub: string;
    mockFoot: string;
    mockComplete: string;
    items: { who: string; text: string; action: string; bg: string }[];
  };
  office: {
    eyebrow: string;
    headlineLines: [string, string];
    body: string;
    states: [string, string, string, string]; // idle/working/waiting/collab strings (HTML allowed)
    coda: string;
    mockTag: string;
    mockOnline: string;
    desks: { name: "ANNA" | "OLIVER" | "KAI"; label: string; state: "idle" | "working" | "waiting"; color: string }[];
    handoffs: { from: string; to: string; msg: string }[];
  };
  how: {
    eyebrow: string;
    headlineLines: [string, string];
    steps: { n: string; title: string; body: string }[];
  };
  pricing: {
    eyebrow: string;
    headlineLines: [string, string, string];
    body: string;
    billing: {
      monthlyLabel: string;
      annualLabel: string; // includes the -20% bit, e.g. "annual -20%"
    };
    tiers: PricingTier[];
    footnote: string;
    enterprise: { text: string; href: string };
  };
  faq: {
    eyebrow: string;
    headlineLines: [string, string, string];
    qLabel: string;
    aLabel: string;
    items: { q: string; a: string }[];
  };
  cta: {
    eyebrow: string;
    headlineLines: [string, string, string]; // last highlighted
    body: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    fineprint: string;
  };
  footer: {
    tagline: string;
    links: { href: string; label: string }[];
    copyright: string;
  };
};

export type TeamCard = {
  name: "ANNA" | "KAI" | "OLIVER";
  display: string;
  role: string;
  tagline: string;
  bg: string;
  does: string[];
  doesNot: string[];
  signature: string;
};

export type PricingTier = {
  id: "free" | "solo" | "studio";
  name: string;
  // Two displayed forms so the monthly/annual toggle is a pure data swap —
  // no math in the component, translators control formatting per locale.
  monthly: { price: string; sub: string; note?: string };
  annual: { price: string; sub: string; note?: string };
  // Optional add-on line, rendered on a row of its own (e.g. "+ $29 / seat").
  addon?: string;
  pitch: string;
  // Each feature carries its own glyph so a tier can mix ✓ and ✗.
  features: { glyph: "✓" | "✗"; text: string }[];
  cta: string;
  ctaHref?: string;
  bg: string;
  accent: string;
  highlight?: boolean;
  badge?: string; // small "▶ start here" style ribbon, only on the lead tier
};
