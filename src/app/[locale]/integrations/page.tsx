import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

type PageProps = { params: Promise<{ locale: string }> };

const integrations: { name: string; status: "live" | "beta" | "soon" }[] = [
  { name: "gmail", status: "live" },
  { name: "github", status: "live" },
  { name: "stripe", status: "live" },
  { name: "slack", status: "beta" },
  { name: "discord", status: "beta" },
  { name: "google calendar", status: "live" },
  { name: "google drive", status: "live" },
  { name: "linear", status: "soon" },
];

const statusColor: Record<typeof integrations[number]["status"], string> = {
  live: "var(--accent-green)",
  beta: "var(--accent-yellow)",
  soon: "var(--accent-pink)",
};

export default async function IntegrationsPage({ params }: PageProps) {
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
            <p className="eyebrow text-[var(--accent-pink)]">▶ integrations</p>
            <h1 className="font-display mt-3 text-3xl sm:text-4xl">
              what the team can plug into
            </h1>
            <p className="font-body mt-6 text-[var(--foreground)]/85">
              Hand-rolled OAuth on every connection. Only the scopes the
              spec lists — no surprise calendar writes, no token resale.
              The full integration page lands closer to GA; this is the
              shortlist while we ship.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {integrations.map((it) => (
                <li
                  key={it.name}
                  className="pixel-panel flex items-center justify-between gap-3 bg-[var(--panel)] p-4"
                >
                  <span className="font-body text-base">{it.name}</span>
                  <span
                    className="pixel-tag"
                    style={{ background: statusColor[it.status] }}
                  >
                    {it.status}
                  </span>
                </li>
              ))}
            </ul>

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
