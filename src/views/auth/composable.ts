import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/views/auth/store';
import { useRouter } from 'vue-router';
import { useToastification } from 'src/helpers/toast';
const { toast } = useToastification();
export function useAuthFn() {
  const router = useRouter();
  const store = useAuthStore();
  const { user, organization, selectedOrg, selectedRole } = storeToRefs(store);
  const { getUserRole } = store;

  function loginBtnClicked() {
    // if (user.value.login == 'hr' && user.value.password == '123') {
    //   router.push({ name: 'Leadership' });
    //   (user.value.login = ''), (user.value.password = '');
    // } else if (user.value.login == 'study' && user.value.password == '123') {
    //   router.push({ name: 'Group' });
    //   (user.value.login = ''), (user.value.password = '');
    // } else if (user.value.login == 'admin' && user.value.password == '123') {
    //   router.push({ name: 'Super admin Leadership' });
    //   (user.value.login = ''), (user.value.password = '');
    // }
    console.log(user.value);
  }
  function identifyOrgBtnClicked() {
    getUserRole(organization.value).then((res: any) => {
      for (let i = 0; i < res.data.userTypeUsers.length; i++) {
        // console.log(res.data.userTypeUsers[i]);
        selectedRole.value.push({
          id: res.data.userTypeUsers[i].userTypeId,
          title: res.data.userTypeUsers[i].userTypeName
        });
        selectedOrg.value.push({
          id: res.data.userTypeUsers[i].organizationId,
          title: res.data.userTypeUsers[i].organizationName
        })
      }
      // console.log(res.data.userTypeUsers);
      router.push({
        name: 'Login',
      });
    });
  }
  return {
    loginBtnClicked,
    identifyOrgBtnClicked,
  };
}
