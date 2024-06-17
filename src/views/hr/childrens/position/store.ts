import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useTypeStore = defineStore('typeStore', {
    state: () => {
        return {
            data: [],
            notifyModal: false,
            createModal: false,
            visibleKafedraList: true,
            visibleDepartmentList: true,
            type: {
                name: '',
                count: '',
                kafedra_id: null,
                department_id: null
            },
            kafedraList: [],
            departmentList: []
        };
    },
    actions: {
        async getAllType() {
            await api
                .get('employeeType')
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
        async deleteType(id: any) {
            api.delete(`employeeType/${id}`).then(() => {
                this.getAllType()
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
        async createNewType() {
            await api.post('employeeType', this.type).then(() => {
                this.getAllType()
                this.type = {
                    name: '',
                    count: '',
                    kafedra_id: null,
                    department_id: null,
                }
                toast({
                    position: 'top-right',
                    type: 'positive',
                    message: "Muvaffaqqiyatli qo'shildi",
                    time: 3000,
                });
                this.visibleKafedraList = true
                this.visibleDepartmentList = true
            }).catch((error: any) => {
                toast({
                    position: 'top-right',
                    type: 'negative',
                    message: error.message,
                    time: 3000,
                });
            })
        },
        async getTypeById(id: any) {
            await api.get(`employeeType/${id}`).then((res: any) => {
                this.createModal = true
                this.type.name = res.data?.name
                this.type.count = res.data?.count
                this.type.kafedra_id = res.data?.kafedra_id
                this.type.department_id = res.data?.department_id
            })
        },
        async getKafedraList() {
            await api.get('employeeType/kafedraList').then((res: any) => {
                this.kafedraList = res.data
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
        async getDepartmentList() {
            await api.get('employeeType/departmentList').then((res: any) => {
                this.departmentList = res.data
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
        async updateType(id: any) {
            await api.put(`employeeType/${id}`, this.type).then(() => {
                this.getAllType()
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
