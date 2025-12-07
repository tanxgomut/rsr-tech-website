<script setup lang="ts">

const route = useRoute()

useSchemaOrg([
  defineLocalBusiness({
    '@type': 'ITService' as any,
    name: 'R.S.R Tech Group',
    url: 'https://rsrtechgroup.com',
    logo: '/logo.png',
    image: '/og-image.png',
    description: 'บริการรับเขียนโปรแกรม พัฒนา Software และ Application ทุกแพลตฟอร์ม',
    telephone: '+66-90-570-5825',
    email: 'info@rsrtechgroup.com',
    priceRange: '฿฿',

    openingHoursSpecification: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],

    address: {
      '@type': 'PostalAddress',
      streetAddress: '49/220 ซอยหทัยราษฎร์ 37',
      addressLocality: 'แขวงสามวาตะวันตก เขตคลองสามวา',
      addressRegion: 'กรุงเทพมหานคร',
      postalCode: '10510',
      addressCountry: 'TH'
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.00,
      longitude: 100.000
    },

    sameAs: [
      'https://www.facebook.com/rsrtechgroup',
      'https://line.me/ti/p/~rsrtechgroup'
    ]
  }),

  defineWebSite({
    name: 'R.S.R Tech Group'
  })
])



const links = [
  {
    label: 'ปรึกษาโปรเจกต์ฟรี',
    icon: 'i-lucide-message-circle',
    size: 'lg',
    to: 'https://line.me/ti/p/yourid',
    target: '_blank',
  },
  {
    label: 'ดูผลงานของเรา',
    to: '/#portfolio',
    variant: 'ghost',
    color: 'gray',
    icon: 'i-lucide-arrow-right',
    trailing: true,
    size: 'lg'
  }
]

const ctaLinks = [
  {
    label: 'ติดต่อเรา',
    icon: 'i-lucide-file-text',
    to: '/#contact',
    variant: 'outline',
    active: route.hash === '#contact'
  },
  {
    label: 'แอดไลน์คุยกับเรา',
    icon: 'i-lucide-message-circle',
    to: 'https://line.me/ti/p/yourid',
    target: '_blank',
    color: 'success',
    size: 'lg'
  }
]
</script>
<template>

  <UPageHero :ui="{ title: 'text-5xl sm:text-7xl text-pretty tracking-tight leading-14 sm:leading-21 font-bold text-highlighted' }"
    headline="R.S.R TECH GROUP" title="เปลี่ยนทุกไอเดีย ให้เป็นนวัตกรรมที่ใช้งานได้จริง"
    description="เราเชี่ยวชาญการพัฒนา Software และ Application คุณภาพสูง (iOS & Android) ทั้ง Front-end, Back-end และ Infrastructure พร้อมพาธุรกิจ SMEs และองค์กรขนาดใหญ่ก้าวสู่ยุค Digital Transformation อย่างมั่นคง"
    orientation="horizontal" :links="links">
    <NuxtImg src="/images/blocks/image4.png" alt="R.S.R Tech Group Digital Solutions"
      class="w-full rounded-xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800" />
  </UPageHero>

  <TechStack />

  <Services />

  <UPageCTA title="พร้อมเปลี่ยนไอเดียธุรกิจ เป็นเว็บไซต์ระดับมืออาชีพหรือยัง?"
    description="อย่ารอช้าที่จะยกระดับภาพลักษณ์แบรนด์ของคุณ ทีมงานของเราพร้อมให้คำปรึกษาและวางแผนกลยุทธ์เว็บไซต์ให้คุณฟรี"
    variant="solid" class="mt-24" :links="ctaLinks" />

  <Portfolio />

  <About />

  <Contact />

  <UPageCTA title="ได้รับความไว้วางใจจากองค์กรและธุรกิจชั้นนำ"
    description="เราภูมิใจที่ได้เป็นพาร์ทเนอร์ผู้อยู่เบื้องหลังความสำเร็จของลูกค้าหลากหลายอุตสาหกรรม ด้วยความมุ่งมั่นในการส่งมอบซอฟต์แวร์คุณภาพสูง และการดูแลที่ไม่ทอดทิ้งคุณ"
    class="mt-20" />

</template>