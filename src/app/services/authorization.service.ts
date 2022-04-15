import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private userService: UserService) { }

  async isAuthorized(allowedRoles: string[]): Promise<boolean> {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    debugger;
    console.log('allowed', allowedRoles);
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    //let roles: string[] = [];
    var roles = await this.userService.GetCurrenUserRoles();
    //roles.concat(roles2);
    console.log('roles1', roles)
    debugger;
    if (roles) {
      // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed     
      return roles.some((role) => allowedRoles.includes(role));
    } else {
      return false;
    }
  }
}

