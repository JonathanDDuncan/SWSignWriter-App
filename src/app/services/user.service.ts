import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Capacitor } from '@capacitor/core';
import { AuthServiceModel } from '../core/models/authService.model';
import { StorageService } from '../storage.service';
import { AndroidSubscriptionService } from './androidSubscription.service';
import { AuthServiceMobile } from './auth.service';
import { AuthAngularService } from './authAngular.service';
import { SubscriptionService } from './subscription.service';
import { TrialService } from './trial.service';



@Injectable({
  providedIn: 'root'
})

export class UserService {
  public subscriptions;
  private authService: AuthServiceModel;
  constructor(
    private storage: StorageService,
    private subscriptionServiceNG: SubscriptionService,
    private subscriptionServiceAndroid : AndroidSubscriptionService,
    private trial: TrialService,
    //private authService: AuthService,
    private authServiceNG: AuthAngularService,
    private authServiceAndroid: AuthServiceMobile
  ) {
    
    if (Capacitor.isNativePlatform()) {    
      this.subscriptions = subscriptionServiceAndroid;
      this.authService = authServiceAndroid;
    }
    else
    {
      this.subscriptions = subscriptionServiceNG;  
      this.authService = authServiceNG; 
    }
   }

  async GetCurrenUserRoles(): Promise<Array<string>> {
    //change to behaviour subject
    var loggedIn = await this.authService.isLoggedIn.getValue();
    let roles: string[] = [];
    if (loggedIn) {
      roles.push('loggedIn');
      const currentUserProfile = await this.storage.GetCurrentUserProfile();
      roles = roles.concat(await this.GetRoles(currentUserProfile.sub));     
    }
    return roles;    
  }

  private async GetRoles(sub: string): Promise<string[]> {
    const trialDaysLeft = await this.trial.GetTrialDaysLeft(sub);    

    const roles: string[] = [];
    //Maybe Replicate subscription behaviour to trial
    if (this.subscriptions.isSubscribed.getValue()) {
      roles.push('subscribed');
    } else if (trialDaysLeft && trialDaysLeft > 0) {
      roles.push('trial');
    }

    return roles;
  }
}
