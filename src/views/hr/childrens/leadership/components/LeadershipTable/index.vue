<script setup lang="ts">
const headerItem = [
  '№',
  'Rasmi',
  'F.I.O',
  'Lavozimi',
  'Telefon',
  'Qabul kunlari',
  'Harakat',
];
const fakeData = [
  {
    id: 1,
    picture: '/images/user.png',
    fullname: 'John Doe',
    position: "Direktorning o'quv ishlari bo‘yicha o‘rinbosari",
    phone: '(71) 299-05-44',
    addmission: 'Se (10:00-12:00)',
  },
  {
    id: 2,
    picture: '/images/user.png',
    fullname: 'John Doe',
    position: "Direktorning o'quv ishlari bo‘yicha o‘rinbosari",
    phone: '(71) 299-05-44',
    addmission: 'Se (10:00-12:00)',
  },
  {
    id: 3,
    picture: '/images/user.png',
    fullname: 'John Doe',
    position: "Direktorning o'quv ishlari bo‘yicha o‘rinbosari",
    phone: '(71) 299-05-44',
    addmission: 'Se (10:00-12:00)',
  },
  {
    id: 4,
    picture: '/images/user.png',
    fullname: 'John Doe',
    position: "Direktorning o'quv ishlari bo‘yicha o‘rinbosari",
    phone: '(71) 299-05-44',
    addmission: 'Se (10:00-12:00)',
  },
];
</script>
<template>
  <div
    class="h-full bg-white border border-gray-400/40 w-full rounded-[15px] px-6 py-4"
  >
    <div class="w-full h-full">
      <!-- header -->
      <div class="grid grid-cols-9 w-full bg-[#C49E5E]/10 p-3 rounded-2xl">
        <p
          v-for="(item, index) in headerItem"
          :key="index"
          class="font-semibold text-start text-[#C49E5E]"
          :class="{
            'col-span-2': item == 'F.I.O' || item == 'Lavozimi',
          }"
        >
          {{ item }}
        </p>
      </div>
      <!-- table body -->
      <div class="mt-1.5">
        <div
          v-for="(item, index) in fakeData"
          :key="index"
          class="grid grid-cols-9 w-full p-2.5 items-center border-b"
          :class="{ 'border-t': index == 0 }"
        >
          <p class="font-medium text-neutral-500">{{ item.id }}</p>
          <img :src="item.picture" class="w-10 h-10 rounded-full" alt="error" />
          <p class="col-span-2 font-medium text-neutral-500">
            {{ item.fullname }}
          </p>
          <p class="col-span-2 font-medium text-neutral-500">
            {{ item.position }}
          </p>
          <p class="font-medium text-neutral-500">{{ item.phone }}</p>
          <p class="font-medium text-neutral-500">{{ item.addmission }}</p>
          <div class="flex items-center gap-3">
            <div class="bg-red-500/10 p-1 rounded-md cursor-pointer">
              <BaseIcon name="edit" class="w-3 text-[#C49E5E] h-3" />
            </div>
            <div class="bg-red-500/10 p-1 rounded-md cursor-pointer">
              <BaseIcon name="delete" class="w-3 h-3 text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
