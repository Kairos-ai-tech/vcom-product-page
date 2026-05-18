// Marketing analytics surface. We don't want hardcoded posthog calls
// scattered across components — every event flows through `track()` so
// we can swap providers, gate by consent, or strip in tests with one
// edit. Today this is a no-op shim; flip the PostHog block on by
// setting NEXT_PUBLIC_POSTHOG_KEY at build time.

export type AnalyticsEvent =
  | "signup_clicked"
  | "pricing_viewed"
  | "faq_expanded"
  | "trial_started_cta_clicked";

type Props = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, props?: Props): void {
  if (typeof window === "undefined") return;
  // Surface in dev console so wire-up is visible before posthog lands.
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, props ?? {});
  }
  // PostHog wiring — uncomment once posthog-js is added and the key is set.
  // import("posthog-js").then(({ default: posthog }) => {
  //   const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  //   if (!key) return;
  //   if (!posthog.__loaded) posthog.init(key, { api_host: "https://us.i.posthog.com" });
  //   posthog.capture(event, props);
  // });
}
