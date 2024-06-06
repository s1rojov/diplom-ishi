import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useDepartmentStore } from './store'
export function useDepartmentFn() {
    const store = useDepartmentStore()
    const { getAllDepartment, deleteDepartment, getDepartmentById, updateDepartment, createNewDepartment } = store
    const { notifyModal, createModal, department } = storeToRefs(store)
    const selectedItemId = ref<any>(null)
    const isUpdate = ref<boolean>(false)


    function deleteItemFn(id: any) {
        notifyModal.value = true
        selectedItemId.value = id
    }
    function updateItemFn(id: any) {
        getDepartmentById(id)
        isUpdate.value = true
        selectedItemId.value = id
    }

    function modalClicked(val: string) {
        if (val == 'cancel') {
            createModal.value = false
            department.value = {
                fullname: '',
                shortname: ''
            }
        }
        else if (val == 'save') {
            if (isUpdate.value) {
                updateDepartment(selectedItemId.value).then(() => {
                    isUpdate.value = false
                    selectedItemId.value = null
                })
            }
            else {
                createNewDepartment().then(() => {
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
            deleteDepartment(selectedItemId.value).then(() => {
                notifyModal.value = false
            })
        }
    }

    onMounted(() => {
        getAllDepartment()
    })
    return {
        deleteItemFn,
        updateItemFn,
        actionFn,
        modalClicked
    }
}