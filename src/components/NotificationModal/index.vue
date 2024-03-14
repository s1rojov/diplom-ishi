<script setup lang="ts">
import { toRefs, computed } from 'vue';
const emits = defineEmits(['selectedBtnClicked']);
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  isOpenModal: {
    type: Boolean,
    required: true,
  },
});
const isOpen = computed(() => props.isOpenModal);
function clickedBtn(val: string) {
  emits('selectedBtnClicked', val);
}
toRefs(props);
</script>
<template>
  <BaseModal v-model="isOpen" customClass="w-1/3 bg-white p-5">
    <div>
      <div class="flex justify-end">
        <slot name="closeBtn"></slot>
      </div>
      <p class="text-lg py-2">
        {{ props.content }}
      </p>
      <div class="flex items-center justify-between pt-5">
        <BaseButton label="Yo'q" @click="clickedBtn('no')" />
        <BaseButton label="Xa" @click="clickedBtn('yes')" />
      </div>
    </div>
  </BaseModal>
</template>
