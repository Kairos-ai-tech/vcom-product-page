import type { Dict } from "@/i18n/types";

// Français standard, ton tutoyant et direct comme l'EN. À repasser par un
// éditeur natif avant le launch (notamment les CTA et la voix Oliver).

export const fr: Dict = {
  meta: {
    title: "vcom — la société virtuelle pour fondateurs en solo",
    description:
      "Anna · Kai · Oliver. Trois collègues IA — ops, support, chief of staff — pour fondateurs en solo. Stand-up quotidien, bureau spatial, tout passe par ton approbation.",
  },
  nav: {
    links: [
      { href: "#team", label: "équipe" },
      { href: "#standup", label: "stand-up" },
      { href: "#office", label: "bureau" },
      { href: "#pricing", label: "tarifs" },
      { href: "#faq", label: "faq" },
    ],
    cta: "▶ rejoindre la beta",
  },
  hero: {
    eyebrow: "▶ player 1 ready",
    headlineLines: ["trois collègues ia", "pour l'entreprise d'un seul"],
    subhead:
      "Anna gère les ops. Kai vide ta boîte mail. Oliver fait tourner l'équipe. Ils rédigent. Tu valides. Appuie sur start.",
    features: [
      "stand-up quotidien — plus une simple fenêtre de chat",
      "regarde-les bosser dans un bureau pixel",
      "validation d'abord — l'autonomie, ça se gagne",
    ],
    primaryCta: "▶ essai 14 jours gratuit",
    primaryCtaNote: "sans carte",
    secondaryCta: "voir le stand-up",
    trustLine: "sans carte · 14 jours équipe complète · puis bascule en gratuit, jamais ne disparaît",
    sceneAria:
      "bureau pixel animé : trois bureaux. Anna à gauche avec un café, Kai au milieu avec un pulse « besoin de toi », Oliver à droite devant un écran CRT. Un document passe du bureau d'Anna à celui d'Oliver, illustrant un relais.",
  },
  marquee: [
    "on recrute · fondateurs en solo uniquement",
    "Anna rédige les contrats",
    "Kai vide la boîte mail",
    "Oliver fait tourner l'équipe",
    "appuie sur start pour jouer",
    "IA validation d'abord",
    "tu gardes le contrôle",
  ],
  insight: {
    eyebrow: "▶ insight",
    headlineLines: [
      "les outils ia ressemblent à des logiciels.",
      "les collègues ressemblent à des personnes.",
    ],
    paragraph:
      "Chaque app IA est une fenêtre de chat — tu tapes, ça répond, tu fermes l'onglet. vcom prend la forme inverse. Les trois collègues se souviennent de toi, se passent les dossiers, savent ce qu'ils ne font pas et débarquent à 8h que tu ouvres l'app ou non. Cette différence se voit dans ta façon d'en parler.",
    callout:
      "tu ne dis pas « j'ai ouvert ChatGPT aujourd'hui ». Tu dis « Kai a vidé la boîte et Anna a repéré un schéma de remboursement ».",
  },
  team: {
    eyebrow: "▶ rencontre l'équipe",
    headline: "trois collègues. trois bureaux. zéro fatigue de réunions.",
    body: "Chaque personnage a un nom, une personnalité, un périmètre et un relais humain clair quand quelque chose sort de sa zone.",
    labels: { does: "fait", doesNot: "ne fait pas", signature: "mouvement signature" },
    cards: [
      {
        name: "ANNA",
        display: "Anna",
        role: "OPS / PEOPLE",
        bg: "var(--accent-pink)",
        tagline:
          "Chaleureuse et organisée. Se souvient de chaque décision de politique et de la date d'arrivée de chaque freelance.",
        does: [
          "rédige les politiques client, les flux de remboursement, les màj des CGU",
          "gère les cas limites que Kai fait remonter",
          "suit les dates clés : renouvellements de domaine, SOC 2, déclarations",
          "contrats freelances + onboarding quand tu embauches",
        ],
        doesNot: [
          "conseil juridique ou fiscal — relais comptable",
          "toucher aux paiements, à la paie ou aux mouvements d'argent",
          "décisions d'embauche/rupture — rédige, tu décides",
        ],
        signature:
          "« 3e demande de remboursement ce mois-ci citant la fenêtre de 30 jours. Tes CGU disent 14. Je te rédige une màj de la politique ? »",
      },
      {
        name: "KAI",
        display: "Kai",
        role: "SUPPORT",
        bg: "var(--accent-blue)",
        tagline:
          "Rapide, sympa, apprend la voix de ta marque. Vide ta boîte mail.",
        does: [
          "lit gmail / github / slack / discord",
          "détecte les paiements Stripe échoués, rédige la relance",
          "rédige des réponses dans la voix de ta marque",
          "FAQ qui s'auto-met à jour depuis les questions récurrentes",
        ],
        doesNot: [
          "envoyer sans ton approbation (v1)",
          "émettre des remboursements ni toucher à l'argent — escalade",
          "DMs des réseaux sociaux (autre produit, plus tard)",
        ],
        signature:
          "« 12 tickets cette nuit. 8 brouillons prêts à envoyer. 1 escalade — la cliente a évoqué une action en justice. »",
      },
      {
        name: "OLIVER",
        display: "Oliver",
        role: "OPS · Chief of Staff",
        bg: "var(--accent-green)",
        tagline:
          "Calme, pince-sans-rire, hautement compétent. Celui qui fait vraiment tourner l'équipe.",
        does: [
          "route les demandes floues vers le bon personnage",
          "exécute les workflows inter-personnages + le board projet",
          "anime le stand-up quotidien et la revue hebdo",
          "suit les sujets ouverts pour que rien ne passe à la trappe",
        ],
        doesNot: [
          "travail spécialisé lui-même — il coordonne, délègue",
          "décisions stratégiques — propose des options, tu décides",
        ],
        signature:
          "« cette semaine : 1 onboarding (Anna), 14 tickets (Kai a rédigé), 3 décisions qui t'attendent. »",
      },
    ],
  },
  standup: {
    eyebrow: "▶ le rituel du matin",
    headlineLines: ["ouvre l'app.", "salue l'équipe.", "valide la journée."],
    body: "Le chat comme interface, c'est ce qui se copie le plus facilement et qui ennuie le plus. L'écran par défaut de vcom est un briefing de 60 secondes signé Oliver.",
    bullets: [
      "ce que l'équipe a fait cette nuit",
      "ce qui attend ton approbation",
      "ce qui arrive aujourd'hui",
      "une ou deux questions d'Anna ou Kai",
    ],
    foot: "Tape pour approuver. Écris pour recadrer. Réponds en vocal si tu n'as pas envie d'écrire. Bouclé en moins de 90 secondes, avant le café.",
    mockTag: "aujourd'hui · 08:14",
    mockSub: "☀ mar · 5 items",
    mockFoot: "le reste peut attendre",
    mockComplete: "stand-up terminé",
    items: [
      { who: "kai", bg: "var(--accent-blue)", text: "8 brouillons prêts · 1 chargeback signalé", action: "examiner" },
      { who: "kai", bg: "var(--accent-blue)", text: "stripe : 2 renouvellements ratés cette nuit — relance rédigée", action: "envoyer" },
      { who: "anna", bg: "var(--accent-pink)", text: "màj de la politique de remboursement rédigée (3e demande 30 jours du mois)", action: "approuver" },
      { who: "oliver", bg: "var(--accent-green)", text: "github : 4 nouveaux issues triés, 1 demande ton arbitrage", action: "ouvrir" },
      { who: "anna", bg: "var(--accent-pink)", text: "le domaine kairosaitech.com se renouvelle dans 7 jours — la carte expire dans 4", action: "régler" },
    ],
  },
  office: {
    eyebrow: "▶ le bureau spatial",
    headlineLines: ["regarde ton équipe bosser.", "pas un log de chat."],
    body: "Trois bureaux. Trois personnages. Une scène que tu saisis d'un coup d'œil. Survole un bureau pour voir ce que chacun fait là maintenant. Anna apporte un document à Oliver, Kai clignote quand quelque chose réclame tes yeux.",
    states: [
      "inactif — sirote un café",
      "au travail — rédige, traite",
      "t'attend — besoin d'approbation",
      "en binôme — deux au même bureau",
    ],
    coda: "c'est l'écran que les gens screenshotent. c'est le but.",
    mockTag: "bureau · live",
    mockOnline: "● 3 en ligne",
    desks: [
      { name: "ANNA", label: "rédige la politique de remboursement", state: "working", color: "var(--accent-pink)" },
      { name: "OLIVER", label: "anime", state: "idle", color: "var(--accent-green)" },
      { name: "KAI", label: "t'attend — chargeback", state: "waiting", color: "var(--accent-red)" },
    ],
    handoffs: [
      { from: "ANNA", to: "OLIVER", msg: "politique de remboursement → planifier l'annonce" },
      { from: "KAI", to: "TOI", msg: "chargeback d'un client à 499 $ — à examiner" },
    ],
  },
  how: {
    eyebrow: "▶ comment ça marche",
    headlineLines: ["5 minutes pour embaucher.", "5 minutes par jour pour piloter."],
    steps: [
      { n: "01", title: "connecte", body: "gmail · stripe · github · slack · discord · calendar · drive. OAuth fait main, uniquement les scopes auxquels tu t'attends." },
      { n: "02", title: "présente", body: "raconte ton business à Oliver en 3 minutes. voix de marque, types de clients, freelances, stack. Il briefe Anna et Kai." },
      { n: "03", title: "rédige", body: "l'équipe bosse pendant la nuit. boîte mail triée, contrats en file, FAQ proposées. rien ne part sans toi." },
      { n: "04", title: "valide", body: "ouvre l'app à 8h. tape à travers le stand-up. café en main. L'équipe exécute au bureau pendant que tu shippes." },
    ],
  },
  pricing: {
    eyebrow: "▶ tarifs",
    headlineLines: [
      "choisis un plan.",
      "lance l'essai.",
      "sans carte.",
    ],
    body: "Équipe complète pendant 14 jours. Puis bascule en gratuit, ne disparaît jamais. L'équipe est là quand tu reviens.",
    billing: {
      monthlyLabel: "mensuel",
      annualLabel: "annuel -20%",
    },
    tiers: [
      {
        id: "free",
        name: "gratuit",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$0", sub: "/à vie" },
        annual: { price: "$0", sub: "/à vie" },
        pitch: "oliver seul",
        features: [
          { glyph: "✓", text: "oliver" },
          { glyph: "✓", text: "1 boîte mail" },
          { glyph: "✓", text: "50 actions / mois" },
          { glyph: "✗", text: "pas de stand-up" },
        ],
        cta: "démarrer gratuit",
        ctaHref: "#waitlist",
      },
      {
        id: "solo",
        name: "solo",
        bg: "var(--accent-yellow)",
        accent: "var(--ink-on-accent)",
        monthly: { price: "$89", sub: "/mois" },
        annual: { price: "$852", sub: "/an", note: "$71 / mois · -20%" },
        pitch: "pour l'entreprise d'un seul",
        features: [
          { glyph: "✓", text: "équipe complète — anna + kai + oliver" },
          { glyph: "✓", text: "stand-up quotidien" },
          { glyph: "✓", text: "bureau spatial" },
          { glyph: "✓", text: "toutes les intégrations" },
          { glyph: "✓", text: "multilingue" },
          { glyph: "✓", text: "support par email" },
        ],
        cta: "démarrer l'essai",
        ctaHref: "#waitlist",
        highlight: true,
        badge: "▶ commence ici",
      },
      {
        id: "studio",
        name: "studio",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$199", sub: "/mois" },
        annual: { price: "$1,908", sub: "/an", note: "$159 / mois · -20%" },
        addon: "+ $29 / siège",
        pitch: "pour les petites équipes",
        features: [
          { glyph: "✓", text: "tout solo" },
          { glyph: "✓", text: "actions illimitées" },
          { glyph: "✓", text: "gestion des freelances" },
          { glyph: "✓", text: "accès API" },
          { glyph: "✓", text: "support prioritaire" },
          { glyph: "✓", text: "ajoute des sièges au fil de la croissance" },
        ],
        cta: "démarrer l'essai",
        ctaHref: "#waitlist",
      },
    ],
    footnote: "14 jours, équipe complète, sans carte. bascule en gratuit si tu ne passes pas au payant.",
    enterprise: { text: "équipe plus grande ? parlons →", href: "mailto:hello@kairos.ai" },
  },
  faq: {
    eyebrow: "▶ faq",
    headlineLines: ["les questions", "des fondateurs indie", "avant l'essai."],
    qLabel: "Q.",
    aLabel: "R.",
    items: [
      {
        q: "en quoi c'est différent de ChatGPT ou Claude avec un prompt ?",
        a: "le stand-up quotidien et le bureau spatial. le modèle en dessous, c'est juste Claude — la différence, c'est que l'équipe se souvient de toi, se passe les dossiers et débarque à 8h que tu ouvres l'app ou non.",
      },
      {
        q: "ça fonctionne avec GitHub / Stripe / Discord ?",
        a: "oui. triage des issues github, relance des paiements échoués stripe, lecture + brouillons discord. gmail et slack aussi. liste complète sur /integrations.",
      },
      {
        q: "les agents font des choses sans demander ?",
        a: "non. tu valides chaque envoi, chaque màj de politique, chaque escalade. un mode actions de confiance arrivera plus tard pour celles et ceux qui le veulent.",
      },
      {
        q: "l'essai 14 jours — il faut une carte ?",
        a: "sans carte. équipe complète pendant 14 jours. au 15e jour, Anna et Kai partent et tu bascules sur le plan gratuit à vie avec Oliver seul. l'équipe t'attend quand tu reviens.",
      },
      {
        q: "et si je laisse tomber pendant une semaine ?",
        a: "Oliver continue à rédiger, rien n'est envoyé. quand tu reviens, le stand-up résume la semaine au lieu d'une seule matinée.",
      },
      {
        q: "où sont stockées mes données ?",
        a: "appels modèle chez anthropic. tes données en postgres sur aws us-east-1. SOC 2 en cours. tous les détails sur /security.",
      },
      {
        q: "c'est quoi la roadmap ?",
        a: "v2 : collègues finance + growth, réponses vocales, app mobile, intégrations github + linear plus poussées.",
      },
    ],
  },
  cta: {
    eyebrow: "▶ rejoins la beta",
    headlineLines: ["fondateurs en solo", "recherchés.", "100 premières places."],
    body: "Essai 14 jours équipe complète. Call d'onboarding de 30 min si tu veux. Tu nous aides à façonner les trois collègues, on vide ta boîte.",
    emailLabel: "email",
    emailPlaceholder: "toi@ta-startup.com",
    submit: "▶ demander l'accès",
    fineprint: "pas de spam. une note par trimestre pendant qu'on construit. désinscription en un clic.",
  },
  footer: {
    tagline: "un produit kairos.ai · pour l'entreprise d'un seul",
    links: [
      { href: "#team", label: "équipe" },
      { href: "#pricing", label: "tarifs" },
      { href: "#faq", label: "faq" },
      { href: "/integrations", label: "intégrations" },
      { href: "/security", label: "sécurité" },
      { href: "mailto:hello@kairos.ai", label: "contact" },
    ],
    crtOn: "crt : on",
    crtOff: "crt : off",
    copyright: "© 2026 kairos.ai · game over ? appuie sur start",
  },
};
