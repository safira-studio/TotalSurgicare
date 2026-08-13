import { MedicalCondition } from "@/types";

export const gallstoneSurgeryMumbai: MedicalCondition = {
  id: "mumbai-gallstone-surgery",
  slug: "gallstone-surgery",
  name: "Gallstone",
  overview: {
    title:
      "Best Gallstone Surgery in Mumbai with Advanced Laparoscopic Treatment",
    brief:
      "Looking for gallstone surgery in Mumbai? Total Surgicare provides surgical treatment for symptomatic gallstones using modern laparoscopic techniques. Laparoscopic gallbladder surgery uses small incisions and can help reduce surgical trauma, post-operative discomfort, and recovery time compared with traditional open surgery in suitable patients.",
    alternateNames: [
      { language: "Also called", name: "Gallbladder Stone Surgery" },
      { language: "Also called", name: "Cholecystectomy" },
      { language: "Marathi", name: "पित्ताशयातील खडे" },
      { language: "Hindi", name: "पित्त की पथरी" },
    ],
    badges: [
      {
        title: "Laparoscopic Surgery",
        description: "Minimally invasive surgical approach",
      },
      {
        title: "Small Incisions",
        description: "Smaller surgical openings compared with traditional surgery",
      },
      {
        title: "Experienced Surgeons",
        description: "Specialized surgical care",
      },
      {
        title: "Recovery Support",
        description: "Post-operative guidance and follow-up",
      },
    ],
  },
  aboutCondition: {
    title: "What are Gallstones?",
    description:
      "Gallstones are hardened deposits that develop inside the gallbladder when substances present in bile, such as cholesterol or bilirubin, become concentrated and form solid particles. They can vary in size, from very small deposits to larger stones. Some people may have gallstones without experiencing any symptoms, while others can develop repeated pain or digestive discomfort when the stones interfere with the normal flow of bile. When a gallstone blocks the opening of the gallbladder or bile duct, it can cause upper abdominal pain, particularly after meals, along with nausea, vomiting, bloating, or indigestion. In some cases, blockage may lead to inflammation, infection, jaundice, or other complications.",
  },
  symptoms: [
    {
      title: "Upper Abdominal Pain",
      description: "Pain in the upper right or upper middle abdomen",
      icon: "alert-circle",
    },
    {
      title: "Pain After Fatty Meals",
      description: "Discomfort that follows heavy or oily food",
      icon: "pill",
    },
    {
      title: "Pain Spreading to Back or Shoulder",
      description: "Pain that radiates towards the back or right shoulder",
      icon: "arrow-up",
    },
    {
      title: "Nausea",
      description: "Feeling sick, often alongside the pain",
      icon: "frown",
    },
    {
      title: "Vomiting",
      description: "Vomiting during painful episodes",
      icon: "syringe",
    },
    {
      title: "Indigestion or Bloating",
      description: "Persistent fullness, gas or indigestion",
      icon: "weight",
    },
    {
      title: "Fever",
      description: "Fever in cases associated with infection",
      icon: "thermometer",
    },
    {
      title: "Yellowing of Eyes or Skin",
      description: "Jaundice when bile flow is obstructed",
      icon: "image",
    },
  ],
  causes: [
    {
      title: "Obesity or Being Overweight",
      description: "Raises cholesterol levels in bile",
      icon: "weight",
    },
    {
      title: "Rapid Weight Loss",
      description: "Crash dieting alters bile composition",
      icon: "arrow-up",
    },
    {
      title: "High-Fat Dietary Patterns",
      description: "Diets high in fat and low in fibre",
      icon: "pill",
    },
    {
      title: "Family History",
      description: "Gallstones can run in families",
      icon: "user",
    },
    {
      title: "Pregnancy",
      description: "Hormonal changes affect gallbladder emptying",
      icon: "heart",
    },
    {
      title: "Increasing Age",
      description: "Risk rises steadily with age",
      icon: "clock",
    },
    {
      title: "Certain Medical Conditions",
      description: "Some conditions predispose to stone formation",
      icon: "thermometer",
    },
    {
      title: "Reduced Gallbladder Emptying",
      description: "Bile that sits too long can form crystals",
      icon: "alert-circle",
    },
  ],
  // No separate riskFactors block: the brief presents gallstone causes and risk
  // factors as one combined list, which is the `causes` array above. Splitting it
  // produced two near-identical sections on the page.
  complications: [
    {
      title: "Gallbladder Inflammation",
      description: "Cholecystitis caused by a blocked gallbladder",
      icon: "thermometer",
    },
    {
      title: "Bile Duct Obstruction",
      description: "A stone blocking the common bile duct",
      icon: "alert-circle",
    },
    {
      title: "Jaundice",
      description: "Yellowing of the skin and eyes",
      icon: "image",
    },
    {
      title: "Gallbladder Infection",
      description: "Infection developing behind the obstruction",
      icon: "syringe",
    },
    {
      title: "Pancreatitis",
      description: "Inflammation of the pancreas",
      icon: "pill",
    },
    {
      title: "Recurrent Abdominal Pain",
      description: "Repeated painful attacks over time",
      icon: "frown",
    },
  ],
  diagnosis: {
    description:
      "Gallstones are commonly evaluated using imaging and laboratory tests.",
    methods: [
      "Abdominal ultrasound",
      "Blood tests",
      "Liver function tests",
      "CT scan when required",
      "MRCP for suspected bile duct stones",
    ],
  },
  treatments: {
    surgical: [
      {
        name: "Laparoscopic Cholecystectomy",
        description:
          "Laparoscopic cholecystectomy involves removing the gallbladder through small abdominal incisions using a camera and specialized surgical instruments.",
        benefits: [
          "Minimally invasive",
          "Smaller incisions",
          "Usually less post-operative discomfort than open surgery",
          "Suitable for many patients with symptomatic gallstones",
        ],
        recoveryTime: "As advised by the surgeon",
        anesthesia: "General",
      },
      {
        name: "Open Cholecystectomy",
        description:
          "Open surgery may be considered when laparoscopic surgery is unsuitable or when there are complicated surgical findings.",
        benefits: [
          "May be used in complicated cases",
          "Allows direct access in difficult anatomy",
        ],
        recoveryTime: "Longer than laparoscopic surgery",
        anesthesia: "General",
      },
      {
        name: "ERCP for Bile Duct Stones",
        description:
          "ERCP may be recommended when stones have moved into the common bile duct. It can be used to remove obstructing bile duct stones before or around the time of gallbladder surgery.",
        benefits: [
          "Clears stones from the bile duct",
          "No abdominal incision",
          "Can be combined with gallbladder surgery",
        ],
        recoveryTime: "Depends on the individual case",
        anesthesia: "Sedation or general",
      },
    ],
    nonSurgical: [
      {
        name: "Maintain a Healthy Body Weight",
        description: "Reduces cholesterol saturation in bile.",
      },
      {
        name: "Avoid Crash Diets",
        description: "Rapid weight loss raises the risk of stone formation.",
      },
      {
        name: "Follow a Balanced Diet",
        description: "Regular, balanced meals support gallbladder emptying.",
      },
      {
        name: "Include Adequate Dietary Fibre",
        description: "Fibre supports healthy digestion.",
      },
      {
        name: "Limit Excessive High-Fat Foods",
        description: "Cut back on fried and heavily oily food.",
      },
      {
        name: "Stay Physically Active",
        description: "Regular activity lowers gallstone risk.",
      },
    ],
  },
  whyChooseUs: [
    {
      title: "Advanced Laparoscopic Surgery",
      description: "Minimally invasive treatment for suitable patients.",
    },
    {
      title: "Experienced Surgical Team",
      description: "Care planned according to the patient's condition.",
    },
    {
      title: "Modern Surgical Facilities",
      description: "Access to advanced surgical equipment.",
    },
    {
      title: "Complete Follow-Up Care",
      description: "Support from consultation through recovery.",
    },
  ],
  faq: [
    {
      question: "Where can I get gallstone surgery in Mumbai?",
      answer:
        "Total Surgicare provides gallstone evaluation and laparoscopic gallbladder surgery in Mumbai.",
    },
    {
      question: "Do all gallstones require surgery?",
      answer:
        "No. Some gallstones do not cause symptoms and may only require monitoring. Symptomatic or complicated gallstones may require surgical treatment.",
    },
    {
      question: "Is laparoscopic gallstone surgery safe?",
      answer:
        "Laparoscopic cholecystectomy is a commonly performed surgical procedure. Your surgeon will assess your health and gallbladder condition before recommending surgery.",
    },
    {
      question: "How long does gallstone surgery take?",
      answer:
        "The duration depends on the patient's condition and the complexity of the surgery. Your surgeon can provide an estimated procedure time after evaluation.",
    },
    {
      question: "Can gallstones come back after gallbladder removal?",
      answer:
        "The gallbladder is removed during cholecystectomy, so gallstones cannot form inside the removed gallbladder.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "Contact Total Surgicare to schedule a consultation with the surgical team in Mumbai.",
    },
  ],
};
