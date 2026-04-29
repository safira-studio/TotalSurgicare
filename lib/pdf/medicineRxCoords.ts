/**
 * Fractional coordinates for medicine (drug) Rx overlays on the same A4 letterhead
 * as investigation prescriptions. Keep in sync with browser preview if added later.
 */
export const MEDICINE_RX_COORDS = {
  name: { xFrac: 0.18, yFrac: 0.245, size: 11 },
  age: { xFrac: 0.14, yFrac: 0.28, size: 11 },
  bp: { xFrac: 0.38, yFrac: 0.28, size: 11 },
  date: { xFrac: 0.82, yFrac: 0.28, size: 10 },
  mobile: { xFrac: 0.18, yFrac: 0.325, size: 10 },
  visitId: { xFrac: 0.55, yFrac: 0.325, size: 9 },
  allergies: { xFrac: 0.18, yFrac: 0.355, size: 9 },
  medsStart: {
    xFrac: 0.13,
    yStartFrac: 0.4,
    lineFrac: 0.028,
    size: 10,
  },
} as const;
