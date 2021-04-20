
import { VueConstructor } from 'vue';
import FdButton from './src/index.vue';

(FdButton as any).install = function(Vue: { component: (arg0: string, arg1: VueConstructor<FdButton>) => void; }) {
    Vue.component(FdButton.name, FdButton)
}

export default FdButton;
