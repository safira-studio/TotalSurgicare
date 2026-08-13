// Mumbai-specific treatment content, keyed by BASE slug (same keys as
// components/data/index.ts). All 6 treatments curated for Mumbai
// (see components/data/cities.ts) have an entry here; resolveCityTreatment
// falls back to the shared catalogue for anything not listed.
import type { MedicalCondition } from "@/types";

import { fissureTreatmentMumbai } from "./fissureTreatment";
import { fistulaTreatmentMumbai } from "./fistulaTreatment";
import { gallstoneSurgeryMumbai } from "./gallstoneSurgery";
import { kidneyStoneTreatmentMumbai } from "./kidneyStoneTreatment";
import { pilesTreatmentMumbai } from "./pilesTreatment";
import { staplerCircumcisionMumbai } from "./staplerCircumcision";

const mumbaiTreatmentContent: Record<string, MedicalCondition> = {
  "stapler-circumcision": staplerCircumcisionMumbai,
  "gallstone-surgery": gallstoneSurgeryMumbai,
  "kidney-stone-treatment-rirspcnlursl": kidneyStoneTreatmentMumbai,
  "piles-treatment": pilesTreatmentMumbai,
  "fissure-treatment": fissureTreatmentMumbai,
  "fistula-treatment": fistulaTreatmentMumbai,
};

export default mumbaiTreatmentContent;
