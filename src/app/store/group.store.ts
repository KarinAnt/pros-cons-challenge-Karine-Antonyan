'use strict';

import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetGroupId } from '../actions/group.actions';

class GroupStateMoel {
    groupId:string;
}

const defaults: GroupStateMoel = {
    groupId:''
};

@State<GroupStateMoel>({
    name: 'group',
    defaults
})
@Injectable()
export class GroupState  {

    @Selector()
    static getGroup(state: GroupStateMoel) {
        return state;
    }

    @Action(SetGroupId)
    setGroupId(
        { setState }: StateContext<GroupStateMoel>,
        { payload: { groupId} }: SetGroupId
    ) {
        return setState(
           groupId
        );
    }
}