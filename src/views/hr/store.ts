import { defineStore } from 'pinia';
import { api } from 'boot/axios';
export const useHrStore = defineStore('hr', {
  state: () => {
    return {
      isCreateModalOpen: false,
      facultyModal: false,
    };
  },
  actions: {
    getOranizationInfo(id: any) {
      api.get(`organization/${id}`).then((res: any) => {
        return res.data;
      });
    },
  },
});
