// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap, tap } from 'rxjs/operators';
import { StorageService } from './../storage.service';
import { SentryService } from './../sentry.service';
import { UserProfile } from '../user/user-profile';
import { IdToken} from '@auth0/auth0-spa-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthServiceModel } from '../core/models/authService.model';
import { Router } from '@angular/router';

const returnTo = `pro.jonathanduncan.swsignwriter://swsignwriter-dev.auth0.com/capacitor/pro.jonathanduncan.swsignwriter/callback`;

@Injectable()
export class AuthServiceMobile implements AuthServiceModel {
  public isLoggedIn = new BehaviorSubject(false);
  public user = new BehaviorSubject<IdToken>(null);

  constructor(public auth: AuthService, 
    public storage: StorageService,
    public sentry: SentryService,
    public router: Router    
    ) {  
      this.auth.isAuthenticated$.subscribe((loggedIn) => this.isLoggedIn.next(loggedIn));       
      this.auth.idTokenClaims$.subscribe((user) => this.user.next(user));   
    }

  login() {   
    this.auth
      .buildAuthorizeUrl()
      .pipe(mergeMap((url) => Browser.open({ url, windowName: '_self' })))
      .subscribe();

      // this.auth.idTokenClaims$.subscribe(async token => {          
      //   await this.setupProfile(token);                      
      // });       
  }   

  logout() {
    // Use the SDK to build the logout URL
    this.auth
      .buildLogoutUrl({ returnTo })
      .pipe(
        tap((url) => {
          // Call the logout fuction, but only log out locally
          this.auth.logout({localOnly: true});
          // Redirect to Auth0 using the Browser plugin, to clear the user's session
          Browser.open({ url });
        })
      ).subscribe();          
  }

  getUser() {   
   return this.user.getValue();                
}

  private async setupProfile(token: IdToken) {
    if (token && token !== null) {
      const profile = this.saveProfile(token);
      this.storage.SaveJWTToken(token.__raw); 
      //await this.setupTrial(profile);
    }
  }

  private saveProfile(token: IdToken) {
    this.sentry.sentryMessage('Logged in: ' + JSON.stringify(token));
    console.log('tokenclaim: ', token);
    const profile = this.convertTokenToUserProfile(token);
    this.storage.SaveCurrentUserProfile(token);
    return profile;
  }  

  public convertTokenToUserProfile (token : IdToken): UserProfile {
    return {
      email: token.email,
      email_verified: token.email_verified,
      family_name: token.family_name,
      given_name: token.given_name,
      locale: token.locale,
      name: token.name,
      nickname: token.nickname,
      picture: token.picture,
      sub: token.sub,
      updated_at: token.updated_at
    }
  }
}
