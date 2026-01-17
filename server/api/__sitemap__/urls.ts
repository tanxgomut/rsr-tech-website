import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(() => {
    const staticPages = [
        { loc: '/', changefreq: 'weekly' as const, priority: 1 as const },
        { loc: '/privacy', changefreq: 'yearly' as const, priority: 0.3 as const },
        { loc: '/terms', changefreq: 'yearly' as const, priority: 0.3 as const },
    ]

    return staticPages
})
