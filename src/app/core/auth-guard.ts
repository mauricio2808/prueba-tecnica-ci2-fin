import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._auth.isLoggedIn()) {
      return this._auth.initSession().then(user => {
        if (user && !user.expired) {
          return true;
        } else {
          this._auth.userManager.signinRedirect();
          return false;
        }
      });
    }
    else { return true; }
  }
}
