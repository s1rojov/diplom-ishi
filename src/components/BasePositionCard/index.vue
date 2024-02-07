<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  cardData: {
    type: Object,
    required: true,
  },
});
const actionItems = ref<{ title: string; icon: string }[]>([
  {
    title: 'Tahrirlash',
    icon: 'edit',
  },
  {
    title: 'Lavozim',
    icon: 'triangle-right',
  },
  {
    title: 'Rahbariyat',
    icon: 'triangle-right',
  },
  {
    title: "O'chirish",
    icon: 'delete',
  },
]);
</script>
<template>
  <div class="border border-neutral-400/50 rounded-[15px] px-2 py-[14px]">
    <div class="flex justify-end pb-2">
      <q-btn unelevated :flat="true" round size="sm">
        <BaseIcon name="menu" class="w-4 h-4 cursor-pointer" />
        <q-menu>
          <q-list dense style="min-width: 100px">
            <q-item
              clickable
              v-for="(action, index) in actionItems"
              :key="index"
            >
              <q-item-section>{{ action.title }}</q-item-section>
              <q-item-section side>
                <BaseIcon :name="action.icon" class="w-3 h-3" />
              </q-item-section>
              <q-menu
                anchor="top end"
                self="top start"
                v-if="action.icon == 'triangle-right'"
              >
                <q-list>
                  <q-item v-for="n in 3" :key="n" dense clickable v-close-popup>
                    <q-item-section>Submenu Label</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="flex flex-col">
      <div class="box">
        <p class="title">Ish stavkasi:</p>
        <p class="subtitle">{{ props.cardData.state }}</p>
      </div>
      <div class="box my-3">
        <p class="title">Kod:</p>
        <p class="subtitle">{{ props.cardData.num }}</p>
      </div>
      <div class="box">
        <p class="title">Bo’linma:</p>
        <p class="subtitle">{{ props.cardData.division }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.box {
  @apply w-full px-[11px] py-2 bg-[#F8F8F8] rounded-[10px];
}

.title {
  @apply text-neutral-400 text-[10px] font-medium tracking-[0.44px];
}

.subtitle {
  @apply text-sm font-normal tracking-[0.337px] text-neutral-500;
}
</style>
