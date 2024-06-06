import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useDivisionStore = defineStore('divisionStore', {
    state: () => {
        return {
            data: [],
            notifyModal: false,
            createModal: false,
            division: {
                fullname: '',
                shortname: ''
            }
        };
    },
    actions: {
        async getAllDivision() {
            await api
                .get('division')
                .then((res: any) => {
                    this.data = res.data
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
        async deleteDivision(id: any) {
            api.delete(`division/${id}`).then(() => {
                this.getAllDivision()
                toast({
                    position: 'top-right',
                    type: 'positive',
                    message: "Muvaffaqqiyatli o'chirildi",
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
        async createNewDivision() {
            await api.post('division', this.division).then(() => {
                this.getAllDivision()
                this.division = {
                    fullname: '',
                    shortname: ''
                }
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
        async getDivisionById(id: any) {
            await api.get(`division/${id}`).then((res: any) => {
                this.createModal = true
                this.division.fullname = res.data?.fullname
                this.division.shortname = res.data?.shortname
            })
        },
        async updateDivision(id: any) {
            await api.put(`division/${id}`, this.division).then(() => {
                this.getAllDivision()
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
