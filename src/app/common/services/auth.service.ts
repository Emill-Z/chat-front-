import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  private key = '_userChatApp';

  constructor(
    // public jwtHelper: JwtHelperService
  ) { }
  // ...

  public login(user: any): void {
    localStorage.setItem(this.key, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  public logout(): void {
    localStorage.removeItem(this.key);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(this.key);
    // // Check whether the token is expired and return
    // // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return !!token;
  }
}