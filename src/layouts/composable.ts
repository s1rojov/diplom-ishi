import { ref } from 'vue';
import type { SidebarItem } from 'src/layouts/interface';
export function useLayoutFn(): any {
  const isEnter = ref<boolean>(false);
  const hrItems = ref<SidebarItem[]>([
    {
      title: 'Rahbariyat',
      icon: 'leadership',
      router: '/hr',
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
      title: "Yo'nalish",
      icon: 'direction',
      router: '/hr/direction',
    },
    {
      title: 'Kafedra',
      icon: 'kafedra',
      router: '/hr/kafedra',
    },
    {
      title: 'Shtatlar',
      icon: 'shtat',
      router: '/hr/shtat',
    },
    {
      title: 'Lavozim',
      icon: 'lavozim',
      router: '/hr/position',
    },
    {
      title: "Ish o'rni",
      icon: 'employePlace',
      router: '/hr/work-place',
    },
    {
      title: 'Ishchi-hodim',
      icon: 'workerEmploye',
      router: '/hr/worker-employee',
    },
    {
      title: 'Hodim',
      icon: 'user',
      router: '/hr/employee',
    },
  ]);
  const studyItems = ref<SidebarItem[]>([
    {
      title: 'Guruh',
      router: '/study',
      icon: 'group',
    },
    {
      title: 'Kurs',
      router: '/study/course',
      icon: 'course',
    },
    {
      title: 'Fan',
      router: '/study/subject',
      icon: 'subject',
    },
    {
      title: 'Hafta kunlari',
      router: '/study/weekday',
      icon: 'weekday',
    },
    {
      title: 'Dars soati',
      router: '/study/lesson-hour',
      icon: 'lessonhour',
    },
    {
      title: 'Darslar',
      router: '/study/lessons',
      icon: 'lessons',
    },
  ]);
  const superAdminItems = ref<SidebarItem[]>([
    {
      title: 'Structure',
      router: '/super-admin',
      icon: 'division',
    },
    {
      title: 'Organization',
      router: '/super-admin/organization',
      icon: 'direction',
    },
    {
      title: 'Deperment type',
      router: '/super-admin/department-type',
      icon: 'department',
    },
    {
      title: 'Employment type',
      router: '/super-admin/employment-type',
      icon: 'employePlace',
    },
    {
      title: 'Position type',
      router: '/super-admin/position-type',
      icon: 'workerEmploye',
    },
    {
      title: 'Position',
      router: '/super-admin/position',
      icon: 'shtat',
    },
    {
      title: 'Users',
      router: '/super-admin/user',
      icon: 'group',
    },
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
    studyItems,
    superAdminItems,
  };
}
