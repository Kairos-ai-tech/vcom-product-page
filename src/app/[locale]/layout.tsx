import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, htmlLang, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { LangSync } from "@/components/LangSync";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Pre-render every locale at build time. Combined with the static root
// layout, this turns each `/en`, `/zh-TW`, `/ja` into a CDN-cacheable
// HTML file — locale switches load with zero server work.
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: htmlLang[locale as Locale],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;

  // .lang-* class drives the CJK font swap in globals.css. Wrapping a
  // div (instead of mutating <body>) keeps the cascade scoped to the
  // active route segment and lets pages prerender as static HTML.
  const langClass =
    locale === "zh-TW" ? "lang-zh" : locale === "ja" ? "lang-ja" : "lang-en";

  return (
    <div className={`${langClass} flex min-h-screen flex-1 flex-col`}>
      <LangSync locale={locale} />
      {children}
    </div>
  );
}
