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
    async getAccessToSystem() {
      await api
        .post('auth', this.data)
        .then((res: any) => {
          this.admin = res.data?.admin;
          if (res.data.admin) {
            sessionStorage.setItem('admin', 'true');
            sessionStorage.setItem('userInfo', JSON.stringify(res.data));
            this.router.push({ name: 'Dashboard' });
          }
          toast({
            position: 'top-right',
            type: 'positive',
            message: 'Muvaffaqqiyatli kirdingiz',
            time: 3000,
          });
        })
        .catch(() => {
          toast({
            position: 'top-right',
            type: 'negative',
            message: 'Parol yoki login xato!',
            time: 3000,
          });
        });
    },
    async getAccessForEmployee() {
      await api.post('auth/employee', { unique_code: this.employee_code }).then((res: any) => {
        if (res.data.employee) {
          sessionStorage.setItem('employee', 'true');
          sessionStorage.setItem('userInfo', JSON.stringify(res.data));
          this.router.push({ name: 'Dashboard' });
        }
        toast({
          position: 'top-right',
          type: 'positive',
          message: 'Muvaffaqqiyatli kirdingiz',
          time: 3000,
        });
      }).catch(() => {
        toast({
          position: 'top-right',
          type: 'negative',
          message: 'Parol yoki login xato!',
          time: 3000,
        });
      })
    }
  },
});
