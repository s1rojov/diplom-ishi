import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useEmpStore = defineStore('empStore', {
    state: () => {
        return {
            employee: {}
        };
    },
    actions: {
        async getEmployeeById(id: any) {
            await api.get(`employee/get/${id}`).then((res: any) => {
                this.employee = res.data
                console.log(res.data)
            })
                .catch((error: any) => {
                    toast({
                        position: 'top-right',
                        type: 'negative',
                        message: error,
                        time: 3000,
                    });
                })
        }
    },
});
