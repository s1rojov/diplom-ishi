import { ref } from 'vue';
import type { SidebarItem } from 'src/layouts/interface';
export function useLayoutFn(): any {
  const isEnter = ref<boolean>(false);
  const hrItems = ref<SidebarItem[]>([
    {
      title: 'Dashboard',
      icon: 'leadership',
      router: '/hr',
    },
    {
      title: 'Rahbariyat',
      icon: 'hr',
      router: '/hr/leadership',
    },
    {
      title: "Bo'linma",
      icon: 'division',
      router: '/hr/division',
    },
    {
      title: "Bo'lim",
      icon: 'department',
      router: '/hr/department',
    },
    {
      title: 'Kafedra',
      icon: 'kafedra',
      router: '/hr/kafedra',
    },
    {
      title: 'Lavozim',
      icon: 'lavozim',
      router: '/hr/position',
    },
    {
      title: 'Hodim',
      icon: 'user',
      router: '/hr/employee',
    },
    {
      title: 'Arizalar',
      icon: 'employePlace',
      router: '/hr/application',
    },
  ]);
  const employeeItems = ref<SidebarItem[]>([
    {
      title: "Shaxsiy ma'lumotlar",
      icon: 'leadership',
      router: '/employee',
    },
    {
      title: 'Ariza',
      icon: 'hr',
      router: '/employee/application'
    }
  ])
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
    employeeItems
  };
}
