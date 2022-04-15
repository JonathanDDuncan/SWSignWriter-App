// src/app/services/auth.service.ts

import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap, tap } from 'rxjs/operators';
import { StorageService } from './../storage.service';
import { SentryService } from './../sentry.service';
import { UserProfile } from '../user/user-profile';
import { GetTokenSilentlyOptions, IdToken, RedirectLoginOptions } from '@auth0/auth0-spa-js';
import { BehaviorSubject } from 'rxjs';

const returnTo = `pro.jonathanduncan.swsignwriter://swsignwriter-dev.auth0.com/capacitor/pro.jonathanduncan.swsignwriter/callback`;

@Injectable()
export class AuthServiceMobile {
  public isLoggedIn = new BehaviorSubject(false);

  constructor(public auth: AuthService, 
    public storage: StorageService,
    public sentry: SentryService    
    ) {    
      // this.auth.isLoading$.subscribe((loading) => {
      //   if(!loading){
      //     this.auth.isAuthenticated$.subscribe((loggedIn) =>{console.log('loggedin Constr' ,loggedIn); this.isLoggedIn.next(loggedIn)});       
      //   }
      // });  
      // debugger;
      this.auth.isAuthenticated$.subscribe((loggedIn) =>{console.log('loggedin Constr' ,loggedIn); this.isLoggedIn.next(loggedIn)});     
      // var options : GetTokenSilentlyOptions = { timeoutInSeconds : 3000 };
      // this.auth.getAccessTokenSilently(options).subscribe((token) => {
      //   debugger;
      //   console.log('silenttoken', token);
        
      // });
      
    }

  login() {
    debugger;
    var options: RedirectLoginOptions ={ redirect_uri : returnTo};
    // options.redirect_uri = returnTo;
    //this.auth.
    this.auth
      .buildAuthorizeUrl(options)
      .pipe(mergeMap((url) => Browser.open({ url, windowName: '_self' })))
      .subscribe();

      const tokenClaim = this.auth.idTokenClaims$.subscribe(async token => {     
        debugger; 
        await this.setupProfile(token);                      
      });       
  }   

  logout() {
    // Use the SDK to build the logout URL
    this.auth
      .buildLogoutUrl({ returnTo })
      .pipe(
        tap((url) => {
          // Call the logout fuction, but only log out locally
          this.auth.logout({ localOnly: true });
          // Redirect to Auth0 using the Browser plugin, to clear the user's session
          Browser.open({ url });
        })
      )
      .subscribe();
  }

  private async setupProfile(token: IdToken) {
    debugger;
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

  // private async setupTrial(profile: UserProfile) {
  //   const trialDate = await this.storage.GetTrialStartDate(profile.email);
  //   if (!trialDate) {
  //     this.storage.SaveTrialStartDate(profile.email, new Date());
  //   }
  // }  

  convertTokenToUserProfile (token : IdToken): UserProfile {
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
