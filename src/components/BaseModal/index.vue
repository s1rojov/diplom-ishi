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
        <div :class="customClass">
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
</style>
