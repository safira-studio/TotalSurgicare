import { MedicalCondition } from "@/types";

export const umbillicalHerniaSurgery: MedicalCondition = {
  id: "10",
  slug: "umbilical-hernia-treatment",
  overview: {
    title: "Umbilical Hernia Treatment – Safe & Effective Repair",
    brief:
      "Umbilical hernia occurs when part of the intestine protrudes through the abdominal muscles near the navel. We provide advanced hernia repair with minimal discomfort and quick recovery.",
    alternateNames: [
      { language: "Hindi", name: "नाभि हर्निया" },
      { language: "Tamil", name: "தொப்புள் கசிவு சிகிச்சை" },
    ],
  },
  aboutCondition: {
    title: "What is Umbilical Hernia?",
    description:
      "An umbilical hernia is a condition where part of the intestine bulges through the abdominal wall near the belly button. It is common in infants but can also occur in adults due to increased abdominal pressure.",
  },
  foodTriggers: [
    {
      name: "Heavy Meals",
      description: "Can increase abdominal pressure",
      bgColor: "bg-orange-100",
    },
    {
      name: "Spicy Foods",
      description: "Can cause bloating or irritation",
      bgColor: "bg-red-100",
    },
    {
      name: "Caffeine",
      description: "May contribute to acid reflux",
      bgColor: "bg-green-100",
    },
    {
      name: "Fizzy Drinks",
      description: "Lead to gas buildup and abdominal distension",
      bgColor: "bg-blue-100",
    },
    {
      name: "Citrus Fruits",
      description: "May irritate digestive tract",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Fatty Foods",
      description: "Slow down digestion and worsen symptoms",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Incomplete Closure of Abdominal Wall",
      description: "Common in newborns due to incomplete development",
      icon: "alert-circle",
    },
    {
      title: "Obesity",
      description: "Puts extra pressure on the abdominal muscles",
      icon: "pill",
    },
    {
      title: "Pregnancy",
      description: "Increases abdominal pressure in women",
      icon: "thermometer",
    },
    {
      title: "Chronic Coughing",
      description: "Strains the abdominal wall over time",
      icon: "arrow-up",
    },
    {
      title: "Straining During Bowel Movements",
      description: "Leads to weakening of abdominal muscles",
      icon: "syringe",
    },
    {
      title: "Previous Abdominal Surgery",
      description: "Can weaken the area around the navel",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Bulge Near Belly Button",
      description: "Soft swelling near the navel",
      icon: "image",
    },
    {
      title: "Pain or Discomfort",
      description: "Especially when coughing, lifting, or bending",
      icon: "pill",
    },
    {
      title: "Swelling",
      description: "More noticeable when standing or straining",
      icon: "clock",
    },
    {
      title: "Nausea",
      description: "In cases of obstruction or strangulation",
      icon: "thermometer",
    },
    {
      title: "Vomiting",
      description: "Occurs if blood flow is restricted",
      icon: "alert-circle",
    },
    {
      title: "Constipation",
      description: "May result from bowel entrapment",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Premature Birth",
      description: "Increased chance due to underdeveloped abdominal wall",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Higher risk due to excess weight",
      icon: "clock",
    },
    {
      title: "Multiple Pregnancies",
      description: "More strain on abdominal wall",
      icon: "arrow-up",
    },
    {
      title: "Chronic Constipation",
      description: "Frequent straining increases pressure",
      icon: "thermometer",
    },
    {
      title: "Abdominal Surgery",
      description: "Weakens muscle around the umbilicus",
      icon: "image",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to hernias",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Strangulation",
      description: "Cut-off blood supply to herniated tissue",
      icon: "alert-circle",
    },
    {
      title: "Incarceration",
      description: "Trapped hernia causing bowel obstruction",
      icon: "thermometer",
    },
    {
      title: "Bowel Obstruction",
      description: "Entrapped intestine causes blockage",
      icon: "pill",
    },
    {
      title: "Infection",
      description: "Can occur in case of tissue death",
      icon: "syringe",
    },
    {
      title: "Rupture",
      description: "Rare but serious tearing of herniated bowel",
      icon: "clock",
    },
    {
      title: "Recurrence",
      description: "Possible if not repaired properly",
      icon: "image",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis is made through a physical examination. Imaging is done in complex or unclear cases.",
    methods: [
      "Physical Exam (to detect bulge)",
      "Ultrasound (especially in infants or uncertain diagnosis)",
      "CT or MRI (for complications or surgical planning)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Observation",
        description:
          "In infants, many umbilical hernias close on their own by age 1–2",
      },
      {
        name: "Hernia Belt or Binder",
        description:
          "Supports the abdominal wall and reduces discomfort, especially in adults unfit for surgery",
      },
      {
        name: "Weight Management",
        description:
          "Losing excess weight helps reduce pressure on the hernia and prevent worsening",
      },
      {
        name: "Avoiding Heavy Lifting",
        description:
          "Prevents strain on the abdominal area and reduces risk of hernia enlargement or pain",
      },
    ],
    surgical: [
      {
        name: "Umbilical Hernia Repair",
        description:
          "Surgery to push the bulge back and reinforce the abdominal wall",
        benefits: [
          "Prevents complications",
          "Provides permanent relief",
          "Short recovery time",
        ],
        recoveryTime: "1–2 weeks",
        anesthesia: "General or Local",
      },
      {
        name: "Laparoscopic Repair",
        description:
          "Minimally invasive approach for faster healing and less pain",
        benefits: ["Small incisions", "Quick recovery", "Low recurrence"],
        recoveryTime: "1 week",
        anesthesia: "General",
      },
      {
        name: "Mesh Reinforced Open Repair",
        description:
          "Traditional open surgery enhanced with mesh to strengthen the abdominal wall",
        benefits: [
          "Reduces risk of recurrence",
          "Ideal for larger or recurrent hernias",
          "Long-term durability",
        ],
        recoveryTime: "1–2 weeks",
        anesthesia: "General or Local",
      },
    ],
  },
  types: [
    {
      type: "Congenital Umbilical Hernia",
      description: "Present at birth, often resolves on its own",
      procedure: "Surgical repair if persists beyond 2 years",
    },
    {
      type: "Acquired Umbilical Hernia",
      description: "Occurs in adults due to strain or weakness",
      procedure: "Open or laparoscopic surgical repair",
    },
    {
      type: "Incarcerated Umbilical Hernia",
      description: "Trapped tissue requiring emergency surgery",
      procedure: "Immediate open repair",
    },
  ],
  whyChooseUs: [
    {
      title: "Specialized Hernia Care",
      description:
        "Our surgeons are experienced in treating both pediatric and adult hernias with precision.",
    },
    {
      title: "Minimally Invasive Options",
      description:
        "We offer laparoscopic procedures with quick recovery and minimal scarring.",
    },
  ],
};
