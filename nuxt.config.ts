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

  // Image Optimization
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  // Icon Configuration - use local icons for performance
  icon: {
    serverBundle: 'auto',
    clientBundle: {
      scan: true,
    },
  },

  // Sitemap Configuration
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
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
      name: 'บริษัท อาร์.เอส.อาร์ เทค กรุ๊ป จำกัด (R.S.R Tech Group) - บริษัทรับเขียนโปรแกรม',
      description: 'บริษัท Software House ชั้นนำของไทย รับเขียนโปรแกรม รับทำเว็บไซต์ รับทำแอปพลิเคชัน iOS/Android พัฒนาซอฟต์แวร์ครบวงจร โดยทีมงานมืออาชีพ',
      url: 'https://rsrtechgroup.com',
      logo: 'https://rsrtechgroup.com/logo.jpg',
      telephone: '+66-90-570-5825',
      email: 'patarapol.r@gmail.com',
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

  // Route Rules for caching and headers
  routeRules: {
    '/llms.txt': {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    },
    // Static assets caching
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    '/images/**': {
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
      }
    },
    '/**': {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      }
    }
  },

  // Link Checker (disable in production)
  linkChecker: {
    enabled: false,
  },

  // Experimental features for performance
  experimental: {
    viewTransition: true,
    payloadExtraction: true,
  },

  // Nitro Configuration for performance
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

})