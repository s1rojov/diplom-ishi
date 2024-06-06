import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useKafedraStore } from './store'
export function useKafedraFn() {
    const store = useKafedraStore()
    const { getAllKafedra, deleteKafedra, getKafedraById, updateKafedra, createNewKafedra, getDivisionList } = store

    const { notifyModal, createModal, kafedra } = storeToRefs(store)
    const selectedItemId = ref<any>(null)
    const isUpdate = ref<boolean>(false)

    function deleteItemFn(id: any) {
        notifyModal.value = true
        selectedItemId.value = id
    }
    function updateItemFn(id: any) {
        getKafedraById(id)
        isUpdate.value = true
        selectedItemId.value = id
    }

    function modalClicked(val: string) {
        if (val == 'cancel') {
            createModal.value = false
            kafedra.value = {
                fullname: '',
                shortname: '',
                division_id: ''
            }
        }
        else if (val == 'save') {
            if (isUpdate.value) {
                updateKafedra(selectedItemId.value).then(() => {
                    isUpdate.value = false
                    selectedItemId.value = null
                })
            }
            else {
                createNewKafedra().then(() => {
                    createModal.value = false
                })
            }
        }
    }


    const actionFn = (val: string) => {
        if ((val === 'close') || (val === 'no')) {
            notifyModal.value = false
        }
        else if (val === 'yes') {
            deleteKafedra(selectedItemId.value).then(() => {
                notifyModal.value = false
            })
        }
    }

    onMounted(() => {
        getAllKafedra()
        getDivisionList()
    })
    return {
        deleteItemFn,
        updateItemFn,
        actionFn,
        modalClicked,
    }
}