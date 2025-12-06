<script setup lang="ts">

const posts = ref([
    {
        title: 'Urban Streetwear Store',
        description: 'E-Commerce Website',
        image: '/images/portfolio/plo-1.png',
        // to: '/'
    },
    {
        title: 'TechFlow Solutions',
        description: 'Corporate Website',
        image: '/images/portfolio/plo-2.png',
    },
    {
        title: 'Baan & Suan Living',
        description: 'Real Estate Platform',
        image: '/images/portfolio/plo-3.png',
    },
    {
        title: 'Coffee Culture Cafe',
        description: 'Food & Beverage Website',
        image: '/images/portfolio/plo-4.png',
    },
    {
        title: 'MediCare Plus',
        description: 'Healthcare & Booking System',
        image: '/images/portfolio/plo-5.png',
    },
    {
        title: 'Future Brain EdTech',
        description: 'E-Learning Platform',
        image: '/images/portfolio/plo-6.png',
    },
    {
        title: 'Swift Logistics',
        description: 'Transportation Management System',
        image: '/images/portfolio/plo-7.png',
    },
    {
        title: 'CoinVault App',
        description: 'FinTech Dashboard',
        image: '/images/portfolio/plo-8.png',
    }
])
</script>

<template>
    <UPageSection id="portfolio" headline="Our Portfolio" title="ผลงานที่ได้รับความไว้วางใจ"
        description="เบื้องหลังความสำเร็จของธุรกิจหลากหลายรูปแบบ ตั้งแต่ Startups ไปจนถึงองค์กรขนาดใหญ่ ที่เลือกใช้บริการออกแบบและพัฒนาเว็บไซต์กับเรา" />

    <UBlogPosts :posts="posts" />
</template>