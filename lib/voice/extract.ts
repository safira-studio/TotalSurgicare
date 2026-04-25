import { DIAGNOSTIC_TESTS } from "@/lib/data/diagnosticTests";

export interface AssemblyAIEntity {
  entity_type: string;
  text: string;
  start?: number;
  end?: number;
}

export interface ExtractedFields {
  patientName?: string;
  patientAge?: number;
  patientMobile?: string;
  testIds: string[];
  notes?: string;
}

/**
 * Keyword map for fuzzy-matching spoken test names to diagnostic test IDs.
 * Keys are lowercase phrases the doctor may say. Value is the test id.
 * Keep phrases short and unambiguous; longer phrases are matched first.
 */
const TEST_KEYWORDS: Array<{ phrase: string; id: string }> = [
  // Blood Tests
  { phrase: "complete blood count", id: "cbc" },
  { phrase: "c b c", id: "cbc" },
  { phrase: "cbc", id: "cbc" },
  { phrase: "erythrocyte sedimentation rate", id: "esr" },
  { phrase: "e s r", id: "esr" },
  { phrase: "esr", id: "esr" },
  { phrase: "blood group", id: "blood_group" },
  { phrase: "rh factor", id: "blood_group" },
  { phrase: "random blood sugar", id: "rbs" },
  { phrase: "r b s", id: "rbs" },
  { phrase: "rbs", id: "rbs" },
  { phrase: "blood sugar", id: "rbs" },
  { phrase: "sugar test", id: "rbs" },
  { phrase: "fasting blood sugar", id: "fbs" },
  { phrase: "fasting sugar", id: "fbs" },
  { phrase: "fasting glucose", id: "fbs" },
  { phrase: "f b s", id: "fbs" },
  { phrase: "fbs", id: "fbs" },
  { phrase: "post prandial", id: "pp_sugar" },
  { phrase: "postprandial", id: "pp_sugar" },
  { phrase: "pp sugar", id: "pp_sugar" },
  { phrase: "pp blood sugar", id: "pp_sugar" },
  { phrase: "glycated haemoglobin", id: "hba1c" },
  { phrase: "glycated hemoglobin", id: "hba1c" },
  { phrase: "hba1c", id: "hba1c" },
  { phrase: "hb a1c", id: "hba1c" },
  { phrase: "h b a one c", id: "hba1c" },

  // Liver & Kidney
  { phrase: "liver function test", id: "lft" },
  { phrase: "liver test", id: "lft" },
  { phrase: "liver function", id: "lft" },
  { phrase: "l f t", id: "lft" },
  { phrase: "lft", id: "lft" },
  { phrase: "kidney function test", id: "kft" },
  { phrase: "kidney test", id: "kft" },
  { phrase: "kidney function", id: "kft" },
  { phrase: "renal function test", id: "kft" },
  { phrase: "k f t", id: "kft" },
  { phrase: "kft", id: "kft" },
  { phrase: "uric acid", id: "uric_acid" },
  { phrase: "serum uric acid", id: "uric_acid" },
  { phrase: "serum creatinine", id: "creatinine" },
  { phrase: "creatinine", id: "creatinine" },

  // Lipid & Heart
  { phrase: "lipid profile", id: "lipid" },
  { phrase: "lipid test", id: "lipid" },
  { phrase: "cholesterol test", id: "lipid" },
  { phrase: "lipid", id: "lipid" },
  { phrase: "troponin", id: "trop_i" },
  { phrase: "trop i", id: "trop_i" },
  { phrase: "electrocardiogram", id: "ecg" },
  { phrase: "e c g", id: "ecg" },
  { phrase: "ecg", id: "ecg" },
  { phrase: "2d echo", id: "echo" },
  { phrase: "two d echo", id: "echo" },
  { phrase: "echo test", id: "echo" },
  { phrase: "echocardiogram", id: "echo" },
  // NOTE: bare "echo" intentionally omitted — too short, false-positives in normal speech
  { phrase: "treadmill test", id: "tmt" },
  { phrase: "t m t", id: "tmt" },
  { phrase: "tmt", id: "tmt" },

  // Thyroid & Hormones
  { phrase: "thyroid stimulating hormone", id: "tsh" },
  { phrase: "thyroid test", id: "tsh" },
  { phrase: "thyroid function test", id: "tsh" },
  { phrase: "t s h", id: "tsh" },
  { phrase: "tsh", id: "tsh" },
  { phrase: "thyroid panel", id: "t3_t4" },
  { phrase: "t3 t4", id: "t3_t4" },
  { phrase: "t three t four", id: "t3_t4" },
  { phrase: "prolactin", id: "prolactin" },

  // Urine & Stool
  { phrase: "urine routine", id: "urine_re" },
  { phrase: "urine r e", id: "urine_re" },
  { phrase: "urine microscopy", id: "urine_re" },
  { phrase: "urine test", id: "urine_re" },
  { phrase: "urine analysis", id: "urine_re" },
  { phrase: "urinalysis", id: "urine_re" },
  { phrase: "urine culture", id: "urine_culture" },
  { phrase: "urine sensitivity", id: "urine_culture" },
  { phrase: "stool routine", id: "stool_re" },
  { phrase: "stool microscopy", id: "stool_re" },
  { phrase: "stool test", id: "stool_re" },

  // Imaging
  { phrase: "x ray chest", id: "xray_chest" },
  { phrase: "x-ray chest", id: "xray_chest" },
  { phrase: "xray chest", id: "xray_chest" },
  { phrase: "chest x ray", id: "xray_chest" },
  { phrase: "chest x-ray", id: "xray_chest" },
  { phrase: "chest xray", id: "xray_chest" },
  { phrase: "usg abdomen", id: "usg_abdomen" },
  { phrase: "ultrasound abdomen", id: "usg_abdomen" },
  { phrase: "usg pelvis", id: "usg_abdomen" },
  { phrase: "usg kub", id: "usg_kub" },
  { phrase: "ultrasound kub", id: "usg_kub" },
  { phrase: "kidney ureter bladder", id: "usg_kub" },
  { phrase: "ct abdomen", id: "ct_abdomen" },
  { phrase: "ct pelvis", id: "ct_abdomen" },
  { phrase: "mri brain", id: "mri_brain" },
  { phrase: "mammogram", id: "mammogram" },
  { phrase: "mammography", id: "mammogram" },

  // Infection & Serology
  { phrase: "h i v", id: "hiv" },
  { phrase: "hiv", id: "hiv" },
  { phrase: "hepatitis b", id: "hbsag" },
  { phrase: "hbsag", id: "hbsag" },
  { phrase: "hep b", id: "hbsag" },
  { phrase: "hepatitis c", id: "hcv" },
  { phrase: "anti hcv", id: "hcv" },
  { phrase: "hcv", id: "hcv" },
  { phrase: "widal test", id: "widal" },
  { phrase: "widal", id: "widal" },
  { phrase: "typhoid", id: "widal" },
  { phrase: "dengue ns1", id: "dengue_ns1" },
  { phrase: "dengue", id: "dengue_ns1" },
  { phrase: "c reactive protein", id: "crp" },
  { phrase: "c r p", id: "crp" },
  { phrase: "crp", id: "crp" },
];

const VALID_TEST_IDS = new Set(DIAGNOSTIC_TESTS.map((t) => t.id));

/** Normalize text for keyword matching: lowercase, collapse whitespace, strip punctuation. */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,;:!?()\[\]"']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Convert spoken digit-word sequences to numeric strings so the mobile regex
 * can match even when AssemblyAI's format_text doesn't convert them.
 *   "nine eight seven six five four three two one zero" → "9876543210"
 *   "nine-eight-seven"                                 → "987"
 * Only converts runs of 2+ consecutive digit words to avoid changing
 * regular words like "one" appearing in unrelated sentences.
 */
const WORD_TO_DIGIT: Record<string, string> = {
  zero: "0",
  oh: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function wordDigitsToNumbers(text: string): string {
  // Step 1: Expand multiplier phrases
  // - "double nine" → "99", "triple eight" → "888"
  // - "double 846751" → "8846751" (duplicate only the first digit of the chunk)
  const multiplierExpanded = text
    .replace(/\bdouble\s+(\d{2,})\b/gi, (_match, chunk: string) => {
      const first = chunk.charAt(0);
      return `${first}${chunk}`;
    })
    .replace(
      /\bdouble\s+(zero|oh|one|two|three|four|five|six|seven|eight|nine|\d)\b/gi,
      (_, d) => {
        const ch = WORD_TO_DIGIT[d.toLowerCase()] ?? d;
        return ch + ch;
      },
    )
    .replace(
      /\btriple\s+(zero|oh|one|two|three|four|five|six|seven|eight|nine|\d)\b/gi,
      (_, d) => {
        const ch = WORD_TO_DIGIT[d.toLowerCase()] ?? d;
        return ch + ch + ch;
      },
    );

  // Step 2: Convert remaining spoken digit-word sequences to numeric strings
  return multiplierExpanded.replace(
    /\b(?:zero|oh|one|two|three|four|five|six|seven|eight|nine)(?:[\s-]+(?:zero|oh|one|two|three|four|five|six|seven|eight|nine))+\b/gi,
    (match) =>
      match
        .toLowerCase()
        .split(/[\s-]+/)
        .map((w) => WORD_TO_DIGIT[w] ?? w)
        .join(""),
  );
}

/**
 * Extract patient age from transcript. Matches patterns like:
 *   "age 45", "aged 45", "45 years", "45 year old", "45 yrs", "45-year-old"
 */
function extractAge(text: string): number | undefined {
  const normalized = normalize(text);

  const patterns: RegExp[] = [
    /\bage[d]?\s+(?:is\s+)?(\d{1,3})\b/,
    /\b(\d{1,3})[\s-]*(?:year|yr|yrs|years)[\s-]*(?:old)?\b/,
    /\b(\d{1,3})\s*y\/o\b/,
  ];

  for (const re of patterns) {
    const match = normalized.match(re);
    if (match) {
      const n = parseInt(match[1], 10);
      if (n >= 0 && n <= 120) return n;
    }
  }
  return undefined;
}

/**
 * Extract a 10-digit Indian mobile number from transcript.
 * Handles spaces, hyphens, optional +91/91 prefix, and digit words
 * ("nine eight seven..." → "987...") when format_text didn't convert them.
 * Falls back to 9-digit sequences in case transcription drops a digit —
 * the form's Zod validation will flag it so the doctor can correct.
 */
function extractMobile(text: string): string | undefined {
  // Convert spoken digit words before stripping non-digits
  const expanded = wordDigitsToNumbers(text);
  const digitsOnly = expanded.replace(/[^\d]/g, "");

  // +91 / 91 prefix followed by 10 digits
  const withCountryCode = digitsOnly.match(/91([6-9]\d{9})/);
  if (withCountryCode) return withCountryCode[1];

  // Standalone 10-digit Indian mobile (starts with 6-9)
  const exact = digitsOnly.match(/([6-9]\d{9})/);
  if (exact) return exact[1];

  // Lenient: 9-digit starting with 6-9 (transcription may drop one digit)
  // Prefills the field so doctor only needs a one-digit correction
  const nearMiss = digitsOnly.match(/([6-9]\d{8})/);
  if (nearMiss) return nearMiss[1];

  return undefined;
}

/**
 * Extract patient name from AssemblyAI person_name entities first,
 * falling back to regex patterns like "patient name is X" or "name is X".
 */
function extractName(text: string, entities: AssemblyAIEntity[]): string | undefined {
  const personEntity = entities.find((e) => e.entity_type === "person_name");
  if (personEntity?.text) return titleCase(personEntity.text.trim());

  const normalized = text.trim();

  const patterns: RegExp[] = [
    /\bpatient(?:'s)?\s+name\s+is\s+([a-z][a-z\s.'-]{1,60}?)(?:\s*(?:,|\.|\band\b|\bage\b|\bmobile\b|\bphone\b|$))/i,
    /\bpatient\s+([a-z][a-z\s.'-]{1,60}?)(?:\s*(?:,|\.|\band\b|\bage\b|\bmobile\b|\bphone\b|$))/i,
    /\bname\s+is\s+([a-z][a-z\s.'-]{1,60}?)(?:\s*(?:,|\.|\band\b|\bage\b|\bmobile\b|\bphone\b|$))/i,
  ];

  for (const re of patterns) {
    const match = normalized.match(re);
    if (match?.[1]) {
      const candidate = match[1].trim().replace(/\s+/g, " ");
      if (candidate.length >= 2 && candidate.length <= 60) {
        return titleCase(candidate);
      }
    }
  }

  return undefined;
}

function titleCase(s: string): string {
  return s
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Extract test IDs from transcript by fuzzy-matching spoken phrases
 * against the TEST_KEYWORDS map. Longer phrases matched first to avoid
 * shorter phrases swallowing longer ones (e.g. "cbc" vs "complete blood count").
 */
function extractTestIds(text: string): string[] {
  const normalized = normalize(text);
  const found = new Set<string>();

  const sorted = [...TEST_KEYWORDS].sort((a, b) => b.phrase.length - a.phrase.length);

  for (const { phrase, id } of sorted) {
    if (!VALID_TEST_IDS.has(id)) continue;
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`\\b${escaped}\\b`, "i");
    if (re.test(normalized)) {
      found.add(id);
    }
  }

  return Array.from(found);
}

/**
 * Main extractor. Combines AssemblyAI entities (when available) with
 * transcript-level regex and keyword matching to produce structured
 * prescription form fields.
 */
export function extractFields(
  transcript: string,
  entities: AssemblyAIEntity[] = [],
): ExtractedFields {
  const text = transcript ?? "";

  const patientName = extractName(text, entities);
  const patientAge = extractAge(text);

  // Prefer AssemblyAI phone_number entity, fall back to regex on raw transcript
  const phoneEntity = entities.find((e) => e.entity_type === "phone_number");
  const patientMobile = extractMobile(phoneEntity?.text ?? "") ?? extractMobile(text);

  const testIds = extractTestIds(text);

  return {
    patientName,
    patientAge,
    patientMobile,
    testIds,
    notes: text.trim() || undefined,
  };
}
