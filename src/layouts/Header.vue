<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const userInfo: any = sessionStorage.getItem('userInfo')
const router = useRouter()
const visible = ref<boolean>(false)
function leaveFn() {
  sessionStorage.removeItem('userInfo')
  router.push({ name: 'Login' })
  visible.value = false
}
</script>
<template>
  <div class="py-2 border-b border-gold pr-16 flex justify-end bg-white">
    <div class="flex items-center gap-3">
      <div class="relative">
        <img src="/images/user.png" @click="visible = true" class="w-8 h-8 rounded-full cursor-pointer" alt="" />
        <div v-if="visible"
          class="px-5 mt-1  border select-none border-black/50 rounded-md z-50 py-1 absolute bg-white shadow-2xl">
          <p class="text-center cursor-pointer" @click="leaveFn"> Chiqish</p>
        </div>
      </div>
      <div>
        <p class="text-[#17181A] text-[15px] font-normal leading-[10px]">
          <!-- {{ admin.fullname }} -->
          {{ JSON.parse(userInfo).user?.fullname }}
        </p>
        <span class="text-[#5C8198] text-[11px] leading-[10px]">{{ JSON.parse(userInfo).admin ? 'HR manager' : 'Hodim'
          }}</span>
      </div>
    </div>
  </div>
</template>
