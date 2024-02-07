<script setup lang="ts">
import Sidebar from 'src/layouts/Sidebar.vue';
import Header from 'src/layouts/Header.vue';
</script>
<template>
  <div class="max-w-screen w-full flex max-h-screen h-full overflow-hidden">
    <div class="w-1/5 h-screen">
      <Sidebar />
    </div>
    <div class="w-4/5 bg-stone-50">
      <Header />
      <router-view />
    </div>
  </div>
</template>
