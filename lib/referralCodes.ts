/** Alphanumeric without 0, O, 1, I to reduce confusion when read aloud. */
const REF_CHARS = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

export function randomReferralPublicCode(): string {
  let s = "";
  for (let i = 0; i < 8; i++) {
    s += REF_CHARS[Math.floor(Math.random() * REF_CHARS.length)]!;
  }
  return `REF-${s}`;
}
