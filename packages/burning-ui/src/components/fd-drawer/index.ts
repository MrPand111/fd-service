import { Drawer } from 'element-ui';
import { VueConstructor } from 'vue';
import FdDrawer from './src/index.vue';

(FdDrawer as any).install = function(Vue: { component: (arg0: string, arg1: VueConstructor<FdDrawer>) => void; }) {
    Vue.component(FdDrawer.name, FdDrawer)
}

export default FdDrawer;