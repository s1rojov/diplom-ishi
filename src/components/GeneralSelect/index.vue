<script setup lang="ts">
import { PropType, ref } from 'vue';
const emit = defineEmits(['selected']);
const props = defineProps({
  options: {
    type: Array as PropType<{ id: number; title: string }[]>,
    requiered: true,
  },
});
// const options = ['Super admin role', 'Hr role', 'Study role'];
const selectedItem = ref<string>('Rolni tanlang');
const isOpen = ref<boolean>(false);
const handleClickedItem = (item: any) => {
  isOpen.value = false;
  emit('selected', item.id);
  selectedItem.value = item.title;
};
</script>
<template>
  <div class="relative">
    <div
      class="w-full border rounded-lg bg-[#F8F8F9] flex items-center justify-between pr-3 cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <p
        class="text-base text-[#575757] font-normal text-[11.91px] py-2 px-[10px]"
      >
        {{ selectedItem }}
      </p>
      <BaseIcon
        name="triangle-right"
        class="w-3.5 h-3.5 text-[#575757]"
        :class="{
          'rotate-90': isOpen,
        }"
      />
    </div>
    <div
      v-if="isOpen"
      class="mt-2 bg-[#F8F8F9] rounded-lg border absolute w-full z-50"
    >
      <p
        class="text-base text-[#575757] rounded-lg hover:bg-stone-200 transition-all cursor-pointer font-normal text-[11.91px] py-1 px-[10px]"
        v-for="(item, index) in props.options"
        :key="index"
        @click="handleClickedItem(item)"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>
