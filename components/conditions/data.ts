import { title } from "process";

// All application data organized under one object
export const medicalData = {
  piles: {
    main: {
      title: "Piles Treatment - Laser Surgery Procedure",
      description:
        "Piles, or hemorrhoids, are swollen veins in the anal canal and rectum. Our expert team provides minimally invasive solutions using the latest technology. At Total MediCare, we offer advanced laser treatment for hemorrhoids, ensuring minimal discomfort and quick recovery.",
    },
    treatmentStages: [
      {
        id: "01",
        title: "Advanced Treatment Through Laser Surgery",
        description:
          "At Total MediCare, you can avoid conventional piles treatment surgery and opt to treat it within 15 minutes through our quick and laser treatment, which is painless and effective. After the procedure, you can go home on the same day.",
      },
      {
        id: "02",
        title: "FREE Appointment with Experienced Proctologist",
        description:
          "At Total MediCare, we have expert proctologists with 8-15 years of experience who provide personalized piles treatment surgery and properly guide you through the pre and post-surgery process.",
      },
      {
        id: "03",
        title: "Quick Recovery With Effective Results",
        description:
          "Total MediCare treatment delivers effective results in less than a day after surgery. Our patients can forget about piles completely and live their normal day-to-day routine in just 1 week or less.",
      },
      {
        id: "04",
        title: "End-to-End Process Assistance",
        description:
          "Total MediCare provides best-in-class insurance handling for all patients. We handle everything right from the paperwork to claim settlement with insurers so that you focus completely on the recovery process.",
      },
    ],

    fistulaTypes: [
      {
        type: "Intersphincteric Fistula",
        description:
          "Passes through the internal sphincter and exits between internal and external sphincter.",
        procedure:
          "Fistulotomy - A surgical procedure where the fistula tract is opened up, tissue is cleaned, and left to heal.",
      },
      {
        type: "Trans-sphincteric Fistula",
        description:
          "Crosses through both the internal and external anal sphincter muscles.",
        procedure:
          "Seton Procedure - A surgical thread placed through the fistula tract to help drain it before final repair.",
      },
      {
        type: "Suprasphincteric Fistula",
        description:
          "Crosses over the top of the puborectalis muscle then passes between the internal and external sphincter.",
        procedure:
          "LIFT Procedure - Ligation of Intersphincteric Fistula Tract to close connections while preserving sphincter function.",
      },
      {
        type: "Extrasphincteric Fistula",
        description:
          "Originates from the rectum or another pelvic organ and passes through the levator muscles to skin.",
        procedure:
          "Endorectal Flap - Creates a flap to cover the internal opening after cleaning the tract.",
      },
      {
        type: "Submucosal Fistula",
        description:
          "Confined to the submucosal layer of the rectum, does not involve sphincter muscles.",
        procedure:
          "Laser Surgery - Precise laser treatment sealing the tract with minimal tissue damage.",
      },
      {
        type: "Complex Fistula",
        description:
          "Multiple tracts, recurrent, or associated with inflammatory bowel disease.",
        procedure:
          "Combined approaches - Often requires staged procedures and multidisciplinary care.",
      },
    ],

    diagnosticMethods: [
      "Visual examination of the anus and surrounding area",
      "Digital rectal examination to feel for abnormalities",
      "Anoscopy or proctoscopy to view the anal canal",
      "Colonoscopy for other potential digestive issues",
    ],

    procedureSteps: [
      "Patient assessment and preparation",
      "Local anesthesia administration",
      "Laser application to the hemorrhoidal tissue",
      "Post-procedure monitoring",
      "Discharge with aftercare instructions",
    ],

    causesOfPiles: [
      {
        title: "Chronic Constipation",
        description:
          "Straining during bowel movements creates pressure in the rectal veins",
        icon: "alert-circle",
      },
      {
        title: "Pregnancy",
        description:
          "Increased pressure from the growing uterus and hormonal changes",
        icon: "image",
      },
      {
        title: "Aging",
        description:
          "Tissues supporting the veins in the rectum weaken with age",
        icon: "clock",
      },
      {
        title: "Obesity",
        description: "Excess weight increases pressure on the lower rectum",
        icon: "arrow-up",
      },
      {
        title: "Prolonged Sitting",
        description:
          "Especially on the toilet, increases pressure on the veins in the rectum",
        icon: "thermometer",
      },
      {
        title: "Heavy Lifting",
        description:
          "Straining and holding your breath can lead to increased pressure",
        icon: "syringe",
      },
    ],

    triggerFoods: [
      {
        name: "Spicy Foods",
        description: "Can irritate the digestive system and worsen symptoms",
        bgColor: "bg-orange-100",
      },
      {
        name: "Alcohol",
        description: "Contributes to dehydration, worsening piles discomfort",
        bgColor: "bg-amber-100",
      },
      {
        name: "Processed Foods",
        description: "Low in fiber and can cause constipation",
        bgColor: "bg-blue-100",
      },
      {
        name: "Caffeine",
        description: "Acts as a diuretic and can contribute to dehydration",
        bgColor: "bg-green-100",
      },
      {
        name: "Dairy Products",
        description: "Can cause constipation in some individuals",
        bgColor: "bg-yellow-100",
      },
      {
        name: "Fried Foods",
        description: "Difficult to digest and can exacerbate symptoms",
        bgColor: "bg-red-100",
      },
    ],

    preventiveMeasures: [
      {
        title: "High-Fiber Diet",
        description:
          "Include plenty of fruits, vegetables, and whole grains to soften stool and reduce straining.",
      },
      {
        title: "Stay Hydrated",
        description:
          "Drink plenty of water throughout the day to prevent constipation and hardened stools.",
      },
      {
        title: "Regular Exercise",
        description:
          "Physical activity helps stimulate bowel function and reduces pressure on veins.",
      },
      {
        title: "Don't Delay Bowel Movements",
        description:
          "Respond promptly to the urge to have a bowel movement to prevent straining.",
      },
      {
        title: "Limit Toilet Time",
        description:
          "Avoid sitting on the toilet for long periods which increases pressure on rectal veins.",
      },
      {
        title: "Maintain Healthy Weight",
        description:
          "Keeping an appropriate weight reduces pressure on the pelvic floor and lower rectum.",
      },
    ],

    surgeryTypes: [
      "Laser Surgery (Painless): Minimally invasive, quick and almost pain-free recovery",
      "Stapler Hemorrhoidectomy: Circular stapler to remove hemorrhoidal tissue",
      "Rubber Band Ligation: For smaller hemorrhoids, usually grades 1-2",
      "Sclerotherapy: Injection of a chemical solution to shrink hemorrhoids",
    ],
  },
};
