import { MedicalCondition } from "@/types";

export const cataract: MedicalCondition = {
  id: "22",
  slug: "cataract-symptoms-causes-treatment",
  overview: {
    title: "Cataract - Symptoms, Causes & Treatment",
    brief:
      "Cataract is a clouding of the eye's natural lens leading to blurred vision. Learn about its symptoms, causes, and treatment options.",
    alternateNames: [
      { language: "Hindi", name: "धुंधला मोती" },
      { language: "Tamil", name: "முகப்பு பளபளப்பு" },
    ],
  },
  aboutCondition: {
    title: "What is Cataract?",
    description:
      "Cataract is the clouding of the normally clear lens of the eye, resulting in decreased vision and possible blindness if untreated.",
  },
  foodTriggers: [
    {
      name: "High Sugar Foods",
      description:
        "May accelerate cataract development, especially in diabetics.",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Excessive Alcohol",
      description: "Linked to increased risk of cataract formation.",
      bgColor: "bg-orange-100",
    },
  ],
  causes: [
    {
      title: "Aging",
      description: "Natural lens changes with age cause cataracts.",
      icon: "clock",
    },
    {
      title: "Diabetes",
      description: "High blood sugar damages lens proteins.",
      icon: "pill",
    },
    {
      title: "Eye Injury",
      description: "Trauma can cause early cataract formation.",
      icon: "alert-circle",
    },
    {
      title: "Prolonged Sun Exposure",
      description: "UV radiation accelerates lens clouding.",
      icon: "sun",
    },
  ],
  symptoms: [
    {
      title: "Blurred or Cloudy Vision",
      description: "Difficulty seeing clearly.",
      icon: "eye",
    },
    {
      title: "Difficulty Seeing at Night",
      description: "Poor vision in low light conditions.",
      icon: "moon",
    },
    {
      title: "Glare or Halos Around Lights",
      description: "Sensitivity to bright lights.",
      icon: "sun",
    },
    {
      title: "Faded Colors",
      description: "Colors appear less vibrant.",
      icon: "palette",
    },
  ],
  riskFactors: [
    {
      title: "Age Over 60",
      description: "Most common age group for cataracts.",
      icon: "clock",
    },
    {
      title: "Diabetes",
      description: "Increases cataract risk.",
      icon: "pill",
    },
    {
      title: "Smoking",
      description: "Contributes to lens damage.",
      icon: "alert-circle",
    },
    {
      title: "Excessive UV Exposure",
      description: "Risk factor for lens clouding.",
      icon: "sun",
    },
  ],
  complications: [
    {
      title: "Vision Loss",
      description: "If untreated, cataracts can cause blindness.",
      icon: "eye-off",
    },
    {
      title: "Difficulty Performing Daily Tasks",
      description: "Affects quality of life.",
      icon: "alert-circle",
    },
  ],
  diagnosis: {
    description:
      "Eye examination including visual acuity tests, slit-lamp examination, and retinal exam.",
    methods: ["Visual Acuity Test", "Slit-Lamp Examination", "Retinal Exam"],
  },
  treatments: {
    nonSurgical: [
      {
        name: "Eyeglasses or Contact Lenses",
        description: "May improve vision in early cataracts.",
      },
      {
        name: "Lifestyle Changes",
        description: "Reducing glare and wearing sunglasses.",
      },
    ],
    surgical: [
      {
        name: "Cataract Surgery",
        description:
          "Removal of cloudy lens and replacement with artificial intraocular lens (IOL).",
        recoveryTime: "1-2 weeks",
        anesthesia: "Local",
        benefits: [
          "Restores clear vision",
          "Quick recovery",
          "High success rate",
          "Improves quality of life",
        ],
      },
    ],
  },
  types: [
    {
      type: "Nuclear Cataract",
      description: "Forms in the central zone (nucleus) of the lens.",
      procedure: "Typically treated with standard cataract surgery.",
    },
    {
      type: "Cortical Cataract",
      description:
        "Affects the edges (cortex) of the lens with white opacities.",
      procedure: "Surgical removal recommended when vision is affected.",
    },
    {
      type: "Posterior Subcapsular Cataract",
      description: "Forms at the back of the lens and can affect near vision.",
      procedure: "Often removed surgically for symptom relief.",
    },
  ],
  whyChooseUs: [
    {
      title: "Experienced Ophthalmologists",
      description: "Specialists trained in advanced cataract surgery.",
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Modern surgical equipment for safe procedures.",
    },
    {
      title: "Comprehensive Eye Care",
      description: "Pre- and post-operative care for best outcomes.",
    },
    {
      title: "Patient-Centered Approach",
      description: "Customized treatment plans tailored to patient needs.",
    },
  ],
};
