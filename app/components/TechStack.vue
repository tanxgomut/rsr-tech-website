<script setup lang="ts">
const tools = [
    {
        title: 'Backend',
        description: 'Server-side runtime & Frameworks',
        icon: 'i-lucide-server',
        stack: ['i-logos-nodejs-icon', 'i-logos-express']
    },
    {
        title: 'Database & Cloud',
        description: 'Realtime Database & Cloud Storage',
        icon: 'i-lucide-database',
        stack: ['i-logos-firebase',
            'i-logos-google-cloud',]
    },
    {
        title: 'Languages',
        description: 'Core Web Technologies',
        icon: 'i-lucide-code-2',
        stack: ['i-logos-html-5', 'i-logos-sass', 'i-logos-javascript', 'i-logos-typescript-icon']
    },
    {
        title: 'Infrastructure',
        description: 'Deployment & Containerization',
        icon: 'i-lucide-container',
        stack: ['i-logos-digital-ocean', 'i-logos-docker-icon']
    },
    {
        title: 'Design',
        description: 'UI/UX Design Tools',
        icon: 'i-lucide-palette',
        stack: ['i-logos-adobe-photoshop', 'i-logos-adobe-illustrator', 'i-logos-figma']
    },
    {
        title: 'Project Management',
        description: 'Collaboration & Communication',
        icon: 'i-lucide-kanban-square',
        stack: ['i-logos-trello', 'i-logos-slack-icon', 'i-logos-google-meet']
    }
]

const techStack = [
    'i-logos-nuxt-icon',
    'i-logos-vue',
    'i-logos-react',
    'i-logos-nextjs-icon',
    'i-logos-tailwindcss-icon',
    'i-logos-typescript-icon',
    'i-logos-javascript',
    'i-logos-nodejs-icon',
    'i-logos-express',
    'i-logos-firebase',
    'i-logos-google-cloud',
    'i-logos-postgresql',
    'i-logos-mysql',
    'i-logos-mongodb-icon',
    'i-logos-supabase-icon',
    'i-logos-digital-ocean',
    'i-logos-docker-icon',
    'i-logos-figma',
    'i-logos-adobe-photoshop',
    'i-logos-adobe-illustrator'
]
</script>

<template>

    <section id="tech-stack" class="pt-14 md:pt-18 ">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-6">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                Technologies We Use
            </h2>
            <p class="mt-4  leading-8">
                ขับเคลื่อนด้วยเทคโนโลยีระดับโลกที่เราเชี่ยวชาญ
            </p>
        </div>

        <UMarquee pause-on-hover fade class="py-10">
            <div class="flex items-center gap-12 px-6">

                <div v-for="(icon, index) in techStack" :key="index" :class="[
                    'transition-all duration-300 transform hover:scale-125 cursor-pointer rounded-lg flex items-center justify-center',
                    (icon === 'i-logos-express')
                        ? 'bg-white dark:bg-white/90 p-2 shadow-md ring-1 ring-gray-200 dark:ring-0'
                        : ''
                ]">
                    <UIcon :name="icon" class="w-10 h-10" />
                </div>

            </div>
        </UMarquee>

    </section>


    <UPageSection title="Tools & Techniques"
        description="เราเลือกใช้เครื่องมือและเทคโนโลยีที่ทันสมัยที่สุด เพื่อส่งมอบงานที่มีคุณภาพ">
        <UPageGrid>
            <UPageCard v-for="(item, index) in tools" :key="index" :title="item.title" :description="item.description"
                :icon="item.icon" variant="soft" highlight highlight-color="primary"
                class="hover:scale-102 transition-transform">

                <div class="flex flex-wrap gap-4 mt-4 pt-4 border-t-2 border-primary-100 dark:border-gray-800">

                    <div v-for="logo in item.stack" :key="logo" :class="[
                        'transition-transform duration-200 hover:scale-110 rounded flex items-center justify-center',
                        (logo === 'i-logos-express') ? 'bg-white dark:bg-white/90 p-1 shadow-sm' : ''
                    ]">
                        <UIcon :name="logo" class="w-8 h-8" />
                    </div>

                </div>

            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>