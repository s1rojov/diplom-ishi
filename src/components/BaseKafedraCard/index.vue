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
    <div class="bg-white rounded-2xl h-[240px] relative p-4 border border-gray-400/opacity-20">
        <div>
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Bo'linma nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.division }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Qisqa nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.shortname }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">To'liq nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.fullname }}
            </p>
        </div>

        <div class="grid grid-cols-2 gap-5 bottom-4 w-full left-0 absolute px-4">
            <BaseButton label="Tahrirlash" class="w-full" @click="handeClicked('update', data?.id)" />
            <BaseButton label="O'chirish" class="w-full" @click="handeClicked('delete', data?.id)" />
        </div>
        <!-- {{ data }} -->
    </div>
</template>