// app/mumbai/treatment/[slug]/page.tsx
import { notFound } from "next/navigation";
import Content from "@/app/treatment/[slug]/content"; // Reusing Content component
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { cities, toCitySlug } from "@/components/data/cities";
import { resolveCityTreatment } from "@/components/data/cityTreatment";

const CITY = "mumbai" as const;

type Props = {
    params: Promise<{ slug: string }>;
};

// Only the curated Mumbai treatments exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
    return cities[CITY].treatments.map((baseSlug) => ({
        slug: toCitySlug(baseSlug, CITY),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const resolved = resolveCityTreatment(CITY, slug);

    if (!resolved?.meta) {
        return {
            title: siteConfig.name,
            description: siteConfig.description,
            keywords: "Surgical Treatments in Mumbai",
        };
    }

    return {
        title: resolved.meta.title,
        description: resolved.meta.description,
        keywords: resolved.meta.keywords,
        alternates: { canonical: resolved.canonical },
    };
}

export default async function MumbaiTreatmentPage({ params }: Props) {
    const { slug } = await params;
    const resolved = resolveCityTreatment(CITY, slug);

    if (!resolved) {
        notFound(); // shows 404 page
    }

    // Pass the BASE slug: <Content> uses it for image paths, not for the URL.
    return <Content data={resolved.data} slug={resolved.baseSlug} />;
}
