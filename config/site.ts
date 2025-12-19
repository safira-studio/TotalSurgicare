export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Total Surgicare: Best Surgical Care in Pune",
  description:
    "Total Surgicare provides consultation for 50+ diseases and treatments such as Piles, Hernia, Kidney Stones, Cataract, Gynecomastia, Abortion, IVF, etc. across.",
  tagline: "Your Health, Our Priority",
  navItems: [
    {
      title: "Proctology",
      items: [
        "Piles Treatment",
        "Fistula Treatment",
        "Fissure Treatment",
        "Pilonidal sinus Treatment",
        "Rectal prolapse",
      ],
    },
    {
      title: "Laparoscopy",
      items: [
        "Hernia surgery",
        "Gallstone surgery",
        "Appendectomy",
        "Inguinal Hernia Surgery",
        "Umbillical Hernia surgery",
      ],
    },
    {
      title: "Urology",
      items: [
        "Stapler Circumcision",
        "Kidney Stone Treatment (RIRS/PCNL/URSL)",
        "Enlarged Prostate Surgery",
      ],
    },
    {
      title: "Gynaecology",
      items: [
        "Hysterectomy",
        // "Hymenoplasty",
        // "Vaginoplasty",
        // "Labiaplasty",
        "Myomectomy",
        "PCOS-PCOD Treatment",
      ],
    },
    {
      title: "Aesthetics",
      items: [
        "Lipoma",
        "Sebaceous Cyst",
        "Breast Lump",
        "Gynecomastia",
        "Breast Augmentation",
      ],
    },
    {
      title: "Vascular",
      items: ["Varicose Veins", "AV Fistula"],
    },
    {
      title: "Opthalmology",
      items: ["Cataract"],
    },
    {
      title: "Cardiology",
      items: ["Cardiology", "Coronary Artery Bypass Grafting (CABG)"],
    },
    {
      title: "Diagnostic",
      items: [],
    },
    {
      title: "Post Surgery Care",
      items: ["Post Surgery Care", "Elderly Care"],
    },
  ],
  contact: {
    phone: {
      primary: "+91-9665551711",
      secondary: "+91-9665551712",
    },
    email: {
      primary: "totalsurgicare@gmail.com",
      support: "support@totalsurgicare.com",
    },
    address: {
      street: "One Place, 501 B, 5th Floor,Cabin No 2, Kimaya Clinic",
      area: "Kimaya Clinic,Salunke Vihar , ",
      city: "Wanowarie, Pune",
      state: "Maharashtra",
      pincode: "411040",
      country: "India",
      full: "One Place,501 B, 5th floor, Cabin No2, Kimaya Clinic, Salunke Vihar, Wanowarie, Pune 411040, India",
      coordinates: {
        lat: 18.475050317494727,
        lng: 73.8724136352539,
  
      },
    },
  },
};
