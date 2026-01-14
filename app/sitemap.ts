import { MetadataRoute } from 'next'
import { metadataMap } from '@/components/data/metadataMap'

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

    const puneRoutes = Object.keys(metadataMap).map((slug) => ({
        url: `${baseUrl}/pune/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [...routes, ...treatmentRoutes, ...puneRoutes]
}
