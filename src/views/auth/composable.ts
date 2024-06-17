// import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import { useAuthStore } from 'src/views/auth/store';
// import { useRouter } from 'vue-router';
// import { useToastification } from 'src/helpers/toast';
// const { toast } = useToastification();
export function useAuthFn() {
  // const router = useRouter();
  const store = useAuthStore();
  const { getAccessToSystem } = store;

  const employee_code = ref<string>('')
  const hr = ref<any>({
    login: '',
    password: ''
  })
  function enterToEmployee() {
    getAccessToSystem({
      login: '',
      password: employee_code.value
    })
  }

  function enterToHr() {
    getAccessToSystem(hr.value)
  }
  return {
    enterToEmployee,
    hr,
    employee_code,
    enterToHr
  };
}
