// app/conditions/[slug]/page.tsx
import { Suspense } from "react";
import Loading from "./loading"; // loading.tsx shows spinner
import Content from "./content"; // async component with slow data

type Props = {
  params: Promise<{ slug: string }>;
};
export default async function ConditionsPage({ params }: Props) {
  const { slug } = await params;
  return (
    <Suspense fallback={<Loading />}>
      <Content slug={slug} />
    </Suspense>
  );
}
