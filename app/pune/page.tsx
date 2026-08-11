import AppointmentBooking from "@/components/home/AppointmentBooking";
import BlogSection from "@/components/home/BlogSection";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import PuneTreatments from "@/components/pune/PuneTreatments";
import PuneWhyChooseUs from "@/components/pune/PuneWhyChooseUs";
import PuneTestimonials from "@/components/pune/PuneTestimonials";
import PuneInternalLinks from "@/components/pune/PuneInternalLinks";
import PuneLocation from "@/components/pune/PuneLocation";
import { puneFaqs } from "@/components/pune/puneFaqs";
import { PUNE_ADDRESS, PUNE_RATING } from "@/components/pune/puneLocationData";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

const PAGE_TITLE = "Advanced Multispeciality Surgical Care in Pune";
const PAGE_DESCRIPTION =
  "Receive advanced surgical treatment from experienced specialists at Total Surgicare, a trusted multispeciality hospital in Pune. General surgery, laparoscopic surgery, modern diagnostics, minimally invasive procedures and complete post-surgical care under one roof.";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s - <site name>" template, which
    // would otherwise append a second "…in Pune" to this title.
    title: { absolute: `${PAGE_TITLE} | Total Surgicare` },
    description: PAGE_DESCRIPTION,
    keywords: "Multispeciality Surgical Care in Pune",
    alternates: { canonical: "https://totalsurgicare.com/pune" },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://totalsurgicare.com/#organization",
            name: "Total Surgicare",
            url: "https://totalsurgicare.com",
            logo: {
                "@type": "ImageObject",
                url: "https://totalsurgicare.com/logo.png",
            },
            image: "https://totalsurgicare.com/logo.png",
            email: `mailto:${siteConfig.contact.email.primary}`,
            telephone: siteConfig.contact.phone.primary,
            sameAs: [
                "https://www.facebook.com/TotalSurgicare/",
                "https://www.instagram.com/total_surgicare/",
            ],
        },
        {
            "@type": "Hospital",
            "@id": "https://totalsurgicare.com/pune/#hospital",
            name: "Total Surgicare Pune",
            url: "https://totalsurgicare.com/pune",
            parentOrganization: { "@id": "https://totalsurgicare.com/#organization" },
            mainEntityOfPage: { "@id": "https://totalsurgicare.com/pune/#webpage" },
            address: {
                "@type": "PostalAddress",
                streetAddress: PUNE_ADDRESS.street,
                addressLocality: PUNE_ADDRESS.locality,
                addressRegion: PUNE_ADDRESS.region,
                postalCode: PUNE_ADDRESS.postalCode,
                addressCountry: PUNE_ADDRESS.country,
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: PUNE_RATING.value,
                reviewCount: PUNE_RATING.reviewCount,
                bestRating: PUNE_RATING.best,
                worstRating: PUNE_RATING.worst,
            },
        },
        {
            "@type": "WebPage",
            "@id": "https://totalsurgicare.com/pune/#webpage",
            url: "https://totalsurgicare.com/pune",
            name: PAGE_TITLE,
            about: { "@id": "https://totalsurgicare.com/pune/#hospital" },
            mainEntity: { "@id": "https://totalsurgicare.com/pune/#hospital" },
        },
        {
            "@type": "FAQPage",
            "@id": "https://totalsurgicare.com/pune/#faq",
            mainEntity: puneFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

export default function PunePage() {
    return (
        <>
            {/* Rendered as a text child (not dangerouslySetInnerHTML) since `schema` is
                a static, developer-authored object — never user input. */}
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <Hero
                title="Advanced Multispeciality Surgical Care in Pune with Expert Surgeons"
                description="Advanced surgical treatment from experienced specialists at Total Surgicare, a trusted multispeciality hospital in Pune — general surgery, laparoscopic and minimally invasive procedures, modern diagnostics and complete post-surgical care under one roof."
            />
            <PuneTreatments />
            <PuneWhyChooseUs />
            <PuneTestimonials />
            <div id="health-articles" className="scroll-mt-24">
                <BlogSection />
            </div>
            <FAQSection
                description="Answers to the questions patients most often ask about multispeciality surgical care at Total Surgicare Pune."
                eyebrow="PUNE FAQS"
                faqs={puneFaqs}
                heading="Frequently Asked Questions"
            />
            <AppointmentBooking />
            <PuneInternalLinks />
            <PuneLocation />
        </>
    );
}
