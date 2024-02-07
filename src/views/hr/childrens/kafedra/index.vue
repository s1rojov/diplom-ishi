<script setup lang="ts">
import DirectionCard from 'src/components/DirectionCard/index.vue';
import AllCreateModal from 'src/components/AllCreateModal/index.vue';
import { storeToRefs } from 'pinia';
import { useHrStore } from 'src/views/hr/store';
const store = useHrStore();
const { isKafedraModal } = storeToRefs(store);
const data = {
  name: 'Axborot tizimlari va texnologiyalari',
  position: '4645454520',
  email: 'info@example.com',
};
const createModalInfo = {
  name: 'direction',
  info: {
    nameLabel: 'Nomi',
    placeholderName: 'Kafedra nomini kiriting',
    positionLabel: 'Kod',
    placeholderPosition: 'Kafedra kodini yozing',
    leadershipLabel: "Bo'linma",
    placeholderLeadership: "Bo'linma tanlang",
  },
};
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
          Kafedra
          <sup>3</sup>
        </div>
        <span
          class="text-neutral-400 text-xs font-normal leading-normal tracking-wide"
          >Ushbu bo’limda katalog yaratishingiz</span
        >
      </div>
      <BaseButton label="Yaratish" @click="isKafedraModal = true" />
    </div>
    <AllCreateModal :modal-info="createModalInfo" v-model="isKafedraModal" />
    <div class="grid grid-cols-2 gap-5">
      <DirectionCard :card-data="data" v-for="item in 2" :key="item" />
    </div>
  </div>
</template>
