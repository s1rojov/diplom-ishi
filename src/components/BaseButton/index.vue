<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps({
  label: {
    type: String,
    defalt: '',
  },
});
toRefs(props);
</script>
<template>
  <q-btn :label="props.label" no-caps class="bg-[#C49E5E] text-white w-full rounded-lg" />
</template>
