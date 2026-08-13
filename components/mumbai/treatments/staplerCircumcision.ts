import { MedicalCondition } from "@/types";

export const staplerCircumcisionMumbai: MedicalCondition = {
  id: "mumbai-stapler-circumcision",
  slug: "stapler-circumcision",
  name: "Stapler Circumcision",
  overview: {
    title: "Best Stapler Circumcision in Mumbai for Stitchless Treatment",
    brief:
      "Looking for advanced stapler circumcision in Mumbai? Total Surgicare provides modern circumcision treatment using the ZSR stapler technique for patients who are medically suitable for the procedure. The technique is designed to remove the foreskin in a controlled manner while sealing the tissue edges at the same time, which can help reduce bleeding and avoid conventional stitches.",
    alternateNames: [
      { language: "Also called", name: "Circumcision" },
      { language: "Also called", name: "ZSR Circumcision" },
      { language: "Marathi", name: "सुंता" },
      { language: "Hindi", name: "खतना" },
    ],
    badges: [
      {
        title: "Stitchless Procedure",
        description: "Uses a stapler instead of conventional sutures",
      },
      {
        title: "Minimal Bleeding",
        description: "The stapling technique helps seal the tissue during the procedure",
      },
      {
        title: "Quick Procedure",
        description: "Usually completed within a short surgical session",
      },
      {
        title: "Faster Recovery",
        description: "Return to routine activities as advised by the surgeon",
      },
    ],
  },
  aboutCondition: {
    title: "What is Stapler Circumcision?",
    description:
      "Stapler circumcision is a modern surgical procedure used to remove the foreskin covering the head of the penis. A specialized stapling device cuts and seals the foreskin in one controlled step, reducing the need for conventional suturing. The technique is designed to provide a precise procedure with minimal bleeding and a smaller wound area, which may support a more comfortable recovery for suitable patients. It may be recommended for medical conditions such as phimosis, recurrent infections, difficulty retracting the foreskin, or repeated inflammation around the penis. Stapler circumcision may also be chosen for personal, cultural, or religious reasons. Before treatment, the surgeon evaluates the patient's condition and explains the procedure, recovery process, aftercare, and possible risks.",
  },
  indications: [
    {
      title: "Phimosis",
      description: "Tight foreskin that is difficult or impossible to retract",
      icon: "alert-circle",
    },
    {
      title: "Recurrent Infections",
      description: "Repeated infections around the foreskin or glans",
      icon: "thermometer",
    },
    {
      title: "Balanitis",
      description: "Recurrent inflammation of the glans",
      icon: "pill",
    },
    {
      title: "Paraphimosis",
      description: "Foreskin becoming trapped behind the glans",
      icon: "syringe",
    },
    {
      title: "Hygiene Difficulties",
      description: "Difficulty maintaining proper hygiene",
      icon: "bandage",
    },
    {
      title: "Personal or Cultural Reasons",
      description: "Circumcision chosen for non-medical reasons",
      icon: "user",
    },
  ],
  symptoms: [
    {
      title: "Pain While Retracting",
      description: "Pain or difficulty while retracting the foreskin",
      icon: "frown",
    },
    {
      title: "Repeated Swelling",
      description: "Recurring swelling around the foreskin",
      icon: "arrow-up",
    },
    {
      title: "Redness or Irritation",
      description: "Persistent redness or irritation of the foreskin",
      icon: "thermometer",
    },
    {
      title: "Pain During Urination",
      description: "Discomfort or burning while passing urine",
      icon: "syringe",
    },
    {
      title: "Recurrent Infections",
      description: "Infections around the foreskin that keep returning",
      icon: "pill",
    },
    {
      title: "Foul-Smelling Discharge",
      description: "Discharge with an unpleasant odour",
      icon: "alert-circle",
    },
    {
      title: "Scarring or Tightening",
      description: "Scarring or progressive tightening of the foreskin",
      icon: "image",
    },
  ],
  riskFactors: [
    {
      title: "Recurrent Foreskin Infections",
      description: "Repeated infections increase the risk of scarring",
      icon: "thermometer",
    },
    {
      title: "Poor Hygiene",
      description: "Difficulty keeping the area clean and dry",
      icon: "bandage",
    },
    {
      title: "Diabetes",
      description: "Higher risk of infection and delayed healing",
      icon: "pill",
    },
    {
      title: "Chronic Inflammation",
      description: "Ongoing inflammation of the foreskin or glans",
      icon: "alert-circle",
    },
    {
      title: "Certain Skin Conditions",
      description: "Skin disorders affecting the genital area",
      icon: "image",
    },
    {
      title: "Previous Injury or Scarring",
      description: "Earlier foreskin injury or existing scar tissue",
      icon: "syringe",
    },
  ],
  complications: [
    {
      title: "Recurrent Infections",
      description: "Repeated infections around the foreskin and glans",
      icon: "thermometer",
    },
    {
      title: "Increasing Foreskin Tightness",
      description: "Progressive narrowing that worsens over time",
      icon: "arrow-up",
    },
    {
      title: "Pain During Sexual Activity",
      description: "Discomfort caused by a tight or scarred foreskin",
      icon: "frown",
    },
    {
      title: "Difficulty Passing Urine",
      description: "Obstruction to the normal urine stream",
      icon: "syringe",
    },
    {
      title: "Paraphimosis",
      description: "Foreskin trapped behind the glans, needing urgent care",
      icon: "alert-circle",
    },
    {
      title: "Persistent Inflammation",
      description: "Long-standing inflammation that does not settle",
      icon: "pill",
    },
  ],
  diagnosis: {
    description:
      "A physical examination is usually performed to assess the foreskin, glans and surrounding tissues. The surgeon evaluates the severity of the condition and determines whether circumcision is appropriate.",
    methods: [
      "Physical examination",
      "Assessment of foreskin movement",
      "Evaluation for infection or inflammation",
      "Blood sugar testing when clinically required",
      "Pre-operative health assessment",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "ZSR Stapler Circumcision",
        description:
          "A specialized stapling device removes the foreskin and seals the edges during the procedure.",
        benefits: [
          "No conventional stitches",
          "Minimal bleeding",
          "Small wound area",
          "Suitable for selected patients",
          "Usually performed as a day-care procedure",
        ],
        recoveryTime: "As advised by the surgeon",
        anesthesia: "Usually local or regional, depending on the case",
      },
      {
        name: "Conventional Circumcision",
        description:
          "The foreskin is surgically removed and the wound is closed using conventional sutures.",
        benefits: [
          "Suitable for certain anatomical or complicated cases",
          "Allows direct surgical correction",
        ],
        recoveryTime:
          "Longer than some minimally invasive techniques",
        anesthesia: "Local, regional or general depending on the case",
      },
      {
        name: "Laser Circumcision",
        description:
          "Laser technology may be used to cut and seal tissue during circumcision.",
        benefits: [
          "Precise tissue cutting",
          "Controlled bleeding",
          "Minimally invasive approach",
        ],
        recoveryTime: "Depends on the individual case",
        anesthesia: "Usually local or regional",
      },
    ],
    nonSurgicalTitle: "Post-Treatment Care",
    nonSurgical: [
      {
        name: "Keep the Area Clean and Dry",
        description: "Follow the surgeon's wound-care instructions closely.",
      },
      {
        name: "Wear Loose-Fitting Clothing",
        description: "Comfortable clothing reduces friction on the wound.",
      },
      {
        name: "Follow the Medication Schedule",
        description: "Take prescribed medicines exactly as directed.",
      },
      {
        name: "Avoid Strenuous Activity",
        description: "Rest during the initial recovery period.",
      },
      {
        name: "Follow Advice on Sexual Activity",
        description: "Resume only when your surgeon confirms it is safe.",
      },
      {
        name: "Attend Follow-Up Appointments",
        description: "Scheduled reviews confirm the wound is healing well.",
      },
    ],
  },
  whyChooseUs: [
    {
      title: "Advanced Circumcision Techniques",
      description: "Modern stapler-based treatment options.",
    },
    {
      title: "Experienced Surgical Team",
      description: "Treatment planned according to individual requirements.",
    },
    {
      title: "Patient-Focused Care",
      description: "Clear explanation before and after the procedure.",
    },
    {
      title: "Complete Treatment Support",
      description:
        "Consultation, procedure and follow-up care under one roof.",
    },
  ],
  faq: [
    {
      question: "Where can I get stapler circumcision in Mumbai?",
      answer:
        "Total Surgicare provides modern circumcision treatment in Mumbai, including stapler-based techniques for suitable patients.",
    },
    {
      question: "Is stapler circumcision painful?",
      answer:
        "The procedure is performed under anaesthesia. Some discomfort, swelling or sensitivity may occur during the healing period and can be managed according to the surgeon's instructions.",
    },
    {
      question: "How long does circumcision recovery take?",
      answer:
        "Recovery varies from person to person. Your surgeon will provide specific instructions based on the procedure and your individual condition.",
    },
    {
      question: "Is stapler circumcision suitable for everyone?",
      answer:
        "Not necessarily. The surgeon first examines the patient and recommends the appropriate technique based on the foreskin condition and overall health.",
    },
    {
      question: "Can adults undergo stapler circumcision?",
      answer:
        "Yes. Adults may undergo circumcision when medically appropriate or for personal, cultural or religious reasons.",
    },
    {
      question: "How can I book a consultation in Mumbai?",
      answer:
        "You can contact Total Surgicare or book an appointment through the website for a consultation with the surgical team.",
    },
  ],
};
