<script setup lang="ts">
const features = ref([

    {
        title: 'เลขทะเบียน:',
        description: '0105567003705',
        icon: 'i-lucide-building-2',
    },
    {
        title: 'ประกอบธุรกิจ:',
        description: 'การจัดทำซอฟต์แวร์สำเร็จรูป',
        icon: 'i-lucide-layers',
    },
    {
        title: 'โทร:',
        description: '090-5705825',
        to: 'tel:0905705825',
        icon: 'i-lucide-phone',
    },
    {
        title: 'อีเมล:',
        description: 'info@rsrtechgroup.com',
        to: 'mailto:info@rsrtechgroup.com',
        icon: 'i-lucide-mail',
    },
    {
        title: 'เว็บไซต์:',
        description: 'rsrtechgroup.com',
        icon: 'i-lucide-globe',
        to: 'https://rsrtechgroup.com',
        target: '_blank'
    },
    {
        title: 'ที่อยู่:',
        description: 'สำนักงานแห่งใหญ่ ตั้งอยู่เลขที่ 49/220 ซอยหทัยราษฎร์ 37 แขวงสามวาตะวันตก เขตคลองสามวา กรุงเทพมหานคร 10510',
        icon: 'i-lucide-map-pin',
        to: 'https://maps.google.com/?q=49/220+ซอยหทัยราษฎร์+37+แขวงสามวาตะวันตก+เขตคลองสามวา+กรุงเทพมหานคร+10510',
        target: '_blank'
    }
])
</script>

<template>
    <UPageSection id="contact" title="COMPANY Information" orientation="horizontal" reverse :features="features">
        <NuxtImg src="/images/blocks/rsr.png" alt="contact" class="w-full h-[247px] md:h-[347px] rounded-lg" />
    </UPageSection>
</template>
