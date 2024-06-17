<script setup lang="ts">
import { PropType, toRefs, ref, watch, computed } from 'vue';

const emit = defineEmits(['selectedItem', 'select'])
const props = defineProps({
  defaultTitle: {
    type: String as PropType<string>,
    default: 'Select item'
  },
  options: {
    type: Array as PropType<{ label: string, value: string }[]>,
    required: true
  },
  id: {
    type: String,
    default: ''
  }
})

// const currentId = computed(() => { return props.id })

// watch(() => currentId.value, () => {
//   // props.options.forEach((item: any) => {
//   //   if (props.id == item.value) {
//   //     selectedItemVal.value = item.label
//   //     console.log(item)
//   //     // console.log(item)
//   //   }
//   // })
//   console.log(props.id)

// })


const selectedItemVal = ref<any>('')
function clickedItem(label: any, val: any, item: any) {
  selectedItemVal.value = label
  visibleItemsFn('close')
  emit('selectedItem', val)
  emit('select', item)
}
const isVisible = ref<boolean>(false)
function visibleItemsFn(arg: string) {
  if (arg === 'close') {
    isVisible.value = false
    // console.log('close');
  }
  else if (arg === 'toggle') {
    isVisible.value = !isVisible.value
    // console.log('toggle');
  }
}
toRefs(props)
window.addEventListener('click', () => {
  visibleItemsFn('close')
})
</script>
<template>
  <div class="flex flex-col items-stretch relative">
    <q-list class="absolute w-full bottom-12">
      <div v-if="isVisible" class="rounded bg-stone-100  border mt-2 px-1 py-1 z-max">
        <div v-for="item, index in props.options" :key="index" @click.stop="clickedItem(item.label, item.value, item)"
          class="px-1.5 rounded text-sm cursor-pointer transition-all py-2 hover:bg-white">
          {{ item.label }}
        </div>
      </div>
    </q-list>
    <div class="w-full relative bg-white border rounded cursor-pointer" @click.stop="visibleItemsFn('toggle')">
      <div class="py-2.5 pl-2.5 pr-11 text-sm  w-full">
        {{ selectedItemVal == '' ? props.defaultTitle : selectedItemVal }}
      </div>
      <BaseIcon name="triangle-right" :class="{ 'rotate-90': isVisible }"
        class="w-3.5 h-3.5 top-0 bottom-0 my-auto right-2 absolute text-neutral-500" />
    </div>
  </div>
</template>
