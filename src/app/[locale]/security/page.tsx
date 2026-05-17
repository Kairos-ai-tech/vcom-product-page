import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

type PageProps = { params: Promise<{ locale: string }> };

export default async function SecurityPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <SiteNav dict={dict.nav} locale={locale} />
      <main className="flex-1">
        <section className="border-b-[var(--pixel)] border-[var(--panel-border)]">
          <div className="mx-auto max-w-3xl px-6 py-24">
            <p className="eyebrow text-[var(--accent-blue)]">▶ security</p>
            <h1 className="font-display mt-3 text-3xl sm:text-4xl">
              security &amp; data residency
            </h1>
            <p className="font-body mt-6 text-[var(--foreground)]/85">
              Model calls go to Anthropic. Your data lives in Postgres on
              AWS us-east-1. SOC 2 Type I is in progress. A full security
              page lands before public launch — until then, write to
              <a className="text-[var(--accent-red)]" href="mailto:security@kairos.ai"> security@kairos.ai</a>
              {" "}with anything you need answered for a procurement review.
            </p>
            <p className="mt-10">
              <Link
                href={`/${locale}/`}
                className="pixel-button active:pixel-button-press inline-block"
                style={{ background: "var(--accent-yellow)" }}
              >
                ▶ back to home
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict.footer} locale={locale} />
    </>
  );
}
