import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useHrStore } from 'src/views/hr/store'
export function useDivisionModalFn(): any {

    const store = useHrStore()
    const { isDivisionModal, divisionData } = storeToRefs(store)
    function handleFileChange(event: any) {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()

            reader.onload = (e: any) => {
                divisionData.value.img = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }

    function returnDivisionData() {
        console.log(divisionData.value);
        isDivisionModal.value = false
    }
    return {
        returnDivisionData,
        handleFileChange
    }
}