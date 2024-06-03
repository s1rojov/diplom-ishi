import { boot } from 'quasar/wrappers';
import BaseIcon from 'src/components/BaseIcon/index.vue'
import BaseModal from 'src/components/BaseModal/index.vue'
import BaseButton from 'src/components/BaseButton/index.vue'
import BaseInput from 'src/components/BaseInput/index.vue'
export default boot(async ({ app }) => {
    app.component('BaseIcon', BaseIcon);
    app.component('BaseButton', BaseButton);
    app.component('BaseModal', BaseModal);
    app.component('BaseInput', BaseInput);
});