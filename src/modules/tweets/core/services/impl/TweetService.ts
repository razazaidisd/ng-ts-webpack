import {ITweetService} from "../int/ITweetService";
import {LollibondBase} from "../../entities/Tweet";
export class TweetService implements ITweetService {
    public getAll(): Array<LollibondBase> {
        var returnObj: Array<LollibondBase> = new Array<LollibondBase>();
        for (var i: number = 0; i < 5; i++) {
            returnObj.push(new LollibondBase("@user", "Content", false));
        }
        return returnObj;
    }
}