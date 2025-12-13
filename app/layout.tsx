import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatWidget";
import { GoogleTagManager } from "@next/third-parties/google";
// import Script from "next/script";
import Script from "next/script";

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

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17012043023"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17012043023');
  `}
        </Script>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgData),
          }}
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TP73RQVF"
            height="0"
            width="0"
            title="Google Tag Manager (noscript)"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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
