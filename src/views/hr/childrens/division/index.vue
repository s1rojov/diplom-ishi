<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BaseDivisionCard from 'src/components/BaseDivisionCard/index.vue'
import NotificationModal from 'src/components/NotificationModal/index.vue'
import { useDivisionFn } from './composable';
import { useDivisionStore } from './store';
const store = useDivisionStore()
const { data, notifyModal, createModal, division } = storeToRefs(store)
const { deleteItemFn, updateItemFn, actionFn, modalClicked } = useDivisionFn()

</script>
<template>
  <div class="px-7 flex flex-col gap-3 pt-3">
    <div class="border bg-white border-neutral-400/40 py-3 px-4 rounded-2xl flex items-center justify-between">
      <div>
        <div class="text-zinc-950 text-lg font-semibold leading-relaxed tracking-wide">
          Toshkent Temir Yo'l Texnikumi bo'linmalari
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
      <BaseDivisionCard v-for="item, index in data" :data="item" :key="index" @update="updateItemFn"
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
        <BaseInput class="mt-1" placeholder="Qisqa nomi" v-model="division.shortname" />
      </div>
      <div class="mt-2">
        <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Bo'linmaning to'liq nomini kiriting
        </p>
        <BaseInput class="mt-1" placeholder="To'liq nomi" v-model="division.fullname" />
      </div>
      <div class="grid grid-cols-2 gap-10 mt-3">
        <BaseButton label="Bekor qilish" @click="modalClicked('cancel')" />
        <BaseButton label="Saqlash" @click="modalClicked('save')" />
      </div>
    </BaseModal>

    <!-- create modal -->
  </div>
</template>