import {LollibondBase} from "../../entities/Tweet";
export interface ISidebarModel {
    toggleCollapsed: () => void;
    tweets: Array<LollibondBase>;
}