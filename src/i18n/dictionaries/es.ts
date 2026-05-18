import type { Dict } from "@/i18n/types";

// Español neutral (Latam/España friendly): tuteo, sin localismos fuertes.
// Production polish should be revisited by a native ES editor.

export const es: Dict = {
  meta: {
    title: "vcom — la compañía virtual para fundadores en solitario",
    description:
      "Anna · Kai · Oliver. Tres compañeros de trabajo con IA — operaciones, soporte y jefe de gabinete — para fundadores en solitario. Stand-up diario, oficina espacial, todo bajo tu aprobación.",
  },
  nav: {
    links: [
      { href: "#team", label: "equipo" },
      { href: "#standup", label: "stand-up" },
      { href: "#office", label: "oficina" },
      { href: "#pricing", label: "precios" },
      { href: "#faq", label: "faq" },
    ],
    cta: "▶ entrar a la beta",
  },
  hero: {
    eyebrow: "▶ player 1 ready",
    headlineLines: ["tres compañeros con ia", "para la empresa de uno"],
    subhead:
      "Anna lleva las operaciones. Kai vacía tu bandeja de entrada. Oliver dirige al equipo. Ellos redactan. Tú apruebas. Pulsa start.",
    features: [
      "stand-up diario — no otra ventana de chat",
      "míralos trabajar en una oficina pixel",
      "aprobación primero — la autonomía se gana",
    ],
    primaryCta: "▶ prueba 14 días gratis",
    primaryCtaNote: "sin tarjeta",
    secondaryCta: "ver el stand-up",
    trustLine: "sin tarjeta · 14 días con el equipo completo · luego baja a gratis, nunca desaparece",
    sceneAria:
      "oficina pixel animada: tres escritorios. Anna a la izquierda con un café, Kai en el centro con un pulso «te necesita», Oliver a la derecha frente a un monitor CRT. Un documento viaja del escritorio de Anna al de Oliver, representando un traspaso.",
  },
  marquee: [
    "se busca · solo fundadores en solitario",
    "Anna redacta contratos",
    "Kai vacía bandejas de entrada",
    "Oliver dirige al equipo",
    "pulsa start para jugar",
    "IA con aprobación primero",
    "tú mantienes el control",
  ],
  insight: {
    eyebrow: "▶ insight",
    headlineLines: [
      "las herramientas de ia parecen software.",
      "los compañeros de trabajo parecen personas.",
    ],
    paragraph:
      "Cada app de IA es una caja de chat: escribes, responde, cierras la pestaña. vcom es la forma opuesta. Los tres compañeros te recuerdan, se traspasan tareas entre sí, saben qué no hacen y se presentan a las 8 a. m. abras o no la app. Esa diferencia aparece en cómo hablas de ellos.",
    callout:
      "no dices «hoy abrí ChatGPT». Dices «Kai vació la bandeja y Anna detectó un patrón de reembolsos».",
  },
  team: {
    eyebrow: "▶ conoce al equipo",
    headline: "tres compañeros. tres escritorios. cero fatiga de reuniones.",
    body: "Cada personaje tiene nombre, personalidad, alcance y un traspaso claro a un humano cuando algo se sale de su carril.",
    labels: { does: "hace", doesNot: "no hace", signature: "movimiento estrella" },
    cards: [
      {
        name: "ANNA",
        display: "Anna",
        role: "OPERACIONES / PEOPLE",
        bg: "var(--accent-pink)",
        tagline:
          "Cálida y organizada. Recuerda cada decisión de política y la fecha de inicio de cada colaborador.",
        does: [
          "redacta políticas, flujos de reembolso, actualizaciones de ToS",
          "atiende los casos límite que Kai escala",
          "lleva fechas clave: renovaciones de dominio, SOC 2, declaraciones",
          "contratos con colaboradores y onboarding cuando contratas",
        ],
        doesNot: [
          "asesoría legal o fiscal — la marca para tu contador",
          "tocar pagos, nómina ni mover dinero",
          "decisiones de contratar/despedir — redacta, tú decides",
        ],
        signature:
          "«tercer reembolso este mes citando la ventana de 30 días. Tu ToS dice 14. ¿Te redacto una actualización de la política?»",
      },
      {
        name: "KAI",
        display: "Kai",
        role: "SOPORTE",
        bg: "var(--accent-blue)",
        tagline:
          "Rápido, amable, aprende la voz de tu marca. Vacía tu bandeja de entrada.",
        does: [
          "lee gmail / github / slack / discord",
          "detecta cargos fallidos de Stripe y redacta la recuperación",
          "redacta respuestas con la voz de tu marca",
          "FAQ que se autoactualiza con las preguntas recurrentes",
        ],
        doesNot: [
          "enviar respuestas sin tu aprobación (v1)",
          "emitir reembolsos ni tocar dinero — escala",
          "DMs en redes sociales (otro producto, más adelante)",
        ],
        signature:
          "«12 tickets durante la noche. 8 borradores listos para enviar. 1 escalación — el cliente mencionó acciones legales.»",
      },
      {
        name: "OLIVER",
        display: "Oliver",
        role: "OPERACIONES · Jefe de Gabinete",
        bg: "var(--accent-green)",
        tagline:
          "Calmado, seco, altamente competente. El que realmente hace funcionar al equipo.",
        does: [
          "enruta solicitudes ambiguas al personaje adecuado",
          "ejecuta flujos entre personajes y mantiene el tablero",
          "facilita el stand-up diario y la revisión semanal",
          "rastrea hilos abiertos para que nada se cuele",
        ],
        doesNot: [
          "trabajo especializado por sí mismo — coordina, delega",
          "decisiones estratégicas — da opciones, tú decides",
        ],
        signature:
          "«esta semana: 1 onboarding (Anna), 14 tickets (Kai redactó), 3 decisiones esperándote.»",
      },
    ],
  },
  standup: {
    eyebrow: "▶ el ritual matutino",
    headlineLines: ["abre la app.", "saluda al equipo.", "aprueba el día."],
    body: "El chat como interfaz es lo más fácil de copiar y lo más aburrido de usar. La pantalla por defecto en vcom es un briefing de 60 segundos de Oliver.",
    bullets: [
      "qué hizo el equipo durante la noche",
      "qué espera tu aprobación",
      "qué viene hoy",
      "una o dos preguntas de Anna o Kai",
    ],
    foot: "Toca para aprobar. Escribe para corregir. Responde por voz si no quieres tipear. Listo en menos de 90 segundos antes de tu café.",
    mockTag: "hoy · 08:14",
    mockSub: "☀ mar · 5 items",
    mockFoot: "lo demás puede esperar",
    mockComplete: "stand-up completado",
    items: [
      { who: "kai", bg: "var(--accent-blue)", text: "8 borradores listos · 1 contracargo señalado", action: "revisar" },
      { who: "kai", bg: "var(--accent-blue)", text: "stripe: 2 renovaciones fallidas anoche — recuperación redactada", action: "enviar" },
      { who: "anna", bg: "var(--accent-pink)", text: "actualización de política de reembolso redactada (3.ª solicitud de 30 días este mes)", action: "aprobar" },
      { who: "oliver", bg: "var(--accent-green)", text: "github: 4 issues nuevos triados, 1 necesita tu criterio", action: "abrir" },
      { who: "anna", bg: "var(--accent-pink)", text: "el dominio kairosaitech.com renueva en 7 días — la tarjeta vence en 4", action: "arreglar" },
    ],
  },
  office: {
    eyebrow: "▶ la oficina espacial",
    headlineLines: ["mira a tu equipo trabajar.", "no un log de chat."],
    body: "Tres escritorios. Tres personajes. Una escena que asimilas de un vistazo. Pasa el cursor por un escritorio para ver qué hace cada uno. Anna le lleva un documento a Oliver, Kai parpadea cuando algo necesita tus ojos.",
    states: [
      "inactivo — tomando café",
      "trabajando — redactando, procesando",
      "esperándote — necesita aprobación",
      "colaborando — dos en un escritorio",
    ],
    coda: "esta es la pantalla que la gente captura. ese es el punto.",
    mockTag: "oficina · en vivo",
    mockOnline: "● 3 en línea",
    desks: [
      { name: "ANNA", label: "redactando política de reembolso", state: "working", color: "var(--accent-pink)" },
      { name: "OLIVER", label: "facilitando", state: "idle", color: "var(--accent-green)" },
      { name: "KAI", label: "te necesita — contracargo", state: "waiting", color: "var(--accent-red)" },
    ],
    handoffs: [
      { from: "ANNA", to: "OLIVER", msg: "política de reembolso → programar anuncio" },
      { from: "KAI", to: "TÚ", msg: "contracargo de cliente de $499 — necesita tu mirada" },
    ],
  },
  how: {
    eyebrow: "▶ cómo funciona",
    headlineLines: ["5 minutos para contratar.", "5 minutos al día para operar."],
    steps: [
      { n: "01", title: "conecta", body: "gmail · stripe · github · slack · discord · calendar · drive. OAuth hecho a mano, solo los permisos que esperarías." },
      { n: "02", title: "presenta", body: "cuéntale a Oliver tu negocio en 3 minutos. voz de marca, tipos de clientes, colaboradores, stack. Él pone al día a Anna y a Kai." },
      { n: "03", title: "redacta", body: "el equipo trabaja de noche. bandeja triada, contratos en cola, FAQ actualizado. Nada se envía sin ti." },
      { n: "04", title: "aprueba", body: "abre la app a las 8 a. m. Pasa por el stand-up. Café en mano. El equipo ejecuta en la oficina mientras tú envías producto." },
    ],
  },
  pricing: {
    eyebrow: "▶ precios",
    headlineLines: [
      "elige un plan.",
      "empieza la prueba.",
      "sin tarjeta.",
    ],
    body: "Equipo completo durante 14 días. Luego baja a gratis, nunca desaparece. El equipo está ahí cuando vuelves.",
    billing: {
      monthlyLabel: "mensual",
      annualLabel: "anual -20%",
    },
    tiers: [
      {
        id: "free",
        name: "gratis",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$0", sub: "/siempre" },
        annual: { price: "$0", sub: "/siempre" },
        pitch: "solo oliver",
        features: [
          { glyph: "✓", text: "oliver" },
          { glyph: "✓", text: "1 bandeja de entrada" },
          { glyph: "✓", text: "50 acciones / mes" },
          { glyph: "✗", text: "sin stand-up" },
        ],
        cta: "empezar gratis",
        ctaHref: "#waitlist",
      },
      {
        id: "solo",
        name: "solo",
        bg: "var(--accent-yellow)",
        accent: "var(--ink-on-accent)",
        monthly: { price: "$89", sub: "/mes" },
        annual: { price: "$852", sub: "/año", note: "$71 / mes · ahorra 20%" },
        pitch: "para la empresa de uno",
        features: [
          { glyph: "✓", text: "equipo completo — anna + kai + oliver" },
          { glyph: "✓", text: "stand-up diario" },
          { glyph: "✓", text: "oficina espacial" },
          { glyph: "✓", text: "todas las integraciones" },
          { glyph: "✓", text: "multilingüe" },
          { glyph: "✓", text: "soporte por email" },
        ],
        cta: "empezar prueba",
        ctaHref: "#waitlist",
        highlight: true,
        badge: "▶ empieza aquí",
      },
      {
        id: "studio",
        name: "studio",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$199", sub: "/mes" },
        annual: { price: "$1,908", sub: "/año", note: "$159 / mes · ahorra 20%" },
        addon: "+ $29 / asiento",
        pitch: "para equipos pequeños",
        features: [
          { glyph: "✓", text: "todo lo de solo" },
          { glyph: "✓", text: "acciones ilimitadas" },
          { glyph: "✓", text: "gestión de colaboradores" },
          { glyph: "✓", text: "acceso a la API" },
          { glyph: "✓", text: "soporte prioritario" },
          { glyph: "✓", text: "suma asientos cuando crezcas" },
        ],
        cta: "empezar prueba",
        ctaHref: "#waitlist",
      },
    ],
    footnote: "14 días, equipo completo, sin tarjeta. baja a gratis si no actualizas.",
    enterprise: { text: "¿equipo más grande? hablemos →", href: "mailto:hello@kairos.ai" },
  },
  faq: {
    eyebrow: "▶ faq",
    headlineLines: ["preguntas", "de fundadores indie", "antes de la prueba."],
    qLabel: "P.",
    aLabel: "R.",
    items: [
      {
        q: "¿en qué se diferencia de ChatGPT o Claude con un prompt?",
        a: "en el stand-up diario y la oficina espacial. el modelo por debajo es Claude — lo distinto es que el equipo te recuerda, se traspasa tareas entre sí y aparece a las 8 a. m. abras o no la app.",
      },
      {
        q: "¿funciona con GitHub / Stripe / Discord?",
        a: "sí. triage de issues en github, recuperación de cargos fallidos en stripe, lectura y borradores en discord. también gmail y slack. lista completa en /integrations.",
      },
      {
        q: "¿los agentes hacen cosas sin pedir permiso?",
        a: "no. apruebas cada envío, cada actualización de política, cada escalación. el modo de acciones confiables llegará después para quien lo quiera.",
      },
      {
        q: "¿qué pasa con la prueba de 14 días — pide tarjeta?",
        a: "sin tarjeta. equipo completo durante 14 días. el día 15, Anna y Kai se retiran y bajas al plan gratuito de solo Oliver. el equipo sigue ahí cuando quieras volver.",
      },
      {
        q: "¿qué pasa si lo dejo solo una semana?",
        a: "Oliver sigue redactando, nada se envía. cuando vuelves, el stand-up resume la semana en lugar de una sola mañana.",
      },
      {
        q: "¿dónde vive mi data?",
        a: "llamadas al modelo en anthropic. tu data en postgres en aws us-east-1. SOC 2 en proceso. detalles completos en /security.",
      },
      {
        q: "¿qué viene en el roadmap?",
        a: "v2: compañeros de finanzas y crecimiento, respuestas por voz, app móvil, integraciones más profundas con github + linear.",
      },
    ],
  },
  cta: {
    eyebrow: "▶ entra a la beta",
    headlineLines: ["se buscan", "fundadores en solitario.", "primeros 100 lugares."],
    body: "Prueba de 14 días con el equipo completo. Llamada de onboarding de 30 min si la quieres. Tú ayudas a moldear a los tres compañeros, nosotros vaciamos tu bandeja.",
    emailLabel: "email",
    emailPlaceholder: "tu@tu-startup.com",
    submit: "▶ solicitar acceso",
    fineprint: "sin spam. una nota cada trimestre mientras construimos. cancelas con un clic.",
  },
  footer: {
    tagline: "un producto de kairos.ai · para la empresa de uno",
    links: [
      { href: "#team", label: "equipo" },
      { href: "#pricing", label: "precios" },
      { href: "#faq", label: "faq" },
      { href: "/integrations", label: "integraciones" },
      { href: "/security", label: "seguridad" },
      { href: "mailto:hello@kairos.ai", label: "contacto" },
    ],
    crtOn: "crt: on",
    crtOff: "crt: off",
    copyright: "© 2026 kairos.ai · game over? pulsa start",
  },
};
