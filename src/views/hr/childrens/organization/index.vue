<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useOrgStore } from 'src/views/hr/childrens/organization/store'
import { useAuthStore } from 'src/views/auth/store';
import BaseModal from 'src/components/BaseModal/index.vue'
import BaseInput from 'src/components/BaseInput/index.vue'
import BaseTextarea from 'src/components/BaseTextarea/index.vue'
const storeAuth = useAuthStore();
const { data } = storeToRefs(storeAuth);
const store = useOrgStore()
const { organization, organizationModal }: any = storeToRefs(store)
const { getOranizationInfo } = store
onMounted(() => {
  getOranizationInfo(data.value.org_id)
})
</script>
<template>
  <div class="px-7 flex flex-col gap-3 pt-3">
    <div class="rounded-2xl flex items-center justify-between">
      <div>
        <div class="text-zinc-950 text-2xl font-semibold leading-relaxed tracking-wide">
          {{ organization?.shortname }}
        </div>
        <span class="text-neutral-400 text-base font-normal leading-normal tracking-wide">{{ organization?.fullname
          }}</span>
      </div>
      <BaseButton label="O'zgartirish" @click="organizationModal = true" />
    </div>
    <p class="text-black/80">{{ organization.description }}</p>
  </div>
  <BaseModal v-model="organizationModal" customClass="w-1/3 bg-white p-5 h-auto relative">
    <BaseIcon name="close" class="w-5 h-5 cursor-pointer absolute right-5 top-5" @click="organizationModal = false" />
    <div class="mt-10">
      <p class="mb-2">Tashkilotingizni qisqa nomini kiriting</p>
      <BaseInput placeholder="Short name" />
    </div>
    <div class="mt-3">
      <p class="mb-2">Tashkilotingizni to'liq nomini kiriting</p>
      <BaseInput placeholder="Full name" />
    </div>
    <div class="mt-3">
      <p class="mb-2">Tashkilotingizni qisqa nomini kiriting</p>
      <BaseTextarea placeholder="Short name" />
    </div>
    <div class="flex items-center mt-3 justify-end gap-3">
      <BaseButton label="Bekor qilish" @click="organizationModal = false" />
      <BaseButton label="Saqlash" @click="organizationModal = true" />
    </div>
  </BaseModal>
</template>
