import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { StorageService } from './../storage.service';
import { SentryService } from './../sentry.service';
import { IdToken } from '@auth0/auth0-spa-js';

let user: IdToken;

@Injectable()
export class AuthAngularService {
  constructor(public auth: AuthService, 
    public storage: StorageService,
    public sentry: SentryService) {}

    login() {
        this.auth.loginWithRedirect();     
    }

    logout(){
        this.auth.logout({ returnTo: 'https://swsignwriter.jonathanduncan.pro' })
        this.storage.RemoveCurrentUserProfile();
    }    

    getUser() {
        if(user == null){
            const tokenClaim = this.auth.idTokenClaims$.subscribe(async userAuth0 => {      
                user = userAuth0;                      
            });  
        }
       return user;                
    }
}