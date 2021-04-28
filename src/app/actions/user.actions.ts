import { IUserId } from "../interfaces/interfaces";

export class SetUserId {
    static readonly type = '[Auth] SetUserId';

    constructor(public payload: { userId:IUserId }) {}
}