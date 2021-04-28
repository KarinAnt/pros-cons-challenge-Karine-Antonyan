import { IGroupId } from "../interfaces/interfaces";

export class SetGroupId {
    static readonly type = '[Auth] SetGroupId';

    constructor(public payload: { groupId:IGroupId}) {}
}