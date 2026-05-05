import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

// Single job: redirect bare `/` (or any non-locale path) to a locale.
// Locale-prefixed paths pass straight through — pages are static-
// prerendered at build, so no per-request work happens here.

function pickLocaleFromHeader(req: NextRequest): Locale {
  const accept = req.headers.get("accept-language") ?? "";
  for (const tag of accept.split(",")) {
    const lang = tag.trim().split(";")[0].toLowerCase();
    if (lang.startsWith("zh-tw") || lang === "zh-hant" || lang === "zh") return "zh-TW";
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("en")) return "en";
  }
  return defaultLocale;
}

function hasLocalePrefix(pathname: string): boolean {
  const first = pathname.split("/")[1];
  return locales.includes(first as Locale);
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (hasLocalePrefix(pathname)) return NextResponse.next();

  const next = pickLocaleFromHeader(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${next}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
