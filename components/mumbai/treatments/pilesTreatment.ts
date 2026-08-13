import { MedicalCondition } from "@/types";

export const pilesTreatmentMumbai: MedicalCondition = {
  id: "mumbai-piles-treatment",
  slug: "piles-treatment",
  name: "Piles",
  overview: {
    title: "Best Piles Treatment in Mumbai with Advanced Laser Surgery",
    brief:
      "Looking for piles treatment in Mumbai? Total Surgicare provides comprehensive evaluation and treatment for hemorrhoids using modern techniques, including laser treatment and other minimally invasive surgical options. Our surgical team first assesses the grade of piles, severity of symptoms, duration of the condition, and overall health before recommending a suitable treatment approach.",
    alternateNames: [
      { language: "Also called", name: "Hemorrhoids Treatment" },
      { language: "Also called", name: "Bawasir Treatment" },
      { language: "Marathi", name: "मूळव्याध उपचार" },
      { language: "Hindi", name: "बवासीर का इलाज" },
    ],
    badges: [
      {
        title: "Laser Treatment",
        description: "Minimally invasive option for selected cases",
      },
      {
        title: "Less Surgical Trauma",
        description: "Designed to reduce tissue damage",
      },
      {
        title: "Experienced Proctology Team",
        description: "Specialized care for anorectal conditions",
      },
      {
        title: "Complete Recovery Support",
        description: "Guidance before and after treatment",
      },
    ],
  },
  aboutCondition: {
    title: "What are Piles?",
    description:
      "Piles, medically known as hemorrhoids, are swollen blood vessels and supporting tissues around the anus and lower rectum. They can develop inside the rectum as internal hemorrhoids or around the anal opening as external hemorrhoids. Depending on their type and severity, piles may cause symptoms such as bleeding, itching, swelling, discomfort, pain, or a feeling of tissue protruding from the anus. Piles can develop due to factors such as chronic constipation, straining during bowel movements, prolonged sitting, a low-fibre diet, pregnancy, or increased pressure around the rectal area. While mild hemorrhoids may improve with dietary and lifestyle changes, persistent or advanced piles may require medical or surgical treatment.",
  },
  symptoms: [
    {
      title: "Bright Red Bleeding",
      description: "Bleeding during or after bowel movements",
      icon: "pill",
    },
    {
      title: "Pain or Discomfort",
      description: "Soreness around the anal region",
      icon: "frown",
    },
    {
      title: "Itching Around the Anus",
      description: "Persistent irritation and itching",
      icon: "alert-circle",
    },
    {
      title: "Swelling",
      description: "Swollen tissue around the anal opening",
      icon: "arrow-up",
    },
    {
      title: "A Lump Near the Anus",
      description: "A palpable lump at the anal margin",
      icon: "image",
    },
    {
      title: "Prolapse",
      description: "Tissue protruding during bowel movements",
      icon: "syringe",
    },
    {
      title: "Mucus or Irritation",
      description: "Mucus discharge and skin irritation in some cases",
      icon: "thermometer",
    },
  ],
  causes: [
    {
      title: "Chronic Constipation",
      description: "Hard stools increase pressure on anal veins",
      icon: "alert-circle",
    },
    {
      title: "Straining During Bowel Movements",
      description: "Repeated straining enlarges hemorrhoidal tissue",
      icon: "arrow-up",
    },
    {
      title: "Low-Fibre Diet",
      description: "Leads to harder stools and constipation",
      icon: "pill",
    },
    {
      title: "Prolonged Sitting",
      description: "Long hours seated raise rectal pressure",
      icon: "clock",
    },
    {
      title: "Pregnancy",
      description: "Increased pressure in the pelvic region",
      icon: "heart",
    },
    {
      title: "Obesity",
      description: "Higher body weight adds abdominal pressure",
      icon: "weight",
    },
    {
      title: "Repeated Diarrhoea",
      description: "Frequent loose stools irritate the anal canal",
      icon: "thermometer",
    },
    {
      title: "Heavy Lifting",
      description: "Straining while lifting in some individuals",
      icon: "user",
    },
  ],
  riskFactors: [
    {
      title: "Long-Term Constipation",
      description: "Ongoing difficulty passing stool",
      icon: "alert-circle",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Low activity slows bowel movement",
      icon: "clock",
    },
    {
      title: "Low Dietary Fibre",
      description: "Insufficient fibre in daily meals",
      icon: "pill",
    },
    {
      title: "Pregnancy",
      description: "More common during pregnancy and after delivery",
      icon: "heart",
    },
    {
      title: "Increased Body Weight",
      description: "Extra weight raises pressure on anal veins",
      icon: "weight",
    },
    {
      title: "Family History",
      description: "A family tendency towards hemorrhoids",
      icon: "user",
    },
    {
      title: "Repeated Straining",
      description: "Habitual straining during bowel movements",
      icon: "arrow-up",
    },
  ],
  complications: [
    {
      title: "Persistent Bleeding",
      description: "Ongoing blood loss during bowel movements",
      icon: "pill",
    },
    {
      title: "Anaemia",
      description: "In cases of significant ongoing blood loss",
      icon: "heart",
    },
    {
      title: "Thrombosed Hemorrhoids",
      description: "A painful clot forming within the hemorrhoid",
      icon: "alert-circle",
    },
    {
      title: "Prolapsed Hemorrhoids",
      description: "Tissue that no longer returns inside",
      icon: "arrow-up",
    },
    {
      title: "Persistent Pain",
      description: "Continuing pain or discomfort",
      icon: "frown",
    },
    {
      title: "Skin Irritation",
      description: "Chronic irritation of the surrounding skin",
      icon: "thermometer",
    },
  ],
  diagnosis: {
    description:
      "A surgeon or proctologist may diagnose piles through a physical examination and, when necessary, an internal examination of the anal canal.",
    methods: [
      "Physical examination",
      "Digital rectal examination",
      "Anoscopy",
      "Proctoscopy",
      "Colonoscopy when clinically indicated",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "Laser Hemorrhoid Treatment",
        description:
          "Laser treatment may be recommended for selected patients to treat symptomatic hemorrhoidal tissue with a minimally invasive approach.",
        benefits: [
          "Minimal tissue trauma",
          "Reduced bleeding in suitable cases",
          "Less post-operative discomfort in many patients",
        ],
        recoveryTime: "Depends on severity and procedure performed",
        anesthesia: "Local with sedation, or regional",
      },
      {
        name: "Stapled Hemorrhoidopexy",
        description:
          "A stapling technique may be considered for selected cases involving prolapsed internal hemorrhoids.",
        benefits: [
          "Repositions prolapsed tissue",
          "Can reduce blood flow to hemorrhoidal tissue",
          "Suitable for specific grades and presentations",
        ],
        recoveryTime: "As advised by the surgeon",
        anesthesia: "Regional or general",
      },
      {
        name: "Conventional Hemorrhoidectomy",
        description:
          "Surgical removal of hemorrhoidal tissue may be recommended for advanced, large or complicated hemorrhoids.",
        benefits: [
          "Complete removal of selected hemorrhoidal tissue",
          "Used when other options are unsuitable",
        ],
        recoveryTime: "Longer than minimally invasive options",
        anesthesia: "Regional or general",
      },
    ],
    nonSurgical: [
      {
        name: "Eat Adequate Dietary Fibre",
        description: "Softer stools reduce straining.",
      },
      {
        name: "Drink Sufficient Water",
        description: "Hydration keeps stools easy to pass.",
      },
      {
        name: "Avoid Excessive Straining",
        description: "Straining worsens hemorrhoidal swelling.",
      },
      {
        name: "Do Not Delay Bowel Movements",
        description: "Respond promptly to the urge to pass stool.",
      },
      {
        name: "Exercise Regularly",
        description: "Activity improves bowel regularity.",
      },
      {
        name: "Avoid Sitting for Long Periods",
        description: "Take breaks from continuous sitting.",
      },
      {
        name: "Maintain a Healthy Body Weight",
        description: "Reduces pressure on the anal region.",
      },
    ],
  },
  types: [
    {
      type: "Grade I",
      description:
        "Hemorrhoids remain inside the anal canal and may mainly cause bleeding.",
      procedure:
        "Lifestyle Changes and Medication - Minimally invasive treatment when required.",
    },
    {
      type: "Grade II",
      description:
        "Hemorrhoids may protrude during bowel movements but return inside on their own.",
      procedure:
        "Conservative or Minimally Invasive Treatment - Selected depending on symptoms.",
    },
    {
      type: "Grade III",
      description:
        "Hemorrhoids protrude during bowel movements and may require manual reduction.",
      procedure:
        "Surgical or Minimally Invasive Procedures - Based on individual assessment.",
    },
    {
      type: "Grade IV",
      description:
        "Hemorrhoids remain prolapsed and cannot be pushed back inside.",
      procedure:
        "Surgical Management - Recommended for permanently prolapsed hemorrhoids.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Treatment Options",
      description: "Laser and surgical techniques based on the condition.",
    },
    {
      title: "Experienced Proctology Team",
      description: "Specialized evaluation and treatment.",
    },
    {
      title: "Individual Treatment Planning",
      description:
        "The procedure is selected according to piles grade and symptoms.",
    },
    {
      title: "Complete Post-Treatment Care",
      description: "Recovery and lifestyle guidance after treatment.",
    },
  ],
  faq: [
    {
      question: "Where can I get piles treatment in Mumbai?",
      answer:
        "Total Surgicare provides advanced piles treatment in Mumbai, including laser and surgical options.",
    },
    {
      question: "Can piles be treated without surgery?",
      answer:
        "Yes. Early-stage piles may improve with fibre, hydration, lifestyle changes and medication. Surgery may be required for persistent or advanced cases.",
    },
    {
      question: "Is laser piles treatment painful?",
      answer:
        "Laser treatment is minimally invasive and is generally associated with less post-operative discomfort than some conventional surgical approaches, although individual recovery varies.",
    },
    {
      question: "How long does piles treatment take?",
      answer:
        "Treatment duration depends on the procedure and the severity of the condition.",
    },
    {
      question: "Can piles come back after treatment?",
      answer:
        "Recurrence is possible, particularly when constipation, straining and other contributing factors continue. Lifestyle changes can help reduce the risk.",
    },
    {
      question: "How can I book a consultation?",
      answer:
        "Contact Total Surgicare to schedule a consultation with the proctology team in Mumbai.",
    },
  ],
};
