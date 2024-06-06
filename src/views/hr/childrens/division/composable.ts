import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useDivisionStore } from './store'
export function useDivisionFn() {
    const store = useDivisionStore()
    const { getAllDivision, deleteDivision, getDivisionById, updateDivision, createNewDivision } = store
    const { notifyModal, createModal, division } = storeToRefs(store)
    const selectedItemId = ref<any>(null)
    const isUpdate = ref<boolean>(false)


    function deleteItemFn(id: any) {
        notifyModal.value = true
        selectedItemId.value = id
    }
    function updateItemFn(id: any) {
        getDivisionById(id)
        isUpdate.value = true
        selectedItemId.value = id
    }

    function modalClicked(val: string) {
        if (val == 'cancel') {
            createModal.value = false
            division.value = {
                fullname: '',
                shortname: ''
            }
        }
        else if (val == 'save') {
            if (isUpdate.value) {
                updateDivision(selectedItemId.value).then(() => {
                    isUpdate.value = false
                    selectedItemId.value = null
                })
            }
            else {
                createNewDivision().then(() => {
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
            deleteDivision(selectedItemId.value).then(() => {
                notifyModal.value = false
            })
        }
    }

    onMounted(() => {
        getAllDivision()
    })
    return {
        deleteItemFn,
        updateItemFn,
        actionFn,
        modalClicked
    }
}