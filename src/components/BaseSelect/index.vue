<script setup lang="ts">
import { PropType, toRefs, ref } from 'vue';

const emit = defineEmits(['selectedItem'])
const props = defineProps({
    defaultTitle: {
        type: String as PropType<string>,
        default: 'Select item'
    },
    options: {
        type: Array as PropType<{ label: string, value: string }[]>,
        required: true
    },
})
const selectedItemVal = ref<any>('')
function clickedItem(label: any, val: any) {
    selectedItemVal.value = label
    visibleItemsFn('close')
    emit('selectedItem', val)
}
const isVisible = ref<boolean>(false)
function visibleItemsFn(arg: string) {
    if (arg === 'close') {
        isVisible.value = false
        console.log('close');
    }
    else if (arg === 'toggle') {
        isVisible.value = !isVisible.value
        console.log('toggle');
    }
}
toRefs(props)
window.addEventListener('click', () => {
    visibleItemsFn('close')
})
</script>
<template>
    <div class="flex flex-col items-stretch">
        <div class="w-full relative bg-stone-50 rounded cursor-pointer" @click.stop="visibleItemsFn('toggle')">
            <div class="py-2.5 pl-2.5 pr-11 text-[15px] w-full">
                {{ selectedItemVal == '' ? props.defaultTitle : selectedItemVal }}
            </div>
            <BaseIcon name="triangle-right" :class="{ 'rotate-90': isVisible }"
                class="w-3.5 h-3.5 top-0 bottom-0 my-auto right-2 absolute text-neutral-500" />
        </div>
        <q-list class="z-top">
            <div v-if="isVisible" class="rounded bg-stone-50 mt-2 px-1 py-1 z-max">
                <div v-for="item, index in props.options" :key="index" @click.stop="clickedItem(item.label, item.value)"
                    class="px-1.5 rounded cursor-pointer transition-all py-2 hover:bg-white">
                    {{ item.label }}
                </div>
            </div>
        </q-list>
    </div>
</template>