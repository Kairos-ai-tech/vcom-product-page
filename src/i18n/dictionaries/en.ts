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
    headlineParts: {
      line1: "ai tools feel",
      line2: "like software.",
      emphasis: "coworkers",
      rest: "feel like people.",
    },
    paragraphs: [
      "Every AI app is a chat box. You type, it answers, you close the tab. Nobody talks about ChatGPT like a colleague.",
      "vcom is not smarter agents. It is agents that __HIGHLIGHT__ : they remember you, follow up, hand off to each other, and know what they don't do.",
      "The one-person company + AI team movement is already spreading. The market is teaching itself. We just need to be the product they find.",
    ],
    highlight: "feel like a team",
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
        role: "HR",
        bg: "var(--accent-pink)",
        tagline: "Warm and organized. Remembers every birthday and every NDA.",
        does: [
          "drafts contractor agreements + NDAs from your templates",
          "walks new hires through onboarding + welcome packets",
          "people db: contractors, rates, start dates, key docs",
          "renewal + birthday reminders, before you forget",
        ],
        doesNot: [
          "jurisdiction-specific tax math — flags to your accountant",
          "payroll runs — hands off to your payroll tool",
          "fire/hire decisions — drafts, you decide",
        ],
        signature:
          "\"next week: 林 starts tuesday. welcome packet is in your inbox waiting for sign-off.\"",
      },
      {
        name: "KAI",
        display: "Kai",
        role: "CS",
        bg: "var(--accent-blue)",
        tagline:
          "Fast, friendly, learns your brand voice. Clears your inbox.",
        does: [
          "reads gmail / messenger / intercom / line / slack",
          "drafts replies in your brand voice",
          "self-updating FAQ from recurring questions",
          "categorises tickets: auto-reply, review, escalate",
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
    mockSub: "☀ tue · 6 items",
    mockFoot: "everything else can wait",
    mockComplete: "stand-up complete",
    items: [
      { who: "kai", bg: "var(--accent-blue)", text: "8 reply drafts ready · 1 escalation flagged", action: "review" },
      { who: "anna", bg: "var(--accent-pink)", text: "contractor 林 NDA drafted · awaiting your sign-off", action: "approve" },
      { who: "oliver", bg: "var(--accent-green)", text: "weekly review scheduled friday 4pm — keep or move?", action: "keep" },
      { who: "anna", bg: "var(--accent-pink)", text: "陳 contract renews in 12 days — draft renewal?", action: "yes" },
    ],
  },
  office: {
    eyebrow: "▶ the spatial office",
    headlineLines: ["watch your team work.", "not a chat log."],
    body: "Three desks. Three characters. One glanceable scene. Click a character to drill in. Watch handoffs happen — Anna walks the contract over to Oliver, Oliver opens a ticket.",
    states: [
      "idle — sipping coffee, no active work",
      "working — drafting a reply, processing a ticket",
      "waiting for you — has something to approve",
      "collaborating — two characters at one desk",
    ],
    coda:
      "This is the screen people screenshot and send their friends. Other tools will not ship this. It is off-brand for them.",
    mockTag: "office · live",
    mockOnline: "● 3 online",
    desks: [
      { name: "ANNA", label: "drafting NDA", state: "working", color: "var(--accent-pink)" },
      { name: "OLIVER", label: "facilitating", state: "idle", color: "var(--accent-green)" },
      { name: "KAI", label: "needs you", state: "waiting", color: "var(--accent-red)" },
    ],
    handoffs: [
      { from: "ANNA", to: "OLIVER", msg: "林 NDA → create tracking ticket" },
      { from: "KAI", to: "YOU", msg: "customer mentioned legal action — needs eyes" },
    ],
  },
  how: {
    eyebrow: "▶ how it works",
    headlineLines: ["5 minutes to hire.", "5 minutes a day to run."],
    steps: [
      { n: "01", title: "connect", body: "gmail · slack · google calendar · drive · stripe (read-only). hand-rolled OAuth, no scopes you don't expect." },
      { n: "02", title: "introduce", body: "tell oliver about your business in 3 minutes. brand voice, customer types, contractors, the stack. he briefs anna and kai." },
      { n: "03", title: "draft", body: "team works overnight. inbox triaged, contracts queued, FAQ updates proposed. nothing sent without you." },
      { n: "04", title: "approve", body: "open the app at 8am. tap through the stand-up. coffee in hand. team executes in the office while you ship." },
    ],
  },
  pricing: {
    eyebrow: "▶ pricing",
    headlineLines: [
      "cheaper than a virtual assistant.",
      "never sleeps.",
      "asks better questions.",
    ],
    body: "A part-time virtual assistant (VA) costs $1,000+/month. vcom runs $49 and the team does not show up late. Compare to people, not to SaaS.",
    mostChosen: "most chosen",
    tiers: [
      {
        name: "free",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        price: "$0",
        sub: "/forever",
        pitch: "oliver only · top of funnel",
        features: ["oliver chief-of-staff", "limited workflows", "1 connected inbox", "no daily stand-up"],
        cta: "start free",
      },
      {
        name: "solo",
        bg: "var(--accent-yellow)",
        accent: "var(--ink-on-accent)",
        price: "$49",
        sub: "/month",
        pitch: "the whole team · what most founders pick",
        features: [
          "anna · kai · oliver — full team",
          "daily stand-up + spatial office",
          "all workflows · ~500 actions / mo",
          "gmail · slack · calendar · drive",
          "multilingual support",
        ],
        cta: "▶ join the beta",
        highlight: true,
      },
      {
        name: "studio",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        price: "soon",
        sub: "",
        pitch: "for solo studios with contractors",
        features: ["everything in solo", "unlimited actions", "priority support", "custom workflows + API access"],
        cta: "join waitlist",
      },
    ],
  },
  faq: {
    eyebrow: "▶ faq",
    headlineLines: ["questions", "founders ask", "on the demo call."],
    qLabel: "Q.",
    aLabel: "A.",
    items: [
      { q: "is this just chatgpt with characters on top?", a: "no. the daily stand-up and spatial office are what make it different. the model is just claude underneath." },
      { q: "do the agents do things without asking?", a: "no. you approve every send, every contract, every escalation." },
      { q: "what languages does it speak?", a: "english, traditional chinese, japanese. characters reply in whatever language you write in." },
      { q: "why not just hire a real virtual assistant?", a: "do both. a virtual assistant handles judgement calls. vcom handles the other 80% — at a fraction of the cost." },
      { q: "where does my data live?", a: "model calls go to anthropic. your data sits in postgres on our servers. full data residency details at beta launch." },
      { q: "what's on the roadmap?", a: "v2: finance + legal coworkers, voice replies, mobile app, deeper integrations." },
    ],
  },
  cta: {
    eyebrow: "▶ join the beta",
    headlineLines: ["solo founders", "wanted.", "first 100 only."],
    body: "3 months free. weekly 30-min feedback call. you help shape the three coworkers, we help clear your inbox.",
    emailLabel: "email",
    emailPlaceholder: "you@your-startup.com",
    submit: "▶ request access",
    fineprint: "no spam. quarterly note while we build. unsubscribe in one click.",
  },
  footer: {
    tagline: "a product by kairos.ai · for solo founders everywhere",
    links: [
      { href: "#team", label: "team" },
      { href: "#pricing", label: "pricing" },
      { href: "#faq", label: "faq" },
      { href: "mailto:hello@kairos.ai", label: "contact" },
    ],
    copyright: "© 2026 kairos.ai · game over? press start",
  },
};
