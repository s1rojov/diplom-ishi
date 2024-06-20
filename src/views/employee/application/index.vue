<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import BaseSelect from 'src/components/BaseSelect/index.vue'
import BaseDatepicker from 'src/components/BaseDatepicker/index.vue'
import { useAppStore } from './store';
import { useApplicationFn } from './composable';
const store = useAppStore()
const { getLeadershipList, getEmployeeHeadList, getAllMyApplication } = store
const { leadershipList, headList, app, allApps } = storeToRefs(store)
const {
    application,
    generatePdf,
    pdfSrc,
    preferred,
    options, senApplication } = useApplicationFn()

function returnAppType(options: any, app_type: string) {
    switch (app_type) {
        case options[0].value:
            return options[0].label
        case options[1].value:
            return options[1].label
        case options[2].value:
            return options[2].label
    }
}

onMounted(() => {
    getLeadershipList()
    getEmployeeHeadList()
    getAllMyApplication()
})
function selectLeadership(val: any) {
    application.value.to = val.label
    app.value.leader_id = val.value
}

function selectHead(val: any) {
    app.value.head_id = val.value
}
const defaultView = ref<boolean>(true)
</script>
<template>
    <div class="px-5 py-2">
        <div class="grid grid-cols-2 gap-5 mb-3">
            <BaseButton label="Arizalarim" @click="defaultView = true; getAllMyApplication()" />
            <BaseButton label="Ariza yozish" @click="defaultView = false" />
        </div>
        <div v-if="defaultView">
            <div v-if="allApps.length > 0" class="grid grid-cols-7 mt-3 gap-5">
                <div class="col-span-2">
                    <div v-for="item in allApps" :key="item.id" class="border rounded-lg py-2 px-2 my-2">
                        <div class="flex items-center justify-between">
                            <p>{{ returnAppType(options, item.app_type) }}</p>
                            <p class="underline cursor-pointer">Ko'rish</p>
                        </div>
                        <p class="text-xs">{{ item.created_at.substring(0, 10) }}</p>
                    </div>
                </div>
                <div class="col-span-3">
                    <iframe :src="pdfSrc" v-if="pdfSrc" width="100%" height="400px"></iframe>
                </div>
            </div>
            <p v-else class="text-center text-xl mt-20">Arizalar mavjud emas</p>
        </div>
        <div v-else>
            <div>
                <div class="q-pa-sm rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
                    Ariza turini tanlang:
                    <q-option-group name="preferred_genre" v-model="preferred" :options="options" color="primary"
                        inline />
                </div>
            </div>
            <div class="grid grid-cols-3 mt-3 gap-5">
                <div class="col-span-1">
                    <p class="text-lg text-center">Ma'lumotlarni kiriting:</p>
                    <div class="mt-2">
                        <p>Kimga:</p>
                        <BaseSelect class="mt-1" @select="selectLeadership" :options="leadershipList" />
                    </div>
                    <div class="mt-2">
                        <p>Yuqori turuvchi ma'sul xodim:</p>
                        <BaseSelect class="mt-1" @select="selectHead" :options="headList" />
                    </div>
                    <div class="mt-2">
                        <p>Qachondan:</p>
                        <BaseDatepicker class="mt-1" v-model="application.dateOn" />
                    </div>
                    <div class="mt-2">
                        <p>Qachongacha:</p>
                        <BaseDatepicker class="mt-1" v-model="application.dateEnd" />
                    </div>
                    <div class="flex items-center justify-between mt-5 gap-3">
                        <BaseButton label="Yaratish" @click="generatePdf" />
                        <BaseButton label="Jo'natish" @click="senApplication" />
                    </div>
                </div>
                <div class="col-span-2">
                    <iframe :src="pdfSrc" v-if="pdfSrc" width="100%" height="400px"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>