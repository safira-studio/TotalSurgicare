import { MedicalCondition } from "@/types";

export const varicoseVeins: MedicalCondition = {
  id: "20",
  slug: "varicose-veins-symptoms-causes-treatment",
  overview: {
    title: "Varicose Veins - Symptoms, Causes & Treatment",
    brief:
      "Varicose veins are swollen, twisted veins visible under the skin, commonly in the legs. Learn about symptoms, causes, diagnosis, and treatment options.",
    alternateNames: [
      { language: "Hindi", name: "वरिकोस नसें" },
      { language: "Tamil", name: "சுருங்கிய இரத்தக் குழாய்கள்" },
    ],
  },
  aboutCondition: {
    title: "What are Varicose Veins?",
    description:
      "Varicose veins are enlarged, twisted veins caused by weakened valves and veins in the legs, leading to blood pooling and vein enlargement.",
  },
  foodTriggers: [
    {
      name: "High-Sodium Foods",
      description: "Can cause water retention, worsening vein swelling.",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Processed Foods",
      description: "May contribute to poor circulation and inflammation.",
      bgColor: "bg-orange-100",
    },
  ],
  causes: [
    {
      title: "Valve Dysfunction",
      description:
        "Faulty valves in veins cause blood to flow backward and pool.",
      icon: "thermometer",
    },
    {
      title: "Prolonged Standing or Sitting",
      description: "Increases pressure in leg veins.",
      icon: "alert-circle",
    },
    {
      title: "Pregnancy",
      description: "Hormonal changes and increased blood volume strain veins.",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Extra weight puts pressure on leg veins.",
      icon: "alert-circle",
    },
  ],
  symptoms: [
    {
      title: "Visible Twisted Veins",
      description: "Bulging, blue or purple veins visible under the skin.",
      icon: "clock",
    },
    {
      title: "Leg Pain or Heaviness",
      description:
        "Discomfort, aching, or heaviness especially after standing.",
      icon: "alert-circle",
    },
    {
      title: "Swelling",
      description: "Swelling in lower legs and ankles.",
      icon: "arrow-up",
    },
    {
      title: "Skin Changes",
      description:
        "Itching, discoloration, or ulcers near the ankles in severe cases.",
      icon: "arrow-up",
    },
  ],
  riskFactors: [
    {
      title: "Age",
      description: "Risk increases with age as veins lose elasticity.",
      icon: "thermometer",
    },
    {
      title: "Gender",
      description: "More common in women due to hormonal factors.",
      icon: "pill",
    },
    {
      title: "Family History",
      description: "Genetics may predispose to weak vein valves.",
      icon: "clock",
    },
    {
      title: "Occupation",
      description: "Jobs requiring long standing or sitting increase risk.",
      icon: "alert-circle",
    },
  ],
  complications: [
    {
      title: "Venous Ulcers",
      description: "Open sores from long-term vein damage.",
      icon: "alert-circle",
    },
    {
      title: "Blood Clots",
      description: "Risk of deep vein thrombosis (DVT).",
      icon: "pill",
    },
    {
      title: "Bleeding",
      description: "Veins close to skin surface may bleed after injury.",
      icon: "arrow-up",
    },
  ],
  diagnosis: {
    description:
      "Diagnosis involves physical exam, ultrasound imaging to assess blood flow and valve function.",
    methods: [
      "Physical Examination",
      "Doppler Ultrasound",
      "Duplex Ultrasound",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Compression Stockings",
        description: "Helps improve blood flow and reduce swelling.",
      },
      {
        name: "Lifestyle Changes",
        description: "Exercise, weight loss, avoiding prolonged standing.",
      },
      {
        name: "Medications",
        description: "Pain relief and anti-inflammatory drugs if needed.",
      },
    ],
    surgical: [
      {
        name: "Vein Stripping",
        description: "Surgical removal of affected veins.",
        recoveryTime: "2-4 weeks",
        anesthesia: "General or Local",
        benefits: [
          "Permanent removal of damaged veins",
          "Relieves pain and swelling",
          "Improves leg appearance",
          "Prevents complications like ulcers",
        ],
      },
      {
        name: "Endovenous Laser Therapy (EVLT)",
        description:
          "Minimally invasive laser treatment to close varicose veins.",
        recoveryTime: "Few days",
        anesthesia: "Local",
        benefits: [
          "Less pain and faster recovery",
          "Outpatient procedure",
          "Effective vein closure",
          "Minimal scarring",
        ],
      },
      {
        name: "Sclerotherapy",
        description:
          "Injection of solution to scar and close smaller varicose veins.",
        recoveryTime: "Few days",
        anesthesia: "None",
        benefits: [
          "Non-surgical",
          "Quick procedure",
          "Improves cosmetic appearance",
          "Reduces symptoms",
        ],
      },
    ],
  },
  types: [
    {
      type: "Primary Varicose Veins",
      description: "Caused by faulty vein valves, most common type.",
      procedure: "Managed by compression therapy or vein removal techniques.",
    },
    {
      type: "Secondary Varicose Veins",
      description: "Due to other vein problems like deep vein thrombosis.",
      procedure:
        "Requires treatment of underlying cause plus varicose vein management.",
    },
  ],
  whyChooseUs: [
    {
      title: "Experienced Vascular Surgeons",
      description: "Specialized care in vein disorders.",
    },
    {
      title: "Advanced Imaging",
      description: "Accurate diagnosis with Doppler and Duplex ultrasound.",
    },
    {
      title: "Minimally Invasive Procedures",
      description: "Use of laser and sclerotherapy for quick recovery.",
    },
    {
      title: "Comprehensive Patient Care",
      description: "Personalized treatment plans and follow-ups.",
    },
  ],
};
