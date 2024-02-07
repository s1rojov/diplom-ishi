import { ref } from 'vue';
export function useLeadershipFn() {
  const isItemList = ref<boolean>(true);
  const leadershipItems = ref<any>([
    {
      name: 'Mavlanov Axmadjаn Xakimjanovichvich',
      position: "Toshkent temir yo'l texnikumi direktori",
      phone: '+998979997755',
      email: 'info@example.com',
      acceptance: 'Du (10:00-12:00)',
    },
    {
      name: 'Mavlanov Axmadjаn Xakimjanovichvich',
      position: "Toshkent temir yo'l texnikumi direktori",
      phone: '+998979997755',
      email: 'info@example.com',
      acceptance: 'Du (10:00-12:00)',
    },
  ]);
  return {
    leadershipItems,
    isItemList,
  };
}
