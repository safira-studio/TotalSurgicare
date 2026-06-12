import { MedicalCondition } from "@/types";

export const gallBladderSurgery: MedicalCondition = {
  id: "27",
  slug: "gall-bladder-surgery",
  name: "Gall Bladder",
  overview: {
    title: "Gall Bladder Surgery – Laparoscopic Cholecystectomy",
    brief:
      "Gall bladder diseases such as stones, inflammation, and polyps can cause severe abdominal pain and digestive issues. We offer safe, minimally invasive laparoscopic gall bladder removal surgery for lasting relief.",
    alternateNames: [
      { language: "Hindi", name: "पित्ताशय की सर्जरी" },
      { language: "Marathi", name: "पित्ताशय शस्त्रक्रिया" }, // Gall Bladder Surgery
    ],
  },
  aboutCondition: {
    title: "What is Gall Bladder Disease?",
    description:
      "The gall bladder is a small organ under the liver that stores bile to help digest fats. Gall bladder disease includes conditions like gallstones, cholecystitis (inflammation), polyps, and gall bladder dysfunction. When these conditions cause recurring pain or complications, surgical removal of the gall bladder (cholecystectomy) is the most effective and permanent treatment.",
  },
  foodTriggers: [
    {
      name: "Fatty Foods",
      description: "Stimulate excessive bile release, triggering pain",
      bgColor: "bg-orange-100",
    },
    {
      name: "Fried Foods",
      description: "Hard to digest and can worsen gall bladder symptoms",
      bgColor: "bg-red-100",
    },
    {
      name: "Processed Meats",
      description: "High in unhealthy fats that strain the gall bladder",
      bgColor: "bg-green-100",
    },
    {
      name: "High-Fat Dairy",
      description: "Can aggravate gall bladder inflammation and pain",
      bgColor: "bg-blue-100",
    },
    {
      name: "Sugary Foods",
      description: "May raise triglyceride levels and gall bladder risk",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Carbonated Beverages",
      description: "Cause bloating and abdominal discomfort",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Gallstones",
      description: "Most common cause of gall bladder disease and pain",
      icon: "alert-circle",
    },
    {
      title: "Gall Bladder Inflammation",
      description: "Cholecystitis caused by blocked bile flow or infection",
      icon: "thermometer",
    },
    {
      title: "Poor Gall Bladder Emptying",
      description: "Stagnant bile leads to stone formation and dysfunction",
      icon: "arrow-up",
    },
    {
      title: "Gall Bladder Polyps",
      description: "Growths on the gall bladder wall that may need removal",
      icon: "pill",
    },
    {
      title: "High-Fat Diet",
      description: "Increases bile saturation and disease risk",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Severe Abdominal Pain",
      description: "Sharp pain in the upper right abdomen, often after meals",
      icon: "image",
    },
    {
      title: "Nausea and Vomiting",
      description: "Common during gall bladder attacks",
      icon: "pill",
    },
    {
      title: "Jaundice",
      description: "Yellowing of skin and eyes if bile duct is blocked",
      icon: "clock",
    },
    {
      title: "Fever and Chills",
      description: "May indicate gall bladder infection (cholecystitis)",
      icon: "thermometer",
    },
    {
      title: "Back or Shoulder Pain",
      description: "Pain may radiate to the back or right shoulder",
      icon: "arrow-up",
    },
    {
      title: "Indigestion and Bloating",
      description: "Especially after eating fatty or large meals",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Female Gender",
      description: "More prone due to hormonal influences",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Increases cholesterol in bile",
      icon: "pill",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Slows digestion and bile flow",
      icon: "clock",
    },
    {
      title: "Age Over 40",
      description: "Risk increases with age",
      icon: "alert-circle",
    },
    {
      title: "Diabetes",
      description: "Alters fat metabolism",
      icon: "arrow-up",
    },
    {
      title: "Rapid Weight Loss",
      description: "Quickly alters bile composition",
      icon: "image",
    },
  ],
  complications: [
    {
      title: "Acute Cholecystitis",
      description: "Severe inflammation requiring emergency care",
      icon: "alert-circle",
    },
    {
      title: "Pancreatitis",
      description: "Blockage of the pancreatic duct by gallstones",
      icon: "thermometer",
    },
    {
      title: "Jaundice",
      description: "Due to bile duct obstruction",
      icon: "pill",
    },
    {
      title: "Bile Duct Infection",
      description: "Serious infection requiring prompt treatment",
      icon: "syringe",
    },
    {
      title: "Gall Bladder Rupture",
      description: "Rare but life-threatening condition",
      icon: "clock",
    },
    {
      title: "Gall Bladder Cancer",
      description: "Rare risk with long-standing untreated disease",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Gall bladder disease is diagnosed using imaging tests and clinical evaluation of symptoms.",
    methods: [
      "Ultrasound (most common and effective)",
      "HIDA Scan (to assess gall bladder function)",
      "CT Scan (for complications or unclear cases)",
      "MRCP (to evaluate bile ducts)",
      "Blood Tests (to detect infection or inflammation)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Dietary Changes",
        description: "Low-fat, high-fiber diet to reduce symptoms",
      },
      {
        name: "Medications",
        description: "Pain relief and antibiotics for infection control",
      },
      {
        name: "Observation",
        description:
          "Asymptomatic conditions may be monitored before treatment",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Cholecystectomy",
        description:
          "Minimally invasive removal of the gall bladder through small keyhole incisions",
        benefits: [
          "Quick recovery",
          "Minimal scarring and pain",
          "Permanent solution",
        ],
        recoveryTime: "3–5 days",
        anesthesia: "General",
      },
      {
        name: "Open Cholecystectomy",
        description:
          "Used for complicated cases or when laparoscopic approach is not possible",
        benefits: ["Effective in high-risk cases", "Comprehensive treatment"],
        recoveryTime: "7–10 days",
        anesthesia: "General",
      },
      {
        name: "Robotic Cholecystectomy",
        description:
          "Minimally invasive gall bladder removal using robotic-assisted technology for enhanced precision",
        benefits: [
          "Greater surgical precision and control",
          "Reduced blood loss and minimal scarring",
          "Faster recovery and shorter hospital stay",
        ],
        recoveryTime: "2–5 days",
        anesthesia: "General",
      },
    ],
  },
  whyChooseUs: [
    {
      title: "Expert Laparoscopic Surgeons",
      description:
        "Our team specializes in gall bladder surgeries using the latest minimally invasive techniques for optimal outcomes.",
    },
    {
      title: "Advanced Facilities",
      description:
        "State-of-the-art operation theaters and recovery care ensure a smooth treatment experience.",
    },
  ],
};
