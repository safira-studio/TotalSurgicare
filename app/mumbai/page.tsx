import { Metadata } from "next";

import CityLanding, { buildCityMetadata } from "@/components/city/CityLanding";

export const metadata: Metadata = buildCityMetadata("mumbai");

export default function MumbaiPage() {
    return <CityLanding cityKey="mumbai" />;
}
