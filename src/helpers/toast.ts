// import { useQuasar } from 'quasar';
import { Notify } from 'quasar';

export function useToastification() {
  // const quasar: any = useQuasar();

  function toast(config: {
    position: string;
    message: string;
    type: string;
    time: number;
  }) {
    Notify.create({
      message: config.message,
      position: 'top-right',
      color: config.type,
      timeout: config.time || 3000,
      actions: [{ icon: 'close', color: 'white', round: true }],
    });
  }
  return {
    toast,
  };
}
