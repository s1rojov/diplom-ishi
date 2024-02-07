<script setup lang="ts">
// import { strictEqual } from 'assert';
import { PropType } from 'vue';
const emit = defineEmits(['update:modelValue']);
defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
  },
  modalInfo: {
    type: Array as PropType<{ label: string; value: string }[]>,
    required: true,
  },
});
function emitInput(event: any) {
  emit('update:modelValue', event);
}
const options = [
  {
    label: 'Google',
    value: 'goggle',
  },
  {
    label: 'Twitter',
    value: 'twitter',
  },
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Oracle',
    value: 'oracle',
  },
];
</script>

<template>
  <q-dialog
    :model-value="modelValue"
    :persistent="true"
    @update:model-value="emitInput"
  >
    <div class="w-1/3 bg-white p-3 relative rounded-lg">
      <div class="absolute right-5 w-fit h-fit">
        <q-btn round size="sm" class="bg-[#C49E5E]" v-close-popup>
          <q-icon name="close" color="white" />
        </q-btn>
      </div>
      <div class="pt-20">
        <div v-for="(item, index) in modalInfo" :key="index" class="pb-5">
          <q-select
            color="grey-9"
            :dense="true"
            v-model="item.value"
            :options="options"
            :label="item.label"
          />
        </div>
      </div>
    </div>
  </q-dialog>
</template>
<style>
.test {
  backdrop-filter: blur(20px);
}

.q-dialog__inner--minimized > div {
  max-width: none !important;
}

.q-body--force-scrollbar-x {
  overflow-x: hidden;
}

.q-body--force-scrollbar-y {
  overflow-y: hidden;
}
.box {
  @apply w-full px-[11px] py-2 bg-[#F8F8F8] rounded-[10px];
}

.label {
  @apply text-neutral-400 text-xs font-medium tracking-[0.44px];
}

.value {
  @apply text-sm font-normal tracking-[0.337px] text-neutral-500;
}
</style>
