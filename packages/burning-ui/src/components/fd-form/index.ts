import { VueConstructor } from 'vue';
import FdForm from './src/index.vue';

(FdForm as any).install = function(Vue: { component: (arg0: string, arg1: VueConstructor<FdForm>) => void; }) {
    Vue.component(FdForm.name, FdForm)
}

export default FdForm;
