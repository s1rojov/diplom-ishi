import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useLeaderStore = defineStore('leaderStore', {
    state: () => {
        return {
            data: [],
            notifyModal: false,
            loading: false,
            createModal: false,
            updatedData: {},
            leader: {
                fullname: '',
                phone: '',
                position: '',
                address: '',
                birthday: '',
                pass_information: '',
                experience: ''
            }
        };
    },
    actions: {
        async getAllLeader() {
            this.loading = true
            await api
                .get('leadership')
                .then((res: any) => {
                    this.data = res.data
                    this.loading = false
                })
                .catch((error: any) => {
                    toast({
                        position: 'top-right',
                        type: 'negative',
                        message: error.message,
                        time: 3000,
                    });
                });
        },
        async deleteLeader(id: any) {
            api.delete(`leadership/${id}`).then(() => {
                this.getAllLeader()
                toast({
                    position: 'top-right',
                    type: 'positive',
                    message: "Muvaffaqqiyatli o'chirildi",
                    time: 3000,
                });
            })
        },
        async createNewLeader() {
            await api.post('leadership', this.leader).then(() => {
                this.getAllLeader()
                toast({
                    position: 'top-right',
                    type: 'positive',
                    message: "Muvaffaqqiyatli qo'shildi",
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
        async getLeaderById(id: any) {
            await api.get(`leadership/${id}`).then((res: any) => {
                this.createModal = true
                this.leader.fullname = res.data?.fullname
                this.leader.phone = res.data?.phone
                this.leader.position = res.data?.position
                this.leader.address = res.data?.address
                this.leader.birthday = res.data?.birthday.substring(0, 10)
                this.leader.pass_information = res.data?.pass_information
                this.leader.experience = res.data?.experience
            })
        },
        async updateLeader(id: any) {
            await api.put(`leadership/${id}`, this.leader).then(() => {
                this.getAllLeader()
                this.createModal = false
                toast({
                    position: 'top-right',
                    type: 'positive',
                    message: "Muvaffaqqiyatli o'zgartirildi",
                    time: 3000,
                });
            })
        }
    },
});
