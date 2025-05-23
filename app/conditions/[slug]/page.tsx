import DiagnosisProcedure from "@/components/conditions/DiagnosisProcedure";
import InfoSection from "@/components/conditions/InfoSection";
import Treatment from "@/components/conditions/Treatment";
import Hero from "@/components/conditions/Hero";
import { notFound } from "next/navigation";
import Types from "@/components/conditions/Types";
import { medicalData } from "@/components/conditions/data";
import { pilesCondition } from "@/app/conditions2/[slug]/data";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ConditionsPage({ params }: Props) {
  const { slug } = params;

  // Fetch your data here
  const data = await getDataFromSlug(slug);

  if (!data) {
    notFound(); // shows 404 page
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero {...pilesCondition.overview} />
      {/* What is the condition section */}
      <InfoSection {...pilesCondition.aboutCondition} />

      <DiagnosisProcedure />
      <Types />
      <Treatment />
    </div>
  );
}

// Example fetch function (replace with your own)
async function getDataFromSlug(slug: string) {
  const mockData: { [key: string]: { title: string; content: string } } = {
    a: { title: "Example Post", content: "This is an example." },
  };
  return mockData[slug];
}
