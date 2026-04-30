-- Adds per-doctor letterhead field coordinates detected at onboarding by
-- the AI vision model. NULL means detection failed or was never run; PDF
-- builders fall back to the hardcoded defaults in lib/pdf/coords.ts and
-- lib/pdf/medicineRxCoords.ts.
--
-- Shape stored:
-- {
--   "name":      { "xFrac": number, "yFrac": number } | null,
--   "age":       { "xFrac": number, "yFrac": number } | null,
--   "weight":    { "xFrac": number, "yFrac": number } | null,
--   "bp":        { "xFrac": number, "yFrac": number } | null,
--   "date":      { "xFrac": number, "yFrac": number } | null,
--   "mobile":    { "xFrac": number, "yFrac": number } | null,
--   "bodyStart": { "xFrac": number, "yFrac": number } | null
-- }

ALTER TABLE public.doctors
  ADD COLUMN IF NOT EXISTS letterhead_coords JSONB DEFAULT NULL;
