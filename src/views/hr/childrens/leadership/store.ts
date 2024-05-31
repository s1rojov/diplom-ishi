import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export const useLeaderStore = defineStore('leaderStore', {
    state: () => {
        return {
            data: [],
            notifyModal: false
        };
    },
    actions: {
        async getAllLeader() {
            await api
                .get('leadership')
                .then((res: any) => {
                    this.data = res.data
                })
                .catch((error: any) => {
                    toast({
                        position: 'top-right',
                        type: 'negative',
                        message: error.message,
                        time: 3000,
                    });
                });
        },
        async deleteLeader(id: any) {
            api.delete(`leadership/${id}`).then(() => {
                this.getAllLeader()
                toast({
                    position: 'top-right',
                    type: 'positive',
                    message: "Muvaffaqqiyatli o'chirildi",
                    time: 3000,
                });
            })
        },
    },
});
