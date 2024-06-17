<script setup lang="ts">
import { useLayoutFn } from 'src/layouts/composable';
const { hrItems, employeeItems }: any = useLayoutFn();
const userInfo: any = sessionStorage.getItem('userInfo')
const user = JSON.parse(userInfo)
</script>
<template>
  <div class="border-r border-neutral-400/40 h-full py-5">
    <div class="flex justify-center">
      <p class="text-lg uppercase font-semibold">hr system</p>
    </div>
    <div class="pt-3">
      <div>
        <div v-if="user.hr">
          <RouterLink v-for="(item, index) in hrItems" :key="index" :to="item.router" v-slot="{ isExactActive }">
            <div class="py-3 group relative hover:bg-[#C49E5E]/10 cursor-pointer block"
              :class="{ 'bg-[#C49E5E]/10': isExactActive }">
              <div class="w-1 h-full absolute top-0 rounded-r-md left-0 bg-[#C49E5E]" v-if="isExactActive"></div>
              <div class="flex items-center justify-start gap-5 px-8">
                <BaseIcon :name="item.icon" class="w-5 h-5 group-hover:text-[#C49E5E]" :class="{
                  'text-[#C49E5E]': isExactActive,
                  'text-[#B8B4CC]': !isExactActive,
                }" />
                <p class="group-hover:text-[#C49E5E] text-base" :class="{
                  'text-[#C49E5E]': isExactActive,
                  'text-neutral-400': !isExactActive,
                }">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div v-if="user.employee">
          <RouterLink v-for="(item, index) in employeeItems" :key="index" :to="item.router" v-slot="{ isExactActive }">
            <div class="py-3 group relative hover:bg-[#C49E5E]/10 cursor-pointer block"
              :class="{ 'bg-[#C49E5E]/10': isExactActive }">
              <div class="w-1 h-full absolute top-0 rounded-r-md left-0 bg-[#C49E5E]" v-if="isExactActive"></div>
              <div class="flex items-center justify-start gap-5 px-8">
                <BaseIcon :name="item.icon" class="w-5 h-5 group-hover:text-[#C49E5E]" :class="{
                  'text-[#C49E5E]': isExactActive,
                  'text-[#B8B4CC]': !isExactActive,
                }" />
                <p class="group-hover:text-[#C49E5E] text-base" :class="{
                  'text-[#C49E5E]': isExactActive,
                  'text-neutral-400': !isExactActive,
                }">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
