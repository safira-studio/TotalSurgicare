import {
  PRESCRIPTION_COORDS,
  type PrescriptionCoords,
} from "@/lib/pdf/coords";
import {
  MEDICINE_RX_COORDS,
  type MedicineRxCoords,
} from "@/lib/pdf/medicineRxCoords";
import type { DetectedCoords } from "./types";

export function mergePrescriptionCoords(
  detected: DetectedCoords | null | undefined,
  defaults: PrescriptionCoords = PRESCRIPTION_COORDS,
): PrescriptionCoords {
  if (!detected) return defaults;
  return {
    name: detected.name
      ? { ...defaults.name, ...detected.name }
      : defaults.name,
    age: detected.age
      ? { ...defaults.age, ...detected.age }
      : defaults.age,
    weight: detected.weight
      ? { ...defaults.weight, ...detected.weight }
      : defaults.weight,
    bp: detected.bp
      ? { ...defaults.bp, ...detected.bp }
      : defaults.bp,
    date: detected.date
      ? { ...defaults.date, ...detected.date }
      : defaults.date,
    mobile: detected.mobile
      ? { ...defaults.mobile, ...detected.mobile }
      : defaults.mobile,
    testsStart: detected.bodyStart
      ? {
          ...defaults.testsStart,
          xFrac: detected.bodyStart.xFrac,
          yStartFrac: detected.bodyStart.yFrac,
        }
      : defaults.testsStart,
  };
}

export function mergeMedicineRxCoords(
  detected: DetectedCoords | null | undefined,
  defaults: MedicineRxCoords = MEDICINE_RX_COORDS,
): MedicineRxCoords {
  if (!detected) return defaults;
  return {
    name: detected.name
      ? { ...defaults.name, ...detected.name }
      : defaults.name,
    age: detected.age
      ? { ...defaults.age, ...detected.age }
      : defaults.age,
    bp: detected.bp
      ? { ...defaults.bp, ...detected.bp }
      : defaults.bp,
    date: detected.date
      ? { ...defaults.date, ...detected.date }
      : defaults.date,
    mobile: detected.mobile
      ? { ...defaults.mobile, ...detected.mobile }
      : defaults.mobile,
    visitId: defaults.visitId,
    allergies: defaults.allergies,
    medsStart: detected.bodyStart
      ? {
          ...defaults.medsStart,
          xFrac: detected.bodyStart.xFrac,
          yStartFrac: detected.bodyStart.yFrac,
        }
      : defaults.medsStart,
  };
}
