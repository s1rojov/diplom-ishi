<script setup lang="ts">
// import CreateModal from 'src/views/hr/components/CreateModal/index.vue';
import BaseDivisionCard from 'src/components/BaseDivisonCard/index.vue';
import AllCreateModal from 'src/components/AllCreateModal/index.vue';
import { storeToRefs } from 'pinia';
import { useHrStore } from 'src/views/hr/store';
const store = useHrStore();
const { isDepartmentModal } = storeToRefs(store);
const data = {
  img: '/images/user.png',
  name: "O'quv-uslubiy bo'limi",
  position: 'Test',
  email: 'info@example.com',
};
const createModalInfo = {
  name: 'department',
  info: {
    nameLabel: 'Nomi',
    placeholderName: "Bo'lim nomini kiriting",
    positionLabel: 'Lavozimi',
    placeholderPosition: 'Lavozimni tanlang',
    leadershipLabel: 'Rahbariyat',
    placeholderLeadership: 'Rahbariyat tanlang',
  },
};
function test(val: any) {
  console.log(val);
}
</script>
<template>
  <div class="px-7 flex flex-col gap-3 pt-3">
    <div
      class="border border-neutral-400/40 py-3 px-4 rounded-2xl flex items-center justify-between"
    >
      <div>
        <div
          class="text-zinc-950 text-lg font-semibold leading-relaxed tracking-wide"
        >
          Bo'lim
          <sup>3</sup>
        </div>
        <span
          class="text-neutral-400 text-xs font-normal leading-normal tracking-wide"
          >Ushbu bo’limda katalog yaratishingiz</span
        >
      </div>
      <BaseButton label="Yaratish" @click="isDepartmentModal = true" />
    </div>
    <!-- <CreateModal /> -->
    <AllCreateModal
      v-model="isDepartmentModal"
      :modalInfo="createModalInfo"
      @return-all-data="test"
    />
    <div class="grid grid-cols-2 gap-5">
      <BaseDivisionCard :card-data="data" v-for="item in 2" :key="item" />
    </div>
  </div>
</template>
