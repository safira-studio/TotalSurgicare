import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { getTestLabel } from "@/lib/data/diagnosticTests";
import { PRESCRIPTION_COORDS } from "./coords";
import { mergePrescriptionCoords } from "@/lib/letterhead/mergeCoords";
import type { DetectedCoords } from "@/lib/letterhead/types";

/** Doctor contact block rendered on PDFs when the letterhead is a plain design. */
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

export interface PrescriptionInput {
  letterheadBytes: Uint8Array;
  letterheadMime: "image/png" | "image/jpeg";
  patientName: string;
  patientAge: number | null;
  patientMobile: string; // normalised 10-digit
  testIds: string[];
  date: string; // e.g. "20 Apr 2026"
  doctorName: string;
  /**
   * When provided the doctor's info block is printed in the PDF header
   * (used when the uploaded letterhead is a plain/blank design with no info printed on it).
   */
  doctorHeaderInfo?: DoctorHeaderInfo | null;
  /** Per-doctor coordinates detected at onboarding; falls back to defaults if null. */
  coords?: DetectedCoords | null;
}

/**
 * Builds and returns a PDF Uint8Array with the letterhead as the background
 * and the patient data overlaid at fixed fractional coordinates.
 */
export async function buildPrescriptionPdf(
  input: PrescriptionInput,
): Promise<Uint8Array> {
  const {
    letterheadBytes,
    letterheadMime,
    patientName,
    patientAge,
    patientMobile,
    testIds,
    date,
    doctorHeaderInfo,
  } = input;

  const COORDS = mergePrescriptionCoords(input.coords, PRESCRIPTION_COORDS);

  const doc = await PDFDocument.create();
  const page = doc.addPage([595, 842]); // A4 portrait in points
  const { width, height } = page.getSize();

  // Embed letterhead as full-page background
  const letterheadImage =
    letterheadMime === "image/png"
      ? await doc.embedPng(letterheadBytes)
      : await doc.embedJpg(letterheadBytes);

  page.drawImage(letterheadImage, {
    x: 0,
    y: 0,
    width,
    height,
  });

  // Load fonts
  const fontNormal = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

  const ink = rgb(0.05, 0.05, 0.05); // near-black

  /** Convert fractions to pdf-lib points (bottom-left origin) */
  function px(xFrac: number) {
    return xFrac * width;
  }
  function py(yFrac: number) {
    return height - yFrac * height;
  }

  // ── Doctor header block ────────────────────────────────────────────────────
  // Rendered when the letterhead is a plain design with no doctor info printed.
  if (doctorHeaderInfo) {
    const hx = px(doctorHeaderInfo.xFrac ?? 0.50);
    let hy = py(doctorHeaderInfo.yFrac ?? 0.042);
    const lineStep = 19;

    const normalName = doctorHeaderInfo.name.replace(/^(dr\.?\s*)+/i, "").trim();
    page.drawText(`Dr. ${normalName}`, {
      x: hx,
      y: hy,
      font: fontBold,
      size: 13,
      color: rgb(0.04, 0.04, 0.04),
    });
    hy -= lineStep;

    if (doctorHeaderInfo.clinicName?.trim()) {
      page.drawText(doctorHeaderInfo.clinicName.trim(), {
        x: hx,
        y: hy,
        font: fontNormal,
        size: 10,
        color: ink,
      });
      hy -= lineStep - 3;
    }

    if (doctorHeaderInfo.phone?.trim()) {
      page.drawText(`Mob: ${doctorHeaderInfo.phone.trim()}`, {
        x: hx,
        y: hy,
        font: fontNormal,
        size: 9,
        color: ink,
      });
      hy -= lineStep - 3;
    }

    if (doctorHeaderInfo.regNo?.trim()) {
      page.drawText(`Reg. No.: ${doctorHeaderInfo.regNo.trim()}`, {
        x: hx,
        y: hy,
        font: fontNormal,
        size: 9,
        color: ink,
      });
      hy -= lineStep - 3;
    }

    if (doctorHeaderInfo.email?.trim()) {
      page.drawText(doctorHeaderInfo.email.trim(), {
        x: hx,
        y: hy,
        font: fontNormal,
        size: 9,
        color: ink,
      });
    }
  }
  // ──────────────────────────────────────────────────────────────────────────

  // --- Name ---
  page.drawText(patientName, {
    x: px(COORDS.name.xFrac),
    y: py(COORDS.name.yFrac),
    font: fontBold,
    size: COORDS.name.size,
    color: ink,
  });

  // --- Age ---
  if (patientAge !== null) {
    page.drawText(`${patientAge} yrs`, {
      x: px(COORDS.age.xFrac),
      y: py(COORDS.age.yFrac),
      font: fontNormal,
      size: COORDS.age.size,
      color: ink,
    });
  }

  // --- Date ---
  page.drawText(date, {
    x: px(COORDS.date.xFrac),
    y: py(COORDS.date.yFrac),
    font: fontNormal,
    size: COORDS.date.size,
    color: ink,
  });

  // --- Mobile (printed under the name line) ---
  page.drawText(`Mob: ${patientMobile}`, {
    x: px(COORDS.mobile.xFrac),
    y: py(COORDS.mobile.yFrac),
    font: fontNormal,
    size: COORDS.mobile.size,
    color: ink,
  });

  // --- Diagnostic test list ---
  const { xFrac, yStartFrac, lineFrac, size } = COORDS.testsStart;
  let lineIndex = 0;

  // Section heading
  page.drawText("Advised Investigations:", {
    x: px(xFrac),
    y: py(yStartFrac + lineIndex * lineFrac),
    font: fontBold,
    size: size + 1,
    color: ink,
  });
  lineIndex++;

  for (const id of testIds) {
    const label = getTestLabel(id);
    const yPos = py(yStartFrac + lineIndex * lineFrac);

    // Stop drawing if we've run off the bottom of the page
    if (yPos < 40) break;

    page.drawText(`\u2022 ${label}`, {
      x: px(xFrac + 0.02),
      y: yPos,
      font: fontNormal,
      size,
      color: ink,
    });
    lineIndex++;
  }

  const pdfBytes = await doc.save();
  return pdfBytes;
}

/**
 * Detect MIME from the first bytes of a Buffer/Uint8Array.
 * Returns "image/png" or "image/jpeg".
 * Throws if neither PNG nor JPEG magic bytes are found.
 */
export function detectImageMime(
  bytes: Uint8Array,
): "image/png" | "image/jpeg" {
  // PNG: 89 50 4E 47
  if (
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    return "image/png";
  }
  // JPEG: FF D8
  if (bytes[0] === 0xff && bytes[1] === 0xd8) {
    return "image/jpeg";
  }
  throw new Error(
    "Unsupported image format. Only PNG and JPEG letterheads are supported.",
  );
}

/** Format today's date in Indian readable form: e.g. "20 Apr 2026" */
export function formatDateIN(date: Date = new Date()): string {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
