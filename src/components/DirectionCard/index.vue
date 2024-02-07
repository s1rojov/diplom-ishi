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
  <div
    class="border rounded-2xl w-full border-neutral-400/40 relative py-4 px-2"
  >
    <div class="absolute right-3">
      <q-btn unelevated :flat="true" round size="sm">
        <BaseIcon name="menu" class="w-[15px] h-[15px] cursor-pointer" />
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

    <div class="mt-2 flex flex-col items-center">
      <p class="text-neutral-400 text-[10px] font-medium tracking-[0.44px]">
        F.I.O:
      </p>
      <p class="text-gray text-sm font-normal tracking-[0.437px]">
        {{ props.cardData.name }}
      </p>
    </div>
    <div class="pt-5">
      <div class="box">
        <p class="title">Kod:</p>
        <p class="subtitle">{{ props.cardData.position }}</p>
      </div>
      <div class="box mt-[11px]">
        <p class="title">Rahbariyat:</p>
        <p class="subtitle">{{ props.cardData.email }}</p>
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
