<script setup lang="ts">
// import { ref } from 'vue';
import { useLayoutFn } from 'src/layouts/composable';
const { hrItems }: any = useLayoutFn();
</script>
<template>
  <div class="border-r border-neutral-400/40 h-full py-5">
    <div class="flex justify-center">
      <img src="/images/logo.png" class="w-[62px] h-[62px]" alt="logo" />
    </div>
    <div class="pt-5">
      <div>
        <RouterLink v-for="(item, index) in hrItems" :key="index" :to="item.router" v-slot="{ isActive }">
          <div class="py-3 group relative hover:bg-[#C49E5E]/10 cursor-pointer block"
            :class="{ 'bg-[#C49E5E]/10': isActive }">
            <div class="w-1 h-full absolute top-0 rounded-r-md left-0 bg-[#C49E5E]" v-if="isActive"></div>
            <div class="flex items-center justify-start gap-5 px-10">
              <BaseIcon :name="item.icon" class="w-5 h-5 group-hover:text-[#C49E5E]" :class="{
                'text-[#C49E5E]': isActive,
                'text-[#B8B4CC]': !isActive,
              }" />
              <p class="group-hover:text-[#C49E5E] text-base" :class="{
                'text-[#C49E5E]': isActive,
                'text-neutral-400': !isActive,
              }">
                {{ item.title }}
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
