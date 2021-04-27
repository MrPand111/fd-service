import { VueConstructor } from 'vue';
import FdButton from './fd-button';
import FdSelect from './fd-select';
import FdCopy from './fd-copy';
import { BurningUI } from './index.d';

const components = {
    FdButton,
    FdSelect,
    FdCopy
};

const install = function(Vue: { component: (arg0: string, arg1: VueConstructor<FdButton>) => void; }) {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    })
};

if(window && window.Vue) {
    install(window.Vue);
}

const Burningui: BurningUI = {
    install,
    FdButton,
    FdSelect,
    FdCopy
};

export default Burningui;
