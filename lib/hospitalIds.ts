/** 32 lowercase hex chars, no dashes */
function uuidComparableHex(s: string): string | null {
  const t = s.trim().toLowerCase().replace(/-/g, "");
  return /^[0-9a-f]{32}$/.test(t) ? t : null;
}

/** Compare hospital UUIDs from Postgres/JS (case, dash formatting may differ). */
export function hospitalIdsEqual(
  a: string | null | undefined,
  b: string | null | undefined,
): boolean {
  if (a == null || b == null) return false;
  const ha = uuidComparableHex(String(a));
  const hb = uuidComparableHex(String(b));
  if (ha && hb) return ha === hb;
  return String(a).trim().toLowerCase() === String(b).trim().toLowerCase();
}
