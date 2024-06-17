import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useEmployeeStore } from './store'
export function useEmployeeFn() {
    const store = useEmployeeStore()
    const { getAllEmployee, deleteEmployee, getEmployeeById, updateEmployee, createNewEmployee, getPositionList } = store

    const { notifyModal, createModal, employee } = storeToRefs(store)
    const selectedItemId = ref<any>(null)
    const isUpdate = ref<boolean>(false)


    const shtatList = ref<any>([
        {
            value: '0.25',
            label: '0.25 stavka'
        },
        {
            value: '0.5',
            label: '0.5 stavka'
        },
        {
            value: '0.75',
            label: '0.75 stavka'
        },
        {
            value: '1',
            label: '1 stavka'
        }
    ])

    function deleteItemFn(id: any) {
        notifyModal.value = true
        selectedItemId.value = id
    }
    function updateItemFn(id: any) {
        getEmployeeById(id)
        isUpdate.value = true
        selectedItemId.value = id
    }

    function modalClicked(val: string) {
        if (val == 'cancel') {
            createModal.value = false
            employee.value = {
                fullname: '',
                phone: '',
                address: '',
                birthday: '',
                pass_information: '',
                experience: '',
                employee_type_id: '',
                shtat: '',
                unique_code: ''
            }
        }
        else if (val == 'save') {
            const updateBirth = employee.value.birthday.split('/')
            employee.value.birthday = `${updateBirth[1]}.${updateBirth[0]}.${updateBirth[2]}`
            if (isUpdate.value) {
                updateEmployee(selectedItemId.value).then(() => {
                    isUpdate.value = false
                    selectedItemId.value = null
                })
            }
            else {
                createNewEmployee().then(() => {
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
            deleteEmployee(selectedItemId.value).then(() => {
                notifyModal.value = false
            })
        }
    }

    onMounted(() => {
        getAllEmployee()
        // getKafedraList()
        // getDepartmentList()
        getPositionList()
    })
    return {
        deleteItemFn,
        updateItemFn,
        actionFn,
        modalClicked,
        shtatList
    }
}