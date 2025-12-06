<script setup lang="ts">
const features = ref([
    {
        title: 'ที่อยู่:',
        description: 'สำนักงานแห่งใหญ่ ตั้งอยู่เลขที่ 49/220 ซอยหทัยราษฎร์ 37 แขวงสามวาตะวันตก เขตคลองสามวา กรุงเทพมหานคร',
        icon: 'i-lucide-map-pin',
    },
    {
        title: 'โทร:',
        description: '090-5705825',
        icon: 'i-lucide-phone',
    },
    {
        title: 'อีเมล:',
        description: 'info@rsrtechgroup.com',
        icon: 'i-lucide-mail',
    },
    {
        title: 'เว็บไซต์:',
        description: 'rsrtechgroup.com',
        icon: 'i-lucide-globe',
        to: 'https://rsrtechgroup.com',
        target: '_blank'
    }
])
</script>

<template>
    <UPageSection id="contact" title="COMPANY Information" orientation="horizontal" reverse :features="features">
        <NuxtImg src="/images/blocks/rsr.png"  alt="contact" class="w-full h-[247px] md:h-[347px] rounded-lg" />
    </UPageSection>
</template>
