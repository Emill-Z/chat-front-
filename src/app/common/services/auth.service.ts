import { Injectable } from '@angular/core';
import { MeI } from '../models/user.interface';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  private key = 'chat_app_tn';

  // public config = {
  //   me: null,
  // };

  constructor(
    // public jwtHelper: JwtHelperService
  ) { }
  // ...

  public login({ token, id }: MeI): void {
    localStorage.setItem(this.key, JSON.stringify({ id, token }));
  }

  public getUser(): MeI {
    if (!this.isAuthenticated()) { return null; }
    return JSON.parse(localStorage.getItem(this.key));
  }

  public logout(): void {
    localStorage.removeItem(this.key);
  }

  public isAuthenticated(): boolean {
    const data = JSON.parse(localStorage.getItem(this.key));
    // // Check whether the token is expired and return
    // // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return !!data?.token;
  }
}