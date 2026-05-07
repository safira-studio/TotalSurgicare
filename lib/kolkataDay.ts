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

function nextMonth(yyyyMm: string): string {
  const [yRaw, mRaw] = yyyyMm.split("-");
  const y = Number(yRaw);
  const m = Number(mRaw);
  if (!Number.isFinite(y) || !Number.isFinite(m) || m < 1 || m > 12) return yyyyMm;
  const nm = m === 12 ? 1 : m + 1;
  const ny = m === 12 ? y + 1 : y;
  return `${String(ny).padStart(4, "0")}-${String(nm).padStart(2, "0")}`;
}

/** UTC bounds [start, endExclusive) for that entire Kolkata month `YYYY-MM`. */
export function utcBoundsForKolkataMonth(yyyyMm: string): { startIso: string; endExclusiveIso: string } {
  const start = new Date(`${yyyyMm}-01T00:00:00+05:30`);
  const endExclusive = new Date(`${nextMonth(yyyyMm)}-01T00:00:00+05:30`);
  return { startIso: start.toISOString(), endExclusiveIso: endExclusive.toISOString() };
}
