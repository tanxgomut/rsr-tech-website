<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl

const route = useRoute()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - อาร์.เอส.อาร์ เทค กรุ๊ป ( R.S.R Tech Group )` : 'บริษัท อาร์.เอส.อาร์ เทค กรุ๊ป จำกัด ( R.S.R Tech Group ) - รับเขียนโปรแกรม พัฒนา Software';
  },
  htmlAttrs: {
    lang: 'th'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: `${siteUrl}${route.path}` }
  ]
})

useSeoMeta({
  // Default SEO - will be overridden per-page
  title: 'รับเขียนโปรแกรม พัฒนา Software และ Mobile App ครบวงจร',
  description: 'บริษัท Software House ชั้นนำ รับเขียนโปรแกรม สร้างเว็บ บริการรับทำเว็บไซต์ แอปพลิเคชัน (iOS/Android) และระบบ E-Commerce โดยทีมงานมืออาชีพ พร้อมให้คำปรึกษาเพื่อยกระดับธุรกิจของคุณ',
  // OG defaults
  ogTitle: 'บริษัท อาร์.เอส.อาร์ เทค กรุ๊ป จำกัด ( R.S.R Tech Group ) - รับเขียนโปรแกรม รับทำเว็บไซต์ รับทำแอป',
  ogDescription: 'บริษัท Software House ไทย รับเขียนโปรแกรม รับทำเว็บไซต์ รับทำแอปพลิเคชัน iOS/Android พัฒนาซอฟต์แวร์ครบวงจร',
  ogImage: `${siteUrl}/og-image.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogType: 'website',
  ogUrl: `${siteUrl}${route.path}`,
  ogSiteName: 'บริษัท อาร์.เอส.อาร์ เทค กรุ๊ป จำกัด ( R.S.R Tech Group )',
  ogLocale: 'th_TH',
  // Twitter defaults
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/og-image.png`,
  twitterTitle: 'บริษัท อาร์.เอส.อาร์ เทค กรุ๊ป จำกัด ( R.S.R Tech Group ) - รับเขียนโปรแกรม รับทำเว็บไซต์ รับทำแอป',
  twitterDescription: 'บริษัท Software House ไทย รับเขียนโปรแกรม รับทำเว็บไซต์ รับทำแอปพลิเคชัน iOS/Android พัฒนาซอฟต์แวร์ครบวงจร',
  // Other
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
})

</script>
<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieConsent />
  </UApp>
</template>
