import { defineStore } from 'pinia'
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();

const user: any = sessionStorage.getItem('userInfo')
export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            leadershipList: [],
            headList: [] as any[],
            allApps: [] as any[],
            app: {
                leader_id: '',
                head_id: '',
                dateOn: '',
                dateEnd: '',
                agree_head: false,
                agree_leader: false,
                agree_hr: false,
                user_unique_code: JSON.parse(user)?.user?.unique_code,
                app_type: ''
            }
        }
    },
    actions: {
        async getLeadershipList() {
            await api.get('leadership/getList').then((res: any) => {
                this.leadershipList = res.data
            })
        },
        async getEmployeeHeadList() {
            await api.get('department_head/getList').then((res: any) => {
                this.headList = res.data
            })
                .catch((error: any) => {
                    toast({
                        position: 'top-right',
                        type: 'negative',
                        message: error.message,
                        time: 3000,
                    });
                })
        },


        async createApplication() {
            await api.post('application', this.app).then(() => {
                this.app = {
                    leader_id: '',
                    head_id: '',
                    dateOn: '',
                    dateEnd: '',
                    agree_head: false,
                    agree_leader: false,
                    agree_hr: false,
                    user_unique_code: JSON.parse(user)?.user?.unique_code,
                    app_type: ''
                }
                toast({
                    position: 'top-right',
                    type: 'positive',
                    message: 'Muvaffaqqiyatli yaratildi',
                    time: 3000,
                });
            }).catch((error: any) => {
                toast({
                    position: 'top-right',
                    type: 'negative',
                    message: error.message,
                    time: 3000,
                });
            })
        },

        async getAllMyApplication() {
            await api.post('application/all', { user_unique_code: JSON.parse(user)?.user?.unique_code }).then((res: any) => {
                this.allApps = res.data
            })
                .catch((error: any) => {
                    toast({
                        position: 'top-right',
                        type: 'negative',
                        message: error.message,
                        time: 3000,
                    });
                })
        }
    }
})