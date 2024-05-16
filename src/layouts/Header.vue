<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/views/auth/store';
const store = useAuthStore();
const { admin }: any = storeToRefs(store);
</script>
<template>
  <div class="py-2 border-b border-gold pr-16 flex justify-end bg-white">
    <div class="flex items-center gap-3">
      <img src="/images/user.png" class="w-8 h-8 rounded-full cursor-pointer" alt="" />
      <div>
        <p class="text-[#17181A] text-[15px] font-normal leading-[10px]">
          {{ admin.fullname }}
        </p>
        <span class="text-[#5C8198] text-[11px] leading-[10px]">HR Manager</span>
      </div>
    </div>
  </div>
</template>
