import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ModuleAuthGuard implements CanLoad {

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  canLoad(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}