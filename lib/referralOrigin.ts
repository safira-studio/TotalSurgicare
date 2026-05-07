/**
 * Base URL for referral completion links (WhatsApp / PDF).
 * Prefer NEXT_PUBLIC_APP_URL in production.
 */
export function getAppOrigin(req: Request): string {
  const env = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");
  if (env) return env;
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") ?? "http";
  if (host) return `${proto}://${host}`;
  return "http://localhost:3003";
}
