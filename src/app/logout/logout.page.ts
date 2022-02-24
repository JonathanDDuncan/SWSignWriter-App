import { SentryService } from './../sentry.service';
import { StorageService } from './../storage.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceMobile } from '../services/auth.service';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { AuthAngularService } from '../services/authAngular.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  authService;

  constructor(
    private storage: StorageService,
    private sentry: SentryService,
    private authMobile: AuthServiceMobile,
    public platform: Platform,
    public authAngular: AuthAngularService
  ) {    
      //this.authService = authAngular;    
      //Detected Circular Dependency in AuthMobile
      if (Capacitor.isNativePlatform()) {    
        this.authService = authMobile;
      }
      else
        this.authService = authAngular;    
   }

  ngOnInit() {
    const userProfile = this.storage.GetCurrentUserProfile();
    this.sentry.sentryMessage('Logged out: ' + JSON.stringify(userProfile));
    this.authService.logout();
  }

}
