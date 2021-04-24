import { VueConstructor } from "vue";
import FdButton from "./fd-button";
import FdDrawer from "./fd-drawer";
import FdSelect from './fd-select';

export declare interface BurningUI {
    install: (Vue: { component: (arg0: string, arg1: VueConstructor<Vue>) => void; }) => void;
    FdButton: VueConstructor<FdButton>;
    FdSelect: VueConstructor<FdSelect>;
    FdDrawer: VueConstructor<FdDrawer>;
}