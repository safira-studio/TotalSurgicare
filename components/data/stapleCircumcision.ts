import { MedicalCondition } from "@/types";

export const staplerCircumcision: MedicalCondition = {
  id: "11",
  slug: "stapler-circumcision",
  name: "Stapler Circumcision",
  overview: {
    title: "Stapler Circumcision Treatment",
    brief:
      "Stapler circumcision is a modern surgical procedure offering faster healing and minimal pain compared to traditional circumcision methods.",
    alternateNames: [
      { language: "Hindi", name: "स्टेपलर खतना" },
      { language: "Marathi", name: "सर्कमसिझन" },
    ], // Circumcision (Stapecircumcision is likely a typo; assuming "Staple Circumcision")
  },
  aboutCondition: {
    title: "What is Stapler Circumcision?",
    description:
      "Stapler circumcision uses a specialized stapling device to remove the foreskin quickly and with minimal bleeding. This technique reduces operative time, pain, and promotes faster recovery.",
    images: [
      {
        src: "https://example.com/images/stapler-circumcision.jpg",
        alt: "Stapler circumcision surgical procedure",
      },
    ],
  },
  // causes: [
  //   {
  //     title: "Phimosis",
  //     description:
  //       "A condition where the foreskin cannot be fully retracted over the glans, causing discomfort and hygiene issues.",
  //     icon: "arrow-up",
  //   },
  //   {
  //     title: "Recurrent Infections",
  //     description:
  //       "Repeated infections of the foreskin or glans often necessitate circumcision.",
  //     icon: "syringe",
  //   },
  // ],
  // symptoms: [
  //   {
  //     title: "Tight foreskin",
  //     description: "Difficulty or pain while retracting the foreskin.",
  //     icon: "syringe",
  //   },
  //   {
  //     title: "Inflammation",
  //     description: "Redness, swelling, and discomfort in the foreskin area.",
  //     icon: "thermometer",
  //   },
  // ],
  indications: [
    {
      title: "Tight foreskin (Phimosis)",
      description: "Can't pull back foreskin.",
      icon: "alert-circle",
    },
    {
      title: "Recurrent infections",
      description: "Balanitis or balanoposthitis.",
      icon: "arrow-up",
    },
    {
      title: "Pain during sex",
      description: "Due to tight or tearing foreskin.",
      icon: "pill",
    },
    {
      title: "Hygiene issues",
      description: "Smell or smegma buildup.",
      icon: "thermometer",
    },
    {
      title: "Paraphimosis",
      description: "Foreskin stuck behind glans (emergency).",
      icon: "image",
    },
    {
      title: "Short frenulum",
      description: "Painful bending during erection.",
      icon: "pill",
    },
    {
      title: "Frequent UTIs",
      description: "Especially in boys with tight foreskin.",
      icon: "alert-circle",
    },
    {
      title: "White patches or scarring",
      description: "Lichen sclerosus.",
      icon: "thermometer",
    },
    {
      title: "Suspicious growths",
      description: "Pre-cancerous lesions.",
      icon: "arrow-up",
    },
    {
      title: "Urine flow problems in kids",
      description: "Due to tight foreskin.",
      icon: "pill",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves a physical examination by a urologist to assess foreskin tightness and any associated infections.",
    methods: ["Physical examination", "Patient history review"],
  },
  treatments: {
    // nonSurgical: [
    //   {
    //     name: "Tight foreskin (Phimosis)",
    //     description: "Can't pull back foreskin.",
    //   },
    //   {
    //     name: "Recurrent infections",
    //     description: "Balanitis or balanoposthitis.",
    //   },
    //   {
    //     name: "Pain during sex",
    //     description: "Due to tight or tearing foreskin.",
    //   },
    //   {
    //     name: "Hygiene issues",
    //     description: "Smell or smegma buildup.",
    //   },
    //   {
    //     name: "Paraphimosis",
    //     description: "Foreskin stuck behind glans (emergency).",
    //   },
    //   {
    //     name: "Short frenulum",
    //     description: "Painful bending during erection.",
    //   },
    //   {
    //     name: "Frequent UTIs",
    //     description: "Especially in boys with tight foreskin.",
    //   },
    //   {
    //     name: "White patches or scarring",
    //     description: "Lichen sclerosus.",
    //   },
    //   {
    //     name: "Suspicious growths",
    //     description: "Pre-cancerous lesions.",
    //   },
    //   {
    //     name: "Urine flow problems in kids",
    //     description: "Due to tight foreskin.",
    //   },
    // ],
    surgical: [
      {
        name: "Stapler Circumcision",
        description:
          "A quick, minimally invasive procedure using a stapling device for circumcision.",
        benefits: [
          "Minimal bleeding",
          "Reduced operative time",
          "Faster recovery",
        ],
        recoveryTime: "3 days",
        anesthesia: "Local or general anesthesia",
      },
    ],
  },
  // types: [
  //   {
  //     type: "Stapler Circumcision",
  //     description:
  //       "Circumcision using a stapler device for efficient foreskin removal.",
  //     procedure:
  //       "The stapler device is applied to the foreskin, staples are deployed to cut and close simultaneously, reducing bleeding.",
  //   },
  //   {
  //     type: "Conventional Circumcision",
  //     description:
  //       "Traditional surgical removal of the foreskin with a scalpel.",
  //     procedure: "Foreskin is manually excised and sutured.",
  //   },
  // ],
  whyChooseUs: [
    {
      title: "Advanced Stapler Circumcision Technique",
      description:
        "We use state-of-the-art stapler devices ensuring minimal pain, less bleeding, and faster healing.",
    },
  ],
};
