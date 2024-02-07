<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref<boolean>(false)
</script>
<template>
    <router-view></router-view>
    <!-- <div>
        <BaseModal v-model="isOpen" :closable="true">
        </BaseModal>
    </div> -->
</template>