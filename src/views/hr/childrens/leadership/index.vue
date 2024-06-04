<script setup lang="ts">
import BaseLeadershipCard from 'src/components/BaseLeadershipCard/index.vue'
import NotificationModal from 'src/components/NotificationModal/index.vue'
import LeadershipModal from 'src/components/LeadershipModal/index.vue'
import { useLeadershipFn } from './composable'
import { storeToRefs } from 'pinia';
import { useLeaderStore } from './store';
const store = useLeaderStore()
const { notifyModal } = storeToRefs(store)
const { data, deleteItemFn, updateItemFn, actionFn, leader }: any = useLeadershipFn()

</script>
<template>
  <div class="px-7 flex flex-col gap-3 pt-3">
    <div class="border bg-white border-neutral-400/40 py-3 px-4 rounded-2xl flex items-center justify-between">
      <div>
        <div class="text-zinc-950 text-lg font-semibold leading-relaxed tracking-wide">
          Rahbariyat
          <sup>{{ data.length }}</sup>
        </div>
        <span class="text-neutral-400 text-xs font-normal leading-normal tracking-wide">Ushbu bo’limda katalog
          yaratishingiz</span>
      </div>
      <div class="flex items-center gap-2">
        <BaseButton label="Yaratish" class="px-16" />
      </div>
    </div>
    <div class="h-[73vh] grid grid-cols-3">
      <BaseLeadershipCard v-for="item, index in data" :data="item" :key="index" @update="updateItemFn"
        @delete="deleteItemFn" />
    </div>
    <NotificationModal :isOpenModal="notifyModal" content="Ro'yhatdan o'chirmoqchimisiz?"
      @selectedBtnClicked="actionFn">
    </NotificationModal>
    <LeadershipModal :data="leader" />
  </div>
</template>
<style scoped>
.custom-border {
  border: 1px dashed #c49e5e;
}

.scrollbarActive::-webkit-scrollbar {
  @apply ease-in duration-300;
  width: 2px;
  height: 0;
  /* display: none; */
  opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
  @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
  @apply bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>
