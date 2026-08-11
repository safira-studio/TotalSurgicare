// app/pune/treatment/[slug]/page.tsx
import { notFound } from "next/navigation";
import Content from "@/app/treatment/[slug]/content"; // Reusing Content component
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { cities, toCitySlug } from "@/components/data/cities";
import { resolveCityTreatment } from "@/components/data/cityTreatment";
import { buildTreatmentSchema } from "@/components/pune/treatments/treatmentSchema";

const CITY = "pune" as const;

type Props = {
    params: Promise<{ slug: string }>;
};

// Only the curated Pune treatments exist; anything else 404s.
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
            title: { absolute: siteConfig.name },
            description: siteConfig.description,
            keywords: "Surgical Treatments in Pune",
        };
    }

    return {
        // `absolute` opts out of the root layout's "%s - <site name>" template —
        // resolved.meta.title already ends in "| Total Surgicare".
        title: { absolute: resolved.meta.title },
        description: resolved.meta.description,
        keywords: resolved.meta.keywords,
        alternates: { canonical: resolved.canonical },
    };
}

export default async function PuneTreatmentPage({ params }: Props) {
    const { slug } = await params;
    const resolved = resolveCityTreatment(CITY, slug);

    if (!resolved) {
        notFound(); // shows 404 page
    }

    const schema = buildTreatmentSchema({
        citySlug: slug,
        treatmentName: resolved.data.name,
        pageTitle: resolved.meta?.title ?? resolved.data.overview.title,
        pageDescription: resolved.meta?.description ?? resolved.data.overview.brief,
        procedureName: resolved.data.treatments.surgical[0]?.name ?? resolved.data.name,
        faq: resolved.data.faq,
    });

    return (
        <>
            {/* Rendered as a text child (not dangerouslySetInnerHTML) since `schema` is
                built entirely from static, developer-authored data — never user input. */}
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
            {/* Pass the BASE slug: <Content> uses it for image paths, not for the URL. */}
            <Content data={resolved.data} slug={resolved.baseSlug} />
        </>
    );
}
