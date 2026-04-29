/** Calendar-day helpers in Asia/Kolkata (IST, no DST). */

const TZ = "Asia/Kolkata";

/** `YYYY-MM-DD` for the given instant in Kolkata. */
export function kolkataDateString(d = new Date()): string {
  return d.toLocaleDateString("en-CA", { timeZone: TZ });
}

/** UTC bounds [start, end] for that entire calendar day in Kolkata. */
export function utcBoundsForKolkataDate(ymd: string): { startIso: string; endIso: string } {
  const start = new Date(`${ymd}T00:00:00+05:30`);
  const end = new Date(`${ymd}T23:59:59.999+05:30`);
  return { startIso: start.toISOString(), endIso: end.toISOString() };
}
