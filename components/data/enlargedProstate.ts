import { MedicalCondition } from "@/types";

export const enlargedProstateSurgery: MedicalCondition = {
  id: "13",
  slug: "enlarged-prostate-treatment",
  name: "Enlarged Prostate (BPH)",
  overview: {
    title: "Enlarged Prostate (BPH) - Symptoms and Treatment Options",
    brief:
      "Enlarged prostate, or benign prostatic hyperplasia (BPH), is a common condition in older men causing urinary difficulties. Our expert treatments help relieve symptoms and improve quality of life.",
    alternateNames: [
      { language: "Hindi", name: "वृद्ध प्रोस्टेट" },
      { language: "Tamil", name: "நெருக்கமான பிறுதிப் பாகம்" },
    ],
  },
  aboutCondition: {
    title: "What is Enlarged Prostate?",
    description:
      "Enlarged prostate, medically known as benign prostatic hyperplasia (BPH), is the non-cancerous enlargement of the prostate gland that affects urinary function. It commonly occurs as men age, causing symptoms like difficulty urinating, frequent urination, and incomplete bladder emptying.",
  },
  foodTriggers: [
    {
      name: "Caffeine",
      description: "Can irritate the bladder and increase urinary urgency",
      bgColor: "bg-green-100",
    },
    {
      name: "Alcohol",
      description: "Acts as a diuretic and worsens urinary symptoms",
      bgColor: "bg-amber-100",
    },
    {
      name: "Spicy Foods",
      description: "May irritate the urinary tract and worsen symptoms",
      bgColor: "bg-orange-100",
    },
    {
      name: "Salty Foods",
      description: "Can cause water retention and bladder irritation",
      bgColor: "bg-red-100",
    },
    {
      name: "Carbonated Drinks",
      description: "May increase bladder irritation and frequency",
      bgColor: "bg-blue-100",
    },
  ],
  causes: [
    {
      title: "Age-Related Hormonal Changes",
      description:
        "Hormonal shifts with aging cause prostate cells to multiply, enlarging the gland.",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Genetics may increase susceptibility to BPH.",
      icon: "pill",
    },
    {
      title: "Lifestyle Factors",
      description:
        "Obesity, lack of exercise, and poor diet can contribute to BPH development.",
      icon: "arrow-up",
    },
    {
      title: "Medical Conditions",
      description:
        "Diabetes and heart disease are linked to increased BPH risk.",
      icon: "thermometer",
    },
  ],
  symptoms: [
    {
      title: "Frequent Urination",
      description: "Especially at night (nocturia)",
      icon: "thermometer",
    },
    {
      title: "Weak Urine Stream",
      description: "Reduced flow and dribbling after urination",
      icon: "arrow-up",
    },
    {
      title: "Difficulty Starting Urination",
      description: "Straining or hesitancy in beginning urine flow",
      icon: "pill",
    },
    {
      title: "Incomplete Bladder Emptying",
      description: "Feeling that the bladder is not fully emptied",
      icon: "clock",
    },
    {
      title: "Urgency to Urinate",
      description: "Sudden strong need to urinate",
      icon: "syringe",
    },
    {
      title: "Urinary Retention",
      description: "Inability to urinate, requiring medical emergency",
      icon: "alert-circle",
    },
  ],
  riskFactors: [
    {
      title: "Age Over 50",
      description: "Risk increases significantly with age",
      icon: "clock",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to BPH",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Higher body weight is linked to BPH development",
      icon: "arrow-up",
    },
    {
      title: "Lack of Physical Activity",
      description: "Sedentary lifestyle increases risk",
      icon: "thermometer",
    },
    {
      title: "Diabetes",
      description: "Increases BPH risk due to hormonal imbalances",
      icon: "syringe",
    },
  ],
  complications: [
    {
      title: "Urinary Tract Infections",
      description: "Incomplete bladder emptying can cause infections",
      icon: "pill",
    },
    {
      title: "Bladder Stones",
      description: "Stagnant urine can lead to stone formation",
      icon: "arrow-up",
    },
    {
      title: "Bladder Damage",
      description: "Increased pressure can weaken bladder muscles",
      icon: "clock",
    },
    {
      title: "Kidney Damage",
      description: "Severe urinary retention can harm kidneys",
      icon: "thermometer",
    },
    {
      title: "Acute Urinary Retention",
      description: "Sudden inability to urinate requiring emergency care",
      icon: "alert-circle",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves physical exam including digital rectal exam (DRE), urine tests, ultrasound, and sometimes uroflowmetry or cystoscopy to assess the urinary tract and prostate size.",
    methods: [
      "Digital Rectal Examination (DRE)",
      "Urinalysis to detect infection or blood",
      "Prostate-Specific Antigen (PSA) blood test",
      "Ultrasound imaging of prostate and bladder",
      "Uroflowmetry to measure urine flow rate",
      "Cystoscopy to visualize the urethra and bladder",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Medications",
        description:
          "Alpha-blockers to relax prostate muscles and 5-alpha-reductase inhibitors to shrink the prostate.",
      },
      {
        name: "Lifestyle Changes",
        description:
          "Reducing fluid intake before bedtime, limiting caffeine and alcohol, and regular exercise.",
      },
      {
        name: "Bladder Training",
        description:
          "Techniques to improve bladder control and reduce urgency.",
      },
    ],
    surgical: [
      {
        name: "Transurethral Resection of the Prostate (TURP)",
        description:
          "A common surgery that removes prostate tissue through the urethra to relieve obstruction.",
        benefits: [
          "Effective symptom relief",
          "Widely performed with good success rates",
          "Improves urine flow",
        ],
        recoveryTime: "2-4 weeks",
        anesthesia: "General or spinal",
      },
      {
        name: "Rezūm Procedure",
        description:
          "A minimally invasive treatment for enlarged prostate (BPH) that uses water vapor (steam) to destroy excess prostate tissue.",
        benefits: [
          "Minimally invasive with no incisions",
          "Preserves sexual function in most patients",
          "Performed as an outpatient procedure",
        ],
        recoveryTime: "2-5 days for normal activities",
        anesthesia: "Local or Light Sedation",
      },

      {
        name: "Laser Therapy",
        description:
          "Minimally invasive laser treatments to remove or shrink prostate tissue.",
        benefits: [
          "Less bleeding and faster recovery",
          "Daycare or short hospital stay",
        ],
        recoveryTime: "1-2 weeks",
        anesthesia: "Local or general",
      },
    ],
  },
  types: [
    {
      type: "Median Lobe Enlargement",
      description:
        "Enlargement of the middle part of the prostate pressing on the bladder neck.",
      procedure:
        "TURP or laser surgery to remove excess tissue and relieve bladder outlet obstruction.",
    },
    {
      type: "Lateral Lobe Enlargement",
      description:
        "Enlargement of the side lobes of the prostate affecting the urethra.",
      procedure:
        "Medications or surgical procedures like TURP based on severity.",
    },
    {
      type: "Peripheral Zone Enlargement",
      description:
        "Rarely causes obstruction but may be detected during exams.",
      procedure:
        "Usually monitored unless symptoms arise; biopsy may be done to rule out cancer.",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Urologists",
      description:
        "Our skilled urologists have years of experience treating BPH with personalized care.",
    },
    {
      title: "Advanced Diagnostic Tools",
      description:
        "We use the latest technology including ultrasound and uroflowmetry for accurate diagnosis.",
    },
    {
      title: "Comprehensive Treatment Options",
      description:
        "From medication to minimally invasive surgeries, we provide tailored treatments for every patient.",
    },
    {
      title: "Patient-Centered Care",
      description:
        "We prioritize comfort, education, and support throughout your treatment journey.",
    },
  ],
};
