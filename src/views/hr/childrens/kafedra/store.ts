import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useKafedraStore = defineStore('kafedraStore', {
    state: () => {
        return {
            data: [],
            notifyModal: false,
            createModal: false,
            kafedra: {
                fullname: '',
                shortname: '',
                division_id: ''
            },
            divisionList: []
        };
    },
    actions: {
        async getAllKafedra() {
            await api
                .get('kafedra')
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
        async deleteKafedra(id: any) {
            api.delete(`kafedra/${id}`).then(() => {
                this.getAllKafedra()
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
        async createNewKafedra() {
            await api.post('kafedra', this.kafedra).then(() => {
                this.getAllKafedra()
                this.kafedra = {
                    fullname: '',
                    shortname: '',
                    division_id: ''
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
        async getKafedraById(id: any) {
            await api.get(`kafedra/${id}`).then((res: any) => {
                this.createModal = true
                this.kafedra.fullname = res.data?.fullname
                this.kafedra.shortname = res.data?.shortname
                this.kafedra.division_id = res.data?.division_id
            })
        },
        async getDivisionList() {
            await api.get('kafedra/divisionList').then((res: any) => {
                this.divisionList = res.data
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
        async updateKafedra(id: any) {
            await api.put(`division/${id}`, this.kafedra).then(() => {
                this.getAllKafedra()
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
