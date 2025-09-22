import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ptalkservicesweb.vercel.app/'
  const currentDate = new Date().toISOString()

  // 定義所有頁面路徑
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // 為每個路由生成多語言版本
  const locales = ['zh-TW', 'en', 'ja']
  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach(route => {
    // 添加預設路由（zh-TW）
    sitemapEntries.push(route)

    // 添加其他語言版本
    locales.forEach(locale => {
      if (locale !== 'zh-TW') {
        const localizedUrl = route.url === baseUrl
          ? `${baseUrl}/${locale}`
          : route.url.replace(baseUrl, `${baseUrl}/${locale}`)

        sitemapEntries.push({
          ...route,
          url: localizedUrl,
        })
      }
    })
  })

  return sitemapEntries
}