// Pune-specific treatment content, keyed by BASE slug (same keys as
// components/data/index.ts). Only the 7 treatments curated for Pune
// (see components/data/cities.ts) need an entry here; resolveCityTreatment
// falls back to the shared catalogue for anything not listed.
import { staplerCircumcisionPune } from "./staplerCircumcision";
import { fissureTreatmentPune } from "./fissureTreatment";
import { kidneyStoneTreatmentPune } from "./kidneyStoneTreatment";
import { gallstoneSurgeryPune } from "./gallstoneSurgery";
import { lipomaRemovalPune } from "./lipomaRemoval";
import { gallBladderSurgeryPune } from "./gallBladderSurgery";
import { pilesTreatmentPune } from "./pilesTreatment";
import type { MedicalCondition } from "@/types";

const puneTreatmentContent: Record<string, MedicalCondition> = {
  "stapler-circumcision": staplerCircumcisionPune,
  "fissure-treatment": fissureTreatmentPune,
  "kidney-stone-treatment-rirspcnlursl": kidneyStoneTreatmentPune,
  "gallstone-surgery": gallstoneSurgeryPune,
  lipoma: lipomaRemovalPune,
  "gall-bladder-surgery": gallBladderSurgeryPune,
  "piles-treatment": pilesTreatmentPune,
};

export default puneTreatmentContent;
