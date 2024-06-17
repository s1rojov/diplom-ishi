<script setup lang="ts">
import { toRefs } from 'vue'
import BaseButton from 'src/components/BaseButton/index.vue'
const emit = defineEmits(['update', 'delete'])
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
toRefs(props)
const handeClicked = (val: string, id: any) => {
    if (val === 'update') emit('update', id)
    if (val === 'delete') emit('delete', id)
}
</script>
<template>
    <div class="bg-white rounded-2xl h-52 relative p-4 border border-gray-400/opacity-20">
        <div v-if="data?.department">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Bo'lim nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.department }}
            </p>
        </div>
        <div v-else>
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Kafedra nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.kafedra }}
            </p>
        </div>
        <div class="mt-3">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Lavozim nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.name }}
            </p>
        </div>
        <div class="mt-3">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Lavozimning umumiy soni:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.count }}
            </p>
        </div>

        <div class="grid grid-cols-2 gap-5 bottom-4 w-full left-0 absolute px-4">
            <BaseButton label="Tahrirlash" class="w-full" @click="handeClicked('update', data?.id)" />
            <BaseButton label="O'chirish" class="w-full" @click="handeClicked('delete', data?.id)" />
        </div>
        <!-- {{ data }} -->
    </div>
</template>