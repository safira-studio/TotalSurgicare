import { MedicalCondition } from "@/types";

export const lipoma: MedicalCondition = {
  id: "17",
  slug: "lipoma-symptoms-causes-treatment",
  overview: {
    title: "Lipoma - Symptoms, Causes & Treatment",
    brief:
      "Lipoma is a benign fatty tumor under the skin, usually painless and slow-growing. Learn about its symptoms, causes, and treatment options.",
    alternateNames: [
      { language: "Hindi", name: "लाइपोमा" },
      { language: "Tamil", name: "லிபோமா" },
    ],
  },
  aboutCondition: {
    title: "What is Lipoma?",
    description:
      "Lipoma is a noncancerous growth of fat cells that forms a soft lump under the skin, most commonly found on the neck, shoulders, back, or arms.",
  },
  foodTriggers: [
    {
      name: "High-Fat Diet",
      description: "May contribute to fat accumulation but not a direct cause.",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Processed Foods",
      description:
        "Could increase body fat, indirectly affecting lipoma growth.",
      bgColor: "bg-orange-100",
    },
  ],
  causes: [
    {
      title: "Genetic Factors",
      description: "Family history can increase susceptibility to lipomas.",
      icon: "thermometer",
    },
    {
      title: "Injury",
      description:
        "Trauma to an area may trigger lipoma formation in rare cases.",
      icon: "alert-circle",
    },
    {
      title: "Abnormal Fat Cell Growth",
      description: "Lipomas arise from uncontrolled growth of fat cells.",
      icon: "arrow-up",
    },
  ],
  symptoms: [
    {
      title: "Soft Lump",
      description: "Usually painless, soft, and movable under the skin.",
      icon: "clock",
    },
    {
      title: "Slow Growth",
      description: "Lipomas tend to grow slowly over months or years.",
      icon: "arrow-up",
    },
    {
      title: "Tenderness",
      description:
        "Occasionally lipomas can cause discomfort if pressing on nerves.",
      icon: "alert-circle",
    },
  ],
  riskFactors: [
    {
      title: "Age",
      description: "Most common in adults between 40-60 years.",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Genetic predisposition increases risk.",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Excess body fat may be a contributing factor.",
      icon: "arrow-up",
    },
  ],
  complications: [
    {
      title: "Rare Malignant Transformation",
      description:
        "Lipomas are generally benign but very rarely may become liposarcomas.",
      icon: "alert-circle",
    },
    {
      title: "Nerve Compression",
      description:
        "Large lipomas can press on nerves causing pain or numbness.",
      icon: "pill",
    },
    {
      title: "Cosmetic Concerns",
      description: "Visible lumps can cause distress or discomfort.",
      icon: "clock",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis is primarily clinical by physical exam, supported by ultrasound or MRI to confirm benign nature.",
    methods: [
      "Physical Examination",
      "Ultrasound Imaging",
      "MRI Scan (if deeper or unclear)",
      "Biopsy (rarely needed)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Observation",
        description: "Small, painless lipomas may not require treatment.",
      },
      {
        name: "Steroid Injections",
        description: "May reduce size but not commonly used.",
      },
      {
        name: "Cryotherapy",
        description:
          "Freezing the lipoma to reduce size, though less commonly practiced.",
      },
      {
        name: "Laser Therapy",
        description:
          "Using laser to shrink or soften the lipoma as a non-invasive option.",
      },
    ],
    surgical: [
      {
        name: "Surgical Excision",
        description:
          "Complete removal of the lipoma is the most effective treatment.",
        recoveryTime: "1-2 weeks",
        anesthesia: "Local or General",
        benefits: [
          "Complete removal reduces recurrence risk",
          "Effective for large or deep lipomas",
          "Allows for pathological examination",
        ],
      },
      {
        name: "Liposuction",
        description:
          "Less invasive removal using suction, suitable for some lipomas.",
        recoveryTime: "Few days",
        anesthesia: "Local",
        benefits: [
          "Minimally invasive",
          "Less scarring",
          "Shorter recovery time",
        ],
      },
      {
        name: "Minimal Incision Excision",
        description:
          "Removal through a small incision, balancing minimal scarring and thorough excision.",
        recoveryTime: "1 week",
        anesthesia: "Local",
        benefits: [
          "Less invasive than full excision",
          "Faster healing",
          "Lower risk of infection",
        ],
      },
    ],
  },
  types: [
    {
      type: "Superficial Lipoma",
      description: "Located just under the skin, soft and easily movable.",
      procedure: "Diagnosed clinically and removed surgically if needed.",
    },
    {
      type: "Deep Lipoma",
      description:
        "Located deeper within muscles or organs, may require imaging.",
      procedure:
        "Diagnosis with MRI, surgical removal under general anesthesia.",
    },
    {
      type: "Multiple Lipomas (Lipomatosis)",
      description: "Presence of multiple lipomas, often hereditary.",
      procedure: "Managed symptomatically; surgery for large or painful lumps.",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Surgical Care",
      description:
        "Skilled surgeons provide safe and effective lipoma removal.",
    },
    {
      title: "Accurate Diagnosis",
      description:
        "Use of advanced imaging to differentiate from other tumors.",
    },
    {
      title: "Minimal Scarring Techniques",
      description:
        "Emphasis on cosmetic outcomes with careful surgical methods.",
    },
    {
      title: "Comprehensive Follow-up",
      description:
        "Regular monitoring to detect any recurrence or complications.",
    },
  ],
};
