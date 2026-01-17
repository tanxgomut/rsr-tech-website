<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'รับทำเว็บไซต์ราคาเท่าไหร่?',
    icon: 'i-heroicons-currency-dollar',
    content: 'ราคาเริ่มต้นที่ 15,000 - 50,000 บาท สำหรับเว็บไซต์ทั่วไป และ 50,000 - 200,000+ บาท สำหรับระบบ E-Commerce หรือ Web Application ที่ซับซ้อน ขึ้นอยู่กับฟีเจอร์และขอบเขตงาน สามารถปรึกษาฟรีเพื่อประเมินราคาที่แน่นอน'
  },
  {
    label: 'ใช้เวลาพัฒนานานแค่ไหน?',
    icon: 'i-heroicons-clock',
    content: 'เว็บไซต์ทั่วไปใช้เวลาประมาณ 2-4 สัปดาห์ ส่วน Web Application หรือ Mobile App ใช้เวลาประมาณ 1-3 เดือน ขึ้นอยู่กับความซับซ้อนของโปรเจกต์'
  },
  {
    label: 'มีบริการดูแลหลังส่งมอบงานไหม?',
    icon: 'i-heroicons-wrench-screwdriver',
    content: 'มีครับ เรามีบริการดูแลระบบ (Maintenance) รายเดือนและรายปี รวมถึง Support แก้ไขบัค อัพเดทระบบ และสำรองข้อมูลให้'
  },
  {
    label: 'รับทำแอปพลิเคชัน iOS และ Android ไหม?',
    icon: 'i-heroicons-device-phone-mobile',
    content: 'รับครับ เราพัฒนาแอปพลิเคชันทั้ง iOS และ Android ด้วยเทคโนโลยี Cross-platform เช่น Flutter หรือ React Native ทำให้ประหยัดค่าใช้จ่ายและเวลาในการพัฒนา'
  },
  {
    label: 'สามารถปรึกษาก่อนเริ่มโปรเจกต์ได้ไหม?',
    icon: 'i-heroicons-chat-bubble-left-right',
    content: 'ได้ครับ เราให้บริการปรึกษาฟรี เพื่อวิเคราะห์ความต้องการและประเมินขอบเขตงาน สามารถติดต่อผ่าน LINE หรือโทรศัพท์ได้ตลอด'
  }
])
</script>

<template>
  <UContainer id="faq" >

      <UPageSection  headline="FAQ" title="คำถามที่พบบ่อย"
        description="รวมคำตอบสำหรับคำถามที่ลูกค้าถามบ่อยเกี่ยวกับบริการของเรา" />
    
    <div class="max-w-3xl mx-auto">
      <UAccordion 
        :items="items" 
      />
    </div>
  </UContainer>
</template>
