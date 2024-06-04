<script setup lang="ts">
defineEmits(['update:modelValue']);
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  // size: {
  //   type: String,
  //   default: 'full',
  //   validator: (value: string) => ['sm', 'md', 'full'].includes(value)
  // }
});
</script>
<template>
  <textarea rows="5"
    class="w-full border rounded-lg placeholder:text-[#575757] py-2 px-[10px] bg-[#F8F8F9] text-sm text-[#575757] placeholder:text-sm placeholder:font-normal placeholder:leading-3 outline-none focus:border-[#C49E5E]"
    :placeholder="props.placeholder" :value="props.modelValue" @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "></textarea>
</template>
<style scoped></style>
