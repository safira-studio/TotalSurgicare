import { MedicalCondition } from "@/types";

export const staplerCircumcision: MedicalCondition = {
  id: "11",
  slug: "stapler-circumcision",
  overview: {
    title: "Stapler Circumcision Treatment",
    brief:
      "Stapler circumcision is a modern surgical procedure offering faster healing and minimal pain compared to traditional circumcision methods.",
    alternateNames: [
      { language: "Hindi", name: "स्टेपलर खतना" },
      { language: "Tamil", name: "ஸ்டேப்பிளர் உருக்கணம்" },
    ],
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
  causes: [
    {
      title: "Phimosis",
      description:
        "A condition where the foreskin cannot be fully retracted over the glans, causing discomfort and hygiene issues.",
      icon: "warning",
    },
    {
      title: "Recurrent Infections",
      description:
        "Repeated infections of the foreskin or glans often necessitate circumcision.",
      icon: "medkit",
    },
  ],
  symptoms: [
    {
      title: "Tight foreskin",
      description: "Difficulty or pain while retracting the foreskin.",
      icon: "pain",
    },
    {
      title: "Inflammation",
      description: "Redness, swelling, and discomfort in the foreskin area.",
      icon: "inflammation",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves a physical examination by a urologist to assess foreskin tightness and any associated infections.",
    methods: ["Physical examination", "Patient history review"],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Topical Steroids",
        description: "Applied to loosen the foreskin in mild cases.",
      },
    ],
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
        recoveryTime: "7-10 days",
        anesthesia: "Local or general anesthesia",
      },
    ],
  },
  types: [
    {
      type: "Stapler Circumcision",
      description:
        "Circumcision using a stapler device for efficient foreskin removal.",
      procedure:
        "The stapler device is applied to the foreskin, staples are deployed to cut and close simultaneously, reducing bleeding.",
    },
    {
      type: "Conventional Circumcision",
      description:
        "Traditional surgical removal of the foreskin with a scalpel.",
      procedure: "Foreskin is manually excised and sutured.",
    },
  ],
  whyChooseUs: [
    {
      title: "Advanced Stapler Circumcision Technique",
      description:
        "We use state-of-the-art stapler devices ensuring minimal pain, less bleeding, and faster healing.",
    },
  ],
};
