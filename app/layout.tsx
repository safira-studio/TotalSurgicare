import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import ConsentGate from "@/components/ConsentGate";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatWidget";
// import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: "Surgical Treatments in Pune",

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
        {/* Analytics, Ads and the Meta Pixel now load from <ConsentGate/> in
            the body, only after the visitor opts in. */}
        {/* <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${"GTM-TP73RQVF"}');
        `,
          }}
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgData),
          }}
          type="application/ld+json"
        /> */}
        {/* Google tag (gtag.js)  */}

        {/* Plain <script>, not next/script: <Script> defaults to the
            afterInteractive strategy, which injects the tag client-side and
            leaves it out of the server-rendered HTML — so crawlers reading raw
            HTML saw no structured data at all. */}
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
        <div className="relative h-screen">
          {/* First focusable element on the page: lets keyboard users jump
              past ~40 navigation links straight to the content. */}
          <a
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-clinic-dark focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-clinic-primary"
            href="#main-content"
          >
            Skip to main content
          </a>
          <Navbar />
          <main className="mx-auto max-w-8xl" id="main-content">
            {children}
          </main>
          <Footer />
          <ConsentGate />
        </div>
        <ChatWidget />
      </body>
    </html>
  );
}

const schemaOrgData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Total Surgicare",
  image:
    "https://totalsurgicare.com/_next/image?url=%2Flogo.png&w=256&q=75",
  "@id": "",
  url: "https://totalsurgicare.com/",
  telephone: "9665551712",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "501 B, 5th floor, Cabin No 2, Kimaya clinic, One Place Salunke Vihar, Wanowarie, Pune 411040",
    addressLocality: "pune",
    postalCode: "411040",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4814593,
    longitude: 73.9033115,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/total_surgicare/",
    "https://www.facebook.com/TotalSurgicare",
  ],
};
