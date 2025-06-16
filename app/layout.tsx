import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatWidget";
import { GoogleTagManager } from "@next/third-parties/google";

// import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Total Surgicare: Best Surgical Care in Pune",
    description:
      "Total Surgicare provides expert surgical care in Pune for Piles, Hernia, Kidney Stones, Cataract, Gynecology, IVF, and more.",
    url: "https://totalsurgicare.com",
    siteName: "Total Surgicare",
    images: [
      {
        url: "https://totalsurgicare.com/logo.webp", // Ensure this image exists in /public
        width: 800,
        height: 600,
        alt: "Total Surgicare Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgData),
          }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string}
        />
        <div className="relative h-screen">
          <Navbar />
          <main className="mx-auto max-w-8xl">{children}</main>
          <Footer />
        </div>
        <ChatWidget />
      </body>
    </html>
  );
}

const schemaOrgData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Total Surgicare",
  description:
    "Total Surgicare provides expert surgical care in Pune for Piles, Hernia, Kidney Stones, Cataract, Gynecology, IVF, and more.",
  url: "https://totalsurgicare.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B48 /9, Swamivivekanand Road",
    addressLocality: "Bibwewadi",
    addressRegion: "Pune, Maharashtra",
    postalCode: "411047",
    addressCountry: "IN",
  },
  telephone: "+91-9665551711",
  email: "info@totalsurgicare.com",
  openingHours: "Mo-Su 00:00-23:59",
  medicalSpecialty: [
    "Proctology",
    "Laparoscopy",
    "Urology",
    "Gynaecology",
    "Aesthetics",
    "Vascular",
    "Ophthalmology",
    "Cardiology",
  ],
};
