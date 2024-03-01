import { boot } from 'quasar/wrappers';
import BaseIcon from 'src/components/BaseIcon/index.vue'
import BaseButton from 'src/components/BaseButton/index.vue'
export default boot(async ({ app }) => {
    app.component('BaseIcon', BaseIcon);
    app.component('BaseButton', BaseButton);
});