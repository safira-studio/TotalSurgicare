import { MedicalCondition } from "@/types";

export const sebaceousCyst: MedicalCondition = {
  id: "18",
  slug: "sebaceous-cyst-symptoms-causes-treatment",
  overview: {
    title: "Sebaceous Cyst - Symptoms, Causes & Treatment",
    brief:
      "Sebaceous cyst is a noncancerous lump beneath the skin caused by blocked sebaceous glands. Learn about its symptoms, causes, and treatment options.",
    alternateNames: [
      { language: "Hindi", name: "सेबेसियस सिस्ट" },
      { language: "Tamil", name: "செபாசியஸ் சிஸ்ட்" },
    ],
  },
  aboutCondition: {
    title: "What is a Sebaceous Cyst?",
    description:
      "A sebaceous cyst is a closed sac under the skin filled with oily or cheesy material. It usually results from blocked sebaceous glands or hair follicles.",
  },
  foodTriggers: [
    {
      name: "Oily and Fried Foods",
      description: "May increase skin oiliness, worsening cyst formation.",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Dairy Products",
      description: "Can sometimes aggravate skin conditions leading to cysts.",
      bgColor: "bg-orange-100",
    },
  ],
  causes: [
    {
      title: "Blocked Sebaceous Glands",
      description:
        "The main cause where the gland’s duct is obstructed, leading to cyst formation.",
      icon: "thermometer",
    },
    {
      title: "Skin Trauma",
      description: "Injury or irritation can trigger cyst development.",
      icon: "alert-circle",
    },
    {
      title: "Infections",
      description: "Bacterial infections may cause or worsen cysts.",
      icon: "pill",
    },
  ],
  symptoms: [
    {
      title: "Small Lump",
      description: "Usually round, firm, and slow-growing under the skin.",
      icon: "clock",
    },
    {
      title: "Painless or Tender",
      description: "Generally painless unless infected or inflamed.",
      icon: "alert-circle",
    },
    {
      title: "Discharge",
      description: "May release foul-smelling cheesy material if ruptured.",
      icon: "arrow-up",
    },
  ],
  riskFactors: [
    {
      title: "Poor Hygiene",
      description: "May contribute to blocked glands and cyst formation.",
      icon: "thermometer",
    },
    {
      title: "Acne",
      description: "Skin conditions like acne increase risk.",
      icon: "pill",
    },
    {
      title: "Age",
      description: "Common in adults but can occur at any age.",
      icon: "clock",
    },
  ],
  complications: [
    {
      title: "Infection",
      description:
        "Cyst can become infected causing pain, redness, and swelling.",
      icon: "alert-circle",
    },
    {
      title: "Rupture",
      description: "Ruptured cyst can cause inflammation and discharge.",
      icon: "pill",
    },
    {
      title: "Recurrence",
      description: "Incomplete removal may lead to cyst recurrence.",
      icon: "arrow-up",
    },
  ],
  diagnosis: {
    description:
      "Diagnosed mainly by clinical examination, sometimes supported by ultrasound or biopsy if uncertain.",
    methods: [
      "Physical Examination",
      "Ultrasound Imaging",
      "Biopsy (rare cases)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Warm Compress",
        description:
          "Helps reduce swelling and promotes drainage if infection is mild.",
      },
      {
        name: "Antibiotics",
        description: "Used if cyst is infected to control bacterial growth.",
      },
    ],
    surgical: [
      {
        name: "Surgical Excision",
        description:
          "Complete removal of cyst and its sac to prevent recurrence.",
        recoveryTime: "1-2 weeks",
        anesthesia: "Local or General",
        benefits: [
          "Prevents recurrence",
          "Minimal scarring with proper technique",
          "Quick relief from symptoms",
          "Low risk of infection post-surgery",
        ],
      },
      {
        name: "Incision and Drainage",
        description:
          "Used for infected cysts to relieve pain and pressure, but not a permanent cure.",
        recoveryTime: "Few days",
        anesthesia: "Local",
        benefits: [
          "Immediate symptom relief",
          "Minimally invasive",
          "Quick procedure",
        ],
      },
    ],
  },
  types: [
    {
      type: "Epidermoid Cyst",
      description:
        "Most common type, formed from epidermal cells under the skin.",
      procedure: "Diagnosis clinically, excision is the usual treatment.",
    },
    {
      type: "Pilar Cyst",
      description: "Arises from hair follicle cells, mostly on the scalp.",
      procedure: "Diagnosis with clinical exam and surgical removal.",
    },
    {
      type: "Steatocystoma Multiplex",
      description: "Multiple cysts formation, often hereditary.",
      procedure:
        "Managed symptomatically; surgery for large or symptomatic cysts.",
    },
  ],
  whyChooseUs: [
    {
      title: "Experienced Dermatologists and Surgeons",
      description: "Providing safe and effective cyst removal.",
    },
    {
      title: "Advanced Surgical Techniques",
      description: "Minimizing scarring and recurrence risks.",
    },
    {
      title: "Personalized Care",
      description: "Tailored treatment plans based on cyst size and symptoms.",
    },
    {
      title: "Post-Surgical Support",
      description: "Comprehensive follow-up for quick recovery.",
    },
  ],
};
