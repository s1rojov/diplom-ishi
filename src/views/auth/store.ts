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
      admin: {}
    };
  },
  actions: {
    async getAccessToSystem() {
      await api
        .post('auth', this.data)
        .then((res: any) => {
          this.admin = res.data?.admin;
          if (res.data.access) {
            sessionStorage.setItem('access', 'true');
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
  },
});
