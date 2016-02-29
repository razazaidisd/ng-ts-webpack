import {ITweetService} from "../int/ITweetService";
import {TweetService} from "../impl/TweetService";
import {LollibondBase} from "../../entities/Tweet";
import * as _ from "lodash";
describe("Service: TweetService", () => {
    var tweetService: ITweetService;
    beforeEach(() => {
        tweetService = new TweetService();
    });
    describe("on getAll()", () => {
        it("should return 5 tweets", () => {
            var res: Array<LollibondBase> = tweetService.getAll();
            expect(res.length).toBe(5);
            _.forEach(res, (tweet: LollibondBase) => {
                expect((<any>tweet.constructor).name).toEqual("Tweet");
            });
        });
    });
});