import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      data: {
        login: '',
        password: '',
      },
      employee_code: '',
      admin: {}
    };
  },
  actions: {
    async getAccessToSystem(data: any) {
      api.post('auth', data).then((res: any) => {
        sessionStorage.setItem('userInfo', JSON.stringify(res.data));
        if (res.data.hr) {
          this.router.push({ name: 'Dashboard' });
        }
        else if (res.data.employee) {
          this.router.push({ name: 'Private data' });
        }
        toast({
          position: 'top-right',
          type: 'positive',
          message: 'Muvaffaqqiyatli kirdingiz',
          time: 3000,
        });
      }).catch((error: any) => {
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
