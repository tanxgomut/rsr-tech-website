import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(() => {
    const staticPages = [
        { loc: '/', changefreq: 'weekly' as const, priority: 1 as const },
    ]

    return staticPages
})
