<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BaseKafedraCard from 'src/components/BaseKafedraCard/index.vue'
import NotificationModal from 'src/components/NotificationModal/index.vue'
import BaseSelect from 'src/components/BaseSelect/index.vue'
import { useKafedraFn } from './composable';
import { useKafedraStore } from './store';
const store = useKafedraStore()
const { data, notifyModal, createModal, kafedra, divisionList } = storeToRefs(store)
const { deleteItemFn, updateItemFn, actionFn, modalClicked } = useKafedraFn()

function selectFn(val: any) {
  kafedra.value.division_id = val
}
</script>
<template>
  <div class="px-7 flex flex-col gap-3 pt-3">
    <div class="border bg-white border-neutral-400/40 py-3 px-4 rounded-2xl flex items-center justify-between">
      <div>
        <div class="text-zinc-950 text-lg font-semibold leading-relaxed tracking-wide">
          Toshkent Temir Yo'l Texnikumi kafedralari
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
      <BaseKafedraCard v-for="item, index in data" :data="item" :key="index" @update="updateItemFn"
        @delete="deleteItemFn" />
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
        <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Bo'linmaning qisqa nomini kiriting
        </p>
        <BaseInput class="mt-1" placeholder="Qisqa nomi" v-model="kafedra.shortname" />
      </div>
      <div class="mt-2">
        <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Bo'linmaning to'liq nomini kiriting
        </p>
        <BaseInput class="mt-1" placeholder="To'liq nomi" v-model="kafedra.fullname" />
      </div>
      <div class="mt-2">
        <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Bo'linmaning to'liq nomini kiriting
        </p>
        <BaseSelect class="mt-1" :options="divisionList" :id="kafedra.division_id" @selectedItem="selectFn"
          defaultTitle="Bo'linmani tanlang" />
      </div>
      <div class="grid grid-cols-2 gap-10 mt-3">
        <BaseButton label="Bekor qilish" @click="modalClicked('cancel')" />
        <BaseButton label="Saqlash" @click="modalClicked('save')" />
      </div>
    </BaseModal>

    <!-- create modal -->
  </div>
</template>