<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useEmpStore } from './store';
const store = useEmpStore()
const { getEmployeeById } = store
const { employee }: any = storeToRefs(store)
onMounted(() => {
    const data: any = sessionStorage.getItem('userInfo')
    const user = JSON.parse(data)
    getEmployeeById(user.user.id)
})
</script>
<template>
    <div class="p-5">
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Ism familiya:</p>
            <p class="col-span-5 text-start text-lg">{{ employee.fullname }}</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3" v-if="employee?.division">
            <p class="col-span-2 text-lg text-black/50">Bo'linma nomi:</p>
            <p class="col-span-5 text-start text-lg">
                {{ employee?.division }}
            </p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3" v-if="employee?.kafedra">
            <p class="col-span-2 text-lg text-black/50">Kafedra nomi:</p>
            <p class="col-span-5 text-start text-lg">
                {{ employee?.kafedra }}
            </p>
        </div>
        <div v-else class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Bo'limi:</p>
            <p class="col-span-5 text-start text-lg">{{ employee.department }}</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Lavozimi:</p>
            <p class="col-span-5 text-start text-lg">{{ employee.position }}</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Telefon raqami:</p>
            <p class="col-span-3 text-start text-lg">{{ employee.phone }}</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Address:</p>
            <p class="col-span-5 text-start text-lg">{{ employee.address }}</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Tug'ilgan sanasi:</p>
            <p class="col-span-5 text-start text-lg">{{ employee?.birthday }}</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Passport ma'lumotlari:</p>
            <p class="col-span-5 text-start text-lg">{{ employee.pass_information }}</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Ish stavkasi:</p>
            <p class="col-span-5 text-start text-lg">{{ employee.shtat }} stavka</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Ishga kirgan sanasi:</p>
            <p class="col-span-5 text-start text-lg">{{ employee.created_at }}</p>
        </div>
        <div class="grid grid-cols-7 gap-5 mt-3">
            <p class="col-span-2 text-lg text-black/50">Ish tajribasi haqida:</p>
            <p class="col-span-5 text-start text-lg">{{ employee.experience }}</p>
        </div>
    </div>
</template>