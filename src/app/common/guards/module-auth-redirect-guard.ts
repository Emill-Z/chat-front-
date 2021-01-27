import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ModuleAuthRedirectGuard implements CanLoad {

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  canLoad(): Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      return this.router.navigate(['chat']);
    }
    return true;
  }
}