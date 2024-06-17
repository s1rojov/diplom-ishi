<script setup lang="ts">
import { PropType, ref, watch, computed } from 'vue'
const emit = defineEmits(['update:modelValue']);
const open = ref<boolean>(false)
const isOpen = computed(() => open.value)
const props = defineProps({
    modelValue: {
        type: String as PropType<string>,
    }
});
function emitInput(value: any) {
    emit('update:modelValue', value);
    open.value = false
}
function openPicker() {
    // console.log('sas')
    open.value = !open.value
}
</script>

<template>
    <div class="relative">
        <div @click.stop="openPicker"
            class="w-full border cursor-pointer rounded-lg text-sm text-[#575757] py-2 px-[10px] font-normal bg-white outline-none focus:border-[#C49E5E]">
            <p>{{ modelValue ? modelValue : 'dd/mm/yyyy' }}</p>

        </div>
        <q-date minimal v-if="isOpen" mask="DD/MM/YYYY" :model-value="modelValue" @update:model-value="emitInput"
            class="absolute bottom-10" />
    </div>
</template>