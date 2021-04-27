import { VueConstructor } from "vue";
import FdButton from "./fd-button";
import FdCopy from "./fd-copy";
import FdSelect from './fd-select';

export declare interface BurningUI {
    install: (Vue: { component: (arg0: string, arg1: VueConstructor<Vue>) => void; }) => void;
    FdButton: VueConstructor<FdButton>;
    FdSelect: VueConstructor<FdSelect>;
    FdCopy: VueConstructor<FdCopy>;
}