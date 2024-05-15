<script setup lang="ts">
import { PropType, ref } from 'vue';
const emit = defineEmits(['selected', 'update:modelValue']);
const props = defineProps({
  options: {
    type: Array as PropType<{ id: number; fullname: string, shortname: string }[]>,
    requiered: true,
  },
  modelValue: {
    type: String
  }
});
const selectedItem = ref<string>('Tashkilotingizni tanlang');
const isOpen = ref<boolean>(false);
function emitInput(event: any) {
  emit('update:modelValue', event.target.value);
}
const handleClickedItem = (item: any) => {
  isOpen.value = false;
  emit('update:modelValue', item.id);
  // emit('selected', item.id);
  selectedItem.value = item.fullname;
};
</script>
<template>
  <div class="hidden">
    <input type="text" :value="modelValue" @input="emitInput" />
  </div>
  <div class="relative">
    <div class="w-full border rounded-lg bg-[#F8F8F9] flex items-center justify-between pr-3 cursor-pointer"
      @click="isOpen = !isOpen">
      <p class="text-base text-[#575757] font-normal text-[11.91px] py-2 px-[10px]">
        {{ selectedItem }}
      </p>
      <BaseIcon name="triangle-right" class="w-3.5 h-3.5 text-[#575757]" :class="{
        'rotate-90': isOpen,
      }" />
    </div>
    <div v-if="isOpen" class="mt-2 bg-[#F8F8F9] rounded-lg border absolute w-full z-50">
      <p class="text-base text-[#575757] rounded-lg hover:bg-stone-200 transition-all cursor-pointer font-normal text-[11.91px] py-1 px-[10px]"
        v-for="(item, index) in props.options" :key="index" @click="handleClickedItem(item)">
        {{ item.fullname }}
      </p>
    </div>
  </div>
</template>
