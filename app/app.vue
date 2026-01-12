<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl

const route = useRoute()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - R.S.R Tech Group` : 'R.S.R Tech Group - รับเขียนโปรแกรม พัฒนา Software และ Mobile App';
  },
  htmlAttrs: {
    lang: 'th'
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: `${siteUrl}${route.path}` }
  ]
})

useSeoMeta({
  // Default SEO - will be overridden per-page
  title: 'รับเขียนโปรแกรม พัฒนา Software และ Mobile App ครบวงจร',
  description: 'บริษัท Software House ชั้นนำ บริการรับทำเว็บไซต์ แอปพลิเคชัน (iOS/Android) และระบบ E-Commerce โดยทีมงานมืออาชีพ พร้อมให้คำปรึกษาเพื่อยกระดับธุรกิจของคุณ',
  // OG defaults
  ogTitle: 'R.S.R Tech Group - ผู้นำด้าน Digital Transformation',
  ogDescription: 'เชี่ยวชาญ Front-end, Back-end, Infrastructure พัฒนาได้หลากหลาย ตอบโจทย์ทุกธุรกิจ',
  ogImage: `${siteUrl}/og-image.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogType: 'website',
  ogUrl: `${siteUrl}${route.path}`,
  ogSiteName: 'R.S.R Tech Group',
  ogLocale: 'th_TH',
  // Twitter defaults
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/og-image.png`,
  twitterTitle: 'R.S.R Tech Group - ผู้นำด้าน Digital Transformation',
  twitterDescription: 'บริษัท Software House ชั้นนำ บริการรับเขียนโปรแกรม พัฒนา Software และ Application',
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
