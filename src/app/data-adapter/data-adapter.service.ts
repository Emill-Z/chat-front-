import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../common/http-services/User.service';

@Injectable()
export class DataAdapter {
    constructor(
        private _userService: UserService
    ) { }

    public getMe(): Observable<any> {
        return this._userService.get();
    }
}
