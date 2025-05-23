import { MedicalCondition } from "@/types";

export const herniaCondition: MedicalCondition = {
  id: "6",
  slug: "hernia-treatment",
  overview: {
    title: "Hernia Treatment – Advanced Laparoscopic & Laser Surgery",
    brief:
      "A hernia occurs when an organ or tissue pushes through a weak spot in the surrounding muscle. We offer minimally invasive laparoscopic and laser treatments for long-lasting relief.",
    alternateNames: [
      { language: "Hindi", name: "हर्निया" },
      { language: "Tamil", name: "மூளை வீக்கம்" },
    ],
  },
  aboutCondition: {
    title: "What is Hernia?",
    description:
      "A hernia is a medical condition where an internal organ or tissue protrudes through a weak area in the muscle or connective tissue. Common types include inguinal, umbilical, and incisional hernias. It often appears as a visible bulge and may cause discomfort or pain, especially when lifting or straining.",
  },
  foodTriggers: [
    {
      name: "Spicy Foods",
      description: "Can cause acid reflux and worsen discomfort",
      bgColor: "bg-orange-100",
    },
    {
      name: "Carbonated Drinks",
      description: "Increase bloating and abdominal pressure",
      bgColor: "bg-red-100",
    },
    {
      name: "Fatty Foods",
      description: "Delay stomach emptying and contribute to reflux",
      bgColor: "bg-green-100",
    },
    {
      name: "Citrus Fruits",
      description: "May irritate the stomach lining",
      bgColor: "bg-blue-100",
    },
    {
      name: "Onions and Garlic",
      description: "Trigger bloating in some individuals",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Caffeine",
      description: "Can relax the lower esophageal sphincter",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Weak Abdominal Wall",
      description: "Congenital or due to aging and strain",
      icon: "alert-circle",
    },
    {
      title: "Heavy Lifting",
      description: "Increases pressure on the abdominal wall",
      icon: "arrow-up",
    },
    {
      title: "Chronic Cough",
      description: "Persistent pressure can cause muscle tears",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Excess weight strains the abdominal muscles",
      icon: "clock",
    },
    {
      title: "Pregnancy",
      description: "Weakens abdominal muscles",
      icon: "syringe",
    },
    {
      title: "Previous Surgery",
      description: "Can weaken the surgical site (incisional hernia)",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Visible Bulge",
      description:
        "In the abdomen or groin that may increase when standing or straining",
      icon: "image",
    },
    {
      title: "Pain or Discomfort",
      description: "Especially when lifting, coughing, or bending",
      icon: "pill",
    },
    {
      title: "Heaviness in the Abdomen",
      description: "A sensation of fullness or pressure",
      icon: "clock",
    },
    {
      title: "Burning or Aching Sensation",
      description: "Due to irritation of nearby nerves",
      icon: "thermometer",
    },
    {
      title: "Bowel Obstruction",
      description: "Severe cases may block intestinal flow",
      icon: "alert-circle",
    },
    {
      title: "Redness and Tenderness",
      description: "May indicate strangulation or inflammation",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Male Gender",
      description: "More prone to inguinal hernias",
      icon: "clock",
    },
    {
      title: "Old Age",
      description: "Muscle tissue weakens with age",
      icon: "thermometer",
    },
    {
      title: "Chronic Constipation",
      description: "Straining increases intra-abdominal pressure",
      icon: "arrow-up",
    },
    {
      title: "Obesity",
      description: "Adds pressure to the abdominal wall",
      icon: "pill",
    },
    {
      title: "Pregnancy",
      description: "Stretches and weakens abdominal muscles",
      icon: "syringe",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to weak tissue",
      icon: "image",
    },
  ],
  complications: [
    {
      title: "Strangulated Hernia",
      description: "Cuts off blood flow and requires emergency surgery",
      icon: "alert-circle",
    },
    {
      title: "Incarcerated Hernia",
      description: "Trapped tissue that can't be pushed back",
      icon: "clock",
    },
    {
      title: "Bowel Obstruction",
      description: "Hernia blocks intestinal contents",
      icon: "thermometer",
    },
    {
      title: "Pain and Inflammation",
      description: "Due to constant friction or strangulation",
      icon: "pill",
    },
    {
      title: "Recurrent Hernia",
      description: "May recur if not treated properly",
      icon: "image",
    },
    {
      title: "Surgical Infection",
      description: "Possible in open procedures",
      icon: "syringe",
    },
  ],
  diagnosis: {
    description:
      "Hernia is typically diagnosed through a physical exam. Imaging tests help confirm the type and severity.",
    methods: [
      "Physical Examination (detect bulge and discomfort)",
      "Ultrasound (especially for groin hernias)",
      "CT Scan or MRI (detailed view of internal hernia)",
      "X-ray (for suspected bowel obstruction)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Lifestyle Modifications",
        description:
          "Avoid lifting, maintain healthy weight, and eat high-fiber foods",
      },
      {
        name: "Hernia Belt or Truss",
        description: "Provides temporary support for small hernias",
      },
      {
        name: "Pain Management",
        description: "To manage symptoms in inoperable cases",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Hernia Repair",
        description:
          "Minimally invasive surgery using small incisions and mesh support",
        benefits: ["Quick recovery", "Minimal pain", "Low risk of recurrence"],
        recoveryTime: "3–7 days",
        anesthesia: "General",
      },
      {
        name: "Open Mesh Repair (Hernioplasty)",
        description:
          "Traditional surgery with a small incision to place a mesh",
        benefits: [
          "Effective for larger or complex hernias",
          "Long-lasting support",
        ],
        recoveryTime: "7–10 days",
        anesthesia: "Spinal or general",
      },
    ],
  },
  types: [
    {
      type: "Inguinal Hernia",
      description: "Occurs in the groin; most common type",
      procedure: "Laparoscopic or open mesh repair",
    },
    {
      type: "Umbilical Hernia",
      description: "Occurs near the navel",
      procedure: "Mesh or sutured repair",
    },
    {
      type: "Incisional Hernia",
      description: "At previous surgical incision site",
      procedure: "Mesh reinforcement via laparoscopy",
    },
    {
      type: "Femoral Hernia",
      description: "Below the groin; more common in women",
      procedure: "Emergency repair if strangulated",
    },
    {
      type: "Hiatal Hernia",
      description: "Stomach bulges into chest through diaphragm",
      procedure: "Laparoscopic repair if symptomatic",
    },
  ],
  whyChooseUs: [
    {
      title: "Minimally Invasive Hernia Repair",
      description:
        "We use advanced laparoscopic and laser techniques for safe and effective hernia treatment with minimal downtime.",
    },
    {
      title: "Experienced Surgeons",
      description:
        "Our surgical team has vast experience in handling complex and recurrent hernia cases with high success rates.",
    },
  ],
};
