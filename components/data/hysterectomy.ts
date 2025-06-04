import { MedicalCondition } from "@/types";

export const hysterectomy: MedicalCondition = {
  id: "14",
  slug: "hysterectomy-procedure-treatment",
  name: "Hysterectomy",
  overview: {
    title: "Hysterectomy - Procedure, Types & Recovery",
    brief:
      "Hysterectomy is a surgical procedure to remove the uterus, often used to treat various gynecological conditions. Learn about types, reasons, and recovery.",
    alternateNames: [
      { language: "Hindi", name: "गर्भाशय निष्कासन" },
      { language: "Marathi", name: "गर्भाशय काढण्याची शस्त्रक्रिया" }, // Hysterectomy
    ],
  },
  aboutCondition: {
    title: "What is a Hysterectomy?",
    description:
      "A hysterectomy is a surgical operation to remove the uterus partially or completely. It is performed for several medical reasons including fibroids, heavy bleeding, uterine prolapse, or cancer.",
  },
  // foodTriggers: [
  //   {
  //     name: "Heavy or Spicy Foods",
  //     description: "Can increase inflammation and slow recovery after surgery.",
  //     bgColor: "bg-orange-100",
  //   },
  //   {
  //     name: "Caffeine",
  //     description: "May increase discomfort or dehydration post-surgery.",
  //     bgColor: "bg-green-100",
  //   },
  //   {
  //     name: "Alcohol",
  //     description: "Impairs healing and may interact with medications.",
  //     bgColor: "bg-amber-100",
  //   },
  // ],
  causes: [
    {
      title: "Uterine Fibroids",
      description: "Noncancerous growths causing pain or heavy bleeding.",
      icon: "pill",
    },
    {
      title: "Endometriosis",
      description:
        "Tissue similar to uterine lining grows outside the uterus causing pain.",
      icon: "thermometer",
    },
    {
      title: "Uterine Prolapse",
      description:
        "Uterus descends into the vaginal canal due to weakened muscles.",
      icon: "arrow-up",
    },
    {
      title: "Cancer",
      description:
        "Cancer of the uterus, cervix, or ovaries may require hysterectomy.",
      icon: "alert-circle",
    },
    {
      title: "Chronic Pelvic Pain or Bleeding",
      description:
        "When other treatments fail, hysterectomy may be recommended.",
      icon: "clock",
    },
  ],
  // symptoms: [
  //   {
  //     title: "Heavy or Prolonged Menstrual Bleeding",
  //     description: "Excessive bleeding interfering with daily life.",
  //     icon: "thermometer",
  //   },
  //   {
  //     title: "Pelvic Pain or Pressure",
  //     description: "Discomfort or fullness in the pelvic area.",
  //     icon: "arrow-up",
  //   },
  //   {
  //     title: "Frequent Urination",
  //     description: "Pressure on the bladder causing urgency.",
  //     icon: "pill",
  //   },
  //   {
  //     title: "Pain During Intercourse",
  //     description: "Discomfort affecting sexual activity.",
  //     icon: "syringe",
  //   },
  //   {
  //     title: "Uterine Prolapse Symptoms",
  //     description: "Feeling of something falling out of the vagina.",
  //     icon: "alert-circle",
  //   },
  // ],
  // riskFactors: [
  //   {
  //     title: "Age Over 35",
  //     description: "Most common in women aged 35 to 50.",
  //     icon: "clock",
  //   },
  //   {
  //     title: "History of Uterine Fibroids",
  //     description: "Fibroids increase risk for hysterectomy.",
  //     icon: "pill",
  //   },
  //   {
  //     title: "Endometriosis or Pelvic Infections",
  //     description: "Chronic conditions leading to surgery.",
  //     icon: "thermometer",
  //   },
  //   {
  //     title: "Previous Pelvic Surgery",
  //     description: "Scar tissue or complications may contribute.",
  //     icon: "arrow-up",
  //   },
  // ],
  // complications: [
  //   {
  //     title: "Infection",
  //     description: "Risk of wound or pelvic infection post-surgery.",
  //     icon: "alert-circle",
  //   },
  //   {
  //     title: "Bleeding",
  //     description: "Excessive bleeding during or after the procedure.",
  //     icon: "pill",
  //   },
  //   {
  //     title: "Damage to Nearby Organs",
  //     description:
  //       "Possible injury to bladder, bowel, or blood vessels during surgery.",
  //     icon: "thermometer",
  //   },
  //   {
  //     title: "Early Menopause",
  //     description:
  //       "If ovaries are removed, estrogen levels drop leading to menopause symptoms.",
  //     icon: "clock",
  //   },
  //   {
  //     title: "Blood Clots",
  //     description:
  //       "Risk of deep vein thrombosis or pulmonary embolism after surgery.",
  //     icon: "arrow-up",
  //   },
  // ],
  diagnosis: {
    description:
      "Diagnosis involves pelvic examination, ultrasound, MRI, blood tests, and biopsy if cancer is suspected.",
    methods: [
      "Pelvic Exam",
      "Ultrasound Imaging",
      "MRI Scan",
      "Blood Tests",
      "Endometrial Biopsy",
      "Hysteroscopy",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Medication",
        description:
          "Hormonal treatments or pain relievers to manage symptoms before surgery.",
      },
      {
        name: "Lifestyle Modifications",
        description:
          "Diet, exercise, and symptom tracking to delay surgery if possible.",
      },
    ],
    surgical: [
      {
        name: "Total Hysterectomy",
        description: "Removal of the entire uterus including the cervix.",
        benefits: [
          "Complete relief from uterine conditions",
          "Prevents uterine cancer",
        ],
        recoveryTime: "6-8 weeks",
        anesthesia: "General or spinal",
      },
      {
        name: "Subtotal (Partial) Hysterectomy",
        description:
          "Removal of the upper part of the uterus, leaving the cervix intact.",
        benefits: ["Shorter recovery time", "Preserves cervical support"],
        recoveryTime: "4-6 weeks",
        anesthesia: "General or spinal",
      },
      {
        name: "Radical Hysterectomy",
        description:
          "Removal of uterus, surrounding tissues, cervix, and upper vagina, mainly for cancer treatment.",
        benefits: ["Extensive removal for cancer control"],
        recoveryTime: "8-12 weeks",
        anesthesia: "General",
      },
      {
        name: "Approaches",
        description:
          "Hysterectomy can be performed via abdominal incision, vaginally, or laparoscopically (minimally invasive).",
        benefits: ["abcdef"],
        recoveryTime: "8-12 weeks",
        anesthesia: "General",
      },
    ],
  },
  types: [
    {
      type: "Total Hysterectomy",
      description: "Complete removal of uterus and cervix.",
      procedure:
        "Performed abdominally, vaginally, or laparoscopically depending on the case.",
    },
    {
      type: "Subtotal (Partial) Hysterectomy",
      description: "Removal of the uterus body, cervix remains.",
      procedure:
        "Often done laparoscopically or abdominally, shorter recovery.",
    },
    {
      type: "Radical Hysterectomy",
      description:
        "Complete removal including uterus, cervix, and surrounding tissues for cancer cases.",
      procedure: "Performed abdominally with possible lymph node removal.",
    },
  ],
  whyChooseUs: [
    {
      title: "Experienced Gynecologic Surgeons",
      description:
        "Our surgeons specialize in minimally invasive and complex hysterectomy procedures.",
    },
    {
      title: "Comprehensive Preoperative Care",
      description:
        "Detailed evaluation and counseling to prepare you for surgery and recovery.",
    },
    {
      title: "Advanced Surgical Technology",
      description:
        "Use of laparoscopic and robotic-assisted surgery for better outcomes and faster healing.",
    },
    {
      title: "Personalized Postoperative Support",
      description:
        "We provide ongoing care and rehabilitation to ensure optimal recovery.",
    },
  ],
};
