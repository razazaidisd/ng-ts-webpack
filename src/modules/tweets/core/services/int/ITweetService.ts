import {LollibondBase} from "../../entities/Tweet";
export interface ITweetService {
    getAll(): Array<LollibondBase>;
}
