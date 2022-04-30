import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { StorageService } from './../storage.service';
import { SentryService } from './../sentry.service';
import { IdToken } from '@auth0/auth0-spa-js';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from '../user/user-profile';
import { AuthServiceModel } from '../core/models/authService.model';


@Injectable()
export class AuthAngularService implements AuthServiceModel {
  public isLoggedIn = new BehaviorSubject(false);
  public user = new BehaviorSubject<IdToken>(null);

  constructor(public auth: AuthService, 
    public storage: StorageService,
    public sentry: SentryService) {
        this.auth.isAuthenticated$.subscribe((loggedIn) => this.isLoggedIn.next(loggedIn)); 
        this.auth.idTokenClaims$.subscribe((user) => this.user.next(user));    
    }

    login() {
        this.auth.loginWithRedirect();    
        // this.auth.idTokenClaims$.subscribe(async token => { 
        //   debugger;   
        //   this.user = token; 
        //     await this.setupProfile(token);                      
        //   });   
    }

    logout(){
        this.auth.logout({ returnTo: 'https://swsignwriter.jonathanduncan.pro' })
        this.storage.RemoveCurrentUserProfile();
    }    

    getUser(): IdToken {
        // if(this.user == null){
        //     const tokenClaim = this.auth.idTokenClaims$.subscribe(async userAuth0 => {      
        //         this.user = userAuth0;                      
        //     });  
        // }
       return this.user.getValue();                
    }

    private async setupProfile(token: IdToken): Promise<void> {
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