import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      organizationList: [],
      data: {
        login: '',
        password: '',
        org_id: '',
      },
      admin: {},
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
        .post('auth', this.data)
        .then((res: any) => {
          this.admin = res.data?.admin;
          sessionStorage.setItem('access', 'true');
          sessionStorage.setItem('orgId', `${res.data?.admin.org_id}`);
          if (res.data.access) {
            this.router.push({ name: 'Organization' });
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
