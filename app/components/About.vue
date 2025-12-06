<script setup lang="ts">

const description = ref(
    `R.S.R บริการรับเขียนโปรแกรม พัฒนา Software และ Application ทุกแพลตฟอร์มคุณภาพสูงทั้ง iOS และ Android ทางทีมงานของบริษัท อาร์.เอส.อาร์ เทค กรุ๊ป จำกัด เราเชี่ยวชาญ Front-end, Back-end, Infrastructure พัฒนาได้หลากหลาย ตอบโจทย์ความต้องการทุกธุรกิจ ช่วยยกระดับธุรกิจของคุณสู่ยุค Digital Transformation ไม่ว่าจะเป็นบริษัทเอกชน ขนาดเล็ก ขนาดใหญ่ หรือ SMEs เรายินดีให้คำปรึกษา และดูแลธุรกิจของคุณอย่างเต็มที่`
)

const mission = ref([
    {
        title: 'Quality & Efficiency',
        description: 'พัฒนาคุณภาพ ประสิทธิภาพ และยุทธวิธีการบริการของแต่ละธุรกิจ ให้สามารถแข่งขันได้อย่างมีประสิทธิภาพ',
        icon: 'i-lucide-trending-up'
    },
    {
        title: 'Modern Technology',
        description: 'พัฒนาระบบการบริหารจัดการและระบบการให้บริการ โดยเทคโนโลยีที่ทันสมัย เพื่อตอบสนองความต้องการของลูกค้าและทำให้ลูกค้าเกิดความพึงพอใจสูงสุด',
        icon: 'i-lucide-cpu'
    },
    {
        title: 'People Development',
        description: 'ให้ความสำคัญในการพัฒนาคุณภาพ ประสิทธิภาพ ของพนักงานและบุคลากร ให้มีศักยภาพและความรับผิดชอบต่องานและลูกค้า',
        icon: 'i-lucide-users'
    },
    {
        title: 'New Opportunities',
        description: 'แสวงหาโอกาสใหม่ทางธุรกิจ เพื่ออนาคต และการสร้างมูลค่าเพิ่มที่เหมาะสม',
        icon: 'i-lucide-lightbulb'
    },
    {
        title: 'Innovation & Creativity',
        description: 'สร้างสรรค์นวัตกรรมและโซลูชันดิจิทัลใหม่ๆ อย่างต่อเนื่อง เพื่อเพิ่มขีดความสามารถในการแข่งขันและสร้างความแตกต่างให้กับธุรกิจของลูกค้า',
        icon: 'i-lucide-sparkles'
    },
    {
        title: 'Security & Trust',
        description: 'ยกระดับมาตรฐานความปลอดภัยของข้อมูลและระบบสารสนเทศ เพื่อสร้างความเชื่อมั่นสูงสุด และความยั่งยืนให้กับองค์กรของลูกค้า',
        icon: 'i-lucide-shield-check'
    }
])

</script>

<template>
    <UPageSection id="about" title="ABOUT COMPANY" icon="i-lucide-building-2" :description="description" orientation="horizontal"
        reverse>
        <NuxtImg src="/images/blocks/about.png"
            alt="Business Partnership" class="w-full h-[400px] object-cover rounded-xl shadow-lg" />
    </UPageSection>

    <UPageCTA  title="VISION" description="ผลักดันให้ธุรกิจทุกคนและทุกองค์กรได้ประสบความสำเร็จด้วยเทคโนโลยี"
        icon="i-lucide-eye" orientation="horizontal" class="rounded-none">
        <NuxtImg src="/images/blocks/vision.png"
            alt="Future Technology"
            class="w-full h-[300px] object-cover rounded-xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-800" />
    </UPageCTA>

    <UPageSection title="MISSION" description="พันธกิจของเราคือการมุ่งมั่นพัฒนาในทุกด้านเพื่อความสำเร็จของลูกค้า"
        :features="mission" />
</template>
