import { MedicalCondition } from "@/types";

export const breastAugmentation: MedicalCondition = {
  id: "20",
  slug: "breast-augmentation-procedure-risks-recovery",
  name: "Breast Augmentation",
  overview: {
    title: "Breast Augmentation - Procedure, Risks & Recovery",
    brief:
      "Breast augmentation is a surgical procedure to enhance breast size and shape using implants or fat transfer. Learn about its procedure, risks, recovery, and outcomes.",
    alternateNames: [
      { language: "Hindi", name: "स्तन वृद्धि" },
      { language: "Marathi", name: "स्तन वाढ" },
    ],
  },
  aboutCondition: {
    title: "What is Breast Augmentation?",
    description:
      "Breast augmentation, also known as augmentation mammoplasty, is a cosmetic surgical procedure to increase breast size or improve breast shape. It typically involves the placement of implants (silicone or saline) or, in some cases, fat transfer from other parts of the body.",
  },
  foodTriggers: [],
  causes: [
    {
      title: "Cosmetic Desire",
      description: "To enhance breast size or symmetry for aesthetic reasons.",
      icon: "heart",
    },
    {
      title: "Reconstruction",
      description: "To restore breast volume after mastectomy or injury.",
      icon: "bandage",
    },
    {
      title: "Congenital Conditions",
      description: "To correct underdeveloped breasts or asymmetry.",
      icon: "user",
    },
  ],
  // symptoms: [
  //   {
  //     title: "Post-Surgical Swelling",
  //     description: "Temporary swelling and bruising after the procedure.",
  //     icon: "alert-circle",
  //   },
  //   {
  //     title: "Discomfort or Pain",
  //     description: "Mild to moderate pain in the breast area post-surgery.",
  //     icon: "thermometer",
  //   },
  //   {
  //     title: "Temporary Numbness",
  //     description: "Changes in nipple or breast sensation, usually temporary.",
  //     icon: "clock",
  //   },
  // ],
  // riskFactors: [
  //   {
  //     title: "Surgical Complications",
  //     description:
  //       "Risk of infection, bleeding, or adverse reaction to anesthesia.",
  //     icon: "alert-circle",
  //   },
  //   {
  //     title: "Implant Issues",
  //     description:
  //       "Potential for implant rupture, leakage, or capsular contracture.",
  //     icon: "pill",
  //   },
  //   {
  //     title: "Lifestyle Factors",
  //     description:
  //       "Smoking or certain medications may increase surgical risks.",
  //     icon: "cigarette",
  //   },
  // ],
  // complications: [
  //   {
  //     title: "Capsular Contracture",
  //     description:
  //       "Scar tissue tightening around the implant, causing discomfort.",
  //     icon: "alert-circle",
  //   },
  //   {
  //     title: "Implant Rupture",
  //     description: "Leakage or rupture of saline or silicone implants.",
  //     icon: "pill",
  //   },
  //   {
  //     title: "Aesthetic Dissatisfaction",
  //     description: "Potential for asymmetry or dissatisfaction with results.",
  //     icon: "frown",
  //   },
  // ],
  diagnosis: {
    description:
      "Involves a consultation with a plastic surgeon, physical examination, and imaging (e.g., mammogram or MRI) to assess breast tissue and plan the procedure.",
    methods: [
      "Physical Examination",
      "Mammography",
      "MRI or Ultrasound",
      "Patient Health History Review",
    ],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Fat Transfer",
        description:
          "Using liposuction to transfer fat to the breasts for augmentation.",
      },
      {
        name: "Consultation and Planning",
        description:
          "Pre-surgical assessments to determine implant type and placement.",
      },
    ],
    surgical: [
      {
        name: "Implant-Based Augmentation",
        description:
          "Insertion of saline or silicone implants to enhance breast size.",
        recoveryTime: "4-6 weeks",
        anesthesia: "General",
        benefits: [
          "Customizable size and shape",
          "Long-lasting results",
          "Improved symmetry and volume",
          "Enhanced self-confidence",
        ],
      },
      {
        name: "Fat Transfer Augmentation",
        description: "Using patient’s own fat to enhance breast volume.",
        recoveryTime: "2-4 weeks",
        anesthesia: "General or Local",
        benefits: [
          "Natural look and feel",
          "No foreign implants",
          "Dual benefit of body contouring",
        ],
      },
    ],
  },
  types: [
    {
      type: "Saline Implants",
      description: "Filled with sterile saltwater, adjustable during surgery.",
      procedure:
        "Implants are placed under breast tissue or chest muscle via incision.",
    },
    {
      type: "Silicone Implants",
      description: "Filled with silicone gel, offering a more natural feel.",
      procedure:
        "Implants are inserted through incisions and monitored post-surgery.",
    },
    {
      type: "Fat Transfer",
      description:
        "Uses liposuction to transfer fat to the breasts for natural augmentation.",
      procedure:
        "Fat is harvested, processed, and injected into the breast tissue.",
    },
  ],
  whyChooseUs: [
    {
      title: "Board-Certified Surgeons",
      description:
        "Experienced plastic surgeons specializing in breast augmentation.",
    },
    {
      title: "Advanced Technology",
      description:
        "Use of cutting-edge implant materials and surgical techniques.",
    },
    {
      title: "Personalized Care",
      description: "Customized treatment plans tailored to patient goals.",
    },
    {
      title: "Comprehensive Aftercare",
      description:
        "Support and follow-up to ensure optimal recovery and results.",
    },
  ],
};
