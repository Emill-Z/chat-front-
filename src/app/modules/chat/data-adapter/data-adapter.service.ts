import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../../../common/services/user.service';
import { Apollo } from 'apollo-angular';
import { GET_USER } from "../../../common/qraphql/user/user.query";
import { RespDataI } from "../../../common/models/graphql.interface";

@Injectable()
export class DataAdapter {

  public readonly selectRoom$: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor(
    private readonly _userService: UserService,
    private readonly apolloProvider: Apollo,
  ) { }

  public selectRoom(roomId: number): void {
    this.selectRoom$.next(roomId);
  }

  public getMe(id: number): Observable<RespDataI<any>> {
    const config = {
      query: GET_USER,
      variables: { id },
    };
    return this.apolloProvider.watchQuery(config).valueChanges;
  }
}
