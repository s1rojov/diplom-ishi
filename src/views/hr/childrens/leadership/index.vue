<script setup lang="ts">
import BaseLeadershipCard from 'src/components/BaseLeadershipCard/index.vue'
import NotificationModal from 'src/components/NotificationModal/index.vue'
import BaseTextarea from 'src/components/BaseTextarea/index.vue'
import BaseDatepicker from 'src/components/BaseDatepicker/index.vue'
import { useLeadershipFn } from './composable'
import { storeToRefs } from 'pinia';
import { useLeaderStore } from './store';
const store = useLeaderStore()
const { notifyModal, createModal, leader, loading } = storeToRefs(store)
const { data, deleteItemFn, updateItemFn, actionFn, modalClicked }: any = useLeadershipFn()

</script>
<template>
  <div class="relative">
    <q-spinner v-if="loading" color="primary" size="5rem" :thickness="2"
      class="absolute flex items-center right-0 top-0 left-0 bottom-0 m-auto" />
    <div class="px-7 flex flex-col gap-3 pt-3">
      <div class="border bg-white border-neutral-400/40 py-3 px-4 rounded-2xl flex items-center justify-between">
        <div>
          <div class="text-zinc-950 text-lg font-semibold leading-relaxed tracking-wide">
            Toshkent Temir Yo'l Texnikumi rahbariyat a'zolari
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
        <BaseLeadershipCard v-for="item, index in data" :data="item" :key="index" @update="updateItemFn"
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
          <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">To'liq ish sharifni kiriting
          </p>
          <BaseInput class="mt-1" placeholder="F.I.O" v-model="leader.fullname" />
        </div>
        <div class="mt-2">
          <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Telefon raqamni kiriting</p>
          <BaseInput class="mt-1" placeholder="Telefon raqam" v-model="leader.phone" />
        </div>
        <div class="mt-2">
          <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Lozimni kiriting</p>
          <BaseInput class="mt-1" placeholder="Lavozim" v-model="leader.position" />
        </div>
        <div class="mt-2">
          <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Manzilni kiriting</p>
          <BaseInput class="mt-1" placeholder="Manzil" v-model="leader.address" />
        </div>
        <div class="mt-2">
          <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Tugilgan sanani kiriting</p>
          <BaseDatepicker class="mt-1" v-model="leader.birthday" />
        </div>
        <div class="mt-2">
          <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Passport ma'lumotlari kiriting
          </p>
          <BaseInput class="mt-1" placeholder="Passport ma'lumot" v-model="leader.pass_information" />
        </div>
        <div class="mt-2">
          <p class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">Ish-tajribasini kiriting</p>
          <BaseTextarea class="mt-1" placeholder="Ish-tajriba" v-model="leader.experience" />
        </div>
        <div class="grid grid-cols-2 gap-10 mt-3">
          <BaseButton label="Bekor qilish" @click="modalClicked('cancel')" />
          <BaseButton label="Saqlash" @click="modalClicked('save')" />
        </div>
      </BaseModal>

      <!-- create modal -->
    </div>
  </div>
</template>
<style scoped>
.custom-border {
  border: 1px dashed #c49e5e;
}

.scrollbarActive::-webkit-scrollbar {
  @apply ease-in duration-300;
  width: 2px;
  height: 0;
  /* display: none; */
  opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
  @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
  @apply bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>
