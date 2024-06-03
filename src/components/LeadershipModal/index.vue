<script setup lang="ts">
import { ref } from 'vue'
import BaseTextarea from 'src/components/BaseTextarea/index.vue'
const isOpen = ref<boolean>(true)
</script>
<template>
    <BaseModal v-model="isOpen" customClass="w-1/3 bg-white p-5">
        <div class="flex justify-end">
            <BaseIcon @click="isOpen = false" name="close" class="cursor-pointer w-6 h-6" />
        </div>
        <div class="mt-3">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">To'liq ish sharifni kiriting
            </p>
            <BaseInput class="mt-1" placeholder="F.I.O" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Telefon raqamni kiriting</p>
            <BaseInput class="mt-1" placeholder="Telefon raqam" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Lozimni kiriting</p>
            <BaseInput class="mt-1" placeholder="Lavozim" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Manzilni kiriting</p>
            <BaseInput class="mt-1" placeholder="Manzil" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Tugilgan sanani kiriting</p>
            <BaseInput class="mt-1" placeholder="Tug'ilgan sana" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Passport ma'lumotlari kiriting
            </p>
            <BaseInput class="mt-1" placeholder="Passport ma'lumot" />
        </div>
        <div class="mt-2">
            <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Ish-tajribasini kiriting</p>
            <BaseTextarea class="mt-1" placeholder="Ish-tajriba" />
        </div>
        <div class="grid grid-cols-2 gap-10 mt-3" @click="isOpen = false">
            <BaseButton label="Bekor qilish" />
            <BaseButton label="Saqlash" />
        </div>
    </BaseModal>
</template>