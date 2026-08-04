import { MetadataRoute } from 'next'
import { metadataMap } from '@/components/data/metadataMap'
import { cities, toCitySlug, type CityKey } from '@/components/data/cities'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://totalsurgicare.com'

    // Static routes
    const routes = [
        '',
        '/aboutus',
        '/contact',
        '/cardiology',
        '/diagnostic',
        '/post-surgery-care',
        '/privacy-policy',
        '/terms-conditions',
        '/elderly-care',
        '/pune',
        '/mumbai',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }))

    const treatmentRoutes = Object.keys(metadataMap).map((slug) => ({
        url: `${baseUrl}/treatment/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // City treatment pages: only the treatments actually curated for each city.
    // Previously this listed every metadataMap key under /pune, publishing ~19
    // URLs that nothing linked to.
    const cityRoutes = (Object.keys(cities) as CityKey[]).flatMap((city) =>
        cities[city].treatments.map((baseSlug) => ({
            url: `${baseUrl}/${city}/treatment/${toCitySlug(baseSlug, city)}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }))
    )

    return [...routes, ...treatmentRoutes, ...cityRoutes]
}
