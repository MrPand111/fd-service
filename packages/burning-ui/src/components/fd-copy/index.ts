import { VueConstructor } from 'vue';
import FdCopy from './src/index.vue';

(FdCopy as any).install = function(Vue: { component: (arg0: string, arg1: VueConstructor<FdCopy>) => void; }) {
    Vue.component(FdCopy.name, FdCopy)
}

export default FdCopy;