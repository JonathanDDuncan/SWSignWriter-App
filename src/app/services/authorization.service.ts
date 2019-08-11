import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private storage: StorageService) { }

  async isAuthorized(allowedRoles: string[]): Promise<boolean> {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    const currentUserProfile = await this.storage.GetCurrentUserProfile();
    const email = currentUserProfile.email;

    let roles = [];
    if (email === 'joyoduncan@gmail.com') {
      roles = ['subscribed'];
    }

  // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return roles.some((role) => allowedRoles.includes(role));
  }
}

