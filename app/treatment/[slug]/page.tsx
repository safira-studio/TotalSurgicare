// app/treatment/[slug]/page.tsx
import { notFound } from "next/navigation";
import Content from "./content"; // async component with slow data
import allData from "@/components/data/index";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { metadataMap } from "@/components/data/metadataMap";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata dynamically based on slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const metadata = metadataMap[slug];

  if (!metadata) {
    return {
      title: siteConfig.name,
      description: siteConfig.description,

      keywords: "Surgical Treatments in Pune",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

export default async function ConditionsPage({ params }: Props) {
  const { slug } = await params;
  const data = await getDataFromSlug(slug);

  if (!data) {
    notFound(); // shows 404 page
  }

  return <Content data={data} slug={slug} />;
}

async function getDataFromSlug(slug: string) {
  try {
    const dataKey = slug.replace(/-([a-z])/g, (_, letter) =>
      letter.toUpperCase()
    );

    return allData[dataKey as keyof typeof allData] || null;
  } catch (error) {
    console.error(`Error fetching data for slug ${slug}:`, error);

    return null;
  }
}
