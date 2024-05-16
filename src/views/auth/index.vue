<script setup lang="ts">
import BaseInput from 'src/components/BaseInput/index.vue'
import GeneralSelect from 'src/components/GeneralSelect/index.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/views/auth/store';
const store = useAuthStore();
const { organizationList, data } = storeToRefs(store);
const { getAllOrganizations, getAccessToSystem } = store;
onMounted(() => {
  getAllOrganizations()
})
</script>
<template>
  <div class="absolute flex items-center top-0 left-0 bottom-0 right-0 justify-center m-auto">
    <div class="w-1/3">
      <div class="flex flex-col items-center">
        <BaseIcon name="logo" class="w-24 h-24 cursor-pointer" />
        <p class="text-2xl font-normal text-[#17181A] pt-5">Tizimga kirish</p>
      </div>
      <div class="flex flex-col gap-3">
        <div>
          <p class="text-base text-zinc-950 pb-1">Login</p>
          <BaseInput type="text" placeholder="Your login" v-model="data.login" />
        </div>
        <div>
          <p class="text-base text-zinc-950 pb-1">Password</p>
          <BaseInput type="text" placeholder="Your password" v-model="data.password" />
        </div>
        <div>
          <p class="text-base text-zinc-950 pb-1">Tashkilotingizni tanlang</p>
          <GeneralSelect :options="organizationList" v-model="data.org_id" />
        </div>
        <BaseButton label="Kirish" class="w-full" @click="getAccessToSystem" />
      </div>
    </div>
  </div>

</template>
<style scoped>
input[type='checkbox'] {
  @apply bg-[#C49E5E] border border-[#B8B4CC]/20 rounded-md;
}

.checkmark {
  @apply bg-white w-5 h-5 border border-[#B8B4CC]/20 rounded-md;
}

input:checked~.checkmark {
  @apply bg-[#C49E5E];
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

input:checked~.checkmark:after {
  display: block;
}

.checkmark:after {
  left: 7px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
