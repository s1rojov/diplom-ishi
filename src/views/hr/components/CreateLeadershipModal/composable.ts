import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useHrStore } from 'src/views/hr/store'
export function useCreateModalFn() {
    const store = useHrStore()
    const { isCreateModalOpen, leadershipData } = storeToRefs(store)
    const tab = ref<string>('exp')
    function handleFileChange(event: any) {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()

            reader.onload = (e: any) => {
                leadershipData.value.img = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }
    function returnModalDataFn() {
        console.log(leadershipData.value);
        // isCreateModalOpen.value = false
    }
    return {
        handleFileChange,
        tab,
        returnModalDataFn
    }
}