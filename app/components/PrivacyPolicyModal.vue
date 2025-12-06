<script setup lang="ts">

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue', 'confirm'])

const isPolicyChecked = ref(false)

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

watch(() => props.modelValue, (val) => {
  if (val) isPolicyChecked.value = false
})

const handleConfirm = () => {
  if (isPolicyChecked.value) {
    emit('confirm')
    isOpen.value = false
  }
}
</script>

<template>
  <UModal 
    v-model:open="isOpen" 
    :dismissible="false" 
    title="นโยบายความเป็นส่วนตัว"
    description="กรุณาอ่านและยอมรับเงื่อนไขเพื่อดำเนินการต่อ"
    :ui="{ content: 'md:max-w-3xl' }"
  >
    
    <template #body>
      <div class="h-64 overflow-y-auto text-sm text-gray-600 dark:text-gray-300 space-y-4 pr-2">
        <p><strong>1. การเก็บรวบรวมข้อมูล</strong><br>
          เราเก็บรวบรวมข้อมูลเพื่อเพิ่มประสิทธิภาพในการให้บริการ และมอบประสบการณ์ที่ดีที่สุดให้กับคุณ ข้อมูลที่เราเก็บอาจรวมถึง Cookies, IP Address และข้อมูลการใช้งานเว็บไซต์
        </p>
        <p><strong>2. การนำข้อมูลไปใช้</strong><br>
          ข้อมูลของคุณจะถูกนำไปวิเคราะห์เพื่อพัฒนาเว็บไซต์ ปรับปรุงเนื้อหา และนำเสนอโฆษณาที่เหมาะสมกับความสนใจของคุณ
        </p>
        <p><strong>3. ความปลอดภัย</strong><br>
          เรามีมาตรการรักษาความปลอดภัยที่เข้มงวด เพื่อป้องกันไม่ให้ข้อมูลของคุณรั่วไหล หรือถูกนำไปใช้โดยไม่ได้รับอนุญาต
        </p>
        <p><strong>4. สิทธิของคุณ</strong><br>
           คุณสามารถเลือกที่จะ "ปฏิเสธ" การให้ข้อมูลคุกกี้ได้ แต่อาจส่งผลต่อการใช้งานบางฟังก์ชันบนเว็บไซต์ของเรา
        </p>
        <p class="text-xs text-gray-400 mt-4">
           *กรุณาอ่านและทำความเข้าใจนโยบายก่อนกดยอมรับ
        </p>
      </div>
    </template>

    <template #footer>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
        <UCheckbox 
          v-model="isPolicyChecked" 
          name="policy" 
          label="ฉันได้อ่านและยอมรับนโยบาย" 
        />
        <div class="flex gap-2 justify-end w-full sm:w-auto">
          <UButton color="neutral" variant="ghost" label="ยกเลิก" @click="isOpen = false" />
          
          <UButton 
            color="primary" 
            variant="solid" 
            label="ยืนยันการยอมรับ"
            :disabled="!isPolicyChecked" 
            @click="handleConfirm"
          />
        </div>
      </div>
    </template>

  </UModal>
</template>