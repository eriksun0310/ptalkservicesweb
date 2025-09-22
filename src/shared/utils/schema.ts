// 結構化資料 Schema 生成器

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PTalk',
    alternateName: 'PTalk Services',
    url: 'https://ptalkservicesweb.vercel.app/',
    logo: 'https://ptalkservicesweb.vercel.app//logo.png',
    description: '提供APP規劃設計、網頁設計、網站架設、AI串接、SEO優化等專業服務',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+886-900-000-000',
      contactType: 'Customer Service',
      areaServed: 'TW',
      availableLanguage: ['Chinese', 'English', 'Japanese']
    },
    sameAs: [
      'https://www.facebook.com/ptalk',
      'https://www.instagram.com/ptalk',
      'https://twitter.com/ptalk',
      'https://www.linkedin.com/company/ptalk'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TW',
      addressLocality: '台北市',
      postalCode: '100'
    }
  }
}

export const generateServiceSchema = () => {
  const services = [
    {
      '@type': 'Service',
      name: 'APP規劃設計',
      description: '從概念到上架，完整APP開發服務',
      provider: {
        '@type': 'Organization',
        name: 'PTalk'
      },
      areaServed: 'TW',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'APP Development Services'
      }
    },
    {
      '@type': 'Service',
      name: '網頁設計',
      description: '響應式網頁設計，提供最佳使用體驗',
      provider: {
        '@type': 'Organization',
        name: 'PTalk'
      },
      areaServed: 'TW'
    },
    {
      '@type': 'Service',
      name: 'AI串接',
      description: '整合AI技術，提升產品智能化程度',
      provider: {
        '@type': 'Organization',
        name: 'PTalk'
      },
      areaServed: 'TW'
    },
    {
      '@type': 'Service',
      name: 'SEO優化',
      description: '搜尋引擎最佳化，提升網站排名',
      provider: {
        '@type': 'Organization',
        name: 'PTalk'
      },
      areaServed: 'TW'
    }
  ]

  return {
    '@context': 'https://schema.org',
    '@graph': services
  }
}

export const generateFAQSchema = () => {
  const faqs = [
    {
      question: '專案開發需要多久時間？',
      answer: '根據專案複雜度，一般網站約需2-4週，APP開發約需6-12週，企業系統則需要2-6個月不等。'
    },
    {
      question: '如何確保專案品質？',
      answer: '我們採用敏捷開發方法，每個階段都有完整測試和客戶驗收，確保交付品質符合期待。'
    },
    {
      question: '提供哪些售後服務？',
      answer: '我們提供一年免費保固、技術支援、系統維護和更新服務，確保系統穩定運作。'
    },
    {
      question: '如何開始合作？',
      answer: '您可以透過網站聯絡表單或直接來電諮詢，我們會安排專人了解需求並提供報價。'
    }
  ]

  const faqItems = faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems
  }
}

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  }
}

export const generateWebPageSchema = (title: string, description: string, url: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    publisher: {
      '@type': 'Organization',
      name: 'PTalk'
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString()
  }
}