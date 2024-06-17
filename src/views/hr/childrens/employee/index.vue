<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BaseEmployeeCard from 'src/components/BaseEmployeeCard/index.vue'
import NotificationModal from 'src/components/NotificationModal/index.vue'
import BaseSelect from 'src/components/BaseSelect/index.vue'
import BaseTextarea from 'src/components/BaseTextarea/index.vue'
import BaseDatepicker from 'src/components/BaseDatepicker/index.vue'
import { useEmployeeFn } from './composable';
import { useEmployeeStore } from './store';
const store = useEmployeeStore()
const { data, notifyModal, createModal, employee, positionList }: any = storeToRefs(store)
const { deleteItemFn, updateItemFn, actionFn, modalClicked, shtatList } = useEmployeeFn()
function select3Fn(val: any) {
    employee.value.employee_type_id = val
}
function selectFn(val: any) {
    employee.value.shtat = val
}
</script>
<template>
    <div class="px-7 flex flex-col gap-3 pt-3">
        <div class="border bg-white border-neutral-400/40 py-3 px-4 rounded-2xl flex items-center justify-between">
            <div>
                <div class="text-zinc-950 text-lg font-semibold leading-relaxed tracking-wide">
                    Toshkent Temir Yo'l Texnikumi hodimlari
                    <sup>{{ data.length }}</sup>
                </div>
                <span class="text-neutral-400 text-xs font-normal leading-normal tracking-wide">Ushbu bo’limda katalog
                    yaratishingiz</span>
            </div>
            <div class="flex items-center gap-2">
                <BaseButton label="Yaratish" class="px-16" @click="createModal = true" />
            </div>
        </div>
        <div class="h-[73vh] grid grid-cols-3 gap-5 scrollbarActive overflow-y-scroll">
            <BaseEmployeeCard v-for="item, index in data" :data="item" :key="index" @update="updateItemFn"
                @delete="deleteItemFn" />
            <!-- {{ data }} -->
        </div>
        <NotificationModal :isOpenModal="notifyModal" content="Ro'yhatdan o'chirmoqchimisiz?"
            @selectedBtnClicked="actionFn">
        </NotificationModal>
        <!-- create modal -->

        <BaseModal v-model="createModal" customClass="w-1/3 bg-white p-5">
            <div class="flex justify-end">
                <BaseIcon @click="createModal = false" name="close" class="cursor-pointer w-6 h-6" />
            </div>
            <div class="mt-3">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">To'liq ish sharifni
                    kiriting
                </p>
                <BaseInput class="mt-1" placeholder="F.I.O" v-model="employee.fullname" />
            </div>
            <div class="mt-2">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Telefon raqamni kiriting
                </p>
                <BaseInput class="mt-1" placeholder="Telefon raqam" v-model="employee.phone" />
            </div>
            <div class="mt-2">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Lavozimni kiriting</p>
                <BaseSelect class="mt-1" :options="positionList" :id="employee.employee_type_id"
                    @selectedItem="select3Fn" defaultTitle="Lavozimni tanlang" />
            </div>
            <div class="mt-2">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Manzilni kiriting</p>
                <BaseInput class="mt-1" placeholder="Manzil" v-model="employee.address" />
            </div>
            <div class="mt-2">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Tugilgan sanani kiriting
                </p>
                <BaseDatepicker class="mt-1" v-model="employee.birthday" />
            </div>
            <div class="mt-2">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Passport ma'lumotlari
                    kiriting
                </p>
                <BaseInput class="mt-1" placeholder="Passport ma'lumot" v-model="employee.pass_information" />
            </div>
            <div class="mt-2">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Unikal belgisini
                    kiriting
                </p>
                <BaseInput class="mt-1" placeholder="Unikal belgi" v-model="employee.unique_code" />
            </div>
            <div class="mt-2">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Shtat turi
                    kiriting
                </p>
                <BaseSelect class="mt-1" :options="shtatList" :id="employee.employee_type_id" @selectedItem="selectFn"
                    defaultTitle="Shtat turi" />
            </div>
            <div class="mt-2">
                <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Ish-tajribasini kiriting
                </p>
                <BaseTextarea class="mt-1" placeholder="Ish-tajriba" v-model="employee.experience" />
            </div>
            <div class="grid grid-cols-2 gap-10 mt-3">
                <BaseButton label="Bekor qilish" @click="modalClicked('cancel')" />
                <BaseButton label="Saqlash" @click="modalClicked('save')" />
            </div>
        </BaseModal>

        <!-- create modal -->
    </div>
</template>