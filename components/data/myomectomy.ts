import { MedicalCondition } from "@/types";

export const myomectomyCondition: MedicalCondition = {
  id: "15",
  slug: "myomectomy-procedure-treatment",
  overview: {
    title: "Myomectomy - Procedure, Types & Recovery",
    brief:
      "Myomectomy is a surgical procedure to remove uterine fibroids while preserving the uterus. Learn about types, indications, and recovery.",
    alternateNames: [
      { language: "Hindi", name: "मायोमेक्टॉमी" },
      { language: "Tamil", name: "மயோமேக்டோமி" },
    ],
  },
  aboutCondition: {
    title: "What is Myomectomy?",
    description:
      "Myomectomy is a surgical operation to remove fibroids (noncancerous growths) from the uterus, aimed at relieving symptoms while maintaining fertility.",
  },
  foodTriggers: [
    {
      name: "High-fat Foods",
      description:
        "May increase estrogen levels, potentially worsening fibroids.",
      bgColor: "bg-orange-100",
    },
    {
      name: "Processed Foods",
      description: "Can promote inflammation and slow healing.",
      bgColor: "bg-green-100",
    },
    {
      name: "Caffeine",
      description:
        "May worsen symptoms like pain or discomfort pre- and post-surgery.",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Hormonal Imbalance",
      description:
        "Excess estrogen and progesterone can promote fibroid growth.",
      icon: "pill",
    },
    {
      title: "Genetic Factors",
      description: "Family history increases risk of developing fibroids.",
      icon: "thermometer",
    },
    {
      title: "Age and Reproductive History",
      description:
        "Common in women aged 30-40, especially those who have not had children.",
      icon: "arrow-up",
    },
    {
      title: "Obesity",
      description: "Higher body weight linked to increased risk.",
      icon: "alert-circle",
    },
  ],
  symptoms: [
    {
      title: "Heavy Menstrual Bleeding",
      description: "Excessive bleeding during periods.",
      icon: "thermometer",
    },
    {
      title: "Pelvic Pain or Pressure",
      description: "Discomfort or fullness in the lower abdomen.",
      icon: "arrow-up",
    },
    {
      title: "Frequent Urination",
      description: "Pressure on the bladder causing urgency.",
      icon: "pill",
    },
    {
      title: "Pain During Intercourse",
      description: "Discomfort affecting sexual activity.",
      icon: "syringe",
    },
    {
      title: "Enlarged Abdomen",
      description: "Fibroids causing noticeable swelling.",
      icon: "alert-circle",
    },
  ],
  riskFactors: [
    {
      title: "Age between 30-40 years",
      description: "Peak incidence of fibroids.",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Increased risk if close relatives have fibroids.",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Increased estrogen levels from fat tissue.",
      icon: "thermometer",
    },
    {
      title: "African Descent",
      description: "Higher prevalence and severity among African women.",
      icon: "arrow-up",
    },
  ],
  complications: [
    {
      title: "Bleeding",
      description: "Risk of heavy bleeding during or after surgery.",
      icon: "alert-circle",
    },
    {
      title: "Infection",
      description: "Postoperative wound or pelvic infection.",
      icon: "pill",
    },
    {
      title: "Scar Tissue Formation",
      description: "May affect future fertility or cause pain.",
      icon: "thermometer",
    },
    {
      title: "Recurrence of Fibroids",
      description: "Fibroids can regrow, sometimes requiring repeat surgery.",
      icon: "clock",
    },
    {
      title: "Damage to Surrounding Organs",
      description: "Rare injury to bladder or bowel during surgery.",
      icon: "arrow-up",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves pelvic ultrasound, MRI, and sometimes hysteroscopy or biopsy.",
    methods: [
      "Pelvic Examination",
      "Ultrasound Imaging",
      "MRI Scan",
      "Hysteroscopy",
      "Blood Tests",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Medication",
        description:
          "Hormonal treatments or pain management to control symptoms before surgery.",
      },
      {
        name: "Uterine Artery Embolization",
        description:
          "Minimally invasive procedure to shrink fibroids by blocking blood flow.",
      },
    ],
    surgical: [
      {
        name: "Abdominal Myomectomy",
        description:
          "Open surgery through an abdominal incision to remove fibroids.",
        recoveryTime: "4-6 weeks",
        anesthesia: "General",
        benefits: [
          "Allows removal of large fibroids",
          "Good for multiple or deep fibroids",
          "Provides direct access to uterus",
        ],
      },
      {
        name: "Laparoscopic Myomectomy",
        description:
          "Minimally invasive removal of fibroids through small abdominal incisions.",
        recoveryTime: "2-4 weeks",
        anesthesia: "General",
        benefits: [
          "Less pain and scarring",
          "Faster recovery time",
          "Shorter hospital stay",
        ],
      },
      {
        name: "Hysteroscopic Myomectomy",
        description:
          "Removal of fibroids via the vagina and cervix using a hysteroscope for submucosal fibroids.",
        recoveryTime: "1-2 weeks",
        anesthesia: "General or local",
        benefits: [
          "No external incisions",
          "Quick recovery",
          "Effective for submucosal fibroids",
        ],
      },
    ],
  },
  types: [
    {
      type: "Abdominal Myomectomy",
      description: "Open surgery for large or multiple fibroids.",
      procedure:
        "Performed through a lower abdominal incision under general anesthesia.",
    },
    {
      type: "Laparoscopic Myomectomy",
      description:
        "Minimally invasive surgery using small incisions and a camera.",
      procedure:
        "Performed with laparoscopic instruments under general anesthesia.",
    },
    {
      type: "Hysteroscopic Myomectomy",
      description:
        "Removal of fibroids inside the uterus via the vagina and cervix.",
      procedure: "Uses a hysteroscope; no abdominal incisions needed.",
    },
  ],
  whyChooseUs: [
    {
      title: "Skilled Minimally Invasive Surgeons",
      description:
        "Expertise in laparoscopic and hysteroscopic myomectomy techniques.",
    },
    {
      title: "Preservation of Fertility",
      description:
        "Focus on uterine preservation for women planning future pregnancies.",
    },
    {
      title: "Comprehensive Care",
      description:
        "From diagnosis to postoperative rehabilitation, personalized care plans.",
    },
    {
      title: "Advanced Technology",
      description:
        "State-of-the-art surgical equipment ensuring safety and quick recovery.",
    },
  ],
};
