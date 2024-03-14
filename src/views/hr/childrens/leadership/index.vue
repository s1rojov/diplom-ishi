<script setup lang="ts">
import BaseCard from 'src/components/BaseCard/index.vue';
import { useLeadershipFn } from 'src/views/hr/childrens/leadership/composable';
import CreateLeadershipModal from 'src/views/hr/components/CreateLeadershipModal/index.vue';
import LeadershipTable from 'src/views/hr/childrens/leadership/components/LeadershipTable/index.vue';
import NotificationModal from 'src/components/NotificationModal/index.vue';
import { storeToRefs } from 'pinia';
import { useHrStore } from 'src/views/hr/store';
import { ref } from 'vue';
const store = useHrStore();
const { isCreateModalOpen } = storeToRefs(store);
const { leadershipItems, isItemList } = useLeadershipFn();
const isOpen = ref<boolean>(false);
function test(val: string) {
  if (val === 'no') {
    isOpen.value = false;
  }
}
function selectedItem(val: string) {
  if (val === 'delete') {
    isOpen.value = true;
  }
}
</script>
<template>
  <div class="px-7 flex flex-col gap-3 pt-3">
    <div class="border bg-white border-neutral-400/40 py-3 px-4 rounded-2xl flex items-center justify-between">
      <div>
        <div class="text-zinc-950 text-lg font-semibold leading-relaxed tracking-wide">
          Rahbariyat
          <sup>3</sup>
        </div>
        <span class="text-neutral-400 text-xs font-normal leading-normal tracking-wide">Ushbu bo’limda katalog
          yaratishingiz</span>
      </div>
      <div class="flex items-center gap-2">
        <BaseIcon name="list" class="w-5 cursor-pointer h-5" :class="[isItemList ? 'text-[#C49E5E]' : 'text-neutral-400']"
          @click="isItemList = true" />
        <BaseIcon name="card" class="w-5 h-5 cursor-pointer"
          :class="[!isItemList ? 'text-[#C49E5E]' : 'text-neutral-400']" @click="isItemList = false" />
        <BaseButton @click="isCreateModalOpen = true" label="Yaratish" />
      </div>
    </div>
    <!-- modal -->
    <CreateLeadershipModal />
    <NotificationModal :isOpenModal="isOpen" content="O'chirmoqchimisiz?" @selectedBtnClicked="test">
      <template #closeBtn>
        <BaseIcon name="close" class="w-5 h-5 cursor-pointer" @click="isOpen = false" />
      </template>
    </NotificationModal>
    <div v-if="!isItemList" class="grid grid-cols-2 gap-5">
      <div v-for="(item, index) in leadershipItems" :key="index">
        <BaseCard :card-data="item" @selected-action-item="selectedItem" />
      </div>
    </div>
    <div class="h-[82vh]">
      <LeadershipTable v-if="isItemList" />
    </div>
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
