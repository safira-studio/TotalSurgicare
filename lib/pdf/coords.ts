/**
 * Shared fractional coordinates for prescription text overlays.
 * Used by BOTH the PDF generator (lib/pdf/prescription.ts) AND the
 * in-browser preview (app/prescription/page.tsx) so they stay in sync.
 *
 * xFrac = fraction of page width  (0 = left, 1 = right)
 * yFrac = fraction of page height (0 = top,  1 = bottom)
 *
 * Tuned to the Shifa Clinic A4 letterhead.
 */
export const PRESCRIPTION_COORDS = {
  name:   { xFrac: 0.18, yFrac: 0.245, size: 11 },
  age:    { xFrac: 0.14, yFrac: 0.280, size: 11 },
  weight: { xFrac: 0.38, yFrac: 0.280, size: 11 },
  bp:     { xFrac: 0.56, yFrac: 0.280, size: 11 },
  date:   { xFrac: 0.82, yFrac: 0.280, size: 10 },
  mobile: { xFrac: 0.18, yFrac: 0.325, size: 10 },
  testsStart: {
    xFrac: 0.13,
    yStartFrac: 0.380,
    lineFrac: 0.030,
    size: 11,
  },
} as const;

export type PrescriptionCoords = typeof PRESCRIPTION_COORDS;
