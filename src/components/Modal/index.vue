<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['downloadImg'])
const imageSrc = ref<string>('')
function handleFileChange(event: any) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      imageSrc.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
  emit('downloadImg', event.target.files)
}
</script>

<template>
  <div
    class="absolute backdrop-blur-[6.5px] left-0 top-0 w-full h-[100vh] bg-[#07070766] flex justify-center items-center">
    <div class="w-[572px] h-5/6 bg-white border border-[#EEEEF0] rounded-[30px] p-5 relative">
      <!-- close btn -->
      <div>
        <BaseIcon class="w-6 h-6 absolute right-5 cursor-pointer" name="close" />
      </div>
      <!-- form image -->
      <div class="flex justify-center mt-7">
        <label for="file" class="cursor-pointer">
          <div
            class="bg-[url('/icons/img.svg')] bg-center bg-no-repeat w-16 h-16 rounded-lg border-[#C49E5E] border-dashed border-[1.643px] mb-1 overflow-hidden">
            <img :src="imageSrc" alt="img" v-if="imageSrc" class="object-cover w-full h-full p-1 rounded-lg" />
          </div>
        </label>
        <input ref="inputFile" type="file" @change="handleFileChange" class="hidden" id="file" />
      </div>
      <!-- for inputs -->
      <div>
        <div class="flex flex-col">
          <label for="name">F.I.SH</label>
          <input type="text" id="name" class="input" placeholder="Ism sharifi">
        </div>
        <div class="flex flex-col mt-[14px]">
          <label for="position">Lavozimi</label>
          <input type="text" id="position" class="input" placeholder="Lavozimini kiriting">
        </div>
        <!-- min inputs -->
        <div class="flex gap-[10px] mt-[14px]">
          <div class="flex flex-col">
            <label for="phone">Telefon</label>
            <input type="text" id="phone" class="min-input" placeholder="Telefon kiriting">
          </div>
          <div class="flex flex-col">
            <label for="email">Pochta</label>
            <input type="email" id="email" class="min-input" placeholder="Pochta kiriting">
          </div>
          <div class="flex flex-col">
            <label for="text">Qabul kunlari</label>
            <input type="text" id="text" class="min-input" placeholder="Qabul kunlarini kiriting">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.input {
  @apply mt-[10px] px-[10px] py-2 w-full border border-[#EEEEF0] rounded-lg outline-none focus:border-[#C49E5E] bg-[#F8F8F9] text-[#757575] text-xs font-normal tracking-[0.437px]
}

.min-input {
  @apply mt-[10px] px-[10px] py-2 w-[170px] border border-[#EEEEF0] rounded-lg outline-none focus:border-[#C49E5E] bg-[#F8F8F9] text-[#757575] text-xs font-normal tracking-[0.437px]
}

label {
  @apply text-[12px] font-medium tracking-[0.44px] text-[#757575]
}
</style>