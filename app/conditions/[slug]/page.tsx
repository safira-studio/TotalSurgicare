// app/conditions/[slug]/page.tsx
import { notFound } from "next/navigation";
import Content from "./content"; // async component with slow data
import * as allData from "@/components/data/index";
import { MedicalCondition } from "@/types";

type Props = {
  params: Promise<{ slug: string }>;
};
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
    // Normalize the slug by converting dashes to camelCase
    const dataKey = slug.replace(/-([a-z])/g, (_, letter) =>
      letter.toUpperCase()
    );

    // Dynamically access the corresponding data and return or handle undefined
    return (
      (allData[
        dataKey as keyof typeof allData
      ] as unknown as MedicalCondition) || null
    );
  } catch (error) {
    console.error(`Error fetching data for slug "${slug}":`, error);

    return null;
  }
}
