import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useDepartmentStore = defineStore('departmentStore', {
    state: () => {
        return {
            data: [],
            notifyModal: false,
            createModal: false,
            department: {
                fullname: '',
                shortname: ''
            }
        };
    },
    actions: {
        async getAllDepartment() {
            await api
                .get('department')
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
        async deleteDepartment(id: any) {
            api.delete(`department/${id}`).then(() => {
                this.getAllDepartment()
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
        async createNewDepartment() {
            await api.post('department', this.department).then(() => {
                this.getAllDepartment()
                this.department = {
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
        async getDepartmentById(id: any) {
            await api.get(`department/${id}`).then((res: any) => {
                this.createModal = true
                this.department.fullname = res.data?.fullname
                this.department.shortname = res.data?.shortname
            })
        },
        async updateDepartment(id: any) {
            await api.put(`department/${id}`, this.department).then(() => {
                this.getAllDepartment()
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
