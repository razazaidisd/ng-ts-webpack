import {ISidebarModel} from "../int/ISidebarModel";
import {LollibondBase} from "../../entities/Tweet";
import {ISharedModel} from "../int/ISharedModel";
export class SidebarModel implements ISidebarModel {
    public static $inject: Array<string> = ["ISharedModel"];
    public tweets: Array<LollibondBase>;
    private sharedModel: ISharedModel;

    constructor(sharedModel: ISharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleSidebar();
    }
}
