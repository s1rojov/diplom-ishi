<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import BaseSelect from 'src/components/BaseSelect/index.vue'
import BaseDatepicker from 'src/components/BaseDatepicker/index.vue'
import { useAppStore } from './store';
import { useApplicationFn } from './composable';
const store = useAppStore()
const { getLeadershipList } = store
const { leadershipList } = storeToRefs(store)
const {
    application,
    generatePdf,
    pdfSrc,
    preferred,
    options } = useApplicationFn()


onMounted(() => {
    getLeadershipList()
})
function selectLeadership(val: any) {
    application.value.to = val.label
    console.log(val)
}


</script>
<template>
    <div class="p-5">
        <div>
            <div class="q-pa-sm rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
                Ariza turini tanlang:
                <q-option-group name="preferred_genre" v-model="preferred" :options="options" color="primary" inline />
            </div>

        </div>
        <div class="grid grid-cols-3 mt-3 gap-5">
            <div class="col-span-1">
                <p class="text-lg text-center">Ma'lumotlarni kiriting:</p>
                <div class="mt-2">
                    <p>Kimga:</p>
                    <BaseSelect class="mt-1" @select="selectLeadership" :options="leadershipList" />
                </div>
                <!-- <div class="mt-2">
                    <p>Yuqori turuvchi ma'sul xodim:</p>
                    <BaseSelect class="mt-1" :options="leadershipList" />
                </div> -->
                <div class="mt-2">
                    <p>Qachondan:</p>
                    <BaseDatepicker class="mt-1" v-model="application.dateOn" />
                </div>
                <div class="mt-2">
                    <p>Qachongacha:</p>
                    <BaseDatepicker class="mt-1" v-model="application.dateEnd" />
                </div>
                <BaseButton label="Generate" class="mt-5" @click="generatePdf" />
            </div>
            <div class="col-span-2">
                <iframe :src="pdfSrc" v-if="pdfSrc" width="100%" height="400px"></iframe>
            </div>
        </div>
    </div>
</template>