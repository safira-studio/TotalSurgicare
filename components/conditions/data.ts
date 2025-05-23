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
  fistula: {
    main: {
      title: "Fistula Treatment - Advanced Laser Surgery & Expert Care",
      description:
        "Anal fistulas are abnormal tunnels connecting the anal canal to the skin. At Total MediCare, we specialize in treating all types of anal fistulas using modern, minimally invasive laser surgery and expert surgical care. Experience quick relief, reduced recurrence, and same-day discharge with our proven techniques and experienced proctologists.",
    },

    treatmentStages: [
      {
        id: "01",
        title: "Minimally Invasive Fistula Laser Surgery",
        description:
          "Total MediCare offers cutting-edge laser surgery for fistula treatment, eliminating the need for conventional open surgery. This advanced laser procedure is precise, less painful, and promotes faster recovery with minimal scarring. Most patients are discharged the same day.",
      },
      {
        id: "02",
        title: "Consult Top Fistula Surgeons – Book FREE Appointment",
        description:
          "Get expert advice from proctologists with over 8–15 years of experience in treating complex fistula cases. We provide personalized consultation, detailed diagnosis, and treatment planning tailored to each patient’s condition.",
      },
      {
        id: "03",
        title: "Faster Healing and Better Outcomes",
        description:
          "Our laser-assisted fistula procedures ensure reduced postoperative complications, faster wound healing, and low recurrence rates. Most patients resume daily activities within 1 week after the procedure.",
      },
      {
        id: "04",
        title: "Complete Insurance Assistance & Cashless Facility",
        description:
          "We handle insurance documentation, pre-approvals, and claim settlements from start to finish. At Total MediCare, our focus is to ensure a smooth experience while you focus on healing.",
      },
    ],

    fistulaTypes: [
      {
        type: "Intersphincteric Fistula",
        description:
          "The most common type of anal fistula. It starts in the anal gland and opens between the internal and external sphincter muscles.",
        procedure:
          "Fistulotomy: The tract is opened, cleaned, and allowed to heal naturally from the inside out.",
      },
      {
        type: "Trans-sphincteric Fistula",
        description:
          "This type of fistula passes through both the internal and external sphincter muscles, making it more complex.",
        procedure:
          "Seton Placement: A surgical thread is used to drain infection and prepare the tract for future closure.",
      },
      {
        type: "Suprasphincteric Fistula",
        description:
          "This rare type of fistula goes above the sphincter muscles and may involve deeper tissues.",
        procedure:
          "LIFT Surgery: Ligation of the Intersphincteric Fistula Tract helps in closing the tract without affecting sphincter control.",
      },
      {
        type: "Extrasphincteric Fistula",
        description:
          "A rare and complicated fistula that originates from the rectum or pelvic area and extends to the skin.",
        procedure:
          "Endorectal Advancement Flap: The internal opening is closed using a tissue flap to prevent recurrence.",
      },
      {
        type: "Submucosal Fistula",
        description:
          "Located beneath the mucosal lining of the rectum, this type of fistula does not affect the sphincter muscles.",
        procedure:
          "Laser Fistula Surgery: High-precision laser is used to seal the tract with minimal tissue damage and fast healing.",
      },
      {
        type: "Complex or Recurrent Fistula",
        description:
          "Includes multiple tracts, often associated with conditions like Crohn’s disease or previous failed surgeries.",
        procedure:
          "Staged Surgery: May involve multiple procedures using a multidisciplinary approach to achieve permanent healing.",
      },
    ],

    diagnosticMethods: [
      "Detailed physical examination and medical history",
      "Digital rectal examination to locate internal openings",
      "Proctoscopy or Anoscopy to assess internal tracts",
      "MRI Fistulography or Endoanal Ultrasound for complex cases",
    ],

    procedureSteps: [
      "Initial consultation and diagnosis by fistula specialist",
      "Preoperative preparation and anesthesia",
      "Laser or surgical closure of the fistula tract",
      "Post-surgical observation and dressing",
      "Discharge with diet, hygiene, and follow-up care instructions",
    ],

    causesOfFistula: [
      {
        title: "Anal Abscess",
        description:
          "Untreated or recurring anal abscesses can form fistulas when the infection creates a tunnel to the skin.",
        icon: "alert-octagon",
      },
      {
        title: "Inflammatory Bowel Diseases (IBD)",
        description:
          "Conditions like Crohn’s disease or ulcerative colitis can contribute to fistula formation due to chronic inflammation.",
        icon: "activity",
      },
      {
        title: "Infections (Tuberculosis, STDs)",
        description:
          "Certain bacterial or sexually transmitted infections may lead to fistula development.",
        icon: "biohazard",
      },
      {
        title: "Radiation Therapy",
        description:
          "Patients who have undergone radiation in the pelvic area may develop rectal or anal fistulas as a side effect.",
        icon: "radiation",
      },
      {
        title: "Surgical Complications",
        description:
          "Post-surgical infections near the rectum or anus can result in a fistula.",
        icon: "scissors",
      },
    ],

    triggerFoods: [
      {
        name: "Spicy Foods",
        description: "Can irritate the digestive tract and worsen inflammation",
        bgColor: "bg-orange-100",
      },
      {
        name: "Red Meat",
        description:
          "High-fat foods can slow digestion and aggravate bowel conditions",
        bgColor: "bg-rose-100",
      },
      {
        name: "Caffeinated Drinks",
        description: "May cause dehydration and worsen bowel movement issues",
        bgColor: "bg-yellow-100",
      },
      {
        name: "Processed & Fried Foods",
        description: "Low fiber and high fat content can slow healing",
        bgColor: "bg-red-100",
      },
      {
        name: "Dairy Products",
        description: "May cause constipation in sensitive individuals",
        bgColor: "bg-blue-100",
      },
    ],

    preventiveMeasures: [
      {
        title: "Maintain Anal Hygiene",
        description:
          "Keep the anal area clean and dry to avoid infections that may lead to fistulas.",
      },
      {
        title: "Manage Digestive Health",
        description:
          "Treat anal abscesses early and maintain healthy gut function to prevent fistula formation.",
      },
      {
        title: "High-Fiber Diet",
        description:
          "Consume fiber-rich foods to ensure smooth bowel movements and avoid strain.",
      },
      {
        title: "Stay Hydrated",
        description:
          "Drink plenty of water daily to maintain soft stool consistency and reduce infection risk.",
      },
      {
        title: "Timely Medical Attention",
        description:
          "Don’t ignore symptoms like pus discharge, pain near the anus, or swelling. Early detection helps prevent complications.",
      },
    ],

    surgeryTypes: [
      "Laser Fistula Surgery: Modern, non-invasive, faster healing, minimal bleeding",
      "Fistulotomy: Surgical opening and cleaning of the fistula tract",
      "Seton Placement: Thread used to drain and treat complex fistulas",
      "LIFT Procedure: Sphincter-preserving technique for complex tracts",
      "Endorectal Flap Surgery: Internal closure for high or extrasphincteric fistulas",
    ],
  },
};
