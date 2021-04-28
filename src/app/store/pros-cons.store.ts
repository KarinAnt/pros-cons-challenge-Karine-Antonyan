'use strict';

import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IProsCons } from '../interfaces/interfaces';
import { UpdatePropCons, SetPropCons } from '../actions/pros-cons.actions';
import { ProsConsService } from '../services/pros-cons.service';
import { tap } from 'rxjs/operators';

class ProsConsStateMoel {
    cons:string[];
    pros:string[]
}

const defaults: ProsConsStateMoel = {
    cons:[],
    pros:[]
};

@State<ProsConsStateMoel>({
    name: 'prosCons',
    defaults
})
@Injectable()
export class ProsConsState  {
    constructor(
        private prosConsService: ProsConsService
    ){}

    @Selector()
    static getProsCons(state: ProsConsStateMoel) {
        return state;
    }

    @Action(SetPropCons)
    setPropCons(
        { setState, getState }: StateContext<ProsConsStateMoel>,
        { payload: { prosAndCons} }: SetPropCons
    ) {
        return setState(
           prosAndCons
        );
    }

    @Action(UpdatePropCons)
    updatePropCons(
        { setState, getState }: StateContext<ProsConsStateMoel>,
        { payload: { prosOrCons} }: UpdatePropCons
    ) {
        return this.prosConsService.updateItem(Object.assign({}, getState() , prosOrCons)).pipe(
            tap((data:IProsCons)=>{
                return setState(
                    data
                 );
            })
        )
    }
}