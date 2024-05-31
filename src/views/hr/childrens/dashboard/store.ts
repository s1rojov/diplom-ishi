import { defineStore } from 'pinia';
import { api } from 'boot/axios';
export const useOrgStore = defineStore('org', {
  state: () => {
    return {
      organizationModal: false,
      organization: {
        id: '',
        fullname: '',
        shortname: '',
        description: '',
      },
    };
  },
  actions: {
    getOranizationInfo() {
      const orgId = sessionStorage.getItem('orgId');
      api.get(`organization/${orgId}`).then((res: any) => {
        this.organization = res.data;
        return res.data;
      });
    },
    updateOrganization(data: any) {
      const orgId = sessionStorage.getItem('orgId');
      api.put(`organization/${orgId}`, data).then(() => {
        this.getOranizationInfo();
      });
    },
  },
});
