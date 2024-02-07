<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHrStore } from 'src/views/hr/store';
import { useDivisionModalFn } from 'src/views/hr/components/CreateModal/composable';
import { ref } from 'vue';
const { handleFileChange, returnDivisionData } = useDivisionModalFn();
const store = useHrStore();
const { isDivisionModal, divisionData } = storeToRefs(store);
const options = [
  {
    label: 'Google',
    value: 'goggle',
  },
  {
    label: 'Twitter',
    value: 'twitter',
  },
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Oracle',
    value: 'oracle',
  },
];
</script>
<template>
  <BaseModal
    v-model="isDivisionModal"
    :closable="true"
    customClass="w-1/3 bg-white p-5 relative backdrop-blur-[13px]"
  >
    <div class="absolute right-5 w-fit h-fit" @click="isDivisionModal = false">
      <BaseIcon name="close" class="w-5 h-5 cursor-pointer" />
    </div>
    <div>
      <div class="flex justify-center">
        <label for="file" class="cursor-pointer">
          <img
            :src="divisionData.img"
            alt="img"
            v-if="divisionData.img"
            class="h-24 w-24 rounded-md"
          />
          <div
            v-if="!divisionData.img"
            class="w-24 h-24 rounded-md custom-border relative bg-[#C49E5E]/10"
          >
            <BaseIcon
              name="camera"
              class="w-7 h-7 absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto"
            />
          </div>
        </label>
        <input
          ref="inputFile"
          type="file"
          @change="handleFileChange"
          class="hidden"
          id="file"
        />
      </div>
      <div class="flex flex-col gap-3 pt-3">
        <BaseInput v-model="divisionData.name" placeholder="Bo'linma nomi" />
        <div class="grid grid-cols-2 gap-3">
          <div>
            <div
              class="text-neutral-500 text-xs font-medium pb-1 leading-[15px] tracking-wide"
            >
              Lavozimi
            </div>
            <q-select
              color="grey-9"
              :dense="true"
              v-model="divisionData.position"
              :options="options"
              label="Lavozimni tanlang"
            />
          </div>
          <div>
            <div
              class="text-neutral-500 text-xs font-medium pb-1 leading-[15px] tracking-wide"
            >
              Rahbariyati
            </div>
            <q-select
              color="grey-9"
              :dense="true"
              v-model="divisionData.leadership"
              :options="options"
              label="Rahbariyat tanlang"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end pt-3">
        <BaseButton label="Saqlash" @click="returnDivisionData" />
      </div>
    </div>
  </BaseModal>
</template>
