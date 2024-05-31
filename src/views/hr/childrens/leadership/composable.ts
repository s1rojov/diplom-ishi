import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useLeaderStore } from './store';
export function useLeadershipFn() {
  const store = useLeaderStore()
  const { getAllLeader, deleteLeader } = store
  const { data, notifyModal } = storeToRefs(store)

  const selectedItemId = ref<any>(null)
  const updateItemFn = (id: any) => {
    console.log(id)
  };

  const deleteItemFn = (id: any) => {
    notifyModal.value = true
    selectedItemId.value = id
  }

  const actionFn = (val: string) => {
    if ((val === 'close') || (val === 'no')) {
      notifyModal.value = false
    }
    else if (val === 'yes') {
      deleteLeader(selectedItemId.value).then(() => {
        notifyModal.value = false
      })
    }
  }

  onMounted(() => {
    getAllLeader()
  })
  return {
    data,
    updateItemFn,
    deleteItemFn,
    actionFn
  };
}
