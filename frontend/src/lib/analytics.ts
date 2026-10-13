import { sendGAEvent } from "@next/third-parties/google";

/**
 * Send a custom event to Google Analytics 4 (GA4).
 *
 * @example
 * trackEvent("copy_email", { email: "user@example.com" });
 */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  if (params) {
    sendGAEvent("event", action, params);
  } else {
    sendGAEvent("event", action);
  }
}
