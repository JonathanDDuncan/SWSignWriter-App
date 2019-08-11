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

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);

    if (!isAuthorized) {
      this.router.navigate(['/login']);
    }

    return isAuthorized;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);

    if (!isAuthorized) {
      this.router.navigate(['/login']);
    }

    return isAuthorized;
  }
}
