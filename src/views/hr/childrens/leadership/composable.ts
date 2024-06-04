import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useLeaderStore } from './store';
export function useLeadershipFn() {
  const store = useLeaderStore()
  const { getAllLeader, deleteLeader, createNewLeader } = store
  const { data, notifyModal, createModal } = storeToRefs(store)
  const leader = ref<any>({
    fullname: '',
    phone: '',
    position: '',
    address: '',
    birthday: '',
    pass_information: '',
    experience: ''
  })


  const selectedItemId = ref<any>(null)
  const updateItemFn = (id: any) => {
    console.log(id)
  };

  function modalClicked(val: string) {
    if (val == 'cancel') {
      createModal.value = false
      leader.value = {
        fullname: '',
        phone: '',
        position: '',
        address: '',
        birthday: '',
        pass_information: '',
        experience: ''
      }

    }
    else if (val == 'save') {
      createNewLeader(leader.value).then(() => {
        createModal.value = false
      })
    }
  }

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
    actionFn,
    modalClicked,
    leader
  };
}
