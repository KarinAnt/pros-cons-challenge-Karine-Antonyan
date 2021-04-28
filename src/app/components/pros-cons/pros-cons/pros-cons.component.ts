import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { forkJoin, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SetGroupId } from 'src/app/actions/group.actions';
import { SetPropCons } from 'src/app/actions/pros-cons.actions';
import { SetUserId } from 'src/app/actions/user.actions';
import { IProsCons } from 'src/app/interfaces/interfaces';
import { ProsConsService } from 'src/app/services/pros-cons.service';

@Component({
  selector: 'app-pros-cons',
  templateUrl: './pros-cons.component.html',
  styleUrls: ['./pros-cons.component.scss']
})
export class ProsConsComponent implements OnInit {
  public prosAndCons$:Observable<IProsCons>;
  public prosAndConsKey:string[];
  public prosAndConsTexts:string[];

  constructor(
    private prosConsService:ProsConsService,
    private store: Store,
  ){}

  ngOnInit(){
    this.prosAndCons$ = forkJoin([this.prosConsService.getGroup(), this.prosConsService.getUser()]).pipe(
      switchMap(([groupId, userId])=>{
        this.store.dispatch([new SetUserId( { userId: {userId} }), new SetGroupId( { groupId: {groupId} })]);
        return this.prosConsService.getDate(groupId, userId);
      }),
      tap((prosAndCons:IProsCons)=>{
          this.prosAndConsKey = Object.keys(prosAndCons);
          this.prosAndConsTexts = Object.values(prosAndCons);
          this.store.dispatch(new SetPropCons( { prosAndCons: prosAndCons}));
      })
    )
  }

}
