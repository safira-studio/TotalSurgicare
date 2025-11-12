import { MedicalCondition } from "@/types";

export const coronaryArteryBypassGraftingCabg: MedicalCondition = {
  id: "26",
  slug: "coronary-artery-bypass-grafting-cabg",
  name: "Coronary Artery Bypass Grafting (CABG)",
  overview: {
    title: "Coronary Artery Bypass Grafting (CABG) - Advanced Heart Surgery",
    brief:
      "Coronary Artery Bypass Grafting (CABG) is a surgical procedure that improves blood flow to the heart by creating new routes around narrowed or blocked coronary arteries. This procedure helps reduce chest pain and lowers the risk of heart attacks.",
    alternateNames: [
      { language: "Hindi", name: "कोरोनरी आर्टरी बाईपास सर्जरी" },
      { language: "Marathi", name: "कोरोनरी आर्टरी बायपास शस्त्रक्रिया" },
    ],
  },
  aboutCondition: {
    title: "What is Coronary Artery Bypass Grafting (CABG)?",
    description:
      "Coronary Artery Bypass Grafting (CABG) is a major surgical procedure used to treat coronary heart disease. During CABG surgery, a healthy blood vessel (graft) taken from the leg, arm, or chest is used to create a new pathway for blood to flow around a blocked coronary artery. This restores adequate blood flow to the heart muscle, improving heart function and reducing symptoms of coronary artery disease. CABG is one of the most common and effective treatments for severe coronary artery disease.",
  },
  foodTriggers: [
    {
      name: "Saturated Fats",
      description: "Can increase cholesterol levels and worsen arterial blockage",
      bgColor: "bg-red-100",
    },
    {
      name: "Trans Fats",
      description: "Significantly increases risk of heart disease",
      bgColor: "bg-orange-100",
    },
    {
      name: "High Sodium Foods",
      description: "Raises blood pressure and strains the heart",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Refined Sugars",
      description: "Can lead to diabetes and increased cardiac risk",
      bgColor: "bg-pink-100",
    },
    {
      name: "Processed Meats",
      description: "High in sodium and unhealthy fats",
      bgColor: "bg-red-200",
    },
    {
      name: "Alcohol (Excess)",
      description: "Can weaken heart muscle and raise blood pressure",
      bgColor: "bg-amber-100",
    },
  ],
  causes: [
    {
      title: "Atherosclerosis",
      description:
        "Buildup of fatty deposits (plaques) in the coronary arteries that narrow blood vessels",
      icon: "alert-circle",
    },
    {
      title: "High Cholesterol",
      description:
        "Elevated LDL cholesterol contributes to plaque formation in arteries",
      icon: "arrow-up",
    },
    {
      title: "High Blood Pressure",
      description:
        "Chronic hypertension damages artery walls and accelerates plaque buildup",
      icon: "thermometer",
    },
    {
      title: "Diabetes",
      description:
        "High blood sugar levels damage blood vessels and increase atherosclerosis risk",
      icon: "syringe",
    },
    {
      title: "Smoking",
      description:
        "Tobacco use damages artery linings and accelerates coronary artery disease",
      icon: "pill",
    },
    {
      title: "Family History",
      description:
        "Genetic predisposition increases risk of coronary artery disease",
      icon: "image",
    },
  ],
  symptoms: [
    {
      title: "Chest Pain (Angina)",
      description:
        "Pressure, squeezing, or burning sensation in the chest, especially during physical activity",
      icon: "pill",
    },
    {
      title: "Shortness of Breath",
      description:
        "Difficulty breathing during exertion or at rest due to inadequate blood flow",
      icon: "thermometer",
    },
    {
      title: "Fatigue",
      description:
        "Persistent tiredness and lack of energy, even with minimal activity",
      icon: "clock",
    },
    {
      title: "Heart Palpitations",
      description: "Irregular heartbeat or awareness of heart beating",
      icon: "arrow-up",
    },
    {
      title: "Weakness",
      description:
        "Feeling weak or dizzy due to reduced blood flow to the body",
      icon: "image",
    },
    {
      title: "Nausea or Indigestion",
      description:
        "Digestive discomfort that may signal heart problems, especially in women",
      icon: "syringe",
    },
  ],
  riskFactors: [
    {
      title: "Age Over 65",
      description: "Risk increases significantly with advancing age",
      icon: "clock",
    },
    {
      title: "Male Gender",
      description: "Men have higher risk, though risk increases for women after menopause",
      icon: "pill",
    },
    {
      title: "Obesity",
      description: "Excess weight increases strain on the heart and cardiovascular system",
      icon: "thermometer",
    },
    {
      title: "Sedentary Lifestyle",
      description: "Lack of physical activity weakens the heart and circulatory system",
      icon: "image",
    },
    {
      title: "Stress",
      description: "Chronic stress can damage arteries and worsen heart disease",
      icon: "arrow-up",
    },
    {
      title: "Poor Diet",
      description: "Diet high in fats, cholesterol, and sodium accelerates disease progression",
      icon: "syringe",
    },
  ],
  complications: [
    {
      title: "Heart Attack",
      description: "Complete blockage can cause myocardial infarction",
      icon: "pill",
    },
    {
      title: "Heart Failure",
      description: "Weakened heart muscle unable to pump blood effectively",
      icon: "thermometer",
    },
    {
      title: "Arrhythmias",
      description: "Irregular heart rhythms that can be life-threatening",
      icon: "clock",
    },
    {
      title: "Stroke",
      description: "Reduced blood flow to the brain due to arterial disease",
      icon: "arrow-up",
    },
    {
      title: "Sudden Cardiac Death",
      description: "Unexpected cardiac arrest without warning",
      icon: "image",
    },
    {
      title: "Cardiogenic Shock",
      description: "Severe reduction in blood flow leading to organ failure",
      icon: "syringe",
    },
  ],
  indications: [
    {
      title: "Severe Coronary Artery Disease",
      description: "Multiple blocked arteries requiring surgical intervention",
      icon: "alert-circle",
    },
    {
      title: "Left Main Coronary Artery Disease",
      description: "Critical blockage in the main artery supplying the left side of heart",
      icon: "pill",
    },
    {
      title: "Failed Angioplasty",
      description: "When stenting or balloon angioplasty has not been successful",
      icon: "thermometer",
    },
    {
      title: "Triple Vessel Disease",
      description: "Blockages in three or more major coronary arteries",
      icon: "arrow-up",
    },
    {
      title: "Heart Attack with Complications",
      description: "Acute myocardial infarction requiring immediate bypass",
      icon: "clock",
    },
    {
      title: "Unstable Angina",
      description: "Chest pain at rest or with minimal exertion despite medication",
      icon: "syringe",
    },
  ],
  diagnosis: {
    description:
      "Proper diagnosis involves comprehensive cardiac evaluation including detailed patient history, physical examination, and advanced diagnostic tests to assess the extent of coronary artery disease and determine if CABG surgery is the most appropriate treatment option.",
    methods: [
      "Electrocardiogram (ECG) to assess heart rhythm and detect signs of heart attack",
      "Echocardiogram to evaluate heart structure and pumping function",
      "Coronary Angiography (gold standard) to visualize blocked arteries",
      "Stress Test to evaluate heart performance under physical exertion",
      "CT Angiography for non-invasive imaging of coronary arteries",
      "Blood tests including lipid profile, troponin, and cardiac enzymes",
    ],
  },

  treatments: {
    nonSurgical: [
      {
        name: "Heart-Healthy Diet",
        description:
          "Follow a diet rich in fruits, vegetables, whole grains, lean proteins, and omega-3 fatty acids while limiting saturated fats and sodium.",
      },
      {
        name: "Regular Exercise",
        description:
          "Engage in moderate aerobic activity for at least 150 minutes per week to strengthen the heart and improve circulation.",
      },
      {
        name: "Quit Smoking",
        description:
          "Eliminate tobacco use completely to reduce arterial damage and improve cardiovascular health.",
      },
      {
        name: "Stress Management",
        description:
          "Practice relaxation techniques such as meditation, yoga, or deep breathing to reduce cardiac strain.",
      },
      {
        name: "Weight Management",
        description:
          "Maintain a healthy BMI through balanced diet and regular physical activity to reduce heart workload.",
      },
      {
        name: "Medication Adherence",
        description:
          "Take prescribed medications including statins, beta-blockers, ACE inhibitors, and antiplatelet drugs as directed.",
      },
    ],
    surgical: [
      {
        name: "Traditional CABG (On-Pump)",
        description:
          "The most common approach where the heart is temporarily stopped and a heart-lung bypass machine maintains circulation while the surgeon grafts new blood vessels to bypass blocked arteries.",
        benefits: [
          "Proven effectiveness with decades of successful outcomes",
          "Allows surgeon to work on a still heart with optimal precision",
          "Can address multiple blockages simultaneously",
          "Suitable for complex cases and severe disease",
          "Long-term relief from angina and improved heart function",
        ],
        recoveryTime: "6-12 weeks for full recovery",
        anesthesia: "General anesthesia",
      },
      {
        name: "Off-Pump CABG (Beating Heart Surgery)",
        description:
          "A technique where bypass surgery is performed on the beating heart without using a heart-lung machine. Special stabilizing devices hold the area of the heart being worked on steady.",
        benefits: [
          "Reduced risk of stroke and cognitive complications",
          "Less blood loss and reduced need for transfusions",
          "Shorter hospital stay in some cases",
          "Lower risk of kidney problems",
          "Faster initial recovery period",
        ],
        recoveryTime: "4-8 weeks for full recovery",
        anesthesia: "General anesthesia",
      },
      {
        name: "Minimally Invasive CABG (MIDCAB)",
        description:
          "A less invasive approach using smaller incisions between the ribs rather than opening the entire chest. Typically used for single-vessel disease of the left anterior descending artery.",
        benefits: [
          "Smaller incision with reduced scarring",
          "Less post-operative pain and discomfort",
          "Shorter hospital stay (3-5 days)",
          "Faster return to normal activities",
          "Lower risk of infection and bleeding",
        ],
        recoveryTime: "3-6 weeks for full recovery",
        anesthesia: "General anesthesia",
      },
    ],
  },
  types: [
    {
      type: "Single Vessel CABG",
      description:
        "Bypass surgery performed when only one coronary artery is significantly blocked, typically the left anterior descending (LAD) artery.",
      procedure:
        "Single graft placement, often using the left internal mammary artery (LIMA) to bypass the blocked segment.",
    },
    {
      type: "Double Vessel CABG",
      description:
        "Surgical procedure when two major coronary arteries have significant blockages requiring bypass.",
      procedure:
        "Two grafts are placed to restore blood flow to affected areas of the heart muscle.",
    },
    {
      type: "Triple Vessel CABG",
      description:
        "The most common type, performed when three major coronary arteries are blocked, affecting multiple areas of the heart.",
      procedure:
        "Three or more grafts using a combination of arterial and venous grafts to ensure complete revascularization.",
    },
    {
      type: "Quadruple (Quad) Bypass",
      description:
        "Extensive surgery when four or more coronary arteries or their branches require bypass grafting.",
      procedure:
        "Multiple grafts (typically 4-5) are placed to address all significant blockages throughout the coronary system.",
    },
    {
      type: "Redo CABG",
      description:
        "Repeat bypass surgery performed when previous grafts have failed or new blockages have developed in other arteries.",
      procedure:
        "Complex procedure requiring careful navigation around scar tissue from previous surgery while placing new grafts.",
    },
    {
      type: "Emergency CABG",
      description:
        "Urgent bypass surgery performed during or immediately after a heart attack when the patient is unstable and angioplasty is not feasible.",
      procedure:
        "Rapid surgical intervention to restore blood flow and save heart muscle from permanent damage.",
    },
  ],

  whyChooseUs: [
    {
      title: "Expert Cardiac Surgeons",
      description:
        "At Total Surgicare, our cardiac surgical team has extensive experience performing CABG procedures with high success rates. Our surgeons are trained in the latest techniques and stay updated with advances in cardiac surgery.",
    },
    {
      title: "State-of-the-Art Cardiac Facility",
      description:
        "We have advanced cardiac catheterization labs, modern operating theaters equipped with the latest technology, and dedicated cardiac ICU facilities to ensure the best outcomes for our patients.",
    },
    {
      title: "Comprehensive Pre and Post-Operative Care",
      description:
        "From initial consultation through complete recovery, we provide comprehensive cardiac care including cardiac rehabilitation programs, dietary counseling, and long-term follow-up to ensure optimal heart health.",
    },
    {
      title: "Multidisciplinary Team Approach",
      description:
        "Our cardiac care team includes cardiologists, cardiac surgeons, anesthesiologists, cardiac nurses, physiotherapists, and nutritionists who work together to provide holistic care tailored to each patient's needs.",
    },
  ],
};

