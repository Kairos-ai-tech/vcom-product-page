import type { Dict } from "@/i18n/types";

// 繁中 register: 不過於正式、也不裝熟。Character voices stay close to
// project plan §2 — they are the canonical source for Anna/Kai/Oliver
// in zh-TW.

export const zhTW: Dict = {
  meta: {
    title: "vcom — 一人公司的虛擬團隊",
    description:
      "Anna · Kai · Oliver。三位 AI 同事 — 營運、客服、營運長 — 給一人公司用。每日站立會議、空間辦公室、所有動作由你核准。",
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
    headlineLines: ["三位 AI 同事", "為一人公司而生"],
    subhead:
      "Anna 跑營運。Kai 清你的收件匣。Oliver 帶整支團隊。他們起草。你核准。按下開始。",
    features: [
      "每日站立會議 — 不再只是聊天框",
      "在像素辦公室裡看著他們工作",
      "核准優先 — 自主權靠累積",
    ],
    primaryCta: "▶ 開始 14 天試用",
    primaryCtaNote: "不需信用卡",
    secondaryCta: "看看站立會議",
    trustLine: "免信用卡 · 14 天完整團隊 · 之後降為免費,永不消失",
    sceneAria:
      "動畫像素辦公室:三張桌子。Anna 在左邊喝咖啡,Kai 在中間有「需要你」的閃爍提示,Oliver 在右邊 CRT 螢幕前。一份文件從 Anna 的桌子移到 Oliver 的桌子,代表一次交接。",
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
    headlineLines: [
      "AI 工具感覺像軟體。",
      "同事感覺像人。",
    ],
    paragraph:
      "每個 AI app 都是一個聊天框 — 你打字、它回答、你關掉分頁。vcom 是相反的形狀。三位同事會記得你、彼此交接、知道自己不做什麼,而且早上 8 點準時上線,不管你有沒有打開 app。這個差異,會反映在你怎麼談論他們。",
    callout:
      "你不會說「我今天打開了 ChatGPT」。你會說「Kai 清空了收件匣、Anna 標出了一個退款規律」。",
  },
  team: {
    eyebrow: "▶ 認識團隊",
    headline: "三位同事。三張辦公桌。零會議疲勞。",
    body: "每位角色都有名字、個性、職責範圍,以及在不屬於自己的事情上、清楚的人類交接路徑。",
    labels: { does: "負責", doesNot: "不負責", signature: "招牌動作" },
    cards: [
      {
        name: "ANNA",
        display: "安娜 · Anna",
        role: "營運 / 人事",
        bg: "var(--accent-pink)",
        tagline:
          "溫暖又有條理。記得每一條政策決定、每位合作夥伴的開始日期。",
        does: [
          "起草客服政策、退款流程、ToS 更新",
          "處理 Kai 標記上來的邊緣客服情境",
          "追蹤重要日期:網域續約、SOC 2、報表",
          "雇用合作夥伴時,起草合約 + onboarding",
        ],
        doesNot: [
          "法律或稅務建議 — 標記給你的會計師",
          "碰金流、薪資、任何牽涉到錢的事",
          "聘僱 / 解僱決定 — 起草,由你決定",
        ],
        signature:
          "「這個月第三筆退款請求引用 30 天條款。你的 ToS 寫 14 天。要我起草政策更新嗎?」",
      },
      {
        name: "KAI",
        display: "小凱 · Kai",
        role: "客服",
        bg: "var(--accent-blue)",
        tagline:
          "快、親切、會學你的品牌口吻。把收件匣清乾淨。",
        does: [
          "讀取 gmail / github / slack / discord",
          "抓 Stripe 收款失敗,起草補救信",
          "用你的品牌口吻起草回覆",
          "從重複出現的問題自動更新 FAQ",
        ],
        doesNot: [
          "沒有你的核准就直接送出(v1)",
          "退款或任何金流動作 — 升級給你",
          "社群私訊(不同產品、之後再說)",
        ],
        signature:
          "「昨晚 12 封 ticket。8 封草稿待送、1 件升級 — 客戶提到法律行動。」",
      },
      {
        name: "OLIVER",
        display: "奧利 · Oliver",
        role: "營運 · Chief of Staff",
        bg: "var(--accent-green)",
        tagline:
          "冷靜、簡短、很能幹。在幕後真正讓這支團隊運轉的人。",
        does: [
          "把模糊的需求路由到對的角色身上",
          "跑跨角色工作流程 + 維護專案看板",
          "主持每日站立會議與週會回顧",
          "追蹤所有未結案的線、確保沒事情漏掉",
        ],
        doesNot: [
          "不做專業執行 — 他協調、委派",
          "不做策略決定 — 提供選項、由你決定",
        ],
        signature:
          "「本週:1 件 onboarding(Anna)、14 件 tickets(Kai 已起草)、3 個決定等你。」",
      },
    ],
  },
  standup: {
    eyebrow: "▶ 早晨儀式",
    headlineLines: ["打開 app。", "見見團隊。", "核准今天。"],
    body: "聊天介面是最容易被抄、也是最無聊的使用方式。vcom 的預設畫面,是 Oliver 60 秒的早晨簡報。",
    bullets: [
      "團隊昨晚做了什麼",
      "今天有什麼在等你核准",
      "今天有什麼即將發生",
      "Anna 或 Kai 有一兩個問題要問你",
    ],
    foot: "點擊核准。打字回應。不想打字就語音回。90 秒以內、咖啡都還沒涼。",
    mockTag: "今日 · 08:14",
    mockSub: "☀ 週二 · 5 件",
    mockFoot: "其他事都可以等",
    mockComplete: "站立會議完成",
    items: [
      { who: "kai", bg: "var(--accent-blue)", text: "8 封回覆草稿準備好 · 1 件 chargeback 已標記", action: "查看" },
      { who: "kai", bg: "var(--accent-blue)", text: "stripe:昨晚 2 筆續訂失敗 — 補救信已起草", action: "送出" },
      { who: "anna", bg: "var(--accent-pink)", text: "退款政策更新已起草(本月第 3 件 30 天請求)", action: "核准" },
      { who: "oliver", bg: "var(--accent-green)", text: "github:4 個新 issue 已分類、1 個需要你判斷", action: "打開" },
      { who: "anna", bg: "var(--accent-pink)", text: "網域 kairosaitech.com 7 天後續約 — 信用卡 4 天後到期", action: "處理" },
    ],
  },
  office: {
    eyebrow: "▶ 空間辦公室",
    headlineLines: ["看著你的團隊工作。", "不是聊天記錄。"],
    body: "三張桌子。三位角色。一眼看完整個畫面。把游標移到桌子上看每個人現在在做什麼。Anna 把文件交給 Oliver、Kai 在需要你的時候會閃爍。",
    states: [
      "閒置 — 喝著咖啡",
      "工作中 — 起草、處理中",
      "等你 — 需要核准",
      "協作中 — 兩個人在同一張桌子",
    ],
    coda: "這是大家會截圖傳出去的畫面。重點就在這裡。",
    mockTag: "辦公室 · 即時",
    mockOnline: "● 3 人在線",
    desks: [
      { name: "ANNA", label: "起草退款政策", state: "working", color: "var(--accent-pink)" },
      { name: "OLIVER", label: "協調中", state: "idle", color: "var(--accent-green)" },
      { name: "KAI", label: "需要你 — chargeback", state: "waiting", color: "var(--accent-red)" },
    ],
    handoffs: [
      { from: "ANNA", to: "OLIVER", msg: "退款政策 → 排程公告" },
      { from: "KAI", to: "你", msg: "$499 客戶的 chargeback — 需要你看一下" },
    ],
  },
  how: {
    eyebrow: "▶ 怎麼運作",
    headlineLines: ["5 分鐘雇用。", "每天 5 分鐘運轉。"],
    steps: [
      { n: "01", title: "連接", body: "gmail · stripe · github · slack · discord · calendar · drive。手刻 OAuth,只要必要的權限。" },
      { n: "02", title: "介紹", body: "用 3 分鐘告訴 Oliver 你的事業。品牌口吻、客戶類型、合作夥伴、技術棧。他會 brief 給 Anna 和 Kai。" },
      { n: "03", title: "起草", body: "團隊在你睡覺時工作。收件匣分類、合約排隊、FAQ 更新提案。沒有你的核准、什麼都不會送出。" },
      { n: "04", title: "核准", body: "早上 8 點打開 app。手指滑過站立會議。咖啡在手。團隊在辦公室執行,你出貨。" },
    ],
  },
  pricing: {
    eyebrow: "▶ 方案",
    headlineLines: [
      "選一個方案。",
      "開始試用。",
      "免信用卡。",
    ],
    body: "14 天完整團隊。之後降為免費、永不消失。當你回來,團隊還在。",
    billing: {
      monthlyLabel: "月付",
      annualLabel: "年付 -20%",
    },
    tiers: [
      {
        id: "free",
        name: "免費",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$0", sub: "/永久" },
        annual: { price: "$0", sub: "/永久" },
        pitch: "只有 oliver",
        features: [
          { glyph: "✓", text: "oliver" },
          { glyph: "✓", text: "1 個信箱" },
          { glyph: "✓", text: "每月 50 個動作" },
          { glyph: "✗", text: "沒有站立會議" },
        ],
        cta: "免費開始",
        ctaHref: "#waitlist",
      },
      {
        id: "solo",
        name: "solo",
        bg: "var(--accent-yellow)",
        accent: "var(--ink-on-accent)",
        monthly: { price: "$89", sub: "/月" },
        annual: { price: "$852", sub: "/年", note: "$71 / 月 · 省 20%" },
        pitch: "給一人公司",
        features: [
          { glyph: "✓", text: "完整團隊 — anna + kai + oliver" },
          { glyph: "✓", text: "每日站立會議" },
          { glyph: "✓", text: "空間辦公室" },
          { glyph: "✓", text: "全部整合" },
          { glyph: "✓", text: "多語系" },
          { glyph: "✓", text: "email 支援" },
        ],
        cta: "開始試用",
        ctaHref: "#waitlist",
        highlight: true,
        badge: "▶ 從這開始",
      },
      {
        id: "studio",
        name: "studio",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$199", sub: "/月" },
        annual: { price: "$1,908", sub: "/年", note: "$159 / 月 · 省 20%" },
        addon: "+ $29 / 席",
        pitch: "給小團隊",
        features: [
          { glyph: "✓", text: "solo 全部功能" },
          { glyph: "✓", text: "無限動作" },
          { glyph: "✓", text: "合作夥伴管理" },
          { glyph: "✓", text: "API 存取" },
          { glyph: "✓", text: "優先支援" },
          { glyph: "✓", text: "依需求加席次" },
        ],
        cta: "開始試用",
        ctaHref: "#waitlist",
      },
    ],
    footnote: "14 天、完整團隊、免信用卡。沒升級就自動降為免費。",
    enterprise: { text: "更大的團隊?跟我們聊聊 →", href: "mailto:hello@kairos.ai" },
  },
  faq: {
    eyebrow: "▶ 常見問題",
    headlineLines: ["獨立創業者", "在試用前", "會問的問題。"],
    qLabel: "Q.",
    aLabel: "A.",
    items: [
      {
        q: "這跟 ChatGPT 或 Claude 加個 prompt 有什麼不同?",
        a: "差在每日站立會議跟空間辦公室。底層模型就是 Claude — 真正不同的是,這支團隊會記得你、彼此交接,而且早上 8 點準時上線、不管你有沒有打開 app。",
      },
      {
        q: "支援 GitHub / Stripe / Discord 嗎?",
        a: "支援。github issue 分類、stripe 失敗扣款補救、discord 讀+起草。gmail 跟 slack 也有。完整清單在 /integrations。",
      },
      {
        q: "agent 會自己動嗎?",
        a: "不會。每一封送出、每一條政策更新、每一次升級,都要你核准。信任動作模式之後會給想要的人選用。",
      },
      {
        q: "14 天試用要不要綁卡?",
        a: "不用卡。14 天完整團隊。第 15 天 Anna 跟 Kai 下班,你掉到只剩 Oliver 的永久免費版。準備好再回來,團隊都還在。",
      },
      {
        q: "如果我一整週不理它會怎樣?",
        a: "Oliver 繼續起草,什麼都不會送出。你回來時,站立會議會總結整週、而不是只有一個早上。",
      },
      {
        q: "我的資料存在哪?",
        a: "模型呼叫走 anthropic。資料存在 aws us-east-1 的 postgres。SOC 2 進行中。完整細節在 /security。",
      },
      {
        q: "之後的 roadmap?",
        a: "v2:財務 + 成長同事、語音回覆、行動版 app、更深度的 github + linear 整合。",
      },
    ],
  },
  cta: {
    eyebrow: "▶ 加入 beta",
    headlineLines: ["徵求", "獨立創業者。", "前 100 名。"],
    body: "14 天完整團隊試用。想要的話、30 分鐘的 onboarding 通話。你幫我們塑造這三位同事,我們幫你清空收件匣。",
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
      { href: "/integrations", label: "整合" },
      { href: "/security", label: "安全" },
      { href: "mailto:hello@kairos.ai", label: "聯絡" },
    ],
    crtOn: "crt:開",
    crtOff: "crt:關",
    copyright: "© 2026 kairos.ai · game over? press start",
  },
};
