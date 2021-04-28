import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProsCons, IGroupId, IUserId } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProsConsService {
  private groupId:string;
  private userId :string;

  constructor(
    private http: HttpClient,
  ) { }

  public getDate(groupId, userId){
    this.groupId = groupId;
    this.userId = userId;
    return this.http.get<IProsCons>(`https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`);
  }

  public updateItem(prosCons:IProsCons){
    return this.http.put(`https://avetiq-test.firebaseapp.com/proscons/group/${this.groupId}/user/${this.userId}`, prosCons);
  }

  public getGroup():Observable<string> {
    return this.http.get<IGroupId>(`https://avetiq-test.firebaseapp.com/group/karine_antonyan`).pipe(
      map((group:IGroupId)=>group.groupId)
    )
  }

  public getUser():Observable<string> {
    return this.http.get<IUserId>(`https://avetiq-test.firebaseapp.com/user/karine_antonyan`).pipe(
      map((user:IUserId)=>user.userId)
    )
  }
}
