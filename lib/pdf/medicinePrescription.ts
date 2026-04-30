import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { detectImageMime, formatDateIN } from "@/lib/pdf/prescription";
import { formatTimingSummary, type MedicineLineTimings } from "@/lib/data/medicineTiming";
import { MEDICINE_RX_COORDS } from "./medicineRxCoords";
import { mergeMedicineRxCoords } from "@/lib/letterhead/mergeCoords";
import type { DetectedCoords } from "@/lib/letterhead/types";

export type MedicineRxLine = { name: string } & MedicineLineTimings;

export interface MedicineRxPdfInput {
  letterheadBytes: Uint8Array;
  letterheadMime: "image/png" | "image/jpeg";
  patientName: string;
  patientAge: number;
  bp: string | null;
  patientMobile: string | null;
  allergies: string | null;
  visitCode: string;
  /** Chief complaints — plain text */
  complaints: string | null;
  /** Diagnosis labels in chart order */
  diagnosisNames: string[];
  lines: MedicineRxLine[];
  date: string;
  doctorName: string;
  /** Refer-to-specialist details; rendered at the bottom if both are provided. */
  referralName?: string | null;
  referralMobile?: string | null;
  /** Per-doctor coordinates detected at onboarding; falls back to defaults if null. */
  coords?: DetectedCoords | null;
}

/** Word-wrap for PDF single-column body text. */
function wrapPdfLines(text: string, maxChars: number, maxLines: number): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return ["—"];
  const out: string[] = [];
  let cur = "";
  for (const w of words) {
    if (out.length >= maxLines) break;
    const next = cur ? `${cur} ${w}` : w;
    if (next.length <= maxChars) {
      cur = next;
    } else {
      if (cur) {
        out.push(cur);
        cur = w.length > maxChars ? `${w.slice(0, Math.max(1, maxChars - 1))}…` : w;
      } else {
        out.push(w.slice(0, maxChars));
        cur = "";
      }
    }
  }
  if (cur && out.length < maxLines) out.push(cur);
  return out.length > 0 ? out : ["—"];
}

export async function buildMedicineRxPdf(
  input: MedicineRxPdfInput,
): Promise<Uint8Array> {
  const {
    letterheadBytes,
    letterheadMime,
    patientName,
    patientAge,
    bp,
    patientMobile,
    allergies,
    visitCode,
    complaints,
    diagnosisNames,
    lines,
    date,
    doctorName,
    referralName,
    referralMobile,
  } = input;

  const COORDS = mergeMedicineRxCoords(input.coords, MEDICINE_RX_COORDS);

  const doc = await PDFDocument.create();
  const page = doc.addPage([595, 842]);
  const { width, height } = page.getSize();

  const letterheadImage =
    letterheadMime === "image/png"
      ? await doc.embedPng(letterheadBytes)
      : await doc.embedJpg(letterheadBytes);

  page.drawImage(letterheadImage, { x: 0, y: 0, width, height });

  const fontNormal = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const ink = rgb(0.05, 0.05, 0.05);

  function px(xFrac: number) {
    return xFrac * width;
  }
  function py(yFrac: number) {
    return height - yFrac * height;
  }

  page.drawText(patientName, {
    x: px(COORDS.name.xFrac),
    y: py(COORDS.name.yFrac),
    font: fontBold,
    size: COORDS.name.size,
    color: ink,
  });

  page.drawText(`${patientAge} yrs`, {
    x: px(COORDS.age.xFrac),
    y: py(COORDS.age.yFrac),
    font: fontNormal,
    size: COORDS.age.size,
    color: ink,
  });

  if (bp?.trim()) {
    page.drawText(bp.trim(), {
      x: px(COORDS.bp.xFrac),
      y: py(COORDS.bp.yFrac),
      font: fontNormal,
      size: COORDS.bp.size,
      color: ink,
    });
  }

  page.drawText(date, {
    x: px(COORDS.date.xFrac),
    y: py(COORDS.date.yFrac),
    font: fontNormal,
    size: COORDS.date.size,
    color: ink,
  });

  if (patientMobile?.trim()) {
    page.drawText(`Mob: ${patientMobile.trim()}`, {
      x: px(COORDS.mobile.xFrac),
      y: py(COORDS.mobile.yFrac),
      font: fontNormal,
      size: COORDS.mobile.size,
      color: ink,
    });
  }

  page.drawText(`Visit ID: ${visitCode}`, {
    x: px(COORDS.visitId.xFrac),
    y: py(COORDS.visitId.yFrac),
    font: fontNormal,
    size: COORDS.visitId.size,
    color: ink,
  });

  if (allergies?.trim()) {
    const al = allergies.trim();
    const max = 90;
    const shown = al.length > max ? `${al.slice(0, max)}…` : al;
    page.drawText(`Allergies: ${shown}`, {
      x: px(COORDS.allergies.xFrac),
      y: py(COORDS.allergies.yFrac),
      font: fontNormal,
      size: COORDS.allergies.size,
      color: ink,
    });
  }

  const bodyX = px(COORDS.medsStart.xFrac);
  const bodySize = COORDS.medsStart.size - 1;
  const lineH = COORDS.medsStart.lineFrac * 0.92;
  let yFrac = COORDS.medsStart.yStartFrac - 0.02;

  page.drawText("Complaints:", {
    x: bodyX,
    y: py(yFrac),
    font: fontBold,
    size: bodySize + 1,
    color: ink,
  });
  yFrac += lineH;
  const complaintLines = wrapPdfLines(complaints?.trim() ?? "", 88, 8);
  for (const cl of complaintLines) {
    if (py(yFrac) < 52) break;
    page.drawText(cl, {
      x: px(COORDS.medsStart.xFrac + 0.02),
      y: py(yFrac),
      font: fontNormal,
      size: bodySize,
      color: ink,
    });
    yFrac += lineH * 0.9;
  }
  yFrac += lineH * 0.35;

  page.drawText("Diagnoses:", {
    x: bodyX,
    y: py(yFrac),
    font: fontBold,
    size: bodySize + 1,
    color: ink,
  });
  yFrac += lineH;
  const dxList =
    diagnosisNames.length > 0 ? diagnosisNames : ["—"];
  for (const dx of dxList.slice(0, 14)) {
    if (py(yFrac) < 52) break;
    const line = dx.length > 92 ? `${dx.slice(0, 90)}…` : dx;
    page.drawText(`\u2022 ${line}`, {
      x: px(COORDS.medsStart.xFrac + 0.02),
      y: py(yFrac),
      font: fontNormal,
      size: bodySize,
      color: ink,
    });
    yFrac += lineH * 0.92;
  }
  yFrac += lineH * 0.45;

  const { xFrac, lineFrac, size } = COORDS.medsStart;
  const yStartFrac = yFrac;
  let lineIndex = 0;

  page.drawText("Medicines:", {
    x: px(xFrac),
    y: py(yStartFrac + lineIndex * lineFrac),
    font: fontBold,
    size: size + 1,
    color: ink,
  });
  lineIndex++;

  page.drawText(`Dr. ${doctorName}`, {
    x: px(xFrac),
    y: py(yStartFrac + lineIndex * lineFrac),
    font: fontNormal,
    size: size - 1,
    color: rgb(0.2, 0.2, 0.2),
  });
  lineIndex++;

  for (const line of lines) {
    const yPos = py(yStartFrac + lineIndex * lineFrac);
    if (yPos < 48) break;
    const when = formatTimingSummary(line);
    const text = `\u2022 ${line.name} — ${when}`;
    page.drawText(text, {
      x: px(xFrac + 0.02),
      y: yPos,
      font: fontNormal,
      size,
      color: ink,
    });
    lineIndex++;
  }

  // --- Referral ---
  const cleanRefMobile = referralMobile?.trim().replace(/[\s\-().]/g, "") ?? "";
  if (referralName?.trim() && cleanRefMobile.length >= 7) {
    lineIndex++;
    const refYPos = py(yStartFrac + lineIndex * lineFrac);
    if (refYPos >= 48) {
      page.drawText(`Refer to: Dr. ${referralName.trim()} (${referralMobile?.trim()})`, {
        x: px(xFrac),
        y: refYPos,
        font: fontBold,
        size,
        color: ink,
      });
    }
  }

  return doc.save();
}

export { detectImageMime, formatDateIN };
