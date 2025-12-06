<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute()

const sectionTitles: Record<string, string> = {
  '#tech-stack': 'Technologies',
  '#services': 'Our Services',
  '#portfolio': 'Portfolio',
  '#about': 'About Us',
  '#contact': 'Contact Us'
}

const pageTitle = computed(() => {
  if (route.hash && sectionTitles[route.hash]) {
    return sectionTitles[route.hash]
  }
  return null 
})

useHead({
  title: pageTitle 
})

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Technologies',
        to: '/#tech-stack',
        icon: 'i-lucide-cpu',
        active: route.hash === '#tech-stack'
    }, {

        label: 'services',
        to: '/#services',
        icon: 'i-lucide-book-open',
        active: route.hash === '#services'
    },
    {
        label: 'Portfolio',
        to: '/#portfolio',
        icon: 'i-lucide-gallery-thumbnails',
        active: route.hash === '#portfolio'
    },
    {
        label: 'About Us',
        icon: 'i-lucide-users',
        to: '/#about',
        active: route.hash === '#about'
    }, {
        label: 'Contact',
        icon: 'i-lucide-mail',
        to: '/#contact',
        active: route.hash === '#contact'
    }])

</script>
<template>
    <div>
        <UBanner icon="i-lucide-info" title="ใหม่! บริการทำเว็บ E-Commerce สำเร็จรูป ราคาเริ่มต้นเบาๆ"
            :actions="[{ label: 'ดูรายละเอียด', to: '/#services', variant: 'outline', size: 'xs' }]" close
            close-icon="i-lucide-x" />

        <UHeader title="R.S.R Tech Group">

            <template #left>
                <NuxtLink to="/">
                    <Logo  />
                </NuxtLink>
            </template>

            <UNavigationMenu :items="items" />

            <template #right>
                <UColorModeButton />
                <UTooltip text="แอดไลน์คุยกับเรา">
                    <UButton color="neutral" variant="ghost" to="https://line.me/ti/p/" target="_blank"
                        icon="i-simple-icons-line" aria-label="LINE" />
                </UTooltip>
            </template>

            <template #body>
                <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
            </template>

        </UHeader>

        <UMain>
            <UContainer>
                <slot />
            </UContainer>
        </UMain>

        <USeparator :avatar="{
            src: '/logo.png',
            alt: 'R.S.R Tech Group',
            size: 'md'
        }" class="mt-16" />

        <UFooter>

            <template #left>
                <p class="text-muted text-sm">
                    Copyright © {{ new Date().getFullYear() }}
                </p>
            </template>

            <template #right>
                <UButton icon="i-simple-icons-facebook" color="neutral" variant="ghost"
                    to="https://www.facebook.com/ชื่อเพจของคุณ" target="_blank" aria-label="Facebook" />

                <UButton icon="i-simple-icons-line" color="neutral" variant="ghost" to="https://line.me/ti/p/"
                    target="_blank" aria-label="LINE" />

                <UButton icon="i-lucide-mail" color="neutral" variant="ghost" to="mailto:info@rsrtechgroup.com"
                    aria-label="Email" />
            </template>

        </UFooter>
    </div>
</template>