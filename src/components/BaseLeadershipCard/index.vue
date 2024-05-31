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
    <div class="bg-white rounded-2xl h-fit p-4 border border-gray-400/opacity-20">
        <div>
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">F.I.O:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.fullname }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Lavozimi</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.position }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Telefon raqami:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.phone }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Manzili:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.address }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">tugilgan sanasi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.birthday }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Passport ma'lumotlari</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.pass_information }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Ish tajribasi</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.experience }}
            </p>
        </div>
        <div class="grid grid-cols-2 gap-5 mt-5">
            <BaseButton label="Tahrirlash" @click="handeClicked('update', data?.id)" />
            <BaseButton label="O'chirish" @click="handeClicked('delete', data?.id)" />
        </div>
        <!-- {{ data }} -->
    </div>
</template>