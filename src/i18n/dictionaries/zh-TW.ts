import type { Dict } from "@/i18n/types";

// 繁中 register: 不過於正式、也不裝熟。Character voices stay close to
// project plan §2 — they are the canonical source for Anna/Kai/Oliver
// in zh-TW.

export const zhTW: Dict = {
  meta: {
    title: "vcom — 一人公司的虛擬團隊",
    description:
      "Anna · Kai · Oliver。三位 AI 同事 — 人資、客服、營運長 — 給一人公司用。每日站立會議、空間辦公室、所有動作由你核准。",
  },
  nav: {
    links: [
      { href: "#team", label: "團隊" },
      { href: "#standup", label: "站立會議" },
      { href: "#office", label: "辦公室" },
      { href: "#pricing", label: "方案" },
      { href: "#faq", label: "常見問題" },
    ],
    cta: "▶ 加入 beta",
  },
  hero: {
    eyebrow: "▶ player 1 ready",
    headlineLines: ["五分鐘", "雇用一間", "虛擬公司"],
    body: "Anna 處理人資。Kai 清空你的收件匣。Oliver 統籌團隊。三位 AI 同事，為一人公司打造。他們起草、你核准。Press Start。",
    bullets: [
      "不再被聊天機器人疲勞轟炸 — 每天早上和團隊開站立會議",
      "在小小的像素辦公室裡，看著他們工作",
      "每個動作都由你核准，自主權需要被贏得",
    ],
    primaryCta: "▶ 加入 beta",
    secondaryCta: "看看站立會議",
    fineprint: "多語支援 · 核准優先 · 2026 上線",
    boardTag: "選擇你的團隊",
    boardSub: "stage 01 — onboarding",
    boardCaption:
      "早安。Kai 昨晚草擬了 8 封回覆，Anna 排了 1 份合約。隨時可以開始",
  },
  marquee: [
    "徵才中 · 只收一人公司",
    "Anna 起草合約",
    "Kai 清空收件匣",
    "Oliver 統籌團隊",
    "Press Start 開始",
    "核准優先 AI",
    "你掌握主導權",
  ],
  insight: {
    eyebrow: "▶ 核心洞察",
    headlineParts: {
      line1: "AI 工具讓人覺得",
      line2: "像軟體。",
      emphasis: "同事",
      rest: "讓人覺得像人。",
    },
    paragraphs: [
      "每個 AI app 都是一個聊天框。你打字、它回答、你關掉分頁。沒有人會把 ChatGPT 當成同事在談論。",
      "vcom 不是更聰明的 agent，而是 __HIGHLIGHT__ 的 agent：他們記得你、會主動跟進、彼此交接，也清楚自己不做什麼。",
      "「一人公司 + AI 團隊」的論述早就在繁中商業媒體中擴散。市場正在自我教育，我們只要成為他們找到的那個產品。",
    ],
    highlight: "感覺像一個團隊",
  },
  team: {
    eyebrow: "▶ 認識團隊",
    headline: "三位同事。三張辦公桌。零會議疲勞。",
    body: "每位角色都有名字、個性、職責範圍，以及在不屬於自己的事情上、清楚的人類交接路徑。",
    labels: { does: "負責", doesNot: "不負責", signature: "招牌動作" },
    cards: [
      {
        name: "ANNA",
        display: "安娜 · Anna",
        role: "HR 人資",
        bg: "var(--accent-pink)",
        tagline: "溫暖又有條理。記得每個人的生日，也記得哪位合作夥伴還沒簽 NDA。",
        does: [
          "用你的範本起草合約、NDA、服務協議",
          "帶新合作夥伴走完 onboarding 流程 + welcome packet",
          "人員資料庫：合作夥伴、報酬、開始日期、關鍵文件",
          "續約、生日、文件到期 — 在你忘記之前提醒你",
        ],
        doesNot: [
          "勞健保 / 二代健保 計算 — 標記給你的會計師",
          "薪資發放 — 交給你連接的薪資工具",
          "招募 / 終止合約決定 — 起草，由你決定",
        ],
        signature:
          "「下週預覽：林週二開始，welcome packet 已經放在你的收件匣等你確認」",
      },
      {
        name: "KAI",
        display: "小凱 · Kai",
        role: "CS 客服",
        bg: "var(--accent-blue)",
        tagline: "動作快、反應靈敏的第一線。學你的品牌口吻，幫你清空收件匣。",
        does: [
          "讀取 gmail / LINE OA / messenger / intercom",
          "用你的品牌口吻起草回覆",
          "從重複出現的問題自動更新 FAQ",
          "TW：發票 / 鑑賞期 / 退款 — 熟悉這些情境",
        ],
        doesNot: [
          "沒有你的核准，不會直接送出（v1）",
          "退款、帳號變更、任何牽涉到錢的事 — 標記為 escalation",
          "社群私訊（不同產品，下個階段）",
        ],
        signature:
          "「昨晚 12 封新 ticket。8 封草稿一鍵通過、3 封需要你看一下、1 封 escalation — 客戶提到法律行動」",
      },
      {
        name: "OLIVER",
        display: "奧利 · Oliver",
        role: "OPS · Chief of Staff",
        bg: "var(--accent-green)",
        tagline: "冷靜、簡短、很能幹。在幕後真正讓這個團隊運轉的人。",
        does: [
          "把模糊的需求路由到對的角色身上",
          "跑跨角色的工作流程 + 維護專案看板",
          "主持每日站立會議與週會回顧",
          "追蹤所有未結案的線，確保沒事情漏掉",
        ],
        doesNot: [
          "不做專業的執行 — 他協調、委派",
          "不做策略決定 — 提供選項，由你決定",
        ],
        signature:
          "「本週：1 個 onboarding 進行中（Anna 負責）、14 個 tickets（Kai 已起草）、3 個決定等你」",
      },
    ],
  },
  standup: {
    eyebrow: "▶ 早晨儀式",
    headlineLines: ["打開 app。", "見見團隊。", "核准今天。"],
    body: "聊天介面是最容易被抄的，也是最無聊的使用方式。vcom 的預設畫面，是 Oliver 60 秒的早晨簡報。",
    bullets: [
      "團隊昨晚做了什麼",
      "今天有什麼在等你核准",
      "今天有什麼即將發生",
      "Anna 或 Kai 有一兩個問題要問你",
    ],
    foot: "點擊核准。打字回應。不想打字就用語音回。90 秒以內、咖啡都還沒涼。",
    mockTag: "今日 · 08:14",
    mockSub: "☀ 週二 · 6 件",
    mockFoot: "其他事都可以等",
    mockComplete: "站立會議完成",
    items: [
      { who: "kai", bg: "var(--accent-blue)", text: "8 封草稿準備好了 · 1 封 escalation 已標記", action: "查看" },
      { who: "anna", bg: "var(--accent-pink)", text: "林的 NDA 已起草 · 等你簽核", action: "核准" },
      { who: "oliver", bg: "var(--accent-green)", text: "週五 4 點週會回顧 — 保留還是移動？", action: "保留" },
      { who: "anna", bg: "var(--accent-pink)", text: "陳的合約 12 天後到期 — 要起草續約嗎？", action: "好" },
    ],
  },
  office: {
    eyebrow: "▶ 空間辦公室",
    headlineLines: ["看著你的團隊工作。", "不是聊天記錄。"],
    body: "三張桌子。三位角色。一眼看完整個畫面。點角色可以深入。看著交接發生 — Anna 把合約走過去交給 Oliver、Oliver 開單追蹤。",
    states: [
      "閒置 — 喝著咖啡、沒在做事",
      "工作中 — 起草回覆、處理 ticket",
      "等你 — 有東西要核准",
      "協作中 — 兩個角色在同一張桌子",
    ],
    coda:
      "這是大家會截圖傳給朋友的畫面。其他工具不會做這個 — 對他們來說太脫離品牌定位。",
    mockTag: "辦公室 · 即時",
    mockOnline: "● 3 人在線",
    desks: [
      { name: "ANNA", label: "起草 NDA", state: "working", color: "var(--accent-pink)" },
      { name: "OLIVER", label: "協調中", state: "idle", color: "var(--accent-green)" },
      { name: "KAI", label: "需要你", state: "waiting", color: "var(--accent-red)" },
    ],
    handoffs: [
      { from: "ANNA", to: "OLIVER", msg: "林的 NDA → 建立追蹤單" },
      { from: "KAI", to: "你", msg: "客戶提到法律行動 — 需要你看一下" },
    ],
  },
  how: {
    eyebrow: "▶ 怎麼運作",
    headlineLines: ["5 分鐘雇用。", "每天 5 分鐘運轉。"],
    steps: [
      { n: "01", title: "連接", body: "gmail · LINE OA · google calendar · drive · stripe（唯讀）。手刻 OAuth，不要任何你沒料到的權限。" },
      { n: "02", title: "介紹", body: "用 3 分鐘告訴 Oliver 你的事業。品牌口吻、客戶類型、合作夥伴、技術棧。他會 brief 給 Anna 和 Kai。" },
      { n: "03", title: "起草", body: "團隊在你睡覺時工作。收件匣分類、合約排隊、FAQ 更新提案。沒有你的核准、什麼都不會送出。" },
      { n: "04", title: "核准", body: "早上 8 點打開 app。手指滑過站立會議。咖啡在手。團隊在辦公室執行，你出貨。" },
    ],
  },
  pricing: {
    eyebrow: "▶ 方案",
    headlineLines: ["比虛擬助理便宜。", "不會睡著。", "問問題比你更好。"],
    body: "兼職虛擬助理（VA，遠端外包人力）一個月要 NT$25,000+。vcom 一個月 NT$1,490，而且團隊不會遲到。和人比、不要和 SaaS 比。",
    mostChosen: "最多人選",
    tiers: [
      {
        name: "免費",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        price: "NT$0",
        sub: "/永久",
        pitch: "只有 Oliver · 漏斗最上層",
        features: ["Oliver chief-of-staff", "有限工作流程", "1 個連接收件匣", "無每日站立會議"],
        cta: "免費開始",
      },
      {
        name: "Solo",
        bg: "var(--accent-yellow)",
        accent: "var(--ink-on-accent)",
        price: "NT$1,490",
        sub: "/月",
        pitch: "整個團隊 · 大多數創業者選的方案",
        features: [
          "Anna · Kai · Oliver — 完整團隊",
          "每日站立會議 + 空間辦公室",
          "所有工作流程 · 約 500 個動作 / 月",
          "gmail · LINE OA · 行事曆 · drive",
          "繁中 + 英文",
        ],
        cta: "▶ 加入 beta",
        highlight: true,
      },
      {
        name: "Studio",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        price: "即將推出",
        sub: "",
        pitch: "給有合作夥伴的個人工作室",
        features: ["所有 Solo 功能", "無限動作", "優先支援", "自訂工作流程 + API"],
        cta: "加入候補名單",
      },
    ],
  },
  faq: {
    eyebrow: "▶ 常見問題",
    headlineLines: ["創業者", "在 demo 時", "問的問題。"],
    qLabel: "Q.",
    aLabel: "A.",
    items: [
      { q: "這不就是 ChatGPT 套個角色嗎？", a: "不是。每日站立會議和空間辦公室才是差別。模型只是底層的 Claude。" },
      { q: "agent 會自己做事嗎？", a: "不會。每一次發送、每一份合約、每一個 escalation 都要你核准。" },
      { q: "支援哪些語言？", a: "英文、繁中、日文。你用什麼語言寫，角色就用什麼語言回。" },
      { q: "為什麼不直接請虛擬助理？", a: "兩個都用。虛擬助理處理判斷型工作。vcom 處理另外 80% — 一小部分的成本。" },
      { q: "我的資料放在哪裡？", a: "模型呼叫送到 Anthropic。資料存在我們的 Postgres 上。完整的資料居留地細節會在 beta 上線時公布。" },
      { q: "之後的 roadmap？", a: "v2：財務 + 法律同事、語音回覆、行動 app、更深的整合。" },
    ],
  },
  cta: {
    eyebrow: "▶ 加入 beta",
    headlineLines: ["徵求", "創業者。", "前 100 名。"],
    body: "3 個月免費。每週 30 分鐘 繁中 回饋通話。你幫我們塑造這三位同事，我們幫你清空收件匣。",
    emailLabel: "電子郵件",
    emailPlaceholder: "you@your-startup.com",
    submit: "▶ 申請使用",
    fineprint: "不發垃圾信。產品開發中、每季一封信。一鍵取消訂閱。",
  },
  footer: {
    tagline: "kairos.ai 出品 · 給世界各地的一人公司",
    links: [
      { href: "#team", label: "團隊" },
      { href: "#pricing", label: "方案" },
      { href: "#faq", label: "FAQ" },
      { href: "mailto:hello@kairos.ai", label: "聯絡" },
    ],
    copyright: "© 2026 kairos.ai · game over? press start",
  },
};
