<script setup lang="ts">
// import { strictEqual } from 'assert';
import { PropType } from 'vue';
const emit = defineEmits(['update:modelValue']);
defineProps({
    closable: {
        type: Boolean as PropType<boolean>,
        default: true
    },
    modelValue: {
        type: Boolean as PropType<boolean>
    },
    customClass: {
        type: [String, Array] as PropType<string | string[]>,
        default: 'bg-[#444343]'
    },
    closeBtn: {
        type: Boolean as PropType<boolean>,
        default: true
    },
});
function emitInput(event: any) {
    emit('update:modelValue', event);
}
</script>

<template>
    <q-dialog :model-value="modelValue" :persistent="closable" @update:model-value="emitInput">
        <div :class="customClass" class="scrollbarActive">
            <slot></slot>
        </div>
    </q-dialog>
</template>
<style>
.test {
    backdrop-filter: blur(20px);
}

.q-dialog__inner--minimized>div {
    max-width: none !important;
}

.q-body--force-scrollbar-x {
    overflow-x: hidden;
}

.q-body--force-scrollbar-y {
    overflow-y: hidden;
}

.scrollbarActive::-webkit-scrollbar {
    @apply ease-in duration-300;
    width: 2px;
    height: 0;
    /* display: none; */
    opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
    @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
    @apply bg-slate-400 hover:bg-slate-500 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>
