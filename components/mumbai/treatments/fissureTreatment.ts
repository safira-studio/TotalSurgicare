import { MedicalCondition } from "@/types";

export const fissureTreatmentMumbai: MedicalCondition = {
  id: "mumbai-fissure-treatment",
  slug: "fissure-treatment",
  name: "Fissure",
  overview: {
    title: "Best Fissure Treatment in Mumbai with Advanced Laser Surgery",
    brief:
      "Looking for fissure treatment in Mumbai? Total Surgicare provides comprehensive evaluation and treatment for anal fissures, including conservative care and minimally invasive surgical options for patients with persistent or chronic fissures. Our surgical team assesses the severity, duration, symptoms, and underlying causes before recommending an appropriate treatment plan.",
    alternateNames: [
      { language: "Also called", name: "Anal Fissure Treatment" },
      { language: "Marathi", name: "गुदद्वाराला भेग" },
      { language: "Hindi", name: "गुदा विदर" },
    ],
    badges: [
      {
        title: "Minimally Invasive Treatment",
        description: "Modern surgical techniques",
      },
      {
        title: "Experienced Proctologists",
        description: "Specialized anorectal care",
      },
      {
        title: "Individual Treatment Planning",
        description: "Treatment based on fissure severity",
      },
      {
        title: "Recovery Support",
        description: "Post-treatment guidance and follow-up",
      },
    ],
  },
  aboutCondition: {
    title: "What is an Anal Fissure?",
    description:
      "An anal fissure is a small tear or crack in the delicate lining of the anal canal, commonly caused by passing hard stools or excessive straining during bowel movements. It can lead to sharp or burning pain, bright red bleeding, itching, and discomfort during or after passing stool. In some cases, muscle spasms around the anal canal can make the pain more persistent. Acute fissures may heal with conservative treatment such as adequate fibre, hydration, stool management, warm sitz baths, and prescribed medicines. However, when a fissure continues for several weeks, repeatedly returns, or does not respond to conservative treatment, it may become chronic and require further medical or surgical management.",
  },
  symptoms: [
    {
      title: "Sharp Pain During Bowel Movements",
      description: "Intense pain as stool passes",
      icon: "alert-circle",
    },
    {
      title: "Burning Pain After Passing Stool",
      description: "Burning that can last for hours afterwards",
      icon: "thermometer",
    },
    {
      title: "Bright Red Blood",
      description: "Blood on the stool or on toilet paper",
      icon: "pill",
    },
    {
      title: "Anal Itching",
      description: "Irritation and itching around the anus",
      icon: "frown",
    },
    {
      title: "Muscle Spasm",
      description: "Spasm of the anal sphincter after passing stool",
      icon: "syringe",
    },
    {
      title: "A Visible Tear",
      description: "A crack visible around the anal opening",
      icon: "image",
    },
    {
      title: "Skin Tag",
      description: "A skin tag in some chronic cases",
      icon: "arrow-up",
    },
  ],
  causes: [
    {
      title: "Passing Hard Stools",
      description: "Hard stool tears the delicate anal lining",
      icon: "alert-circle",
    },
    {
      title: "Chronic Constipation",
      description: "Ongoing difficulty passing stool",
      icon: "clock",
    },
    {
      title: "Excessive Straining",
      description: "Repeated straining injures the anal canal",
      icon: "arrow-up",
    },
    {
      title: "Repeated Diarrhoea",
      description: "Frequent loose stools irritate the lining",
      icon: "thermometer",
    },
    {
      title: "Childbirth",
      description: "Trauma during vaginal delivery",
      icon: "heart",
    },
    {
      title: "Trauma to the Anal Canal",
      description: "Any direct injury to the anal lining",
      icon: "syringe",
    },
    {
      title: "Inflammatory Bowel Conditions",
      description: "Certain bowel conditions delay healing",
      icon: "pill",
    },
  ],
  riskFactors: [
    {
      title: "Low-Fibre Diet",
      description: "Leads to hard stools and straining",
      icon: "pill",
    },
    {
      title: "Chronic Constipation",
      description: "A long history of constipation",
      icon: "clock",
    },
    {
      title: "Frequent Diarrhoea",
      description: "Repeated irritation of the anal canal",
      icon: "thermometer",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Low activity slows bowel motility",
      icon: "weight",
    },
    {
      title: "Previous Anal Fissure",
      description: "An earlier fissure raises the risk of another",
      icon: "alert-circle",
    },
    {
      title: "Gastrointestinal Conditions",
      description: "Certain digestive conditions affect healing",
      icon: "heart",
    },
  ],
  complications: [
    {
      title: "Chronic Fissure",
      description: "A fissure that fails to heal over weeks",
      icon: "clock",
    },
    {
      title: "Persistent Pain",
      description: "Ongoing pain affecting daily life",
      icon: "frown",
    },
    {
      title: "Anal Sphincter Spasm",
      description: "Muscle spasm that delays healing",
      icon: "syringe",
    },
    {
      title: "Skin Tag Formation",
      description: "A sentinel tag at the edge of the fissure",
      icon: "image",
    },
    {
      title: "Recurrent Bleeding",
      description: "Repeated bleeding with bowel movements",
      icon: "pill",
    },
    {
      title: "Difficulty with Bowel Movements",
      description: "Fear of pain leads to withholding stool",
      icon: "alert-circle",
    },
  ],
  diagnosis: {
    description:
      "A doctor usually diagnoses an anal fissure through examination of the anal area. Further investigation may be recommended when the fissure is atypical, recurrent or associated with other symptoms.",
    methods: [
      "Visual examination",
      "Digital rectal examination when appropriate",
      "Anoscopy",
      "Additional investigations when another condition is suspected",
    ],
  },
  treatments: {
    // Laser leads: the first entry is rendered as the featured card and becomes
    // the MedicalProcedure in this page's schema, so it must be the procedure
    // the page is actually about. Conservative care sits last.
    surgical: [
      {
        name: "Laser-Assisted Fissure Treatment",
        description:
          "Selected chronic fissures may be treated using minimally invasive laser-assisted techniques.",
        benefits: [
          "Precise treatment",
          "Reduced tissue trauma",
          "May be suitable for selected chronic fissures",
        ],
        recoveryTime: "As advised by the surgeon",
        anesthesia: "Local with sedation, or regional",
      },
      {
        name: "Lateral Internal Sphincterotomy",
        description:
          "A surgical procedure that releases part of the internal anal sphincter to reduce excessive muscle tension and support healing.",
        benefits: [
          "Commonly considered for chronic fissures",
          "Helps reduce sphincter spasm",
          "Treatment suitability depends on individual assessment",
        ],
        recoveryTime: "As advised by the surgeon",
        anesthesia: "Local or general",
      },
      {
        name: "Fissurectomy",
        description:
          "Fissurectomy involves removing chronic unhealthy tissue associated with the fissure.",
        benefits: [
          "May be used in selected chronic cases",
          "Can be combined with other treatment approaches",
        ],
        recoveryTime: "As advised by the surgeon",
        anesthesia: "Local or general",
      },
      {
        name: "Conservative Treatment",
        description:
          "Acute fissures may improve through non-surgical treatment before any procedure is considered.",
        benefits: [
          "High-fibre diet",
          "Adequate hydration",
          "Stool-softening medication when prescribed",
          "Warm sitz baths",
          "Topical medication as recommended by the doctor",
        ],
        recoveryTime: "Varies with response to treatment",
        anesthesia: "Not required",
      },
    ],
    nonSurgical: [
      {
        name: "Eat Adequate Dietary Fibre",
        description: "Softer stools reduce the chance of re-tearing.",
      },
      {
        name: "Drink Sufficient Water",
        description: "Hydration keeps stools easy to pass.",
      },
      {
        name: "Avoid Straining",
        description: "Straining reopens healing fissures.",
      },
      {
        name: "Do Not Delay Bowel Movements",
        description: "Delaying hardens the stool further.",
      },
      {
        name: "Maintain Regular Physical Activity",
        description: "Activity supports bowel regularity.",
      },
      {
        name: "Manage Constipation Promptly",
        description: "Treat constipation before it causes injury.",
      },
    ],
  },
  types: [
    {
      type: "Acute Fissure",
      description: "A recent fissure that may heal with conservative treatment.",
      procedure:
        "Conservative Management - Fibre, hydration, stool management and prescribed medication.",
    },
    {
      type: "Chronic Fissure",
      description:
        "A fissure that persists or repeatedly returns and may develop associated scarring or a skin tag.",
      procedure:
        "Surgical Treatment - Considered when conservative management fails.",
    },
    {
      type: "Recurrent Fissure",
      description: "A fissure that repeatedly heals and reopens.",
      procedure:
        "Evaluation and Targeted Treatment - Identifies the underlying cause before medical or surgical treatment.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Treatment Options",
      description: "Conservative and minimally invasive approaches.",
    },
    {
      title: "Experienced Proctology Team",
      description: "Specialized evaluation of anorectal conditions.",
    },
    {
      title: "Personalized Treatment Planning",
      description:
        "Treatment based on the duration and severity of the fissure.",
    },
    {
      title: "Post-Treatment Guidance",
      description: "Support with diet, bowel habits and recovery.",
    },
  ],
  faq: [
    {
      question: "Where can I get fissure treatment in Mumbai?",
      answer:
        "Total Surgicare provides evaluation and treatment for anal fissures in Mumbai.",
    },
    {
      question: "Can an anal fissure heal without surgery?",
      answer:
        "Yes. Many acute fissures improve with fibre, hydration, stool management and prescribed medication. Chronic fissures may require surgical treatment.",
    },
    {
      question: "Is fissure surgery painful?",
      answer:
        "Anaesthesia is used during surgery. Post-operative discomfort can occur and is managed according to the surgeon's instructions.",
    },
    {
      question: "How long does fissure treatment take?",
      answer:
        "Treatment duration and recovery depend on the type of procedure and the severity of the fissure.",
    },
    {
      question: "Can fissures come back after treatment?",
      answer:
        "Recurrence can occur, especially when constipation and straining continue. Following dietary and bowel-management advice can help reduce recurrence.",
    },
    {
      question: "How do I book an appointment in Mumbai?",
      answer:
        "Contact Total Surgicare to schedule a consultation with the proctology team.",
    },
  ],
};
