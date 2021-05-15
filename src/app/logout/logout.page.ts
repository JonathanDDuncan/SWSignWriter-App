import { SentryService } from './../sentry.service';
import { StorageService } from './../storage.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceMobile } from '../services/auth.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  authService;

  constructor(private auth: AuthService,
    private storage: StorageService,
    private sentry: SentryService,
    private authMobile: AuthServiceMobile,
    public platform: Platform
  ) {
    if (this.platform.is('cordova'))
        this.authService = authMobile;
      else
        this.authService = auth;
   }

  ngOnInit() {
    this.storage.SaveCurrentUserProfile(null);
    const userProfile = this.storage.GetCurrentUserProfile();
    this.sentry.sentryMessage('Logged out: ' + JSON.stringify(userProfile));
    this.authService.logout();
  }

}
