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

  // seo

  site: {
    url: 'https://rsrtechgroup.com', // ใส่โดเมนจริงของคุณตรงนี้
    name: 'R.S.R Tech Group',
    description: 'รับเขียนโปรแกรม พัฒนา Software และ Application',
    defaultLocale: 'th',
    trailingSlash: false
  },

  // robots: {
  //   disallow: ['/api'],
  // },

  sitemap: {
    sources: ['/api/sitemap'],
  },


})