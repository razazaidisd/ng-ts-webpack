import {ITopbarModel} from "../int/ITopbarModel";
import {ISharedModel} from "../int/ISharedModel";
import {LollibondBase} from "../../entities/Tweet";
export class TopbarModel implements ITopbarModel {
    public static $inject: Array<string> = ["ISharedModel"];
    public tweetContent: string;

    private sharedModel: ISharedModel;

    constructor(sharedModel: ISharedModel) {
        this.sharedModel = sharedModel;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleTopbar();
    }

    public addTweet(): void {
        this.sharedModel.tweets.push(new LollibondBase("@raza", this.tweetContent, false));
        this.tweetContent = "";
    }
}