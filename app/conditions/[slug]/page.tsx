// app/conditions/[slug]/page.tsx
import { notFound } from "next/navigation";
import Content from "./content"; // async component with slow data
import allData from "@/components/data/index";

type Props = {
  params: Promise<{ slug: string }>;
};
export default async function ConditionsPage({ params }: Props) {
  const { slug } = await params;
  const data = await getDataFromSlug(slug);
  if (!data) {
    notFound(); // shows 404 page
  }
  return <Content slug={slug} data={data} />;
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
