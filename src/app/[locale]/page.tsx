import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Insight } from "@/components/sections/Insight";
import { Team } from "@/components/sections/Team";
import { Standup } from "@/components/sections/Standup";
import { Office } from "@/components/sections/Office";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { MarqueeTicker } from "@/components/MarqueeTicker";

type PageProps = { params: Promise<{ locale: string }> };

export default async function Page({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <SiteNav dict={dict.nav} locale={locale} />
      <main className="flex-1">
        <Hero dict={dict.hero} locale={locale} />
        <MarqueeTicker items={dict.marquee} />
        <Insight dict={dict.insight} />
        <Team dict={dict.team} />
        <Standup dict={dict.standup} />
        <Office dict={dict.office} />
        <MarqueeTicker items={dict.marquee} bg="var(--accent-pink)" />
        <HowItWorks dict={dict.how} />
        <Pricing dict={dict.pricing} locale={locale} />
        <FAQ dict={dict.faq} />
        <CTA dict={dict.cta} />
      </main>
      <SiteFooter dict={dict.footer} locale={locale} />
      {/* locale prop kept on these for typed-prop consistency even
          though Hero/Pricing/Footer no longer use it; harmless extra. */}
    </>
  );
}
