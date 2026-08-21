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
  // Security headers for HTML responses.
  //
  // netlify.toml [[headers]] only reach files served from the static publish
  // directory — Next serves pages through its own runtime, so those rules
  // landed on images but never on the pages, which is where clickjacking and
  // referrer-leak protection actually matter. Setting them here covers both
  // SSR and prerendered HTML. netlify.toml still handles static-asset caching.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), usb=(), magnetometer=(), payment=()",
          },
          // Report-Only until the console is confirmed clean: GTM requires
          // 'unsafe-inline', and enforcing blind risks breaking tag delivery.
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://graph.facebook.com https://www.google.com https://ad.doubleclick.net https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://www.facebook.com; frame-src https://www.googletagmanager.com https://maps.google.com https://www.google.com https://td.doubleclick.net; object-src 'none'; base-uri 'self'; form-action 'self'",
          },
        ],
      },
    ];
  },
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
