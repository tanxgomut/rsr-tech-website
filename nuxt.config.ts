// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://rsrtechgroup.com',
    }
  },

  site: {
    url: 'https://rsrtechgroup.com',
    name: 'R.S.R Tech Group - รับเขียนโปรแกรม พัฒนา Software',
    description: 'บริษัท Software House ชั้นนำ บริการรับทำเว็บไซต์ แอปพลิเคชัน (iOS/Android) และระบบ E-Commerce โดยทีมงานมืออาชีพ',
    defaultLocale: 'th',
  },

  sitemap: {
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1 },
    ],
    exclude: ['/api/**'],
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/_nuxt/'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/'],
      },
      {
        userAgent: 'Anthropic-AI',
        allow: ['/'],
      },
    ],
    sitemap: 'https://rsrtechgroup.com/sitemap.xml',
  },

  ogImage: {
    enabled: true,
    defaults: {
      width: 1200,
      height: 630,
    },
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'R.S.R Tech Group',
      description: 'บริษัท Software House ชั้นนำ บริการรับเขียนโปรแกรม พัฒนา Software และ Application ทุกแพลตฟอร์ม',
      url: 'https://rsrtechgroup.com',
      logo: 'https://rsrtechgroup.com/logo.png',
      telephone: '+66-90-570-5825',
      email: 'info@rsrtechgroup.com',
      address: {
        streetAddress: '49/220 ซอยหทัยราษฎร์ 37',
        addressLocality: 'แขวงสามวาตะวันตก เขตคลองสามวา',
        addressRegion: 'กรุงเทพมหานคร',
        postalCode: '10510',
        addressCountry: 'TH',
      },
      geo: {
        latitude: 13.00,
        longitude: 100.000,
      },
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/rsrtechgroup',
        'https://line.me/ti/p/~rsrtechgroup',
      ],
      priceRange: '฿฿',
    },
  },

  linkChecker: {
    enabled: false,
  },

})