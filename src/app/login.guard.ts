import { Component, Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';


@Injectable()
export class LoginGuard implements CanActivate{

    constructor(
        private router: Router) {}

    canActivate(
         next:ActivatedRouteSnapshot,
         state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean{
          
          if(localStorage.getItem('email') === null){
              this.router.navigate(['/home'])

              return false;
          }else{

            return true;
         }
        }
    }
    
        
    
	

