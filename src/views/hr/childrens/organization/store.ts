import { defineStore } from 'pinia';
import { api } from 'boot/axios';
export const useOrgStore = defineStore('org', {
  state: () => {
    return {
      organizationModal: false,
      organization: {},
    };
  },
  actions: {
    getOranizationInfo(id: any) {
      api.get(`organization/${id}`).then((res: any) => {
        this.organization = res.data;
      });
    },
    updateOrganization(id: any) {
      api.put(`organization/${id}`).then((res: any) => {
        this.getOranizationInfo(id);
      });
    },
  },
});
