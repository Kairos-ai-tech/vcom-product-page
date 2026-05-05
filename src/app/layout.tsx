import type { Viewport } from "next";
import {
  Press_Start_2P,
  VT323,
  M_PLUS_1p,
  Silkscreen,
} from "next/font/google";
import "./globals.css";

// Static root layout — no headers() / no params. Pages under [locale]
// stay statically prerenderable, so locale switches are instant from
// CDN. The html `lang` attribute defaults to "en" here and gets
// rewritten client-side by the [locale] layout (see LangSync) for
// accessibility correctness without forcing dynamic rendering.

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const mPlus = M_PLUS_1p({
  variable: "--font-cjk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const silkscreen = Silkscreen({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff7e0" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1530" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} ${mPlus.variable} ${silkscreen.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
