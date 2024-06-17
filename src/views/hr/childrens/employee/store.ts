import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useEmployeeStore = defineStore('employeeStore', {
    state: () => {
        return {
            data: [],
            notifyModal: false,
            createModal: false,
            visibleKafedraList: true,
            visibleDepartmentList: true,
            employee: {
                fullname: '',
                phone: '',
                address: '',
                birthday: '',
                pass_information: '',
                experience: '',
                employee_type_id: '',
                shtat: '',
                unique_code: ''
            },
            kafedraList: [],
            departmentList: [],
            positionList: []
        };
    },
    actions: {
        async getAllEmployee() {
            await api
                .get('employee')
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
        async deleteEmployee(id: any) {
            api.delete(`employee/${id}`).then(() => {
                this.getAllEmployee()
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
        async createNewEmployee() {
            await api.post('employee', this.employee).then(() => {
                this.getAllEmployee()
                this.employee = {
                    fullname: '',
                    phone: '',
                    address: '',
                    birthday: '',
                    pass_information: '',
                    experience: '',
                    employee_type_id: '',
                    shtat: '',
                    unique_code: ''
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
        async getPositionList() {
            await api.get('employee/positionList').then((res: any) => {
                this.positionList = res.data
            }).catch((error: any) => {
                toast({
                    position: 'top-right',
                    type: 'negative',
                    message: error.message,
                    time: 3000,
                });
            })
        }

        ,
        async getEmployeeById(id: any) {
            await api.get(`employee/${id}`).then((res: any) => {
                this.createModal = true
                this.employee.fullname = res.data?.fullname
                this.employee.phone = res.data?.phone
                this.employee.address = res.data?.address
                this.employee.birthday = res.data?.birthday.substring(0, 10)
                this.employee.pass_information = res.data?.pass_information
                this.employee.experience = res.data?.experience
                this.employee.employee_type_id = res.data?.employee_type_id
                this.employee.shtat = res.data?.shtat
                this.employee.unique_code = res.data?.unique_code
            })
        },
        // async getKafedraList() {
        //     await api.get('employeeType/kafedraList').then((res: any) => {
        //         this.kafedraList = res.data
        //     })
        //         .catch((error: any) => {
        //             toast({
        //                 position: 'top-right',
        //                 type: 'negative',
        //                 message: error.message,
        //                 time: 3000,
        //             });
        //         })
        // },
        // async getDepartmentList() {
        //     await api.get('employeeType/departmentList').then((res: any) => {
        //         this.departmentList = res.data
        //     })
        //         .catch((error: any) => {
        //             toast({
        //                 position: 'top-right',
        //                 type: 'negative',
        //                 message: error.message,
        //                 time: 3000,
        //             });
        //         })
        // },
        async updateEmployee(id: any) {
            await api.put(`employee/${id}`, this.employee).then(() => {
                this.getAllEmployee()
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
