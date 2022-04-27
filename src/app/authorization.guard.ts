import { Router } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const allowedRoles = next.data.allowedRoles as string[];
    //Refactor. Make different actions according to role, loggedIn, SubscribedTrial.
    var message: string;
    var redirect: string;
    if(allowedRoles.some((role) => role === 'loggedIn')){
      message = 'Please Login';    
      redirect = 'login';
    }
    else if(allowedRoles.some((role) => (role === 'subscribe' || role === 'trial'))){
      message = 'Please Subscribe or Start Trial';
      redirect = 'subscribe'
    }
        
    const isAuthorized = await this.authorizationService.isAuthorized(allowedRoles);    
    if (!isAuthorized) {
      this.router.navigate([`/${redirect}`]);
      window.alert(message); 
    }  
    return isAuthorized;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);

    if (!isAuthorized) {
      //this.router.navigate(['/login']);
    }
    return isAuthorized;
  }
}
