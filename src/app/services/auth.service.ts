// src/app/services/auth.service.ts
import { Injectable, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { SentryService } from './../sentry.service';
import { Router } from "@angular/router"

// Import AUTH_CONFIG, Auth0Cordova, and auth0.js
import { AUTH_CONFIG } from './auth.config';
import Auth0Cordova from '@auth0/cordova';
import * as auth0 from 'auth0-js';

declare let cordova: any;

@Injectable()
export class AuthService {
  Auth0 = new auth0.WebAuth(AUTH_CONFIG);
  Client = new Auth0Cordova(AUTH_CONFIG);
  accessToken: string;
  user: any;
  loggedIn: boolean;
  loading = true;

  constructor(
    public zone: NgZone,
    private storage: Storage,
    private sentry: SentryService,
    private safariViewController: SafariViewController,
    private router: Router
  ) {
    this.storage.get('profile').then(user => this.user = user);
    this.storage.get('access_token').then(token => this.accessToken = token);
    this.storage.get('expires_at').then(exp => {
      this.loggedIn = Date.now() < JSON.parse(exp);
      this.loading = false;
    });
  }

  login() {
    this.sentry.sentryMessage("Starting Login");
    this.loading = true;
    const options = {
      scope: 'openid profile offline_access'
    };
    // Authorize login request with Auth0: open login page and get auth results
    this.Client.authorize(options, (err, authResult) => {
      this.sentry.sentryMessage("Authorize");
      if (err) {
        this.sentry.sentryMessage("err");
        this.sentry.sentryMessage(err);
        this.zone.run(() => this.loading = false);
        throw err;
      }
      debugger;
      // Set access token
      this.sentry.sentryMessage("AuthResult");
      this.sentry.sentryMessage(JSON.stringify(authResult));
      console.log(authResult);
      this.sentry.sentryMessage("access token");
      this.sentry.sentryMessage(authResult.accessToken);
      console.log(authResult.accessToken);
      this.storage.set('access_token', authResult.accessToken);
      this.accessToken = authResult.accessToken;
      this.sentry.sentryMessage("Get ExpiresAt");
      console.log("Get ExpiresAt");
      // Set access token expiration
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      this.sentry.sentryMessage(expiresAt);
      console.log(expiresAt);
      this.sentry.sentryMessage("Set ExpiresAt");
      console.log("Set ExpiresAt");
      this.storage.set('expires_at', expiresAt);
      let expire = this.storage.get('expires_at');
      this.sentry.sentryMessage(expire);
      // Set logged in
      this.loading = false;
      this.loggedIn = true;
      // Fetch user's profile info
      this.sentry.sentryMessage("FetchUserInfo");
      console.log("FetchUserInfo");
      this.Auth0.client.userInfo(this.accessToken, (err, profile) => {
        this.sentry.sentryMessage("Start FetchUserInfo");
        console.log("Start FetchUserInfo");
        this.sentry.sentryMessage(JSON.stringify(profile));
        console.log("Authprofile", profile)
        if (err) {
          this.sentry.sentryMessage("error FetchUserInfo");
          console.log("error FetchUserInfo");
          this.sentry.sentryMessage(JSON.stringify(err));
          console.log(err);
          throw err;
        }
        this.sentry.sentryMessage("set profile");
        console.log("set profile");
        this.storage.set('profile', profile).then(val => {
          this.sentry.sentryMessage("start profile");
          console.log("start profile");
          this.zone.run(() => this.user = profile)
          this.sentry.sentryMessage("end");
          console.log("end");
          this.router.navigate(['/callback']);
        }
        
        );
      });
    });


  }

  logout() {
    this.accessToken = null;
    this.user = null;
    this.loggedIn = false;
    if (this.safariViewController) {
      this.safariViewController.isAvailable()
        .then((available: boolean) => {
          const domain = AUTH_CONFIG.domain;
          const clientId = AUTH_CONFIG.clientId;
          const pkgId = AUTH_CONFIG.packageIdentifier;
          const url = `https://${domain}/v2/logout?client_id=${clientId}&returnTo=${pkgId}://${domain}/cordova/${pkgId}/callback`;

          if (available) {
            this.safariViewController.show({ url })
              .subscribe((result: any) => {
                if (result.event === 'opened') console.log('Opened');
                else if (result.event === 'closed') console.log('Closed');

                if (result.event === 'loaded') {
                  console.log('Loaded');
                  this.storage.remove('profile');
                  this.storage.remove('access_token');
                  this.storage.remove('expires_at');
                  this.safariViewController.hide();
                }
              },
                (error: any) => console.error(error)
              );
          } else {
            // use fallback browser
            cordova.InAppBrowser.open(url, '_system');
          }
        }
        );
    }
  }
}