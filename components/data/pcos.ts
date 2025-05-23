import { MedicalCondition } from "@/types";

export const pcosPcodTreatment: MedicalCondition = {
  id: "16",
  slug: "pcos-pcod-symptoms-causes-treatment",
  overview: {
    title: "PCOS / PCOD - Symptoms, Causes & Treatment",
    brief:
      "PCOS and PCOD are hormonal disorders affecting women of reproductive age, causing irregular periods, cysts, and fertility issues. Learn about symptoms, causes, and treatments.",
    alternateNames: [
      { language: "Hindi", name: "पीसीओएस / पीसीओडी" },
      {
        language: "Tamil",
        name: "பால்சிஸ்டிக் ஓவரி சிண்ட்ரோம் / பால்சிஸ்டிக் ஓவரி நோய்",
      },
    ],
  },
  aboutCondition: {
    title: "What is PCOS / PCOD?",
    description:
      "PCOS (Polycystic Ovary Syndrome) and PCOD (Polycystic Ovarian Disease) are common hormonal disorders in women, characterized by multiple ovarian cysts, irregular menstruation, and excess androgen production.",
  },
  foodTriggers: [
    {
      name: "High Sugar Intake",
      description: "Can worsen insulin resistance and hormonal imbalance.",
      bgColor: "bg-red-100",
    },
    {
      name: "Refined Carbohydrates",
      description: "Cause blood sugar spikes, aggravating symptoms.",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Processed Foods",
      description: "May increase inflammation and hormonal disruption.",
      bgColor: "bg-orange-100",
    },
  ],
  causes: [
    {
      title: "Hormonal Imbalance",
      description: "Excess androgens and insulin resistance are key factors.",
      icon: "pill",
    },
    {
      title: "Genetic Predisposition",
      description:
        "Family history increases likelihood of developing PCOS/PCOD.",
      icon: "thermometer",
    },
    {
      title: "Lifestyle Factors",
      description:
        "Obesity, sedentary lifestyle, and poor diet worsen the condition.",
      icon: "arrow-up",
    },
    {
      title: "Inflammation",
      description:
        "Chronic low-grade inflammation contributes to hormonal imbalances.",
      icon: "alert-circle",
    },
  ],
  symptoms: [
    {
      title: "Irregular Periods",
      description: "Infrequent, prolonged, or absent menstruation.",
      icon: "clock",
    },
    {
      title: "Weight Gain",
      description: "Difficulty losing weight, often with abdominal obesity.",
      icon: "arrow-up",
    },
    {
      title: "Excess Hair Growth",
      description: "Hirsutism, including facial and body hair.",
      icon: "pill",
    },
    {
      title: "Acne and Oily Skin",
      description: "Hormonal imbalance causes skin issues.",
      icon: "syringe",
    },
    {
      title: "Thinning Hair",
      description: "Hair loss or male-pattern baldness.",
      icon: "alert-circle",
    },
    {
      title: "Fertility Issues",
      description: "Difficulty conceiving due to ovulation problems.",
      icon: "thermometer",
    },
  ],
  riskFactors: [
    {
      title: "Obesity",
      description: "Excess body fat worsens insulin resistance.",
      icon: "arrow-up",
    },
    {
      title: "Family History",
      description: "Genetic links increase risk.",
      icon: "pill",
    },
    {
      title: "Age",
      description: "Most common in women aged 15-44 years.",
      icon: "clock",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Lack of exercise exacerbates symptoms.",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Type 2 Diabetes",
      description: "Due to insulin resistance.",
      icon: "thermometer",
    },
    {
      title: "Infertility",
      description: "Failure to ovulate regularly.",
      icon: "pill",
    },
    {
      title: "Endometrial Cancer",
      description:
        "Risk increases due to irregular shedding of uterine lining.",
      icon: "alert-circle",
    },
    {
      title: "Cardiovascular Disease",
      description: "Higher risk due to metabolic issues.",
      icon: "arrow-up",
    },
    {
      title: "Sleep Apnea",
      description: "Common in overweight women with PCOS.",
      icon: "clock",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves clinical history, blood tests to check hormone levels, ultrasound to detect ovarian cysts, and exclusion of other causes.",
    methods: [
      "Physical Exam",
      "Blood Tests (LH, FSH, Testosterone, Insulin)",
      "Pelvic Ultrasound",
      "Glucose Tolerance Test",
      "Thyroid Function Test",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Lifestyle Modifications",
        description:
          "Diet and exercise to improve symptoms and insulin sensitivity.",
      },
      {
        name: "Medications",
        description:
          "Hormonal contraceptives, anti-androgens, insulin sensitizers like Metformin.",
      },
    ],
    surgical: [
      {
        name: "Laparoscopic Ovarian Drilling",
        description:
          "Minimally invasive surgery to trigger ovulation by destroying androgen-producing tissue.",
        recoveryTime: "1-2 weeks",
        anesthesia: "General",
        benefits: [
          "Less pain and scarring",
          "Faster recovery time",
          "Shorter hospital stay",
        ],
      },
    ],
  },
  types: [
    {
      type: "Classic PCOS",
      description:
        "Includes all features: hyperandrogenism, ovulatory dysfunction, and polycystic ovaries.",
      procedure:
        "Diagnosed based on Rotterdam criteria combining symptoms and tests.",
    },
    {
      type: "Non-Classic PCOS",
      description:
        "May have irregular ovulation or mild symptoms without cysts on ultrasound.",
      procedure: "Diagnosis relies more on hormonal and clinical assessment.",
    },
  ],
  whyChooseUs: [
    {
      title: "Comprehensive Hormonal Evaluation",
      description: "Accurate diagnosis with advanced lab tests and imaging.",
    },
    {
      title: "Personalized Treatment Plans",
      description:
        "Tailored approach combining lifestyle, medications, and surgery if needed.",
    },
    {
      title: "Fertility Support",
      description: "Expertise in managing infertility related to PCOS/PCOD.",
    },
    {
      title: "Ongoing Monitoring & Support",
      description:
        "Regular follow-up to manage symptoms and prevent complications.",
    },
  ],
};
