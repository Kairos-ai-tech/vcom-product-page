import type { Dict } from "@/i18n/types";

// 日本語 register: 丁寧だが堅すぎない (です・ます調)。Production polish
// will need a native Japanese editor pass — this dict is launchable
// quality but not yet keigo-tuned per business context.

export const ja: Dict = {
  meta: {
    title: "vcom — 一人会社のためのバーチャルカンパニー",
    description:
      "Anna · Kai · Oliver。3人のAI同僚 — オペレーション・カスタマーサポート・チーフオブスタッフ — を一人会社へ。毎朝のスタンドアップ、空間オフィス、すべての操作はあなたが承認。",
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
    headlineLines: ["3人のAI同僚", "一人会社のために"],
    subhead:
      "Annaがオペレーション。Kaiが受信箱を片付ける。Oliverがチームを回す。彼らが下書き、あなたが承認。Press Start。",
    features: [
      "毎朝のスタンドアップ — もうチャットボックスじゃない",
      "ピクセルオフィスで働く姿を見守る",
      "承認ファースト — 自律は積み重ねで得る",
    ],
    primaryCta: "▶ 14日間トライアル開始",
    primaryCtaNote: "クレジットカード不要",
    secondaryCta: "スタンドアップを見る",
    trustLine: "カード不要 · 14日間フルチーム · その後は無料へ、消えません",
    sceneAria:
      "アニメーションのピクセルオフィス:3つのデスク。左でAnnaがコーヒー、中央でKaiが「あなたが必要」のパルス、右でOliverがCRTモニターの前に座る。書類がAnnaのデスクからOliverのデスクへ移動し、引き継ぎを表す。",
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
    headlineLines: [
      "AIツールはソフトウェアに見える。",
      "同僚は人に見える。",
    ],
    paragraph:
      "AIアプリはどれもチャットボックスです — 打って、答えて、タブを閉じる。vcomは逆の形をしています。3人の同僚はあなたを覚え、互いに引き継ぎ、自分がやらないことを知り、あなたが開こうが開くまいが朝8時に現れます。その違いは、あなたが彼らをどう語るかに表れます。",
    callout:
      "「今日ChatGPTを開いた」とは言わない。「KaiがInboxを片付けて、Annaが返金パターンを見つけた」と言う。",
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
        role: "オペレーション / ピープル",
        bg: "var(--accent-pink)",
        tagline:
          "温かくて整理上手。あらゆるポリシー決定と、業務委託先の開始日を覚えています。",
        does: [
          "カスタマーポリシー、返金フロー、ToS更新の下書き",
          "Kaiがエスカレーションしたエッジケースに対応",
          "重要な日付の追跡:ドメイン更新、SOC 2、各種申請",
          "採用時の業務委託契約とオンボーディング",
        ],
        doesNot: [
          "法務・税務アドバイス — 会計士へフラグ",
          "支払い、給与、金銭移動には触れない",
          "採用 / 解雇の判断 — 下書きまで、決定はあなた",
        ],
        signature:
          "「今月3件目の返金請求が30日条項を引用しています。ToSには14日と書かれています。ポリシー更新の下書きを作りますか?」",
      },
      {
        name: "KAI",
        display: "カイ · Kai",
        role: "カスタマーサポート",
        bg: "var(--accent-blue)",
        tagline:
          "速くて、親しみやすく、ブランドの声を学ぶ。受信箱を片付けます。",
        does: [
          "gmail / github / slack / discord を読む",
          "Stripeの決済失敗を検知、リカバリー文を下書き",
          "あなたのブランドの声で返信を下書き",
          "繰り返される質問から自動更新されるFAQ",
        ],
        doesNot: [
          "あなたの承認なしに送信しない(v1)",
          "返金や金銭関連には触れない — エスカレーション",
          "SNS DM(別プロダクト、後ほど)",
        ],
        signature:
          "「昨夜12件のチケット。下書き8件は送信準備完了、1件エスカレーション — お客様が法的措置に言及。」",
      },
      {
        name: "OLIVER",
        display: "オリバー · Oliver",
        role: "オペレーション · チーフオブスタッフ",
        bg: "var(--accent-green)",
        tagline:
          "落ち着いていて、簡潔で、非常に有能。実際にチームを回している人。",
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
          "「今週:オンボーディング1件(Anna担当)、チケット14件(Kai下書き済)、決定待ち3件。」",
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
    mockSub: "☀ 火曜 · 5件",
    mockFoot: "他のことは後でいい",
    mockComplete: "スタンドアップ完了",
    items: [
      { who: "kai", bg: "var(--accent-blue)", text: "返信下書き8件 · チャージバック1件をフラグ", action: "確認" },
      { who: "kai", bg: "var(--accent-blue)", text: "stripe:昨夜2件の更新失敗 — リカバリー文下書き済", action: "送信" },
      { who: "anna", bg: "var(--accent-pink)", text: "返金ポリシー更新を下書き(今月30日条項の請求3件目)", action: "承認" },
      { who: "oliver", bg: "var(--accent-green)", text: "github:新規issue4件をトリアージ、1件は判断要", action: "開く" },
      { who: "anna", bg: "var(--accent-pink)", text: "ドメインkairosaitech.comが7日後に更新 — カードは4日後に期限切れ", action: "対応" },
    ],
  },
  office: {
    eyebrow: "▶ 空間オフィス",
    headlineLines: ["チームが働く姿を見る。", "チャットログではなく。"],
    body: "3つのデスク。3人のキャラクター。一目で見渡せるシーン。デスクにホバーすると、今何をしているか見えます。Annaが書類をOliverに渡し、Kaiはあなたが必要なときに点滅します。",
    states: [
      "アイドル — コーヒー中",
      "作業中 — 下書き・処理中",
      "あなた待ち — 承認待ち",
      "コラボ中 — 2人が同じデスクに",
    ],
    coda: "これが、人がスクショして友達に送る画面です。狙いはそこ。",
    mockTag: "オフィス · ライブ",
    mockOnline: "● 3人オンライン",
    desks: [
      { name: "ANNA", label: "返金ポリシー下書き中", state: "working", color: "var(--accent-pink)" },
      { name: "OLIVER", label: "進行中", state: "idle", color: "var(--accent-green)" },
      { name: "KAI", label: "あなた待ち — チャージバック", state: "waiting", color: "var(--accent-red)" },
    ],
    handoffs: [
      { from: "ANNA", to: "OLIVER", msg: "返金ポリシー → 告知スケジュール" },
      { from: "KAI", to: "あなた", msg: "$499顧客のチャージバック — 確認をお願いします" },
    ],
  },
  how: {
    eyebrow: "▶ 仕組み",
    headlineLines: ["雇うのに5分。", "毎日5分で運営。"],
    steps: [
      { n: "01", title: "接続", body: "gmail · stripe · github · slack · discord · calendar · drive。手書きOAuth、想定外のスコープは要求しません。" },
      { n: "02", title: "紹介", body: "3分でOliverにあなたのビジネスを伝える。ブランドの声、お客様の種類、業務委託先、技術スタック。彼がAnnaとKaiにブリーフします。" },
      { n: "03", title: "下書き", body: "チームは夜のうちに働きます。受信箱の仕分け、契約のキュー、FAQ更新案。あなたの承認なしには何も送信されません。" },
      { n: "04", title: "承認", body: "朝8時にアプリを開く。スタンドアップをタップで進める。コーヒー片手に。チームがオフィスで動き、あなたは出荷する。" },
    ],
  },
  pricing: {
    eyebrow: "▶ 料金",
    headlineLines: [
      "プランを選ぶ。",
      "トライアル開始。",
      "カード不要。",
    ],
    body: "14日間フルチーム。その後は無料、消えません。あなたが戻ってきたとき、チームはそこにいます。",
    billing: {
      monthlyLabel: "月額",
      annualLabel: "年額 -20%",
    },
    tiers: [
      {
        id: "free",
        name: "無料",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$0", sub: "/永久" },
        annual: { price: "$0", sub: "/永久" },
        pitch: "oliverのみ",
        features: [
          { glyph: "✓", text: "oliver" },
          { glyph: "✓", text: "受信箱1つ" },
          { glyph: "✓", text: "月50アクション" },
          { glyph: "✗", text: "スタンドアップなし" },
        ],
        cta: "無料で始める",
        ctaHref: "#waitlist",
      },
      {
        id: "solo",
        name: "solo",
        bg: "var(--accent-yellow)",
        accent: "var(--ink-on-accent)",
        monthly: { price: "$89", sub: "/月" },
        annual: { price: "$852", sub: "/年", note: "$71 / 月 · 20%お得" },
        pitch: "一人会社のために",
        features: [
          { glyph: "✓", text: "フルチーム — anna + kai + oliver" },
          { glyph: "✓", text: "毎朝のスタンドアップ" },
          { glyph: "✓", text: "空間オフィス" },
          { glyph: "✓", text: "すべての連携" },
          { glyph: "✓", text: "多言語対応" },
          { glyph: "✓", text: "メールサポート" },
        ],
        cta: "トライアル開始",
        ctaHref: "#waitlist",
        highlight: true,
        badge: "▶ ここから",
      },
      {
        id: "studio",
        name: "studio",
        bg: "var(--panel)",
        accent: "var(--foreground)",
        monthly: { price: "$199", sub: "/月" },
        annual: { price: "$1,908", sub: "/年", note: "$159 / 月 · 20%お得" },
        addon: "+ $29 / 席",
        pitch: "小規模チーム向け",
        features: [
          { glyph: "✓", text: "soloのすべて" },
          { glyph: "✓", text: "アクション無制限" },
          { glyph: "✓", text: "業務委託管理" },
          { glyph: "✓", text: "APIアクセス" },
          { glyph: "✓", text: "優先サポート" },
          { glyph: "✓", text: "成長に合わせて席を追加" },
        ],
        cta: "トライアル開始",
        ctaHref: "#waitlist",
      },
    ],
    footnote: "14日間、フルチーム、カード不要。アップグレードしなければ自動で無料へ。",
    enterprise: { text: "大きなチーム?ご相談ください →", href: "mailto:hello@kairos.ai" },
  },
  faq: {
    eyebrow: "▶ よくある質問",
    headlineLines: ["独立ファウンダーが", "トライアル前に", "聞く質問。"],
    qLabel: "Q.",
    aLabel: "A.",
    items: [
      {
        q: "ChatGPTやClaudeにプロンプトを与えるのと、何が違いますか?",
        a: "毎朝のスタンドアップと空間オフィスです。モデル自体はClaudeを使っています — 違うのは、チームがあなたを覚え、互いに引き継ぎ、あなたが開こうが開くまいが朝8時に現れることです。",
      },
      {
        q: "GitHub / Stripe / Discordで動きますか?",
        a: "はい。githubのissueトリアージ、stripeの決済失敗リカバリー、discordの読み取り+下書き。gmailとslackも対応。完全なリストは /integrations にあります。",
      },
      {
        q: "エージェントは勝手に動きますか?",
        a: "いいえ。送信、ポリシー更新、エスカレーション、すべてあなたが承認します。信頼済みアクションモードは、希望するユーザー向けに後ほど提供します。",
      },
      {
        q: "14日間トライアルにカードは必要?",
        a: "カード不要。14日間フルチーム。15日目にAnnaとKaiは退場、Oliverだけの永久無料プランに自動で切り替わります。戻る準備ができたら、チームはそこにいます。",
      },
      {
        q: "1週間放置したらどうなりますか?",
        a: "Oliverは下書きを続けますが、何も送信されません。戻ったとき、スタンドアップは一日分ではなく一週間分をまとめて報告します。",
      },
      {
        q: "データはどこに保管されますか?",
        a: "モデル呼び出しはanthropicへ。データはAWS us-east-1のpostgresに。SOC 2は進行中。詳細は /security にあります。",
      },
      {
        q: "ロードマップは?",
        a: "v2:財務+成長の同僚、音声返信、モバイルアプリ、github + linearとのより深い連携。",
      },
    ],
  },
  cta: {
    eyebrow: "▶ ベータに参加",
    headlineLines: ["独立ファウンダー", "募集。", "先着100名。"],
    body: "14日間フルチームトライアル。ご希望なら30分のオンボーディング通話。3人の同僚を一緒に形作りながら、私たちは受信箱を片付けます。",
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
      { href: "/integrations", label: "連携" },
      { href: "/security", label: "セキュリティ" },
      { href: "mailto:hello@kairos.ai", label: "お問い合わせ" },
    ],
    crtOn: "crt: オン",
    crtOff: "crt: オフ",
    copyright: "© 2026 kairos.ai · game over? press start",
  },
};
