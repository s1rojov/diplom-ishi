import { ref } from 'vue'
export function useApplicationFn() {
    const tab = ref<string>('progress')
    const tabItems = ref<any[]>([
        {
            name: 'progress',
            label: 'Jarayonda'
        },
        {
            name: 'done',
            label: 'Tasdiqlangan'
        },
    ])
    return {
        tab,
        tabItems
    }
}