/**
 * Indian mobile number helpers.
 *
 * Valid Indian mobile numbers:
 *  - 10 digits starting with 6–9
 *  - May arrive with +91, 91, or leading 0 prefixes
 *  - May contain spaces, dashes, dots, parentheses
 */

export type NormalizeResult =
  | { ok: true; digits: string }
  | { ok: false; error: string };

/**
 * Strips formatting, removes country code / leading zero,
 * validates that the result is a 10-digit Indian mobile starting with 6–9.
 */
export function normalizeIndianMobile(input: string): NormalizeResult {
  // Strip everything except digits
  const raw = input.replace(/\D/g, "");

  // Remove leading 91 (country code) if present and leaves 10 digits
  const stripped =
    raw.length === 12 && raw.startsWith("91")
      ? raw.slice(2)
      : raw.length === 11 && raw.startsWith("0")
        ? raw.slice(1)
        : raw;

  if (stripped.length !== 10) {
    return {
      ok: false,
      error: `Expected 10-digit mobile number, got ${stripped.length} digits.`,
    };
  }

  if (!/^[6-9]/.test(stripped)) {
    return {
      ok: false,
      error: "Indian mobile numbers must start with 6, 7, 8, or 9.",
    };
  }

  return { ok: true, digits: stripped };
}

/**
 * Returns a wa.me URL pre-filled with a message.
 * `digits` must be a valid 10-digit Indian mobile (from normalizeIndianMobile).
 */
export function waUrl(digits: string, text: string): string {
  return `https://wa.me/91${digits}?text=${encodeURIComponent(text)}`;
}
