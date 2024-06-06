import { ref, onMounted } from 'vue';
// import { useToastification } from 'src/helpers/toast';
// const { toast } = useToastification();
import { storeToRefs } from 'pinia';
import { useLeaderStore } from './store';
export function useLeadershipFn() {
  const store = useLeaderStore()
  const { getAllLeader, deleteLeader, createNewLeader, getLeaderById, updateLeader } = store
  const { data, notifyModal, createModal, leader } = storeToRefs(store)


  const selectedItemId = ref<any>(null)
  const isUpdate = ref<boolean>(false)
  const updateItemFn = (id: any) => {
    getLeaderById(id)
    isUpdate.value = true
    selectedItemId.value = id
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
      const updateBirth = leader.value.birthday.split('/')
      leader.value.birthday = `${updateBirth[1]}.${updateBirth[0]}.${updateBirth[2]}`
      if (isUpdate.value) {
        updateLeader(selectedItemId.value).then(() => {
          isUpdate.value = false
          selectedItemId.value = null
        })
      }
      else {
        createNewLeader().then(() => {
          createModal.value = false
        })
      }
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
  };
}
