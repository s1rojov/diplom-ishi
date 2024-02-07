<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/views/auth/store';
import { useAuthFn } from './composable';
const { identifyOrgBtnClicked } = useAuthFn();
const store = useAuthStore();
const { organization } = storeToRefs(store);
</script>
<template>
  <div class="w-1/3 px-10 h-auto mx-auto absolute bottom-[30%] left-0 right-0">
    <p class="text-lg text-center">Identify your organization</p>
    <div class="mt-3">
      <p class="text-base text-zinc-950 pb-1">Pinfl</p>
      <BaseInput
        type="text"
        v-model="organization.pinfl"
        placeholder="Pinfl kiriting"
      />
      <p class="text-base mt-5 text-zinc-950 pb-1">Password</p>
      <BaseInput
        class=""
        type="text"
        v-model="organization.password"
        placeholder="Parolni kiriting"
      />
    </div>
    <BaseButton
      label="Kirish"
      @click="identifyOrgBtnClicked"
      class="w-full mt-3"
    />
  </div>
</template>
