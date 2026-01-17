<script setup lang="ts">
interface ReviewItem {
  name: string
  avatar: string
  rating: number
  description: string
  company?: string
}

const reviews = ref<ReviewItem[]>([
  {
    name: 'คุณสมชาย วงศ์สวัสดิ์',
    avatar: 'https://ui-avatars.com/api/?name=S&background=0ea5e9&color=fff&size=80',
    rating: 5,
    description: 'ทีมงานมืออาชีพมาก ส่งงานตรงเวลา ระบบที่ทำมาใช้งานง่าย ลูกค้าใช้งานได้สะดวก แนะนำเลยครับ',
    company: 'ABC Trading Co., Ltd.'
  },
  {
    name: 'คุณมาลี รัตนกุล',
    avatar: 'https://ui-avatars.com/api/?name=M&background=8b5cf6&color=fff&size=80',
    rating: 5,
    description: 'ประทับใจบริการมากค่ะ ตั้งแต่รับ brief จนส่งมอบงาน ทีมงานติดตามและอัพเดทงานตลอด ดูแลหลังขายดีมาก',
    company: 'Fashion Hub'
  },
  {
    name: 'คุณวิชัย พงษ์พันธ์',
    avatar: 'https://ui-avatars.com/api/?name=W&background=0ea5e9&color=fff&size=80',
    rating: 5,
    description: 'ทำ Mobile App ให้บริษัท ใช้งานได้ดีมาก ลูกค้าชอบ ทีมงานแก้ไขงานไวและใส่ใจรายละเอียด',
    company: 'Smart Logistics'
  },
  {
    name: 'คุณนภา ศรีสุข',
    avatar: 'https://ui-avatars.com/api/?name=N&background=f59e0b&color=fff&size=80',
    rating: 5,
    description: 'ใช้บริการทำเว็บไซต์ E-Commerce ผลงานออกมาสวยงาม ทันสมัย ลูกค้าเพิ่มขึ้นเยอะมากค่ะ',
    company: 'Beauty Store Online'
  }
])

const getStars = (rating: number) => Array.from({ length: 5 }, (_, i) => i < rating)
</script>

<template>
  <UContainer id="reviews" class="py-12">
    <UPageSection headline="Review" title="ลูกค้าของเราพูดถึงเรา"
      description="ความคิดเห็นจากลูกค้าที่ไว้วางใจใช้บริการ" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="(review, index) in reviews" 
        :key="index"
        class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6"
      >
        <UUser
    :name="review.name"
    :description="review.company"
    :avatar="{
      src: review.avatar,
      icon: 'i-lucide-image',
      alt: review.name + ' ' + review.company
    }"
    
  />
        
        <!-- Stars -->
        <div class="flex gap-0.5 mb-3 mt-3">
          <UIcon 
            v-for="(filled, i) in getStars(review.rating)" 
            :key="i"
            name="i-heroicons-star-solid"
            :class="filled ? 'text-yellow-400' : 'text-gray-300'"
            class="w-4 h-4"
          />
        </div>
        
        <!-- Description -->
        <p class="text-sm text-muted leading-relaxed">
          {{ review.description }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
