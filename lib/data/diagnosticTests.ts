export interface DiagnosticTest {
  id: string;
  label: string;
  category: string;
}

export const DIAGNOSTIC_TESTS: DiagnosticTest[] = [
  // Blood Tests
  { id: "cbc", label: "CBC (Complete Blood Count)", category: "Blood Tests" },
  { id: "esr", label: "ESR (Erythrocyte Sedimentation Rate)", category: "Blood Tests" },
  { id: "blood_group", label: "Blood Group & Rh Factor", category: "Blood Tests" },
  { id: "rbs", label: "RBS (Random Blood Sugar)", category: "Blood Tests" },
  { id: "fbs", label: "FBS (Fasting Blood Sugar)", category: "Blood Tests" },
  { id: "pp_sugar", label: "PP Blood Sugar (Post-Prandial)", category: "Blood Tests" },
  { id: "hba1c", label: "HbA1c (Glycated Haemoglobin)", category: "Blood Tests" },

  // Liver & Kidney
  { id: "lft", label: "LFT (Liver Function Test)", category: "Liver & Kidney" },
  { id: "kft", label: "KFT (Kidney Function Test)", category: "Liver & Kidney" },
  { id: "uric_acid", label: "Serum Uric Acid", category: "Liver & Kidney" },
  { id: "creatinine", label: "Serum Creatinine", category: "Liver & Kidney" },

  // Lipid & Heart
  { id: "lipid", label: "Lipid Profile", category: "Lipid & Heart" },
  { id: "trop_i", label: "Troponin-I", category: "Lipid & Heart" },
  { id: "ecg", label: "ECG (Electrocardiogram)", category: "Lipid & Heart" },
  { id: "echo", label: "2D Echo (Echocardiogram)", category: "Lipid & Heart" },
  { id: "tmt", label: "TMT (Treadmill Test)", category: "Lipid & Heart" },

  // Thyroid & Hormones
  { id: "tsh", label: "TSH (Thyroid Stimulating Hormone)", category: "Thyroid & Hormones" },
  { id: "t3_t4", label: "T3 / T4 (Thyroid Panel)", category: "Thyroid & Hormones" },
  { id: "prolactin", label: "Prolactin", category: "Thyroid & Hormones" },

  // Urine & Stool
  { id: "urine_re", label: "Urine Routine & Microscopy", category: "Urine & Stool" },
  { id: "urine_culture", label: "Urine Culture & Sensitivity", category: "Urine & Stool" },
  { id: "stool_re", label: "Stool Routine & Microscopy", category: "Urine & Stool" },

  // Imaging
  { id: "xray_chest", label: "X-Ray Chest (PA view)", category: "Imaging" },
  { id: "usg_abdomen", label: "USG Abdomen & Pelvis", category: "Imaging" },
  { id: "usg_kub", label: "USG KUB (Kidney, Ureter, Bladder)", category: "Imaging" },
  { id: "ct_abdomen", label: "CT Abdomen & Pelvis", category: "Imaging" },
  { id: "mri_brain", label: "MRI Brain", category: "Imaging" },
  { id: "mammogram", label: "Mammogram", category: "Imaging" },

  // Infection & Serology
  { id: "hiv", label: "HIV 1 & 2 (ELISA)", category: "Infection & Serology" },
  { id: "hbsag", label: "HBsAg (Hepatitis B Surface Antigen)", category: "Infection & Serology" },
  { id: "hcv", label: "Anti-HCV (Hepatitis C)", category: "Infection & Serology" },
  { id: "widal", label: "Widal Test (Typhoid)", category: "Infection & Serology" },
  { id: "dengue_ns1", label: "Dengue NS1 Antigen", category: "Infection & Serology" },
  { id: "crp", label: "CRP (C-Reactive Protein)", category: "Infection & Serology" },
];

/** Returns tests grouped by category */
export function getTestsByCategory(): Record<string, DiagnosticTest[]> {
  return DIAGNOSTIC_TESTS.reduce(
    (acc, test) => {
      (acc[test.category] ??= []).push(test);
      return acc;
    },
    {} as Record<string, DiagnosticTest[]>,
  );
}

/** Lookup a test label by id */
export function getTestLabel(id: string): string {
  return DIAGNOSTIC_TESTS.find((t) => t.id === id)?.label ?? id;
}
