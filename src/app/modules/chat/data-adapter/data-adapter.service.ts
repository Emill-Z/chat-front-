import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../../../common/http-services/User.service';

@Injectable()
export class DataAdapter {

  public readonly selectRoom$: BehaviorSubject<number> = new BehaviorSubject(null);

    constructor(
        private _userService: UserService
    ) { }

    public getMe(): Observable<any> {
        return this._userService.get();
    }

    public selectRoom(roomId: number): void {
      this.selectRoom$.next(roomId);
    }
}
