/**
 * Fractional coordinates for medicine (drug) Rx overlays on the same A4 letterhead
 * as investigation prescriptions. Per-doctor overrides come from
 * doctors.letterhead_coords (detected once at onboarding) and are merged over
 * these defaults inside the PDF builder.
 */
import type { CoordPoint, BodyStartCoord } from "./coords";

export interface MedicineRxCoords {
  name: CoordPoint;
  age: CoordPoint;
  bp: CoordPoint;
  date: CoordPoint;
  mobile: CoordPoint;
  visitId: CoordPoint;
  allergies: CoordPoint;
  medsStart: BodyStartCoord;
}

export const MEDICINE_RX_COORDS: MedicineRxCoords = {
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
};
