import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(
    // public jwtHelper: JwtHelperService
  ) { }
  // ...

  public login(token: string): void {
    localStorage.setItem('token', token);
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // // Check whether the token is expired and return
    // // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return !!token;
  }
}