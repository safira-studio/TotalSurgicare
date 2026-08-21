// City treatment URL migration (2026-08). Tier 1 maps the 13 URLs that were
// live at migration time to their new /<city>/treatment/<slug>-in-<city> home.
// Written out literally on purpose: redirects are historical facts, so they
// must survive a treatment later being dropped from a city's curated list.
const cityTreatmentRedirects = [
  ["pune", "piles-treatment"],
  ["pune", "fissure-treatment"],
  ["pune", "gallstone-surgery"],
  ["pune", "gall-bladder-surgery"],
  ["pune", "stapler-circumcision"],
  ["pune", "lipoma"],
  ["pune", "kidney-stone-treatment-rirspcnlursl"],
  ["mumbai", "piles-treatment"],
  ["mumbai", "fissure-treatment"],
  ["mumbai", "fistula-treatment"],
  ["mumbai", "gallstone-surgery"],
  ["mumbai", "stapler-circumcision"],
  ["mumbai", "kidney-stone-treatment-rirspcnlursl"],
].map(([city, slug]) => ({
  source: `/${city}/${slug}`,
  destination: `/${city}/treatment/${slug}-in-${city}`,
  permanent: true,
}));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not advertise the framework in response headers.
  poweredByHeader: false,
  async redirects() {
    return [
      // Tier 1 — the 13 curated city URLs, most specific first.
      ...cityTreatmentRedirects,

      // Tier 2 — every other old city URL. The old sitemap published
      // /pune/<slug> for all 26 treatments, so ~19 indexed URLs have no
      // curated city page; send them to the national page rather than a 404.
      { source: "/pune/:slug", destination: "/treatment/:slug", permanent: true },
      { source: "/mumbai/:slug", destination: "/treatment/:slug", permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/opd-prescribing",
        destination: "/prescription/opd-prescribing",
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
