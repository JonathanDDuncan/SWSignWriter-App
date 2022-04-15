import { TrialService } from './../services/trial.service';
import { AuthServiceMobile } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Capacitor } from '@capacitor/core';
import { AuthAngularService } from '../services/authAngular.service';
import { SubscriptionService } from '../services/subscription.service';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public authService;
  public daysleft: number;
  public subService;
  public subscribed: boolean;
  constructor(
    private router: Router,
    private trial: TrialService,
    private storage: StorageService,
    public authMobile: AuthServiceMobile,
    public authAngular: AuthAngularService,
    public subscriptionServiceNG: SubscriptionService,
    public subscriptionServiceAndroid: AndroidSubscriptionService,
    public authServiceMain : AuthService
  ) 
  {    
    if (Capacitor.isNativePlatform()) {    
      this.authService = authMobile;
      this.subService = subscriptionServiceAndroid
    }
    else
    {
      this.authService = authAngular;    
      this.subService = subscriptionServiceNG;
    }
  }

  async ngOnInit() { 
    var loggedIn = await this.authService.isLoggedIn.getValue();
   
    console.log('log',loggedIn);
    if (!loggedIn) {
      await this.authService.login();
    }
    
    //Need to fix this just for trial
    // try {    
    //   this.daysleft = await this.trial.GetTrialDaysLeft(currentUserProfile.email);
    // } catch { }
    
    // let subscription;
    // try {
    //   subscription = await this.storage.GetSubscription(currentUserProfile.email);
    // } catch { }

    // this.subscribed = false;
    // if (subscription && new Date(subscription.endDate) >= new Date()) {
    //   this.subscribed = true;
    // }

    this.subscribed = this.subService.isSubscribed;
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
