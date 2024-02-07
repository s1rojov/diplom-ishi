import { defineStore } from 'pinia';
import { usePost } from 'src/api';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: {
        login: '',
        password: '',
        userTypeId: 0,
        organizationId: 0,
      },
      organization: {
        pinfl: '31901985930013',
        password: 'password',
      },
      selectedRole: [] as { id: number, title: string }[],
      selectedOrg: [] as { id: number, title: string }[],
    };
  },
  actions: {
    async getUserRole(data: any) {
      return await usePost({
        url: 'Account/BeforeSignIn',
        data,
      })
        .then((res: any) => {
          toast({
            position: 'top-right',
            type: 'positive',
            message: 'Muvaffaqqiyatli kirdingiz',
            time: 3000,
          });
          return res;
        })
        .catch((err: any) => {
          return err;
        });
    },
  },
});
