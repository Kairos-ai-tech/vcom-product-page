import { defaultLocale } from "@/i18n/config";
import { RedirectToLocale } from "@/components/RedirectToLocale";

// Bare `/` lands here on static-export builds (GitHub Pages). The proxy
// can't run, so we generate a real index.html that:
//   1. Uses an http-equiv refresh in <head> (works without JS).
//   2. Boots RedirectToLocale to upgrade the destination per
//      Accept-Language with basePath baked in.
// metadata.other emits <meta name="..."> which doesn't trigger refresh,
// so we render the meta tag directly inside this component instead.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const fallback = `${basePath}/${defaultLocale}/`;

export default function RootRedirect() {
  return (
    <>
      {/* Inline meta-refresh — Next inlines top-level <meta> from a
          page into <head> at build, and unlike metadata.other this
          uses http-equiv so the browser actually honours it. */}
      <meta httpEquiv="refresh" content={`0; url=${fallback}`} />
      <main className="flex min-h-screen items-center justify-center">
        <RedirectToLocale fallback={fallback} basePath={basePath} />
        <noscript>
          <a href={fallback}>Continue to vcom →</a>
        </noscript>
      </main>
    </>
  );
}
