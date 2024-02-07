<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/views/auth/store';
import GeneralSelect from 'src/components/GeneralSelect/index.vue';
import { useAuthFn } from './composable';
const { loginBtnClicked } = useAuthFn();
const store = useAuthStore();
const { user, selectedOrg, selectedRole } = storeToRefs(store);
const option = [
  {
    id: 1,
    title: 'Super admin role',
  },
  {
    id: 2,
    title: 'HR role',
  },
  {
    id: 3,
    title: 'Study role',
  },
];

// select role
function selectedRoleId(id: number) {
  user.value.userTypeId = id;
}
function selectedOrgId(id: number) {
  user.value.organizationId = id
}
</script>
<template>
  <div class="w-1/3 px-10 h-auto mx-auto absolute bottom-[15%] 2xl:bottom-[30%] left-0 right-0">
    <div class="flex flex-col items-center">
      <BaseIcon name="logo" class="w-24 h-24 cursor-pointer" />
      <!-- <img src="/images/logo.png" class="w-24 h-24 cursor-pointer" alt="logo" /> -->
      <p class="text-2xl font-normal text-[#17181A] pt-5">Tizimga kirish</p>
    </div>
    <div class="flex flex-col gap-3">
      <div>
        <p class="text-base text-zinc-950 pb-1">Login</p>
        <BaseInput type="text" placeholder="Your login" v-model="user.login" />
      </div>
      <div>
        <p class="text-base text-zinc-950 pb-1">Password</p>
        <BaseInput type="text" placeholder="Your password" v-model="user.password" />
      </div>
      <div>
        <p class="text-base text-zinc-950 pb-1">Rolni tanglang</p>
        <GeneralSelect :options="selectedRole" @selected="selectedRoleId" />
      </div>
      <div>
        <p class="text-base text-zinc-950 pb-1">Organization</p>
        <GeneralSelect :options="selectedOrg" @selected="selectedOrgId" />
      </div>
      <!-- <label for="checkbox" class="flex items-center relative">
        <input
          type="checkbox"
          name=""
          id="checkbox"
          class="absolute opacity-0 w-0 h-0 cursor-pointer"
        />
        <span class="checkmark"></span>
        <span class="pl-3 text-[#5C8198] text-sm font-normal"
          >Eslab qolish!</span
        >
      </label> -->
      <BaseButton label="Kirish" class="w-full" @click="loginBtnClicked" />
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
