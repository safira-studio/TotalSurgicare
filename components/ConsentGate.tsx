"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ts-cookie-consent";

type Consent = "granted" | "denied";

const GA4_ID = "G-CSF1LFZB55";
const GOOGLE_ADS_ID = "AW-17012043023";
const META_PIXEL_ID = "2409103159560050";
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

/**
 * Analytics and advertising tags, rendered only once the visitor has opted in.
 *
 * These were previously loaded on every page view with no consent step. On a
 * health site the URL path itself reveals a condition (e.g. /treatment/piles-
 * treatment), so sending it to Google and Meta without prior consent is exactly
 * what the DPDP Act 2023 and GDPR require an opt-in for.
 */
const MarketingTags = () => (
  <>
    {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA4_ID}');
        gtag('config', '${GOOGLE_ADS_ID}');
      `}
    </Script>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      strategy="afterInteractive"
    />
    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  </>
);

interface BannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Banner = ({ onAccept, onDecline }: BannerProps) => (
  <div
    aria-labelledby="cookie-consent-heading"
    className="fixed inset-x-0 bottom-0 z-[80] p-3 sm:p-4"
    role="dialog"
  >
    <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:flex-row sm:items-center sm:gap-6">
      <div className="flex-1">
        <h2
          className="text-sm font-bold text-clinic-accent"
          id="cookie-consent-heading"
        >
          We use cookies
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          We&apos;d like to use analytics and advertising cookies to understand
          how our site is used. They are optional — the site works fully without
          them. See our{" "}
          <a className="font-semibold text-clinic-dark underline" href="/privacy-policy">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div className="flex shrink-0 gap-3">
        <button
          className="h-11 rounded-full border border-gray-300 px-5 text-sm font-semibold text-clinic-accent transition-colors hover:bg-gray-50"
          onClick={onDecline}
          type="button"
        >
          Decline
        </button>
        <button
          className="h-11 rounded-full bg-clinic-dark px-6 text-sm font-semibold text-white transition-colors hover:bg-clinic-primary"
          onClick={onAccept}
          type="button"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
);

/**
 * Gates the marketing tags behind an explicit choice. Nothing third-party loads
 * until the visitor accepts, so a first visit (and any automated audit) sets no
 * third-party cookies at all.
 */
export default function ConsentGate() {
  const [consent, setConsent] = useState<Consent | null>(null);
  // Consent lives in localStorage, which is unavailable during SSR — render
  // nothing until the client has read it, so the markup can't mismatch.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {
      // Private mode or blocked storage: fall through and ask again.
    }
    setHydrated(true);
  }, []);

  const choose = (value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Not persisting is acceptable; the choice still applies to this page view.
    }
    setConsent(value);
  };

  if (!hydrated) return null;

  return (
    <>
      {consent === "granted" && <MarketingTags />}
      {consent === null && (
        <Banner
          onAccept={() => choose("granted")}
          onDecline={() => choose("denied")}
        />
      )}
    </>
  );
}
