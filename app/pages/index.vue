<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl

const route = useRoute()

useSchemaOrg([
  defineLocalBusiness({
    '@type': 'ITService' as any,
    name: 'R.S.R Tech Group',
    url: siteUrl,
    logo: `${siteUrl}/logo.jpg`,
    image: `${siteUrl}/og-image.png`,
    description: 'บริการรับเขียนโปรแกรม พัฒนา Software และ Application ทุกแพลตฟอร์ม',
    telephone: '+66-90-570-5825',
    email: 'patarapol.r@gmail.com',
    priceRange: '฿฿',

    // Review Rich Results
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    },

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
    name: 'อาร์.เอส.อาร์ เทค กรุ๊ป ( R.S.R Tech Group )'
  })
])

// FAQ Schema - แยก useSchemaOrg เพื่อให้ FAQ ทำงานถูกต้อง
useSchemaOrg([
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'รับทำเว็บไซต์ราคาเท่าไหร่?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ราคาเริ่มต้นที่ 15,000 - 50,000 บาท สำหรับเว็บไซต์ทั่วไป และ 50,000 - 200,000+ บาท สำหรับระบบ E-Commerce หรือ Web Application ที่ซับซ้อน ขึ้นอยู่กับฟีเจอร์และขอบเขตงาน'
        }
      },
      {
        '@type': 'Question',
        name: 'ใช้เวลาพัฒนานานแค่ไหน?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'เว็บไซต์ทั่วไปใช้เวลาประมาณ 2-4 สัปดาห์ ส่วน Web Application หรือ Mobile App ใช้เวลาประมาณ 1-3 เดือน ขึ้นอยู่กับความซับซ้อนของโปรเจกต์'
        }
      },
      {
        '@type': 'Question',
        name: 'มีบริการดูแลหลังส่งมอบงานไหม?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'มีครับ เรามีบริการดูแลระบบ (Maintenance) รายเดือนและรายปี รวมถึง Support แก้ไขบัค อัพเดทระบบ และสำรองข้อมูลให้'
        }
      },
      {
        '@type': 'Question',
        name: 'รับทำแอปพลิเคชัน iOS และ Android ไหม?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'รับครับ เราพัฒนาแอปพลิเคชันทั้ง iOS และ Android ด้วยเทคโนโลยี Cross-platform เช่น Flutter หรือ React Native ทำให้ประหยัดค่าใช้จ่ายและเวลาในการพัฒนา'
        }
      }
    ]
  } as any
])



const links = [
  {
    label: 'ปรึกษาโปรเจกต์ฟรี',
    icon: 'i-lucide-message-circle',
    size: 'lg' as const,
    to: 'https://line.me/ti/p/yourid',
    target: '_blank',
  },
  {
    label: 'ดูผลงานของเรา',
    to: '/#portfolio',
    variant: 'ghost' as any,
    color: 'gray' as any,
    icon: 'i-lucide-arrow-right',
    trailing: true,
    size: 'lg' as any
  }
]

const ctaLinks = [
  {
    label: 'ติดต่อเรา',
    icon: 'i-lucide-file-text',
    to: '/#contact',
    variant: 'outline' as any,
    active: route.hash === '#contact'
  },
  {
    label: 'แอดไลน์คุยกับเรา',
    icon: 'i-lucide-message-circle',
    to: 'https://line.me/ti/p/yourid',
    target: '_blank',
    color: 'success' as any,
    size: 'lg' as any
  }
]
</script>
<template>

  <UPageHero
    :ui="{ title: 'text-5xl sm:text-7xl text-pretty tracking-tight leading-14 sm:leading-21 font-bold text-highlighted' }"
    headline="R.S.R TECH GROUP" title="เปลี่ยนทุกไอเดีย ให้เป็นนวัตกรรมที่ใช้งานได้จริง"
    description="เราเชี่ยวชาญการพัฒนา Software และ Application คุณภาพสูง (iOS & Android) ทั้ง Front-end, Back-end และ Infrastructure พร้อมพาธุรกิจ SMEs และองค์กรขนาดใหญ่ก้าวสู่ยุค Digital Transformation อย่างมั่นคง"
    orientation="horizontal" :links="links">
    <NuxtImg src="/images/blocks/image4.png" alt="R.S.R Tech Group Digital Solutions"
      class="w-full rounded-xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800" width="800" height="600" loading="eager" fetchpriority="high" />
  </UPageHero>

  <TechStack />

  <Services />

  <UPageCTA title="พร้อมเปลี่ยนไอเดียธุรกิจ เป็นเว็บไซต์ระดับมืออาชีพหรือยัง?"
    description="อย่ารอช้าที่จะยกระดับภาพลักษณ์แบรนด์ของคุณ ทีมงานของเราพร้อมให้คำปรึกษาและวางแผนกลยุทธ์เว็บไซต์ให้คุณฟรี"
    variant="solid" class="mt-24" :links="ctaLinks" />

  <Portfolio />

  <Review />

  <About />

  <Contact />

  <Faq />

  <UPageCTA title="ได้รับความไว้วางใจจากองค์กรและธุรกิจชั้นนำ"
    description="เราภูมิใจที่ได้เป็นพาร์ทเนอร์ผู้อยู่เบื้องหลังความสำเร็จของลูกค้าหลากหลายอุตสาหกรรม ด้วยความมุ่งมั่นในการส่งมอบซอฟต์แวร์คุณภาพสูง และการดูแลที่ไม่ทอดทิ้งคุณ"
    class="mt-20" />

</template>