import type { Dict } from "@/i18n/types";

// 日本語 register: 丁寧だが堅すぎない (です・ます調)。Production polish
// will need a native Japanese editor pass — this dict is launchable
// quality but not yet keigo-tuned per business context.

export const ja: Dict = {
  meta: {
    title: "vcom — 一人会社のためのバーチャルカンパニー",
    description:
      "Anna · Kai · Oliver。3人のAI同僚 — 人事・カスタマーサポート・チーフオブスタッフ — を一人会社へ。毎朝のスタンドアップ、空間オフィス、すべての操作はあなたが承認。",
  },
  nav: {
    links: [
      { href: "#team", label: "チーム" },
      { href: "#standup", label: "スタンドアップ" },
      { href: "#office", label: "オフィス" },
      { href: "#pricing", label: "料金" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "▶ ベータに参加",
  },
  hero: {
    eyebrow: "▶ player 1 ready",
    headlineLines: ["バーチャル会社を", "5分で", "雇う"],
    body: "Annaが人事を担当。Kaiが受信箱を片付ける。Oliverがチームを回す。一人会社のための3人のAI同僚。彼らが下書き、あなたが承認。Press Start。",
    bullets: [
      "チャットボット疲れはもう終わり — 朝のスタンドアップでチームに会う",
      "小さなピクセルオフィスで、彼らが働く姿を見る",
      "すべての操作はあなたの承認後。自律性は獲得するもの",
    ],
    primaryCta: "▶ ベータに参加",
    secondaryCta: "スタンドアップを見る",
    fineprint: "多言語対応 · 承認ファースト · 2026年ローンチ",
    boardTag: "チームを選ぶ",
    boardSub: "stage 01 — オンボーディング",
    boardCaption:
      "おはようございます。Kaiが昨夜8件の返信を下書きしました。Annaが契約を1件キューに入れています。準備ができたらどうぞ",
  },
  marquee: [
    "募集中 · 一人会社限定",
    "Annaが契約を下書き",
    "Kaiが受信箱を片付ける",
    "Oliverがチームを回す",
    "Press Startで開始",
    "承認ファーストAI",
    "あなたが主導権を持つ",
  ],
  insight: {
    eyebrow: "▶ インサイト",
    headlineParts: {
      line1: "AIツールは",
      line2: "ソフトのように感じる。",
      emphasis: "同僚",
      rest: "は人のように感じる。",
    },
    paragraphs: [
      "どのAIアプリもチャットボックスです。入力して、答えが返ってきて、タブを閉じる。誰もChatGPTを同僚のように語りません。",
      "vcomは「より賢いエージェント」ではありません。__HIGHLIGHT__ エージェントです。あなたを覚え、フォローアップし、互いに引き継ぎ、自分が何をしないかを知っています。",
      "「一人会社 + AIチーム」のムーブメントはすでに広がりつつあります。市場は自ら学んでいます。私たちはただ、彼らが見つけるプロダクトであればいい。",
    ],
    highlight: "チームのように感じる",
  },
  team: {
    eyebrow: "▶ チームを紹介",
    headline: "3人の同僚。3つのデスク。会議疲れはゼロ。",
    body: "それぞれのキャラクターには名前、性格、担当範囲があります。担当外のことは、人間に明確に引き継ぎます。",
    labels: { does: "やること", doesNot: "やらないこと", signature: "シグネチャームーブ" },
    cards: [
      {
        name: "ANNA",
        display: "アンナ · Anna",
        role: "HR 人事",
        bg: "var(--accent-pink)",
        tagline: "温かくて整理上手。誰の誕生日も、どの業務委託契約がまだサインされていないかも、覚えています。",
        does: [
          "テンプレートから業務委託契約・NDAを下書き",
          "新しいメンバーのオンボーディング + ウェルカムパケット",
          "人材DB：業務委託先、報酬、開始日、重要書類",
          "更新・誕生日・書類期限のリマインド、忘れる前に",
        ],
        doesNot: [
          "管轄ごとの税務計算 — 税理士へフラグ",
          "給与計算の実行 — 給与ツールへ引き継ぎ",
          "採用 / 契約終了の判断 — 下書きまで、決定はあなた",
        ],
        signature:
          "「来週のプレビュー：林さん火曜開始。ウェルカムパケットは受信箱でご確認をお待ちしています」",
      },
      {
        name: "KAI",
        display: "カイ · Kai",
        role: "CS カスタマーサポート",
        bg: "var(--accent-blue)",
        tagline: "速い、親しみやすい、あなたのブランドの声を学ぶ。受信箱を片付けます。",
        does: [
          "gmail / LINE / messenger / intercom / slack を読む",
          "あなたのブランドの声で返信を下書き",
          "繰り返し質問から自動更新されるFAQ",
          "チケット分類：自動返信・要レビュー・エスカレーション",
        ],
        doesNot: [
          "あなたの承認なしに送信しない（v1）",
          "返金やお金に関わる対応 — エスカレーション",
          "SNS DM（別プロダクト、後ほど）",
        ],
        signature:
          "「昨夜12件のチケット。8件の下書き準備完了、3件は確認をお願いします、1件はエスカレーション — お客様が法的措置に言及」",
      },
      {
        name: "OLIVER",
        display: "オリバー · Oliver",
        role: "OPS · チーフオブスタッフ",
        bg: "var(--accent-green)",
        tagline: "落ち着いていて、簡潔で、非常に有能。実際にチームを回している人。",
        does: [
          "曖昧な依頼を適切なキャラクターへルーティング",
          "クロスキャラクターのワークフロー + プロジェクトボード",
          "毎朝のスタンドアップと週次レビューを進行",
          "未解決スレッドを追跡、何も漏らさない",
        ],
        doesNot: [
          "専門業務は自分でやらない — 調整して委譲",
          "戦略的判断はしない — 選択肢を出す、決定はあなた",
        ],
        signature:
          "「今週：オンボーディング1件（Anna担当）、チケット14件（Kai下書き済）、決定待ち3件です」",
      },
    ],
  },
  standup: {
    eyebrow: "▶ 朝のリチュアル",
    headlineLines: ["アプリを開く。", "チームに会う。", "今日を承認する。"],
    body: "チャットインターフェースは最も真似されやすく、最もつまらない使い方です。vcomのデフォルト画面は、Oliverからの60秒のブリーフィングです。",
    bullets: [
      "チームが昨夜やったこと",
      "あなたの承認を待っているもの",
      "今日これから起きること",
      "AnnaかKaiからの1〜2の質問",
    ],
    foot: "タップで承認。タイプで反論。タイプしたくなければ音声で返信。コーヒーを淹れる前に、90秒以内で完了。",
    mockTag: "今日 · 08:14",
    mockSub: "☀ 火曜 · 6件",
    mockFoot: "他のことは後でいい",
    mockComplete: "スタンドアップ完了",
    items: [
      { who: "kai", bg: "var(--accent-blue)", text: "返信下書き8件 · エスカレーション1件", action: "確認" },
      { who: "anna", bg: "var(--accent-pink)", text: "林さんのNDA下書き · サインをお待ちしています", action: "承認" },
      { who: "oliver", bg: "var(--accent-green)", text: "週次レビュー金曜16時 — そのままにする？動かす？", action: "そのまま" },
      { who: "anna", bg: "var(--accent-pink)", text: "陳さんの契約12日後に更新 — 更新案を作りますか？", action: "はい" },
    ],
  },
  office: {
    eyebrow: "▶ 空間オフィス",
    headlineLines: ["チームが働く姿を見る。", "チャットログではなく。"],
    body: "3つのデスク。3人のキャラクター。一目で見渡せるシーン。キャラクターをクリックして詳細へ。引き継ぎが起こる瞬間を見る — Annaが契約をOliverに渡し、Oliverがチケットを開く。",
    states: [
      "アイドル — コーヒー中、作業なし",
      "作業中 — 返信を下書き、チケット処理",
      "あなた待ち — 承認するものがある",
      "コラボ中 — 2人のキャラクターが同じデスクに",
    ],
    coda:
      "これが、人がスクショして友達に送る画面です。他のツールはこれを作りません — 彼らのブランドポジショニングからは外れます。",
    mockTag: "オフィス · ライブ",
    mockOnline: "● 3人オンライン",
    desks: [
      { name: "ANNA", label: "NDA下書き中", state: "working", color: "var(--accent-pink)" },
      { name: "OLIVER", label: "進行中", state: "idle", color: "var(--accent-green)" },
      { name: "KAI", label: "あなた待ち", state: "waiting", color: "var(--accent-red)" },
    ],
    handoffs: [
      { from: "ANNA", to: "OLIVER", msg: "林さんのNDA → 追跡チケット作成" },
      { from: "KAI", to: "あなた", msg: "お客様が法的措置に言及 — 確認をお願いします" },
    ],
  },
  how: {
    eyebrow: "▶ 仕組み",
    headlineLines: ["雇うのに5分。", "毎日5分で運営。"],
    steps: [
      { n: "01", title: "接続", body: "gmail · slack · google calendar · drive · stripe（読み取り専用）。手書きOAuth、想定外のスコープは要求しません。" },
      { n: "02", title: "紹介", body: "3分でOliverにあなたのビジネスを伝える。ブランドの声、お客様の種類、業務委託先、技術スタック。彼がAnnaとKaiにブリーフします。" },
      { n: "03", title: "下書き", body: "チームは夜のうちに働きます。受信箱の仕分け、契約のキュー、FAQ更新案。あなたの承認なしには何も送信されません。" },
      { n: "04", title: "承認", body: "朝8時にアプリを開く。スタンドアップをタップで進める。コーヒー片手に。チームがオフィスで動き、あなたは出荷する。" },
    ],
  },
  pricing: {
    eyebrow: "▶ 料金",
    headlineLines: [
      "バーチャルアシスタントより安い。",
      "眠らない。",
      "より良い質問をする。",
    ],
    body: "パートタイムのバーチャルアシスタント（VA、リモートで業務を請け負う実在の人）は月10万円〜。vcomは月¥4,980で、チームは遅刻しません。SaaSではなく、人と比較してください。",
    mostChosen: "最も選ばれる",
    tiers: [
      {
        name: "フリー",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        price: "¥0",
        sub: "/永久",
        pitch: "Oliverのみ · ファネル最上層",
        features: ["Oliver チーフオブスタッフ", "限定ワークフロー", "受信箱1つ接続", "毎朝のスタンドアップなし"],
        cta: "無料で始める",
      },
      {
        name: "ソロ",
        bg: "var(--accent-yellow)",
        accent: "var(--ink-on-accent)",
        price: "¥4,980",
        sub: "/月",
        pitch: "チーム全員 · 多くのファウンダーが選ぶ",
        features: [
          "Anna · Kai · Oliver — フルチーム",
          "毎朝のスタンドアップ + 空間オフィス",
          "全ワークフロー · 約500アクション/月",
          "gmail · slack · カレンダー · drive",
          "多言語サポート",
        ],
        cta: "▶ ベータに参加",
        highlight: true,
      },
      {
        name: "スタジオ",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        price: "近日公開",
        sub: "",
        pitch: "業務委託先を持つ個人スタジオ向け",
        features: ["ソロの全機能", "アクション無制限", "優先サポート", "カスタムワークフロー + APIアクセス"],
        cta: "ウェイトリストに登録",
      },
    ],
  },
  faq: {
    eyebrow: "▶ よくある質問",
    headlineLines: ["デモで", "ファウンダーが", "聞く質問。"],
    qLabel: "Q.",
    aLabel: "A.",
    // TODO(i18n): FAQ rewritten for the US indie-SaaS beachhead. Mirrors EN
    // until a native ja translator passes over the new copy.
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
    eyebrow: "▶ ベータに参加",
    headlineLines: ["ファウンダー", "募集。", "先着100名。"],
    body: "3ヶ月無料。週30分のフィードバック通話。あなたが3人の同僚を形作るのを手伝い、私たちはあなたの受信箱を片付けます。",
    emailLabel: "メール",
    emailPlaceholder: "you@your-startup.com",
    submit: "▶ アクセス申請",
    fineprint: "スパムなし。開発中は四半期に1通。1クリックで配信停止。",
  },
  footer: {
    tagline: "kairos.ai 製 · 世界中の一人会社のために",
    links: [
      { href: "#team", label: "チーム" },
      { href: "#pricing", label: "料金" },
      { href: "#faq", label: "FAQ" },
      { href: "mailto:hello@kairos.ai", label: "お問い合わせ" },
    ],
    copyright: "© 2026 kairos.ai · game over? press start",
  },
};
