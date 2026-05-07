import { z } from "zod";

export const periodMonthSchema = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Expected YYYY-MM (e.g. 2026-05)");

export const closeMonthBodySchema = z.object({
  periodMonth: periodMonthSchema,
});

export const confirmCashBodySchema = z.object({
  code: z.string().min(1).max(32),
});

