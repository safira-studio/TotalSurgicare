import { MedicalCondition } from "@/types";

export const kidneyStoneTreatmentRirspcnlursl: MedicalCondition = {
  id: "12",
  slug: "kidney-stone-treatment",
  overview: {
    title: "Kidney Stone Treatment – Fast & Effective Relief",
    brief:
      "Kidney stones are hard deposits formed from minerals in the urine. We provide advanced treatment options to relieve pain and remove stones safely.",
    alternateNames: [
      { language: "Hindi", name: "गुर्दे की पथरी" },
      { language: "Tamil", name: "சிறுநீரகக் கல்" },
    ],
  },
  aboutCondition: {
    title: "What is a Kidney Stone?",
    description:
      "Kidney stones are solid mineral and salt deposits that form inside the kidneys. They can cause severe pain and urinary issues when they pass through the urinary tract.",
  },
  foodTriggers: [
    {
      name: "High Oxalate Foods",
      description: "Such as spinach, nuts, and chocolate increase stone risk",
      bgColor: "bg-green-100",
    },
    {
      name: "Excess Salt",
      description: "Raises calcium levels in urine, promoting stone formation",
      bgColor: "bg-yellow-100",
    },
    {
      name: "High Protein Diet",
      description: "Can increase stone-forming substances in urine",
      bgColor: "bg-orange-100",
    },
    {
      name: "Sugary Drinks",
      description: "Increase risk of stone formation and dehydration",
      bgColor: "bg-red-100",
    },
    {
      name: "Caffeine",
      description: "May cause dehydration if consumed excessively",
      bgColor: "bg-blue-100",
    },
  ],
  causes: [
    {
      title: "Dehydration",
      description: "Low fluid intake concentrates urine and promotes stones",
      icon: "thermometer",
    },
    {
      title: "High Mineral Levels",
      description: "Excess calcium, oxalate, or uric acid in urine",
      icon: "alert-circle",
    },
    {
      title: "Dietary Factors",
      description: "High salt, protein, or oxalate intake",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Increases stone risk due to metabolic changes",
      icon: "arrow-up",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to kidney stones",
      icon: "image",
    },
    {
      title: "Certain Medical Conditions",
      description:
        "Like gout, hyperparathyroidism, or urinary tract infections",
      icon: "syringe",
    },
  ],
  symptoms: [
    {
      title: "Severe Flank Pain",
      description: "Sharp pain in the side and back, radiating to the groin",
      icon: "alert-circle",
    },
    {
      title: "Blood in Urine",
      description: "Urine may appear pink, red, or brown",
      icon: "thermometer",
    },
    {
      title: "Frequent Urination",
      description: "Urgency and discomfort while urinating",
      icon: "clock",
    },
    {
      title: "Nausea and Vomiting",
      description: "Common during intense pain episodes",
      icon: "pill",
    },
    {
      title: "Cloudy or Foul-Smelling Urine",
      description: "May indicate infection",
      icon: "syringe",
    },
    {
      title: "Fever and Chills",
      description: "Signs of a urinary tract infection",
      icon: "image",
    },
  ],
  riskFactors: [
    {
      title: "Dehydration",
      description: "Not drinking enough fluids",
      icon: "thermometer",
    },
    {
      title: "High Salt Diet",
      description: "Promotes calcium buildup",
      icon: "arrow-up",
    },
    {
      title: "Obesity",
      description: "Increases risk due to metabolic changes",
      icon: "pill",
    },
    {
      title: "Family History",
      description: "Genetic predisposition",
      icon: "image",
    },
    {
      title: "Certain Medical Conditions",
      description: "Including gout, diabetes, and renal tubular acidosis",
      icon: "syringe",
    },
  ],
  complications: [
    {
      title: "Urinary Tract Infection",
      description: "Infection due to blockage",
      icon: "syringe",
    },
    {
      title: "Hydronephrosis",
      description: "Swelling of a kidney due to urine buildup",
      icon: "clock",
    },
    {
      title: "Kidney Damage",
      description: "Long-term obstruction can cause damage",
      icon: "alert-circle",
    },
    {
      title: "Sepsis",
      description: "Serious infection spreading in the body",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves urine tests and imaging to detect stones and their location.",
    methods: [
      "Urinalysis (to check for blood and infection)",
      "Blood Tests (to assess kidney function)",
      "Ultrasound (to visualize stones)",
      "CT Scan (detailed imaging for stone size and position)",
      "X-rays (less commonly used)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Pain Management",
        description: "Using medications to relieve pain during stone passage",
      },
      {
        name: "Increased Hydration",
        description: "Drinking plenty of fluids to help pass stones",
      },
      {
        name: "Medical Expulsive Therapy",
        description:
          "Medications such as alpha-blockers to relax urinary tract muscles",
      },
    ],
    surgical: [
      {
        name: "Extracorporeal Shock Wave Lithotripsy (ESWL)",
        description:
          "Non-invasive treatment using shock waves to break stones into smaller pieces",
        benefits: [
          "Minimally invasive",
          "Outpatient procedure",
          "Quick recovery",
        ],
        recoveryTime: "Few days",
        anesthesia: "Sedation or general",
      },
      {
        name: "Ureteroscopy",
        description:
          "Endoscopic removal or fragmentation of stones through the urinary tract",
        benefits: [
          "Direct stone removal",
          "Effective for mid and lower urinary tract stones",
        ],
        recoveryTime: "1 week",
        anesthesia: "General",
      },
      {
        name: "Percutaneous Nephrolithotomy (PCNL)",
        description:
          "Surgical removal of large stones via a small incision in the back",
        benefits: [
          "Effective for large or complex stones",
          "Short hospital stay",
        ],
        recoveryTime: "1-2 weeks",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Calcium Stones",
      description: "Most common type formed from calcium oxalate or phosphate",
      procedure:
        "Usually treated with hydration and pain management. Larger stones may require ESWL or ureteroscopy for removal.",
    },
    {
      type: "Struvite Stones",
      description: "Associated with urinary tract infections",
      procedure:
        "Treatment involves antibiotics for infection and removal via ESWL or percutaneous nephrolithotomy (PCNL).",
    },
    {
      type: "Uric Acid Stones",
      description: "Formed due to high uric acid levels",
      procedure:
        "Managed by dietary changes, medication to reduce uric acid, and sometimes ESWL or ureteroscopy for stone removal.",
    },
    {
      type: "Cystine Stones",
      description: "Rare stones caused by a genetic disorder",
      procedure:
        "Require specialized treatment including increased hydration, medications, and sometimes surgical removal via PCNL or ureteroscopy.",
    },
  ],

  whyChooseUs: [
    {
      title: "Expert Urologists",
      description: "Specialized in advanced kidney stone treatment",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Equipped with latest imaging and minimally invasive surgical tools",
    },
  ],
};
