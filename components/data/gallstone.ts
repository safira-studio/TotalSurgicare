import { MedicalCondition } from "@/types";

export const gallstoneSurgery: MedicalCondition = {
  id: "7",
  slug: "gallstone-treatment",
  name: "Gallstone",
  overview: {
    title: "Gallstone Treatment – Laparoscopic Gallbladder Surgery",
    brief:
      "Gallstones are hardened deposits that form in the gallbladder and can lead to severe abdominal pain. We offer safe, effective laparoscopic gallbladder removal surgery for long-term relief.",
    alternateNames: [
      { language: "Hindi", name: "पित्त की पथरी" },
      { language: "Marathi", name: "पित्ताशयातील खडे" }, // Gallstone
    ],
  },
  aboutCondition: {
    title: "What are Gallstones?",
    description:
      "Gallstones are solid particles that form in the gallbladder due to imbalances in bile components. They may be as small as grains of sand or as large as a golf ball and can cause pain, inflammation, or blockages in the bile ducts.",
  },
  foodTriggers: [
    {
      name: "Fatty Foods",
      description: "Stimulate excessive bile release, triggering pain",
      bgColor: "bg-orange-100",
    },
    {
      name: "Fried Foods",
      description: "Difficult to digest and can worsen gallstone symptoms",
      bgColor: "bg-red-100",
    },
    {
      name: "Processed Meats",
      description: "High in unhealthy fats that increase cholesterol in bile",
      bgColor: "bg-green-100",
    },
    {
      name: "Dairy Products",
      description: "High-fat dairy can exacerbate gallbladder symptoms",
      bgColor: "bg-blue-100",
    },
    {
      name: "Sugary Foods",
      description: "May raise triglyceride levels and risk of gallstones",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Carbonated Beverages",
      description: "Cause bloating and discomfort",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Cholesterol Imbalance",
      description: "Excess cholesterol in bile forms crystals",
      icon: "alert-circle",
    },
    {
      title: "Poor Gallbladder Emptying",
      description: "Leads to stagnant bile, increasing risk",
      icon: "arrow-up",
    },
    {
      title: "Obesity",
      description: "Increases cholesterol levels in bile",
      icon: "pill",
    },
    {
      title: "Rapid Weight Loss",
      description: "Alters bile composition quickly",
      icon: "thermometer",
    },
    {
      title: "Pregnancy",
      description: "Hormonal changes affect bile flow",
      icon: "syringe",
    },
    {
      title: "High-Fat Diet",
      description: "Stimulates bile saturation",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Severe Abdominal Pain",
      description: "Sudden pain in the upper right or middle abdomen",
      icon: "image",
    },
    {
      title: "Nausea and Vomiting",
      description: "Common during gallstone attacks",
      icon: "pill",
    },
    {
      title: "Jaundice",
      description: "Yellowing of skin and eyes if bile duct is blocked",
      icon: "clock",
    },
    {
      title: "Fever and Chills",
      description: "May indicate gallbladder infection",
      icon: "thermometer",
    },
    {
      title: "Back or Shoulder Pain",
      description: "Pain may radiate to back or right shoulder",
      icon: "arrow-up",
    },
    {
      title: "Indigestion and Bloating",
      description: "After eating fatty or large meals",
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
      title: "High-Fat Diet",
      description: "Promotes gallstone formation",
      icon: "image",
    },
  ],
  complications: [
    {
      title: "Cholecystitis",
      description: "Inflammation of the gallbladder",
      icon: "alert-circle",
    },
    {
      title: "Pancreatitis",
      description: "Blockage of pancreatic duct by gallstones",
      icon: "thermometer",
    },
    {
      title: "Jaundice",
      description: "Due to bile duct obstruction",
      icon: "pill",
    },
    {
      title: "Bile Duct Infection",
      description: "Serious and requires prompt treatment",
      icon: "syringe",
    },
    {
      title: "Gallbladder Rupture",
      description: "Rare but life-threatening condition",
      icon: "clock",
    },
    {
      title: "Bowel Obstruction",
      description: "Large stone may block intestine",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Gallstones are diagnosed using imaging tests and clinical evaluation of symptoms.",
    methods: [
      "Ultrasound (most common and effective)",
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
        description: "To dissolve cholesterol gallstones (used rarely)",
      },
      {
        name: "Observation",
        description: "If asymptomatic, stones may not require treatment",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Cholecystectomy",
        description:
          "Minimally invasive removal of the gallbladder to prevent further stone formation",
        benefits: [
          "Quick recovery",
          "Low risk of complications",
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
        name: "Mini-Laparoscopic Cholecystectomy",
        description:
          "A less invasive version of laparoscopic surgery using smaller instruments and incisions",
        benefits: [
          "Smaller scars and less pain",
          "Faster recovery than traditional laparoscopic",
          "Lower risk of infection",
        ],
        recoveryTime: "2–4 days",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Cholesterol Gallstones",
      description: "Most common type, formed from excess cholesterol",
      procedure: "Laparoscopic cholecystectomy",
    },
    {
      type: "Pigment Gallstones",
      description: "Formed from excess bilirubin; smaller and darker",
      procedure: "Gallbladder removal if symptomatic",
    },
    {
      type: "Mixed Gallstones",
      description: "Combination of cholesterol and pigment components",
      procedure: "Surgical removal recommended",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Laparoscopic Surgeons",
      description:
        "Our team specializes in gallbladder surgeries using the latest techniques for optimal outcomes.",
    },
    {
      title: "Advanced Facilities",
      description:
        "State-of-the-art operation theaters and recovery care ensure a smooth treatment experience.",
    },
  ],
};
