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
      <div class="flex justify-between items-center">
        <p class="text-base select-none py-2">
          {{ props.content }}
        </p>
        <BaseIcon @click="clickedBtn('close')" name="close" class="cursor-pointer w-6 h-6" />
      </div>
      <div class="grid grid-cols-2 gap-5 mt-5">
        <BaseButton label="Yo'q" @click="clickedBtn('no')" />
        <BaseButton label="Xa" @click="clickedBtn('yes')" />
      </div>
    </div>
  </BaseModal>
</template>
