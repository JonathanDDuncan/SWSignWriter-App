import { TrialService } from './../services/trial.service';
import { AuthService } from './../auth.service';
import { AuthServiceMobile } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public authService;
  public daysleft: number;
  public subscribed: boolean;
  constructor(
    public auth: AuthService,
    private router: Router,
    private trial: TrialService,
    private storage: StorageService,
    private authMobile: AuthServiceMobile,
    public platform: Platform
  ) {
    // debugger;
    // platform.ready().then(() => {    
    //   debugger;  
    //   if (Capacitor.isNativePlatform)
    //     this.authService = authMobile;
    //   else
    //     this.authService = auth;
    // });
   }

  async ngOnInit() {    
    if ( !(this.platform.is('cordova')) )
      this.auth.localAuthSetup();

    const currentUserProfile = await this.storage.GetCurrentUserProfile();

    debugger;

    this.platform.ready().then(() => {    
      debugger;  
      if (Capacitor.isNativePlatform)
        var hello = "yes";
      else
       var hello1 = "no";
    });


    if (!currentUserProfile || currentUserProfile == null) {
      await this.authMobile.login();
    }
    try {
      debugger;
      this.daysleft = await this.trial.GetTrialDaysLeft(currentUserProfile.email);
    } catch { }
    let subscription;
    try {
      subscription = await this.storage.GetSubscription(currentUserProfile.email);

    } catch { }
    this.subscribed = false;
    if (subscription && new Date(subscription.endDate) >= new Date()) {
      this.subscribed = true;
    }
  }

  goSettings() {
    this.router.navigate(['settings']);
  }

  goSubscribe() {
    this.router.navigate(['subscribe']);
  }

  goEdit() {
    this.router.navigate(['edit']);
  }
}
