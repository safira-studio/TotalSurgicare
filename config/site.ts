export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Total Surgicare",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      title: "Proctology",
      items: [
        "Piles Treatment",
        "Fistula Treatment",
        "Fissure Treatment",
        "Pollonodal sinus Treatment",
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
        "Hymenoplasty",
        "Vaginoplasty",
        "Labiaplasty",
        "Myomectomy",
        "PCOS-PCOD Treatment",
      ],
    },
    {
      title: "Aesthetics",
      items: ["Lipoma", "Sebaceous Cyst", "Breast Lump", "Breast Augmentation"],
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
      items: [],
    },
    {
      title: "Diagnostic",
      items: [],
    },
    {
      title: "Post Surgery Care",
      items: [],
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
