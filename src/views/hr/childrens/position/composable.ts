import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTypeStore } from './store'
export function useTypeFn() {
    const store = useTypeStore()
    const { getAllType, deleteType, getTypeById, updateType, createNewType, getKafedraList, getDepartmentList } = store

    const { notifyModal, createModal, type } = storeToRefs(store)
    const selectedItemId = ref<any>(null)
    const isUpdate = ref<boolean>(false)

    function deleteItemFn(id: any) {
        notifyModal.value = true
        selectedItemId.value = id
    }
    function updateItemFn(id: any) {
        getTypeById(id)
        isUpdate.value = true
        selectedItemId.value = id
    }

    function modalClicked(val: string) {
        if (val == 'cancel') {
            createModal.value = false
            type.value = {
                name: '',
                count: '',
                kafedra_id: null,
                department_id: null
            }
        }
        else if (val == 'save') {
            if (isUpdate.value) {
                updateType(selectedItemId.value).then(() => {
                    isUpdate.value = false
                    selectedItemId.value = null
                })
            }
            else {
                createNewType().then(() => {
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
            deleteType(selectedItemId.value).then(() => {
                notifyModal.value = false
            })
        }
    }

    onMounted(() => {
        getAllType()
        getKafedraList()
        getDepartmentList()
    })
    return {
        deleteItemFn,
        updateItemFn,
        actionFn,
        modalClicked,
    }
}