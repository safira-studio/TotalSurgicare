import { MedicalCondition } from "@/types";

export const gynecomastia: MedicalCondition = {
  id: "21",
  slug: "gynecomastia-symptoms-causes-treatment",
  name: "Gynecomastia",
  overview: {
    title: "Gynecomastia - Symptoms, Causes & Treatment",
    brief:
      "Gynecomastia is the enlargement of breast tissue in males. Learn about its symptoms, causes, diagnosis, and treatment options.",
    alternateNames: [
      { language: "Hindi", name: "पुरुष स्तन वृद्धि" },
      { language: "Marathi", name: "पुरुष स्तन वाढ" },
    ],
  },
  aboutCondition: {
    title: "What is Gynecomastia?",
    description:
      "Gynecomastia is a condition characterized by the enlargement of breast tissue in males, often due to an imbalance of estrogen and testosterone. It can affect one or both breasts and may occur at any age, often causing psychological or physical discomfort.",
  },
  foodTriggers: [
    {
      name: "Alcohol",
      description:
        "Excessive alcohol consumption may disrupt hormone balance, potentially worsening gynecomastia.",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Soy Products",
      description:
        "High intake of soy, containing phytoestrogens, may influence estrogen levels in some cases.",
      bgColor: "bg-orange-100",
    },
    {
      name: "Processed Foods",
      description:
        "Foods high in sugars or unhealthy fats may contribute to obesity, exacerbating gynecomastia.",
      bgColor: "bg-red-100",
    },
  ],
  causes: [
    {
      title: "Hormonal Imbalance",
      description: "Increased estrogen or decreased testosterone levels.",
      icon: "thermometer",
    },
    {
      title: "Medications",
      description:
        "Certain drugs like anti-androgens, steroids, or antidepressants.",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Excess fat tissue can increase estrogen production.",
      icon: "weight",
    },
    {
      title: "Medical Conditions",
      description:
        "Liver disease, kidney failure, or hyperthyroidism can contribute.",
      icon: "alert-circle",
    },
  ],
  symptoms: [
    {
      title: "Enlarged Breast Tissue",
      description: "Swelling or increased breast gland tissue in males.",
      icon: "clock",
    },
    {
      title: "Tenderness",
      description: "Pain or sensitivity in the breast area.",
      icon: "alert-circle",
    },
    {
      title: "Nipple Changes",
      description: "Nipple sensitivity or discharge in rare cases.",
      icon: "arrow-up",
    },
  ],
  riskFactors: [
    {
      title: "Age",
      description:
        "Common during puberty, middle age, or older age due to hormonal changes.",
      icon: "thermometer",
    },
    {
      title: "Obesity",
      description: "Excess body fat can increase estrogen levels.",
      icon: "weight",
    },
    {
      title: "Substance Use",
      description: "Use of alcohol, marijuana, or anabolic steroids.",
      icon: "cigarette",
    },
    {
      title: "Family History",
      description: "Genetic predisposition to hormonal imbalances.",
      icon: "pill",
    },
  ],
  complications: [
    {
      title: "Psychological Distress",
      description:
        "Embarrassment or reduced self-esteem due to breast enlargement.",
      icon: "frown",
    },
    {
      title: "Chronic Pain",
      description: "Persistent discomfort or tenderness in the breast tissue.",
      icon: "alert-circle",
    },
    {
      title: "Underlying Conditions",
      description:
        "Untreated medical conditions causing gynecomastia may worsen.",
      icon: "pill",
    },
  ],
  diagnosis: {
    description:
      "Involves a physical exam, medical history review, blood tests to check hormone levels, and imaging (ultrasound or mammogram) to rule out other conditions like breast cancer.",
    methods: [
      "Physical Examination",
      "Blood Tests",
      "Mammography",
      "Ultrasound Imaging",
      "Biopsy (if needed)",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Observation",
        description:
          "Monitoring for spontaneous resolution, especially in adolescents.",
      },
      {
        name: "Medications",
        description:
          "Hormone therapy or medications to address underlying causes.",
      },
      {
        name: "Lifestyle Changes",
        description:
          "Weight loss or cessation of substances like alcohol or steroids.",
      },
    ],
    surgical: [
      {
        name: "Liposuction",
        description: "Removal of excess fat tissue from the breast area.",
        recoveryTime: "2-4 weeks",
        anesthesia: "Local or General",
        benefits: [
          "Minimally invasive",
          "Improved chest contour",
          "Quick recovery",
          "Enhanced self-confidence",
        ],
      },
      {
        name: "Mastectomy",
        description: "Surgical removal of excess breast gland tissue.",
        recoveryTime: "4-6 weeks",
        anesthesia: "General",
        benefits: [
          "Permanent removal of glandular tissue",
          "Improved aesthetic appearance",
          "Relief from discomfort",
        ],
      },
    ],
  },
  types: [
    {
      type: "Physiologic Gynecomastia",
      description:
        "Temporary enlargement due to hormonal changes during puberty or aging.",
      procedure:
        "Often resolves without treatment; monitoring or lifestyle changes.",
    },
    {
      type: "Pathologic Gynecomastia",
      description:
        "Caused by underlying medical conditions, medications, or substance use.",
      procedure:
        "Treatment of underlying cause or surgical intervention if persistent.",
    },
    {
      type: "Pseudogynecomastia",
      description:
        "Breast enlargement due to excess fat rather than glandular tissue.",
      procedure: "Liposuction or weight loss to reduce fat tissue.",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Surgeons",
      description:
        "Board-certified specialists in male breast reduction surgery.",
    },
    {
      title: "Advanced Diagnostics",
      description:
        "Precise hormone testing and imaging for accurate diagnosis.",
    },
    {
      title: "Personalized Treatment",
      description:
        "Tailored plans addressing the specific cause and patient needs.",
    },
    {
      title: "Comprehensive Support",
      description: "Psychological and follow-up care for optimal recovery.",
    },
  ],
};
