<script setup lang="ts">
import { ref, toRefs } from 'vue'
import BaseTextarea from 'src/components/BaseTextarea/index.vue'
const emit = defineEmits(['cancel', 'save'])
const isOpen = ref<boolean>(true)
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
function handleClicked(val: any) {
    if (val === 'cancel') {
        emit('cancel')
    }
    else if (val === 'save') {
        emit('save')
    }
}

toRefs(props)
</script>
<template>
    <BaseModal v-model="isOpen" customClass="w-1/3 bg-white p-5">
        <div class="flex justify-end">
            <BaseIcon @click="isOpen = false" name="close" class="cursor-pointer w-6 h-6" />
        </div>
        <div class="mt-3">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">To'liq ish sharifni kiriting
            </p>
            <BaseInput class="mt-1" placeholder="F.I.O" v-model="props.data.fullname" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Telefon raqamni kiriting</p>
            <BaseInput class="mt-1" placeholder="Telefon raqam" v-model="props.data.phone" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Lozimni kiriting</p>
            <BaseInput class="mt-1" placeholder="Lavozim" v-model="props.data.position" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Manzilni kiriting</p>
            <BaseInput class="mt-1" placeholder="Manzil" v-model="props.data.address" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Tugilgan sanani kiriting</p>
            <BaseInput class="mt-1" placeholder="Tug'ilgan sana" v-model="props.data.birthday" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Passport ma'lumotlari kiriting
            </p>
            <BaseInput class="mt-1" placeholder="Passport ma'lumot" v-model="props.data.pass_information" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Ish-tajribasini kiriting</p>
            <BaseTextarea class="mt-1" placeholder="Ish-tajriba" v-model="props.data.experience" />
        </div>
        <div class="grid grid-cols-2 gap-10 mt-3" @click="isOpen = false">
            <BaseButton label="Bekor qilish" @click="handleClicked('cancel')" />
            <BaseButton label="Saqlash" @click="handleClicked('save')" />
        </div>
    </BaseModal>
</template>