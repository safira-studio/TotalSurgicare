import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { detectImageMime, formatDateIN } from "@/lib/pdf/prescription";
import { formatTimingSummary, type MedicineLineTimings } from "@/lib/data/medicineTiming";
import { MEDICINE_RX_COORDS as COORDS } from "./medicineRxCoords";

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
  lines: MedicineRxLine[];
  date: string;
  doctorName: string;
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
    lines,
    date,
    doctorName,
  } = input;

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

  const { xFrac, yStartFrac, lineFrac, size } = COORDS.medsStart;
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

  return doc.save();
}

export { detectImageMime, formatDateIN };
