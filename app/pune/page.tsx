import { Metadata } from "next";

import CityLanding, { buildCityMetadata } from "@/components/city/CityLanding";

export const metadata: Metadata = buildCityMetadata("pune");

export default function PunePage() {
    return <CityLanding cityKey="pune" />;
}
