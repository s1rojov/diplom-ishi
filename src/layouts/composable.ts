import { ref } from 'vue';
import type { SidebarItem } from 'src/layouts/interface';
export function useLayoutFn(): any {
  const isEnter = ref<boolean>(false);
  const hrItems = ref<SidebarItem[]>([
    {
      title: 'Dashboard',
      icon: 'leadership',
      router: '/dashboard',
    },
    {
      title: 'Rahbariyat',
      icon: 'hr',
      router: '/leadership',
    },
    {
      title: 'Fakultet',
      icon: 'division',
      router: '/faculty',
    },
    // {
    //   title: "Bo'lim",
    //   icon: 'department',
    //   router: '/department',
    // },
    // {
    //   title: "Yo'nalish",
    //   icon: 'direction',
    //   router: '/direction',
    // },
    // {
    //   title: 'Kafedra',
    //   icon: 'kafedra',
    //   router: '/kafedra',
    // },
    // {
    //   title: 'Shtatlar',
    //   icon: 'shtat',
    //   router: '/shtat',
    // },
    // {
    //   title: 'Lavozim',
    //   icon: 'lavozim',
    //   router: '/position',
    // },
    // {
    //   title: "Ish o'rni",
    //   icon: 'employePlace',
    //   router: '/work-place',
    // },
    // {
    //   title: 'Ishchi-hodim',
    //   icon: 'workerEmploye',
    //   router: '/worker-employee',
    // },
    // {
    //   title: 'Hodim',
    //   icon: 'user',
    //   router: '/employee',
    // },
  ]);
  function reverseVariable(val: string) {
    if (val == 'enter') {
      isEnter.value = true;
    } else if (val == 'leave') {
      isEnter.value = false;
    }
  }
  return {
    hrItems,
    reverseVariable,
    isEnter,
  };
}
