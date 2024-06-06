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
});
</script>
<template>
  <div>
    <input
      class="w-full border rounded-lg text-sm text-[#575757] font-normal leading-[0.44px] py-2 px-[10px] bg-white outline-none focus:border-[#C49E5E] placeholder:text-[#575757] placeholder:text-sm placeholder:font-normal placeholder:leading-3"
      :type="props.type" :value="props.modelValue" @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        " :placeholder="props.placeholder" />
  </div>
</template>
<style scoped></style>
