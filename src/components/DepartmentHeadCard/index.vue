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
    <div class="bg-white rounded-2xl h-[650px] p-4 border border-gray-400/opacity-20 relative">
        <div>
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">F.I.O:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.fullname }}
            </p>
        </div>
        <div class="mt-2" v-if="data?.division">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Bo'linma nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.division }}
            </p>
        </div>
        <div class="mt-2" v-if="data?.kafedra">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Kafedra nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.kafedra }}
            </p>
        </div>
        <div class="mt-2" v-else>
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Bo'lim nomi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.department }}
            </p>
        </div>

        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Hodimning lavozimi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                Bo'lim boshlig'i
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
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Tug'ilgan sanasi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.birthday.substring(0, 10) }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Passport ma'lumotlari</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.pass_information }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Ishga olingan shtati</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                1 stavka
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Hodimning unikal belgisi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.unique_code }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Ishga kirgan sanasi:</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.created_at.substring(0, 10) }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-neutral-300 text-xs font-medium leading-[10px] tracking-wide">Ish tajribasi</p>
            <p class="text-neutral-500 text-sm font-normal leading-[18.89px] mt-1 tracking-wide">
                {{ data?.experience }}
            </p>
        </div>
        <div class="grid grid-cols-2 gap-5 bottom-4 w-full left-0 absolute px-4">
            <BaseButton label="Tahrirlash" class="w-full" @click="handeClicked('update', data?.id)" />
            <BaseButton label="O'chirish" @click="handeClicked('delete', data?.id)" />
        </div>
    </div>
    <!-- {{ props.data }} -->
</template>