<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const columns: FooterColumn[] = [
  {
    label: 'Quick Links',
    children: [
      {
        label: 'เทคโนโลยี',
        to: '/#tech-stack'
      },
      {
        label: 'บริการ',
        to: '/#services'
      },
      {
        label: 'ผลงาน',
        to: '/#portfolio'
      },
      {
        label: 'เกี่ยวกับเรา',
        to: '/#about'
      },
      {
        label: 'ติดต่อเรา',
        to: '/#contact'
      }
    ]
  },
  {
    label: 'ติดต่อเรา',
    children: [
      {
        label: '090-570-5825',
        to: 'tel:+66905705825',
        icon: 'i-heroicons-phone'
      },
      {
        label: 'patarapol.r@gmail.com',
        to: 'mailto:patarapol.r@gmail.com',
        icon: 'i-heroicons-envelope'
      },
      {
        label: 'LINE: @rsrtechgroup',
        to: 'https://line.me/ti/p/~rsrtechgroup',
        target: '_blank',
        icon: 'i-simple-icons-line'
      },
      {
        label: 'Facebook',
        to: 'https://www.facebook.com/rsrtechgroup',
        target: '_blank',
        icon: 'i-simple-icons-facebook'
      }
    ]
  }
]
</script>

<template>
  <UContainer>
    <UFooterColumns :columns="columns">
      <template #right>
        <div class="flex flex-col items-start gap-4 max-w-sm">
          <!-- Logo และชื่อบริษัท -->
          <div class="flex items-center gap-3">
            <NuxtImg src="/logo.jpg" alt="R.S.R Tech Group" class="h-14 rounded-full" />
            <div>
              <p class="font-bold text-lg tracking-tight">
                R.S.R <span class="text-primary-500 dark:text-primary-400">TECH GROUP</span>
              </p>
              <p class="text-xs text-muted">บริษัท อาร์.เอส.อาร์ เทค กรุ๊ป จำกัด</p>
            </div>
          </div>
          
          <!-- คำอธิบายบริษัท -->
          <p class="text-sm text-muted leading-relaxed">
            บริษัท Software House ชั้นนำของไทย รับเขียนโปรแกรม รับทำเว็บไซต์ 
            รับทำแอปพลิเคชัน iOS/Android พัฒนาซอฟต์แวร์ครบวงจร โดยทีมงานมืออาชีพ
          </p>
          
          <!-- ที่อยู่ -->
          <div class="flex items-start gap-2 text-sm text-muted">
            <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mt-0.5 shrink-0" />
            <p>49/220 ซอยหทัยราษฎร์ 37 แขวงสามวาตะวันตก เขตคลองสามวา กรุงเทพมหานคร 10510</p>
          </div>
        </div>
      </template>
    </UFooterColumns>
  </UContainer>
</template>
