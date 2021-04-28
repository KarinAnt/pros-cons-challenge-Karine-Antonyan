'use strict';

import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetUserId } from '../actions/user.actions';

class UserStateMoel {
    userId:string;
}

const defaults: UserStateMoel = {
    userId:''
};

@State<UserStateMoel>({
    name: 'user',
    defaults
})
@Injectable()
export class UserState  {

    @Selector()
    static getUser(state: UserStateMoel) {
        return state;
    }

    @Action(SetUserId)
    setUserId(
        { setState }: StateContext<UserStateMoel>,
        { payload: { userId} }: SetUserId
    ) {
        return setState(
           userId
        );
    }
}