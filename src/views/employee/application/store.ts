import { defineStore } from 'pinia'
import { api } from 'boot/axios';
export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            leadershipList: []
        }
    },
    actions: {
        async getLeadershipList() {
            await api.get('leadership/getList').then((res: any) => {
                this.leadershipList = res.data
            })
        }
    }
})