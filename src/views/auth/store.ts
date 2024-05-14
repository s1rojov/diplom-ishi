import { defineStore } from 'pinia';
// import { useGet } from 'src/api';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      organizationList: [],
      user: {
        login: '',
        password: '',
        org_id: null,
      },
    };
  },
  actions: {
    async getAllOrganizations() {
      await api.get('organization').then((res: any) => {
        this.organizationList = res.data;
      });
    },

    async getAccessToSystem() {
      await api
        .post('auth', this.user)
        .then((res: any) => {
          // console.log(res.data);
          if (res.data.access) {
            sessionStorage.setItem('access', 'true');
            toast({
              position: 'top-right',
              type: 'positive',
              message: 'Muvaffaqqiyatli kirdingiz',
              time: 3000,
            });
          }
        })
        .catch((err: any) => {
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
