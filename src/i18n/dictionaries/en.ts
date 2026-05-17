import type { Dict } from "@/i18n/types";

export const en: Dict = {
  meta: {
    title: "vcom — virtual company for solo founders",
    description:
      "Anna · Kai · Oliver. Three AI coworkers — HR, customer service, chief of staff — for solo founders. Daily stand-up, spatial office, you approve.",
  },
  nav: {
    links: [
      { href: "#team", label: "team" },
      { href: "#standup", label: "stand-up" },
      { href: "#office", label: "office" },
      { href: "#pricing", label: "pricing" },
      { href: "#faq", label: "faq" },
    ],
    cta: "▶ join beta",
  },
  hero: {
    eyebrow: "▶ player 1 ready",
    headlineLines: ["hire a virtual", "company in", "5 minutes"],
    body: "Anna handles HR. Kai clears your inbox. Oliver runs the team. Three AI coworkers built for solo founders. They draft. You approve. Press start.",
    bullets: [
      "no chat-bot fatigue — meet your team in a daily stand-up",
      "watch them work in a tiny pixel office",
      "every action approved by you. autonomy is earned",
    ],
    primaryCta: "▶ join the beta",
    secondaryCta: "see the stand-up",
    fineprint: "multilingual · approval-first · launching 2026",
    boardTag: "select your party",
    boardSub: "stage 01 — onboarding",
    boardCaption:
      "good morning. kai drafted 8 replies overnight. anna queued 1 contract. ready when you are",
  },
  marquee: [
    "now hiring · solo founders only",
    "anna drafts contracts",
    "kai clears inboxes",
    "oliver runs the team",
    "press start to play",
    "approval-first AI",
    "you stay in control",
  ],
  insight: {
    eyebrow: "▶ insight",
    headlineLines: [
      "ai tools feel like software.",
      "coworkers feel like people.",
    ],
    paragraph:
      "Every AI app is a chat box — you type, it answers, you close the tab. vcom is the opposite shape. The three coworkers remember you, hand off to each other, know what they don't do, and show up at 8am whether you do or not. That difference shows up in how you talk about them.",
    callout:
      "you don't say \"i opened ChatGPT today.\" you say \"kai cleared the inbox and anna flagged a refund pattern.\"",
  },
  team: {
    eyebrow: "▶ meet the team",
    headline: "three coworkers. three desks. zero meeting fatigue.",
    body: "Each character has a name, a personality, a scope, and a clear handoff to a human when something is out of their lane.",
    labels: { does: "does", doesNot: "does not", signature: "signature move" },
    cards: [
      {
        name: "ANNA",
        display: "Anna",
        role: "OPS / PEOPLE",
        bg: "var(--accent-pink)",
        tagline:
          "Warm and organized. Remembers every policy decision and every contractor's start date.",
        does: [
          "drafts customer policies, refund flows, ToS updates",
          "handles edge-case customer situations Kai escalates",
          "tracks important dates: domain renewals, SOC 2, filings",
          "contractor agreements + onboarding when you hire",
        ],
        doesNot: [
          "legal or tax advice — flags to your accountant",
          "touch payments, payroll, or money-moving",
          "fire/hire decisions — drafts, you decide",
        ],
        signature:
          "\"third refund request this month citing the 30-day window. your ToS says 14 days. want me to draft a policy update?\"",
      },
      {
        name: "KAI",
        display: "Kai",
        role: "CS",
        bg: "var(--accent-blue)",
        tagline:
          "Fast, friendly, learns your brand voice. Clears your inbox.",
        does: [
          "reads gmail / github / slack / discord",
          "catches failed Stripe charges, drafts recovery copy",
          "drafts replies in your brand voice",
          "self-updating FAQ from recurring questions",
        ],
        doesNot: [
          "send replies without your approval (v1)",
          "issue refunds or touch money — escalates",
          "social DMs (different product, later)",
        ],
        signature:
          "\"12 tickets overnight. 8 drafts ready to send. 1 escalation — customer mentioned legal action.\"",
      },
      {
        name: "OLIVER",
        display: "Oliver",
        role: "OPS · Chief of Staff",
        bg: "var(--accent-green)",
        tagline:
          "Calm, dry, highly competent. The one who actually runs the team.",
        does: [
          "routes ambiguous requests to the right character",
          "runs cross-character workflows + the project board",
          "facilitates the daily stand-up + weekly review",
          "tracks open threads so nothing slips",
        ],
        doesNot: [
          "do specialised work himself — coordinates, delegates",
          "make strategic decisions — gives options, you decide",
        ],
        signature:
          "\"this week: 1 onboarding (anna), 14 tickets (kai drafted), 3 decisions waiting on you.\"",
      },
    ],
  },
  standup: {
    eyebrow: "▶ the morning ritual",
    headlineLines: ["open the app.", "meet your team.", "approve the day."],
    body: "Chat-as-interface is the easiest thing to copy and the most boring thing to use. The default screen in vcom is a 60-second briefing from Oliver.",
    bullets: [
      "what the team did overnight",
      "what is waiting for your approval",
      "what is coming up today",
      "one or two questions from anna or kai",
    ],
    foot: "Tap to approve. Type to push back. Voice-reply if you don't feel like typing. Done in < 90 seconds before your coffee.",
    mockTag: "today · 08:14",
    mockSub: "☀ tue · 5 items",
    mockFoot: "everything else can wait",
    mockComplete: "stand-up complete",
    items: [
      { who: "kai", bg: "var(--accent-blue)", text: "8 reply drafts ready · 1 chargeback flagged", action: "review" },
      { who: "kai", bg: "var(--accent-blue)", text: "stripe: 2 failed renewals overnight — recovery drafted", action: "send" },
      { who: "anna", bg: "var(--accent-pink)", text: "refund policy update drafted (3rd 30-day request this month)", action: "approve" },
      { who: "oliver", bg: "var(--accent-green)", text: "github: 4 new issues triaged, 1 needs your call", action: "open" },
      { who: "anna", bg: "var(--accent-pink)", text: "domain kairosaitech.com renews in 7 days — card expires in 4", action: "fix" },
    ],
  },
  office: {
    eyebrow: "▶ the spatial office",
    headlineLines: ["watch your team work.", "not a chat log."],
    body: "Three desks. Three characters. One scene you can take in at a glance. Hover a desk to see what each is doing right now. Anna walks a doc over to Oliver, Kai pulses when something needs your eyes.",
    states: [
      "idle — sipping coffee",
      "working — drafting, processing",
      "waiting for you — needs approval",
      "collaborating — two at one desk",
    ],
    coda: "this is the screen people screenshot. that is the point.",
    mockTag: "office · live",
    mockOnline: "● 3 online",
    desks: [
      { name: "ANNA", label: "drafting refund policy", state: "working", color: "var(--accent-pink)" },
      { name: "OLIVER", label: "facilitating", state: "idle", color: "var(--accent-green)" },
      { name: "KAI", label: "needs you — chargeback", state: "waiting", color: "var(--accent-red)" },
    ],
    handoffs: [
      { from: "ANNA", to: "OLIVER", msg: "refund policy → schedule announce" },
      { from: "KAI", to: "YOU", msg: "chargeback from $499 customer — needs eyes" },
    ],
  },
  how: {
    eyebrow: "▶ how it works",
    headlineLines: ["5 minutes to hire.", "5 minutes a day to run."],
    steps: [
      { n: "01", title: "connect", body: "gmail · stripe · github · slack · discord · calendar · drive. hand-rolled OAuth, only the scopes you'd expect." },
      { n: "02", title: "introduce", body: "tell oliver about your business in 3 minutes. brand voice, customer types, contractors, the stack. he briefs anna and kai." },
      { n: "03", title: "draft", body: "team works overnight. inbox triaged, contracts queued, FAQ updates proposed. nothing sent without you." },
      { n: "04", title: "approve", body: "open the app at 8am. tap through the stand-up. coffee in hand. team executes in the office while you ship." },
    ],
  },
  pricing: {
    eyebrow: "▶ pricing",
    headlineLines: [
      "pick a tier.",
      "start the trial.",
      "no card.",
    ],
    body: "Full team for 14 days. Drops to free, never disappears. The team is there when you come back.",
    billing: {
      monthlyLabel: "monthly",
      annualLabel: "annual -20%",
    },
    tiers: [
      {
        id: "free",
        name: "free",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$0", sub: "/forever" },
        annual: { price: "$0", sub: "/forever" },
        pitch: "oliver only",
        features: [
          { glyph: "✓", text: "oliver" },
          { glyph: "✓", text: "1 inbox" },
          { glyph: "✓", text: "50 actions / mo" },
          { glyph: "✗", text: "no stand-up" },
        ],
        cta: "start free",
        ctaHref: "#waitlist",
      },
      {
        id: "solo",
        name: "solo",
        bg: "var(--accent-yellow)",
        accent: "var(--ink-on-accent)",
        monthly: { price: "$89", sub: "/month" },
        annual: { price: "$852", sub: "/year", note: "$71 / mo · save 20%" },
        pitch: "for the company-of-one",
        features: [
          { glyph: "✓", text: "full team — anna + kai + oliver" },
          { glyph: "✓", text: "daily stand-up" },
          { glyph: "✓", text: "spatial office" },
          { glyph: "✓", text: "all integrations" },
          { glyph: "✓", text: "multilingual" },
          { glyph: "✓", text: "email support" },
        ],
        cta: "start trial",
        ctaHref: "#waitlist",
        highlight: true,
        badge: "▶ start here",
      },
      {
        id: "studio",
        name: "studio",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$199", sub: "/month" },
        annual: { price: "$1,908", sub: "/year", note: "$159 / mo · save 20%" },
        addon: "+ $29 / seat",
        pitch: "for small teams",
        features: [
          { glyph: "✓", text: "everything in solo" },
          { glyph: "✓", text: "unlimited actions" },
          { glyph: "✓", text: "contractor management" },
          { glyph: "✓", text: "API access" },
          { glyph: "✓", text: "priority support" },
          { glyph: "✓", text: "add seats as you grow" },
        ],
        cta: "start trial",
        ctaHref: "#waitlist",
      },
    ],
    footnote: "14 days, full team, no card. drops to free if you don't upgrade.",
    enterprise: { text: "larger team? talk to us →", href: "mailto:hello@kairos.ai" },
  },
  faq: {
    eyebrow: "▶ faq",
    headlineLines: ["questions", "indie founders ask", "before the trial."],
    qLabel: "Q.",
    aLabel: "A.",
    items: [
      {
        q: "how is this different from ChatGPT or Claude with a prompt?",
        a: "the daily stand-up and spatial office. the model is just claude underneath — what's different is that the team remembers you, hands off to each other, and shows up at 8am whether you do or not.",
      },
      {
        q: "does it work with GitHub / Stripe / Discord?",
        a: "yes. github issue triage, stripe failed-charge recovery, discord read+draft. gmail and slack too. full list at /integrations.",
      },
      {
        q: "do the agents do things without asking?",
        a: "no. you approve every send, every policy update, every escalation. trusted-action mode comes later for users who want it.",
      },
      {
        q: "what's the 14-day trial — is there a card?",
        a: "no card. full team for 14 days. on day 15, anna and kai head out and you drop to oliver-only free forever. team's there when you're ready to come back.",
      },
      {
        q: "what happens if i leave it alone for a week?",
        a: "oliver keeps drafting, nothing gets sent. when you come back, the stand-up summarizes the week instead of a single morning.",
      },
      {
        q: "where does my data live?",
        a: "model calls to anthropic. your data in postgres on aws us-east-1. SOC 2 in progress. full details at /security.",
      },
      {
        q: "what's on the roadmap?",
        a: "v2: finance + growth coworkers, voice replies, mobile app, deeper github + linear integrations.",
      },
    ],
  },
  cta: {
    eyebrow: "▶ join the beta",
    headlineLines: ["solo founders", "wanted.", "first 100 spots."],
    body: "14-day full-team trial. 30-min onboarding call if you want one. help shape the three coworkers, we help clear your inbox.",
    emailLabel: "email",
    emailPlaceholder: "you@your-startup.com",
    submit: "▶ request access",
    fineprint: "no spam. quarterly note while we build. unsubscribe in one click.",
  },
  footer: {
    tagline: "a product by kairos.ai · for the company-of-one",
    links: [
      { href: "#team", label: "team" },
      { href: "#pricing", label: "pricing" },
      { href: "#faq", label: "faq" },
      { href: "/integrations", label: "integrations" },
      { href: "/security", label: "security" },
      { href: "mailto:hello@kairos.ai", label: "contact" },
    ],
    crtOn: "crt: on",
    crtOff: "crt: off",
    copyright: "© 2026 kairos.ai · game over? press start",
  },
};
