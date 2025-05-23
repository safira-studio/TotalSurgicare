import { MedicalCondition } from "@/types";

export const avFistula: MedicalCondition = {
  id: "21",
  slug: "av-fistula-symptoms-causes-treatment",
  overview: {
    title: "AV Fistula - Symptoms, Causes & Treatment",
    brief:
      "An arteriovenous (AV) fistula is an abnormal connection between an artery and a vein, often created surgically for hemodialysis access. Learn about its symptoms, causes, and treatments.",
    alternateNames: [
      { language: "Hindi", name: "एवी फिस्टुला" },
      { language: "Tamil", name: "ஏவி நுணுக்கம்" },
    ],
  },
  aboutCondition: {
    title: "What is an AV Fistula?",
    description:
      "An AV fistula is a direct connection between an artery and a vein, either congenital, traumatic, or surgically created to provide access for dialysis.",
  },
  foodTriggers: [
    {
      name: "High-Sodium Foods",
      description: "May increase blood pressure, affecting fistula function.",
      bgColor: "bg-yellow-100",
    },
    {
      name: "High-Phosphorus Foods",
      description: "Can strain kidneys and impact dialysis effectiveness.",
      bgColor: "bg-orange-100",
    },
  ],
  causes: [
    {
      title: "Surgical Creation",
      description:
        "Deliberate connection made between artery and vein for dialysis access.",
      icon: "thermometer",
    },
    {
      title: "Trauma or Injury",
      description: "Accidental connection due to injury.",
      icon: "alert-circle",
    },
    {
      title: "Congenital Defect",
      description: "Rarely, fistulas form before birth.",
      icon: "pill",
    },
  ],
  symptoms: [
    {
      title: "Visible Pulsating Vein",
      description: "Strong, rhythmic pulse near the fistula site.",
      icon: "clock",
    },
    {
      title: "Swelling and Warmth",
      description: "Around the fistula, indicating blood flow.",
      icon: "alert-circle",
    },
    {
      title: "Pain or Tenderness",
      description: "Discomfort near the fistula location.",
      icon: "arrow-up",
    },
  ],
  riskFactors: [
    {
      title: "Chronic Kidney Disease",
      description: "Most common indication for surgical AV fistula.",
      icon: "thermometer",
    },
    {
      title: "Diabetes",
      description: "Increases risk of vascular complications.",
      icon: "pill",
    },
    {
      title: "High Blood Pressure",
      description: "Can affect fistula durability.",
      icon: "clock",
    },
    {
      title: "Smoking",
      description: "Impairs blood vessel health.",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Infection",
      description: "Risk at surgical site.",
      icon: "alert-circle",
    },
    {
      title: "Thrombosis",
      description: "Blood clot blocking fistula.",
      icon: "pill",
    },
    {
      title: "Steal Syndrome",
      description: "Reduced blood flow to the hand causing pain or numbness.",
      icon: "arrow-up",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis through physical exam, ultrasound imaging, and blood flow studies.",
    methods: ["Physical Examination", "Doppler Ultrasound", "Angiography"],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Monitoring",
        description: "Regular checkups to assess fistula function.",
      },
      {
        name: "Medication",
        description: "To manage blood pressure or prevent clotting.",
      },
      {
        name: "Physical Therapy",
        description:
          "Exercises and limb massage to promote blood flow and prevent stiffness around the fistula.",
      },
      {
        name: "Anticoagulant Therapy",
        description:
          "Use of blood thinners to reduce the risk of clotting in the fistula without surgery.",
      },
    ],
    surgical: [
      {
        name: "AV Fistula Creation",
        description:
          "Surgical connection of an artery to a vein to enable dialysis access.",
        recoveryTime: "4-6 weeks",
        anesthesia: "Local or General",
        benefits: [
          "Reliable long-term vascular access",
          "Lower infection risk compared to catheters",
          "Improved dialysis efficiency",
          "Durable and cost-effective",
        ],
      },
      {
        name: "Revision Surgery",
        description:
          "Surgery to fix fistula complications like narrowing or thrombosis.",
        recoveryTime: "2-3 weeks",
        anesthesia: "Local or General",
        benefits: [
          "Restores fistula function",
          "Prevents clot formation",
          "Improves blood flow",
        ],
      },
      {
        name: "Endovascular Fistula Creation",
        description:
          "Minimally invasive procedure using a catheter to create the fistula without open surgery.",
        recoveryTime: "2-4 weeks",
        anesthesia: "Local",
        benefits: [
          "Less invasive with smaller incisions",
          "Faster healing and fewer complications",
          "Outpatient procedure possible",
        ],
      },
    ],
  },
  types: [
    {
      type: "Radiocephalic Fistula",
      description:
        "Connection between radial artery and cephalic vein at the wrist.",
      procedure: "Common first choice for dialysis access creation.",
    },
    {
      type: "Brachiocephalic Fistula",
      description:
        "Connection between brachial artery and cephalic vein at the elbow.",
      procedure: "Used when wrist vessels are unsuitable.",
    },
    {
      type: "Brachiobasilic Fistula",
      description:
        "Connection between brachial artery and basilic vein, requiring vein transposition.",
      procedure: "Used for deeper veins, requires additional surgical steps.",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Vascular Surgeons",
      description: "Specialized in fistula creation and maintenance.",
    },
    {
      title: "Advanced Imaging Techniques",
      description: "Precise mapping for successful surgery.",
    },
    {
      title: "Postoperative Care",
      description: "Comprehensive follow-up to ensure fistula patency.",
    },
    {
      title: "Patient Education",
      description: "Guidance on fistula care and monitoring.",
    },
  ],
};
