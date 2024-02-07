<script setup lang="ts">
import { PropType, ref } from 'vue';
const emit = defineEmits(['update:modelValue', 'returnAllData']);
defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
  },
  modalInfo: {
    type: Object,
    required: true,
  },
});
function emitInput(event: any) {
  emit('update:modelValue', event);
}
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
const allDataValue = ref<any>({
  picture: '',
  name: '',
  select1: '',
  select2: '',
});

function handleClicked() {
  emit('returnAllData', allDataValue.value);
}

function handleFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      allDataValue.value.picture = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>

<template>
  <q-dialog
    :model-value="modelValue"
    :persistent="true"
    @update:model-value="emitInput"
  >
    <div class="w-1/3 bg-white p-5 relative backdrop-blur-[13px]">
      <div class="absolute right-5 w-fit h-fit bg-[#C49E5E] rounded-full">
        <q-btn
          icon="close"
          flat
          round
          dense
          size="sm"
          v-close-popup
          color="white"
        />
      </div>
      <div>
        <div class="flex justify-center" v-if="modalInfo.name !== 'direction'">
          <label for="file" class="cursor-pointer">
            <img
              v-if="allDataValue.picture"
              :src="allDataValue.picture"
              alt="img"
              class="h-24 w-24 rounded-full"
            />
            <div
              v-if="!allDataValue.picture"
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
            @change="handleFileChange"
            type="file"
            class="hidden"
            id="file"
          />
        </div>
        <div class="flex flex-col gap-3 pt-3">
          <div
            class="text-neutral-500 text-xs font-medium leading-[15px] tracking-wide"
          >
            {{ modalInfo.info.nameLabel }}
          </div>
          <BaseInput
            :placeholder="modalInfo.info.placeholderName"
            v-model="allDataValue.name"
          />
          <div class="grid grid-cols-2 gap-3">
            <div>
              <div
                class="text-neutral-500 text-xs font-medium pb-1 leading-[15px] tracking-wide"
              >
                {{ modalInfo.info.positionLabel }}
              </div>
              <q-select
                v-model="allDataValue.select1"
                color="grey-9"
                :dense="true"
                :options="options"
                :label="modalInfo.info.placeholderPosition"
              />
            </div>
            <div>
              <div
                class="text-neutral-500 text-xs font-medium pb-1 leading-[15px] tracking-wide"
              >
                {{ modalInfo.info.leadershipLabel }}
              </div>
              <q-select
                v-model="allDataValue.select2"
                color="grey-9"
                :dense="true"
                :options="options"
                :label="modalInfo.info.placeholderLeadership"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-end pt-3">
          <BaseButton label="Saqlash" @click="handleClicked" />
        </div>
      </div>
    </div>
  </q-dialog>
</template>
<style>
.test {
  backdrop-filter: blur(20px);
}

.q-dialog__inner--minimized > div {
  max-width: none !important;
}

.q-body--force-scrollbar-x {
  overflow-x: hidden;
}

.q-body--force-scrollbar-y {
  overflow-y: hidden;
}
</style>
