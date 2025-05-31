import { MedicalCondition } from "@/types";

export const inguinalHerniaSurgery: MedicalCondition = {
  id: "9",
  slug: "inguinal-hernia-treatment",
  name: "Inguinal Hernia",
  overview: {
    title: "Inguinal Hernia Treatment – Laparoscopic Hernia Repair",
    brief:
      "Inguinal hernia occurs when tissue pushes through a weak spot in the groin muscles. We offer advanced laparoscopic hernia repair for quick recovery and minimal discomfort.",
    alternateNames: [
      { language: "Hindi", name: "इंगुइनल हर्निया" },
      { language: "Marathi", name: "इन्ग्वायनल हर्निया" }, // Inguinal Hernia
    ],
  },
  aboutCondition: {
    title: "What is Inguinal Hernia?",
    description:
      "An inguinal hernia is a bulge that occurs in the groin region when tissue, such as part of the intestine, protrudes through a weak spot in the abdominal muscles. It can be painful, especially during coughing or lifting heavy objects.",
  },
  foodTriggers: [
    {
      name: "Heavy Meals",
      description: "Increase abdominal pressure and worsen symptoms",
      bgColor: "bg-orange-100",
    },
    {
      name: "Spicy Foods",
      description: "Can cause heartburn, irritating the hernia",
      bgColor: "bg-red-100",
    },
    {
      name: "Caffeinated Drinks",
      description: "May relax the esophageal sphincter and increase reflux",
      bgColor: "bg-green-100",
    },
    {
      name: "Carbonated Beverages",
      description: "Cause bloating and abdominal pressure",
      bgColor: "bg-blue-100",
    },
    {
      name: "Citrus Fruits",
      description: "May cause acid reflux and discomfort",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Fried Foods",
      description: "Slow digestion and increase bloating",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Weak Abdominal Wall",
      description: "Congenital or age-related weakness in groin area",
      icon: "alert-circle",
    },
    {
      title: "Heavy Lifting",
      description: "Can cause sudden strain in the groin",
      icon: "arrow-up",
    },
    {
      title: "Chronic Coughing",
      description: "Increases pressure in abdominal cavity",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Increases strain on abdominal muscles",
      icon: "pill",
    },
    {
      title: "Straining During Bowel Movements",
      description: "Leads to excessive pressure on the abdomen",
      icon: "syringe",
    },
    {
      title: "Previous Surgery",
      description: "May weaken muscle or cause scar tissue",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Bulge in Groin",
      description: "Visible and possibly painful bulge in lower abdomen",
      icon: "image",
    },
    {
      title: "Pain When Bending or Lifting",
      description: "Discomfort during physical activity",
      icon: "pill",
    },
    {
      title: "Heaviness in Groin",
      description: "Feeling of dragging or heaviness",
      icon: "clock",
    },
    {
      title: "Swelling Around Testicles",
      description: "In men, hernia may extend into the scrotum",
      icon: "thermometer",
    },
    {
      title: "Burning or Aching Sensation",
      description: "At the bulge site, especially after standing",
      icon: "alert-circle",
    },
    {
      title: "Nausea or Vomiting",
      description: "If the hernia becomes strangulated",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Male Gender",
      description: "More common in men due to anatomy",
      icon: "pill",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to weak muscles",
      icon: "clock",
    },
    {
      title: "Chronic Constipation",
      description: "Frequent straining during bowel movements",
      icon: "arrow-up",
    },
    {
      title: "Smoking",
      description: "Leads to chronic coughing and muscle weakness",
      icon: "thermometer",
    },
    {
      title: "Premature Birth",
      description: "Underdeveloped muscles increase risk",
      icon: "image",
    },
    {
      title: "Heavy Physical Labor",
      description: "Jobs involving lifting and straining",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Strangulated Hernia",
      description: "Blood supply to herniated tissue is cut off",
      icon: "alert-circle",
    },
    {
      title: "Incarcerated Hernia",
      description: "Hernia becomes trapped and cannot be pushed back",
      icon: "thermometer",
    },
    {
      title: "Bowel Obstruction",
      description: "Trapped intestine may cause blockage",
      icon: "pill",
    },
    {
      title: "Infection",
      description: "Especially in strangulated cases",
      icon: "syringe",
    },
    {
      title: "Recurrence",
      description: "Can recur if not properly repaired",
      icon: "clock",
    },
    {
      title: "Testicular Damage",
      description: "In men if blood supply is affected",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis is usually clinical, confirmed by physical exam and imaging if needed.",
    methods: [
      "Physical Examination (detect bulge)",
      "Ultrasound (to confirm and check severity)",
      "MRI or CT Scan (in complex or recurrent cases)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Watchful Waiting",
        description:
          "For small hernias without symptoms, regular monitoring is an option",
      },
      {
        name: "Truss or Hernia Belt",
        description:
          "Supports the bulge temporarily but is not a permanent solution",
      },
      {
        name: "Lifestyle Modifications",
        description:
          "Includes avoiding heavy lifting, managing weight, and treating chronic cough or constipation to reduce hernia strain",
      },
      {
        name: "Physical Therapy",
        description:
          "Guided exercises to strengthen abdominal muscles, potentially reducing hernia discomfort in select cases",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Hernia Repair",
        description:
          "Minimally invasive surgery using small incisions and mesh placement",
        benefits: ["Quick recovery", "Minimal pain", "Lower recurrence rate"],
        recoveryTime: "1–2 weeks",
        anesthesia: "General",
      },
      {
        name: "Open Hernia Repair (Hernioplasty)",
        description:
          "Traditional surgery involving larger incision and mesh placement",
        benefits: [
          "Suitable for large or complex hernias",
          "Effective in emergency cases",
        ],
        recoveryTime: "2–4 weeks",
        anesthesia: "Local/General",
      },
      {
        name: "Robotic-Assisted Hernia Repair",
        description:
          "Advanced minimally invasive surgery using robotic instruments for precise mesh placement",
        benefits: [
          "Improved precision and control",
          "Reduced postoperative pain",
          "Faster return to normal activities",
        ],
        recoveryTime: "1–2 weeks",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Indirect Inguinal Hernia",
      description: "Congenital; follows the path of the inguinal canal",
      procedure: "Laparoscopic or open repair",
    },
    {
      type: "Direct Inguinal Hernia",
      description: "Develops over time due to weakened muscles",
      procedure: "Mesh-based hernioplasty",
    },
    {
      type: "Incarcerated Hernia",
      description: "Stuck in the groin, requires immediate surgery",
      procedure: "Open surgical repair",
    },
  ],
  whyChooseUs: [
    {
      title: "Experienced Surgeons",
      description:
        "Our specialists have performed hundreds of successful hernia repairs.",
    },
    {
      title: "Advanced Laparoscopy",
      description:
        "We use the latest minimally invasive techniques for faster recovery.",
    },
  ],
};
