import { MedicalCondition } from "@/types";

export const breastLump: MedicalCondition = {
  id: "19",
  slug: "breast-lump-symptoms-causes-treatment",
  overview: {
    title: "Breast Lump - Symptoms, Causes & Treatment",
    brief:
      "A breast lump is a swelling or mass in the breast tissue. Learn about its symptoms, causes, diagnosis, and treatment options.",
    alternateNames: [
      { language: "Hindi", name: "स्तन में गांठ" },
      { language: "Tamil", name: "பெருஞ்சோலை முனை" },
    ],
  },
  aboutCondition: {
    title: "What is a Breast Lump?",
    description:
      "A breast lump is a localized swelling or mass in the breast. It can be benign or malignant and requires proper evaluation to determine the cause.",
  },
  foodTriggers: [
    {
      name: "High-Fat Diet",
      description:
        "May influence hormone levels, potentially affecting breast tissue.",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Caffeine",
      description:
        "Some believe it may worsen breast lump symptoms, though evidence is limited.",
      bgColor: "bg-orange-100",
    },
  ],
  causes: [
    {
      title: "Fibroadenoma",
      description: "Benign tumors common in younger women.",
      icon: "thermometer",
    },
    {
      title: "Cysts",
      description: "Fluid-filled sacs that can cause lumps.",
      icon: "alert-circle",
    },
    {
      title: "Breast Cancer",
      description: "Malignant tumors requiring urgent treatment.",
      icon: "pill",
    },
    {
      title: "Fibrocystic Changes",
      description: "Noncancerous changes causing lumpiness and discomfort.",
      icon: "alert-circle",
    },
  ],
  symptoms: [
    {
      title: "Palpable Lump",
      description: "Noticeable lump in breast tissue.",
      icon: "clock",
    },
    {
      title: "Pain or Tenderness",
      description: "May or may not be painful.",
      icon: "alert-circle",
    },
    {
      title: "Skin Changes",
      description: "Dimpling, redness, or nipple changes around the lump.",
      icon: "arrow-up",
    },
  ],
  riskFactors: [
    {
      title: "Age",
      description: "Risk increases with age.",
      icon: "thermometer",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to breast cancer.",
      icon: "pill",
    },
    {
      title: "Hormonal Factors",
      description: "Early menstruation, late menopause, or hormone therapy.",
      icon: "clock",
    },
  ],
  complications: [
    {
      title: "Breast Cancer",
      description: "Malignant lumps can spread if untreated.",
      icon: "alert-circle",
    },
    {
      title: "Infection",
      description: "Infected cysts or abscesses can cause pain and swelling.",
      icon: "pill",
    },
    {
      title: "Psychological Impact",
      description: "Anxiety and stress due to lump detection.",
      icon: "arrow-up",
    },
  ],
  diagnosis: {
    description:
      "Includes physical exam, imaging (mammogram, ultrasound), and biopsy if necessary.",
    methods: [
      "Physical Examination",
      "Mammography",
      "Ultrasound Imaging",
      "Fine Needle Aspiration Cytology (FNAC)",
      "Core Needle Biopsy",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Observation",
        description: "Monitoring benign lumps without immediate intervention.",
      },
      {
        name: "Medications",
        description: "Pain relief or hormone therapy in certain cases.",
      },
    ],
    surgical: [
      {
        name: "Excisional Biopsy / Lump Removal",
        description: "Surgical removal of the lump to diagnose or treat.",
        recoveryTime: "1-2 weeks",
        anesthesia: "Local or General",
        benefits: [
          "Definitive diagnosis through histopathology",
          "Complete removal of suspicious lumps",
          "Relief from symptoms",
          "Prevention of malignancy progression",
        ],
      },
      {
        name: "Mastectomy",
        description: "Removal of breast tissue in cases of cancer.",
        recoveryTime: "Several weeks",
        anesthesia: "General",
        benefits: [
          "Effective cancer control",
          "Reduces recurrence risk",
          "Can be combined with reconstruction",
        ],
      },
    ],
  },
  types: [
    {
      type: "Benign Lump",
      description: "Includes fibroadenomas and cysts; generally noncancerous.",
      procedure:
        "Clinical evaluation and monitoring or surgical excision if symptomatic.",
    },
    {
      type: "Malignant Lump",
      description:
        "Breast cancer requiring aggressive treatment including surgery, chemotherapy, or radiation.",
      procedure:
        "Diagnosis via biopsy followed by surgery and adjunct therapies.",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Breast Surgeons",
      description: "Specialized care for diagnosis and treatment.",
    },
    {
      title: "State-of-the-Art Imaging",
      description: "Accurate detection and assessment of breast lumps.",
    },
    {
      title: "Personalized Treatment Plans",
      description: "Tailored based on lump type and patient needs.",
    },
    {
      title: "Comprehensive Support",
      description: "Counseling and follow-up care for patients.",
    },
  ],
};
