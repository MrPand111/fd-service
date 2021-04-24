import { VueConstructor } from 'vue';
import FdSelect from './src/index.vue';

(FdSelect as any).install = function(Vue: { component: (arg0: string, arg1: VueConstructor<FdSelect>) => void; }) {
    Vue.component(FdSelect.name, FdSelect)
}

export default FdSelect;
