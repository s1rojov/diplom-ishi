<script setup lang="ts">
import { useCreateModalFn } from 'src/views/hr/components/CreateLeadershipModal/composable';
import { storeToRefs } from 'pinia';
import { useHrStore } from 'src/views/hr/store';
const store = useHrStore();
const { isCreateModalOpen, leadershipData } = storeToRefs(store);
const { handleFileChange, tab, returnModalDataFn } = useCreateModalFn();
</script>
<template>
  <BaseModal v-model="isCreateModalOpen" customClass="w-1/2 bg-white p-4 relative backdrop-blur-[13px]">
    <div class="absolute right-5 w-fit h-fit" @click="isCreateModalOpen = false">
      <BaseIcon name="close" class="w-5 h-5 cursor-pointer" />
    </div>
    <div class="flex flex-col lg:gap-2 2xl:gap-4">
      <div class="flex justify-center">
        <label for="file" class="cursor-pointer">
          <img :src="leadershipData.img" alt="img" v-if="leadershipData.img" class="h-24 w-24 rounded-md" />
          <div v-if="!leadershipData.img" class="w-24 h-24 rounded-md custom-border relative bg-[#C49E5E]/10">
            <BaseIcon name="camera" class="w-7 h-7 absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto" />
          </div>
        </label>
        <input ref="inputFile" type="file" @change="handleFileChange" class="hidden" id="file" />
      </div>
      <div>
        <label for="fio"
          class="block text-neutral-500 text-xs font-medium leading-[15px] tracking-wide pb-2">F.I.O</label>
        <input type="text" class="bg-stone-50 w-full border border-zinc-100 outline-none py-2 px-1.5 rounded-lg"
          placeholder="Ism sharifi" id="fio" v-model="leadershipData.fullname" required />
      </div>
      <div>
        <label for="position"
          class="block text-neutral-500 text-xs font-medium leading-[15px] tracking-wide pb-2">Lavozimi</label>
        <input type="text" class="bg-stone-50 w-full border border-zinc-100 outline-none py-2 px-1.5 rounded-lg"
          placeholder="Lavozim" id="position" v-model="leadershipData.position" />
      </div>
      <div class="grid grid-cols-3 grid-rows-1 gap-3">
        <div>
          <label for="phone"
            class="block text-neutral-500 text-xs font-medium leading-[15px] tracking-wide pb-2">Telefon</label>
          <input type="text" class="bg-stone-50 w-full border border-zinc-100 outline-none py-2 px-1.5 rounded-lg"
            placeholder="Telefon" id="phone" required v-model="leadershipData.phone" />
        </div>
        <div>
          <label for="email"
            class="block text-neutral-500 text-xs font-medium leading-[15px] tracking-wide pb-2">E-mail</label>
          <input type="text" class="bg-stone-50 w-full border border-zinc-100 outline-none py-2 px-1.5 rounded-lg"
            placeholder="E-mail" id="email" required v-model="leadershipData.email" />
        </div>
        <div>
          <label for="admission-day"
            class="block text-neutral-500 text-xs font-medium leading-[15px] tracking-wide pb-2">F.I.O</label>
          <input type="text" class="bg-stone-50 w-full border border-zinc-100 outline-none py-2 px-1.5 rounded-lg"
            placeholder="Qabul kunlari" id="admission-day" required v-model="leadershipData.admission" />
        </div>
      </div>
    </div>
    <div class="pt-2">
      <q-tabs v-model="tab" dense class="text-grey w-[45%]" active-color="primary" indicator-color="primary"
        narrow-indicator>
        <q-tab name="exp">
          <div class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">
            Ish tajribasi
          </div>
        </q-tab>
        <q-tab name="obl">
          <div class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide">
            Majburiyatlari
          </div>
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="exp">
          <textarea name="" id="exp" rows="5" v-model="leadershipData.experience"
            class="w-full outline-none border border-neutral-400/40 resize-none bg-stone-50 p-1"></textarea>
        </q-tab-panel>
        <q-tab-panel name="obl">
          <textarea name="" id="exp" rows="5" v-model="leadershipData.obligation"
            class="w-full outline-none border border-neutral-400/40 resize-none bg-stone-50 p-1"></textarea>
        </q-tab-panel>
      </q-tab-panels>
      <div class="flex justify-end">
        <BaseButton label="Saqlash" @click="returnModalDataFn" />
      </div>
    </div>
  </BaseModal>
</template>
