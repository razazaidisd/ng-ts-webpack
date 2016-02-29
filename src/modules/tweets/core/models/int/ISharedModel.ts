import {LollibondBase} from "../../entities/Tweet";
export interface ISharedModel {
    tweets: Array<LollibondBase>;
    topbarCollapsed: Boolean;
    sidebarCollapsed: Boolean;
    toggleTopbar: () => void;
    toggleSidebar: () => void;
}