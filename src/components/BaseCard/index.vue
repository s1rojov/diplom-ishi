<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['selectedActionItem']);

const props = defineProps({
  cardData: {
    type: Object,
    required: true,
  },
});
function selectedAction(val: string) {
  emit('selectedActionItem', val);
}
const actionItems = ref<{ title: string; value: string; icon: string }[]>([
  {
    title: 'Tahrirlash',
    value: 'edit',
    icon: 'edit',
  },
  {
    title: 'Lavozim',
    value: 'position',
    icon: 'triangle-right',
  },
  {
    title: "O'chirish",
    value: 'delete',
    icon: 'delete',
  },
]);
</script>
<template>
  <div class="px-3 py-5 bg-white border border-neutral-400/40 rounded-2xl">
    <div class="flex justify-between">
      <div class="flex gap-[14px] items-center">
        <div class="w-20 h-20">
          <img
            src="/images/user.png"
            alt=""
            class="w-full object-cover rounded-full"
          />
        </div>
        <div class="flex gap-3 flex-col">
          <div>
            <p class="title">F.I.O:</p>
            <p class="subtitle">{{ props.cardData.name }}</p>
          </div>
          <div>
            <p class="title">Lavozimi:</p>
            <p class="subtitle">{{ props.cardData.position }}</p>
          </div>
        </div>
      </div>
      <div class="relative">
        <q-btn unelevated :flat="true" round size="sm">
          <BaseIcon name="menu" class="w-[15px] h-[15px] cursor-pointer" />
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item
                clickable
                v-for="(action, index) in actionItems"
                :key="index"
                v-close-popup
                @click="selectedAction(action.value)"
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
                    <q-item
                      v-for="n in 3"
                      :key="n"
                      dense
                      clickable
                      v-close-popup
                    >
                      <q-item-section>Submenu Label</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
    <div class="flex justify-between pt-10">
      <div class="box">
        <p class="title">Telefon:</p>
        <p class="subtitle">{{ props.cardData.phone }}</p>
      </div>
      <div class="box">
        <p class="title">Pochta:</p>
        <p class="subtitle">{{ props.cardData.email }}</p>
      </div>
      <div class="box">
        <p class="title">Qabul kunlari:</p>
        <p class="subtitle">{{ props.cardData.acceptance }}</p>
      </div>
    </div>
    <div class="flex justify-between pt-3 gap-5">
      <q-btn
        label="Ish tajribasi"
        no-caps
        class="px-[72px] rounded-xl bg-[#C49E5E] text-white font-light"
      />
      <q-btn
        label="Majburiyatlari"
        no-caps
        class="px-[72px] rounded-[10px] bg-[#C49E5E] text-white font-light"
      />
    </div>
  </div>
</template>
<style scoped>
.box {
  @apply px-[11px] py-2 bg-[#F8F8F8] rounded-[10px];
}

.title {
  @apply text-neutral-400 text-[10px] font-medium tracking-[0.44px];
}

.subtitle {
  @apply text-sm font-normal tracking-[0.337px] text-neutral-500;
}
</style>
