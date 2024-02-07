<script setup lang="ts">
import BasePositionCard from 'src/components/BasePositionCard/index.vue';
const data = {
  state: '0.5',
  num: '223',
  division: "Bo'linma kiritiladi",
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
          Lavozim
          <sup>3</sup>
        </div>
        <span
          class="text-neutral-400 text-xs font-normal leading-normal tracking-wide"
          >Ushbu bo’limda katalog yaratishingiz</span
        >
      </div>
      <BaseButton label="Yaratish" />
    </div>
    <div class="grid grid-cols-3 gap-5">
      <BasePositionCard :card-data="data" v-for="item in 3" :key="item" />
    </div>
  </div>
</template>
