import { randomInt, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCb);

export type OtpHash = {
  hash: string;
  salt: string;
};

export function generateNumericOtp8(): string {
  // 8 digits; avoids leading-zero stripping by always padding.
  const n = randomInt(0, 100_000_000);
  return String(n).padStart(8, "0");
}

export async function hashOtpScrypt(code: string, salt: string): Promise<string> {
  // Older @types/node versions type `scrypt` without the options param.
  const buf = (await scrypt(code, salt, 32)) as Buffer;
  return buf.toString("hex");
}

export async function generateOtpHash(): Promise<{ code: string; otp: OtpHash }> {
  const code = generateNumericOtp8();
  const salt = String(randomInt(1, 2 ** 31 - 1)) + "-" + Date.now().toString(36);
  const hash = await hashOtpScrypt(code, salt);
  return { code, otp: { hash, salt } };
}

export function normalizeOtpInput(raw: string): string {
  return raw.replace(/\s+/g, "").trim();
}

export async function verifyOtpScrypt(opts: {
  code: string;
  salt: string;
  expectedHashHex: string;
}): Promise<boolean> {
  const actualHex = await hashOtpScrypt(opts.code, opts.salt);
  const a = Buffer.from(actualHex, "hex");
  const b = Buffer.from(opts.expectedHashHex, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

