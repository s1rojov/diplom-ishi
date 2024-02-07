<script setup lang="ts">
// import { ref } from 'vue';
import { useLayoutFn } from 'src/layouts/composable';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value);
const { hrItems, studyItems, superAdminItems }: any = useLayoutFn();
// const selectedItem = ref<number>(0);
// function clickedItem(index: number, name: string) {
//   if (selectedItem.value !== index) {
//     selectedItem.value = index;
//     if (name == 'HR Manager') {
//       router.push({ name: 'Super admin Leadership' });
//     } else if (name == "O'quv") {
//       router.push({ name: 'Super admin Group' });
//     }
//   } else {
//     selectedItem.value = 1213;
//   }
// }
</script>
<template>
  <div class="border-r border-neutral-400/40 h-full py-5">
    <div class="flex justify-center">
      <img src="/images/logo.png" class="w-[62px] h-[62px]" alt="logo" />
    </div>
    <div class="pt-5" v-if="false">
      <div v-if="currentRoute.fullPath.split('/')[1] === 'hr'">
        <RouterLink v-for="(item, index) in hrItems" :key="index" :to="item.router" v-slot="{ isExactActive }">
          <div class="py-3 group relative hover:bg-[#C49E5E]/10 cursor-pointer block"
            :class="{ 'bg-[#C49E5E]/10': isExactActive }">
            <div class="w-1 h-full absolute top-0 rounded-r-md left-0 bg-[#C49E5E]" v-if="isExactActive"></div>
            <div class="flex items-center justify-start gap-5 px-10">
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
      <div v-if="false">
        <RouterLink v-for="(item, index) in studyItems" :key="index" :to="item.router" v-slot="{ isExactActive }">
          <div class="py-3 group relative hover:bg-[#C49E5E]/10 cursor-pointer block"
            :class="{ 'bg-[#C49E5E]/10': isExactActive }">
            <div class="w-1 h-full absolute top-0 rounded-r-md left-0 bg-[#C49E5E]" v-if="isExactActive"></div>
            <div class="flex items-center justify-start gap-5 px-10">
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
    <div class="mt-5">
      <div>
        <RouterLink v-for="(item, index) in hrItems" :key="index" :to="item.router" v-slot="{ isExactActive }">
          <div class="py-3 group relative hover:bg-[#C49E5E]/10 cursor-pointer block"
            :class="{ 'bg-[#C49E5E]/10': isExactActive }">
            <div class="w-1 h-full absolute top-0 rounded-r-md left-0 bg-[#C49E5E]" v-if="isExactActive"></div>
            <div class="flex items-center justify-start gap-5 px-10">
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
</template>
<style scoped></style>
