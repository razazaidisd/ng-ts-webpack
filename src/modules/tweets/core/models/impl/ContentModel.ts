import {IContentModel} from "../int/IContentModel";
import {LollibondBase} from "../../entities/Tweet";
import {ISharedModel} from "../int/ISharedModel";

export class ContentModel implements IContentModel {
    public static $inject: Array<string> = ["ISharedModel"];
    public tweets: Array<LollibondBase>;

    private sharedModel: ISharedModel;

    constructor(sharedModel: ISharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
}
