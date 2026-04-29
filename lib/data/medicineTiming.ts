/** Checkbox options for how/when to take each medicine (any combination). */
export const MEDICINE_TIMING_OPTIONS = [
  { id: "before_food", label: "Before food" },
  { id: "after_food", label: "After food" },
  { id: "morning", label: "Morning" },
  { id: "evening", label: "Evening" },
] as const;

export type MedicineTimingFlagId = (typeof MEDICINE_TIMING_OPTIONS)[number]["id"];

export type MedicineLineTimings = Record<MedicineTimingFlagId, boolean>;

export const DEFAULT_LINE_TIMINGS: MedicineLineTimings = {
  before_food: true,
  after_food: false,
  morning: false,
  evening: false,
};

export function formatTimingSummary(t: Partial<MedicineLineTimings>): string {
  const parts: string[] = [];
  if (t.before_food) parts.push("Before food");
  if (t.after_food) parts.push("After food");
  if (t.morning) parts.push("Morning");
  if (t.evening) parts.push("Evening");
  return parts.join(", ") || "—";
}

export function hasAnyTimingSelected(t: Partial<MedicineLineTimings>): boolean {
  return !!(t.before_food || t.after_food || t.morning || t.evening);
}

/** Legacy single-select rows stored as `{ timing: "before_food" }`. */
export function timingLabel(id: string): string {
  return MEDICINE_TIMING_OPTIONS.find((o) => o.id === id)?.label ?? id;
}

/** Dashboard / history: support old `timing` string or new boolean flags. */
export function summarizeMedicineLine(line: unknown): string {
  if (line && typeof line === "object") {
    const o = line as Record<string, unknown>;
    if (typeof o.timing === "string" && o.timing.length > 0) {
      return timingLabel(o.timing);
    }
    return formatTimingSummary({
      before_food: !!o.before_food,
      after_food: !!o.after_food,
      morning: !!o.morning,
      evening: !!o.evening,
    });
  }
  return "—";
}
