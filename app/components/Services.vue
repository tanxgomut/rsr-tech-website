<script setup lang="ts">
const services = ref([
    {
        title: 'Software Development',
        description: 'บริการรับเขียนโปรแกรมและพัฒนา Software ตามความต้องการของธุรกิจ',
        icon: 'i-lucide-code-2'
    },
    {
        title: 'Mobile Application',
        description: 'บริการสร้าง Application รองรับทั้งระบบ iOS และ Android อย่างมีประสิทธิภาพ',
        icon: 'i-lucide-smartphone'
    },
    {
        title: 'Web Development',
        description: 'รับทำเว็บไซต์ทุกรูปแบบ ทั้งเว็บองค์กร, E-Commerce และ Landing Page',
        icon: 'i-lucide-layout-template'
    },
    {
        title: 'Online Marketing',
        description: 'รับทำการตลาดออนไลน์ เพิ่มยอดขายและสร้างการรับรู้ให้แบรนด์ (SEO/SEM)',
        icon: 'i-lucide-trending-up'
    },
    {
        title: 'Digital Media & Ads',
        description: 'รับทำสื่อโฆษณาและกราฟิกสำหรับทุกแพลตฟอร์ม Social Media',
        icon: 'i-lucide-megaphone'
    },
    {
        title: 'Maintenance & Support',
        description: 'บริการดูแลรักษาเว็บไซต์รายปี ตรวจสอบความปลอดภัย (Security), สำรองข้อมูล (Backup) และแก้ไขปัญหาการใช้งาน',
        icon: 'i-lucide-shield-check',
    }
])

const steps = ref([
    {
        title: 'Step 1: รับข้อมูลเริ่มต้น',
        description: 'แจ้งความต้องการรายละเอียดงาน ผ่านช่องทางต่างๆ ได้ตลอด 24 ชั่วโมง',
        icon: 'i-lucide-message-square-plus'
    },
    {
        title: 'Step 2: ประเมินราคา',
        description: 'บริษัทประเมินระยะเวลาและงบประมาณเบื้องต้น พร้อมเสนอราคาในเวลาอันรวดเร็ว',
        icon: 'i-lucide-calculator'
    },
    {
        title: 'Step 3: นัดพบพร้อมเริ่มงาน',
        description: 'ท่านสามารถแจ้งนัดพบเพื่อเก็บข้อมูล เพิ่มเติม ได้ทุกสถานที่',
        icon: 'i-lucide-handshake'
    }
])
</script>

<template>
    <UPageSection id="services" title="SERVICES" headline="ยกระดับธุรกิจด้วยเว็บไซต์คุณภาพ"
        description="เราให้บริการรับทำเว็บไซต์ครบวงจร ตั้งแต่การวางกลยุทธ์ ออกแบบ พัฒนา ไปจนถึงการดูแลรักษา เพื่อให้ธุรกิจของคุณเติบโตในโลกออนไลน์"
        :features="services" />

    <UPageSection icon="i-lucide-rocket" title="HOW TO WORKS"
        description="ในยุคดิจิทัล ความเร็วและความเสถียรคือหัวใจสำคัญ ทีมงานของเราเชี่ยวชาญในการสร้างเว็บไซต์ที่ทำงานรวดเร็ว ปลอดภัย และรองรับการเติบโตของธุรกิจคุณในระยะยาว"
        :features="steps" orientation="horizontal" reverse>
        <NuxtImg src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            alt="Web Analytics Dashboard"
            class="w-full h-[500px] object-cover rounded-xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800" width="800" height="500" loading="lazy" />
    </UPageSection>
</template>