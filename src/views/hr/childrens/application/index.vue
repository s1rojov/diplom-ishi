<script setup lang="ts">
import { ref } from 'vue';
import { useApplicationFn } from './composable';
const { tab, tabItems } = useApplicationFn()
</script>
<template>
    <div>
        <q-tabs v-model="tab" dense class="text-black/50" active-color="black" indicator-color="transparent"
            align="left" narrow-indicator>
            <q-tab v-for="item in tabItems" :key="item.name" :name="item.name" :label="item.label" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="progress">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="done">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>