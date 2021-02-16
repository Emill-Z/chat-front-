import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../../../common/services/user.service';
import { Apollo } from 'apollo-angular';
import { GET_USER, GET_USERS } from "../../../common/qraphql/user/user.query";
import { GET_ROOMS } from "../../../common/qraphql/rooms/rooms.query";
import { RespDataI } from "../../../common/models/graphql.interface";

@Injectable()
export class DataAdapter {

  public readonly selectedRoom$: BehaviorSubject<any> = new BehaviorSubject(null);
  public readonly user$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private readonly _userService: UserService,
    private readonly apolloProvider: Apollo,
  ) { }

  public selectUser(user): void {
    this.selectedRoom$.next(user);
  }

  private apolloQuery(queryType, variables = null): Observable<RespDataI<unknown>> {
    const config = { query: queryType, variables };
    return this.apolloProvider.watchQuery(config).valueChanges;
  }

  // TODO: write an interface
  public getMe(id: number): Observable<RespDataI<any>> {
    return this.apolloQuery(GET_USER, { id });
  }

  // @TODO: REMOVE IT
  public queryRooms(): Observable<RespDataI<any>> {
    return this.apolloQuery(GET_ROOMS);
  }

  public queryUsers(): Observable<RespDataI<any>> {
    return this.apolloQuery(GET_USERS);
  }

  public setUser(user): void {
    this.user$.next(user);
  }

  public joinRoom(id: number): void {
    // const config = {
    //   ownerId: +this.user$.value.id,
    //   isPrivate: true,
    //   participants: [id],
    // };
    // console.log(config);
    console.log(id);
  }
}
