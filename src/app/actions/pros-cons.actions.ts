import { IGroupId, IProsCons, IUserId } from "../interfaces/interfaces";

export class SetPropCons {
    static readonly type = '[Auth] SetPropCons';

    constructor(public payload: { prosAndCons: IProsCons}) {}
}

export class UpdatePropCons {
    static readonly type = '[Auth] UpdatePropCons';

    constructor(public payload: { prosOrCons: {}, title:string}) {}
}