/** Checkbox options for how/when to take each medicine (any combination). */
export const MEDICINE_TIMING_OPTIONS = [
  { id: "before_food", label: "Before food" },
  { id: "after_food", label: "After food" },
  { id: "morning", label: "Morning" },
  { id: "afternoon", label: "Afternoon" },
  { id: "evening", label: "Evening" },
  { id: "one_spoon", label: "1 Spoon" },
  { id: "two_spoons", label: "2 Spoon" },
] as const;

export type MedicineTimingFlagId = (typeof MEDICINE_TIMING_OPTIONS)[number]["id"];

export type MedicineLineTimings = Record<MedicineTimingFlagId, boolean>;

export const DEFAULT_LINE_TIMINGS: MedicineLineTimings = {
  before_food: true,
  after_food: false,
  morning: false,
  afternoon: false,
  evening: false,
  one_spoon: false,
  two_spoons: false,
};

export function formatTimingSummary(t: Partial<MedicineLineTimings>): string {
  const parts: string[] = [];
  for (const opt of MEDICINE_TIMING_OPTIONS) {
    if (t[opt.id]) parts.push(opt.label);
  }
  return parts.join(", ") || "—";
}

export function hasAnyTimingSelected(t: Partial<MedicineLineTimings>): boolean {
  return MEDICINE_TIMING_OPTIONS.some((opt) => !!t[opt.id]);
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
    const flags = Object.fromEntries(
      MEDICINE_TIMING_OPTIONS.map((opt) => [opt.id, !!o[opt.id]]),
    ) as MedicineLineTimings;
    return formatTimingSummary(flags);
  }
  return "—";
}
