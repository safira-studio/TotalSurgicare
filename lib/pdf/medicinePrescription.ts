import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { detectImageMime, formatDateIN } from "@/lib/pdf/prescription";
import { formatTimingSummary, type MedicineLineTimings } from "@/lib/data/medicineTiming";
import { MEDICINE_RX_COORDS } from "./medicineRxCoords";
import { mergeMedicineRxCoords } from "@/lib/letterhead/mergeCoords";
import type { DetectedCoords } from "@/lib/letterhead/types";

export type MedicineRxLine = { name: string } & MedicineLineTimings;

/** Doctor contact block rendered on PDFs when the letterhead is a blank design. */
export interface DoctorHeaderInfo {
  name: string;
  clinicName?: string | null;
  phone?: string | null;
  regNo?: string | null;
  email?: string | null;
  /** Horizontal position as a 0–1 fraction of page width (default 0.50). */
  xFrac?: number | null;
  /** Vertical position as a 0–1 fraction of page height from the top (default 0.04). */
  yFrac?: number | null;
}

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
  /**
   * When provided the doctor's info block is printed in the PDF header
   * (used when the uploaded letterhead is a plain/blank design with no info printed on it).
   */
  doctorHeaderInfo?: DoctorHeaderInfo | null;
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
    doctorHeaderInfo,
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

  // ── BLANK LETTERHEAD: draw full structured doctor + patient header ─────────
  // When doctorHeaderInfo is provided the uploaded letterhead has no pre-printed
  // fields, so we render both the doctor block and a labeled patient strip
  // ourselves instead of using the coordinate-based approach below.
  if (doctorHeaderInfo) {
    const labelColor = rgb(0.42, 0.42, 0.42);
    const lineStep = 19;

    // Helper: draws "label " in gray then "value" in bold right next to it
    const lv = (label: string, value: string, x: number, y: number, valSize = 10) => {
      const lw = fontNormal.widthOfTextAtSize(label, 9);
      page.drawText(label, { x, y, font: fontNormal, size: 9, color: labelColor });
      page.drawText(value, { x: x + lw + 1, y, font: fontBold, size: valSize, color: ink });
    };

    // ── Doctor block (top-right, beside the logo) ───────────────────────────
    const docX = px(doctorHeaderInfo.xFrac ?? 0.50);
    let docY = py(doctorHeaderInfo.yFrac ?? 0.038);

    // Normalise name: strip leading "Dr." / "Dr " so we don't print "Dr. Dr."
    const normalName = doctorHeaderInfo.name.replace(/^(dr\.?\s*)+/i, "").trim();
    page.drawText(`Dr. ${normalName}`, {
      x: docX,
      y: docY,
      font: fontBold,
      size: 13,
      color: rgb(0.04, 0.04, 0.04),
    });
    docY -= lineStep;

    if (doctorHeaderInfo.clinicName?.trim()) {
      page.drawText(doctorHeaderInfo.clinicName.trim(), {
        x: docX,
        y: docY,
        font: fontNormal,
        size: 10,
        color: ink,
      });
      docY -= lineStep - 3;
    }

    // Phone + Reg No on the same line to save vertical space
    const contactParts: string[] = [];
    if (doctorHeaderInfo.phone?.trim()) contactParts.push(`Mob: ${doctorHeaderInfo.phone.trim()}`);
    if (doctorHeaderInfo.regNo?.trim()) contactParts.push(`Reg. No.: ${doctorHeaderInfo.regNo.trim()}`);
    if (contactParts.length > 0) {
      page.drawText(contactParts.join("   |   "), { x: docX, y: docY, font: fontNormal, size: 9, color: ink });
      docY -= lineStep - 3;
    }

    if (doctorHeaderInfo.email?.trim()) {
      page.drawText(doctorHeaderInfo.email.trim(), { x: docX, y: docY, font: fontNormal, size: 9, color: ink });
    }

    // ── Divider line below the logo/doctor area ─────────────────────────────
    const dividerY1 = py(0.205);
    page.drawLine({
      start: { x: px(0.06), y: dividerY1 },
      end:   { x: px(0.94), y: dividerY1 },
      thickness: 0.5,
      color: rgb(0.75, 0.75, 0.75),
    });

    // ── Patient info strip (labeled fields in a two/three-column grid) ──────
    const C1 = px(0.07);  // left column
    const C2 = px(0.40);  // centre column
    const C3 = px(0.72);  // right column
    const ROW1 = py(0.233);
    const ROW2 = py(0.263);
    const ROW3 = py(0.293);

    // Row 1: Patient Name | Age | Date
    lv("Patient Name: ", patientName, C1, ROW1);
    lv("Age: ", `${patientAge} yrs`, C2, ROW1);
    lv("Date: ", date, C3, ROW1);

    // Row 2: Mobile | Visit ID | BP (if present)
    if (patientMobile?.trim()) lv("Mobile: ", patientMobile.trim(), C1, ROW2);
    lv("Visit ID: ", visitCode, C2, ROW2);
    if (bp?.trim()) lv("BP: ", bp.trim(), C3, ROW2);

    // Row 3: Allergies (if present)
    if (allergies?.trim()) {
      const al = allergies.trim();
      lv("Allergies: ", al.length > 80 ? `${al.slice(0, 78)}…` : al, C1, ROW3);
    }

    // ── Second divider line before the body ─────────────────────────────────
    const dividerY2 = py(allergies?.trim() ? 0.316 : 0.290);
    page.drawLine({
      start: { x: px(0.06), y: dividerY2 },
      end:   { x: px(0.94), y: dividerY2 },
      thickness: 0.5,
      color: rgb(0.75, 0.75, 0.75),
    });

  } else {
    // ── PRE-PRINTED LETTERHEAD: coordinate-based patient header (unchanged) ──
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
  }
  // ──────────────────────────────────────────────────────────────────────────

  // Body start: blank letterhead uses a tighter fixed position; pre-printed
  // letterheads use the coord-based yStartFrac.
  // Extra +0.025 gap above "Complaints:" on blank letterheads for breathing room.
  const bodyStartYFrac = doctorHeaderInfo
    ? (allergies?.trim() ? 0.357 : 0.331)
    : COORDS.medsStart.yStartFrac - 0.02;

  const bodyX = px(COORDS.medsStart.xFrac);
  const bodySize = COORDS.medsStart.size - 1;
  const lineH = COORDS.medsStart.lineFrac * 0.92;
  let yFrac = bodyStartYFrac;

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
