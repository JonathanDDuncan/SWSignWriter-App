import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StorageService } from '../storage.service';
import { AndroidSubscriptionService } from './androidSubscription.service';
import { SubscriptionService } from './subscription.service';
import { TrialService } from './trial.service';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  public subscriptions;

  constructor(
    private storage: StorageService,
    private subscriptionServiceNG: SubscriptionService,
    private subscriptionServiceAndroid : AndroidSubscriptionService,
    private trial: TrialService
  ) {
    
    if (Capacitor.isNativePlatform()) {    
      this.subscriptions = subscriptionServiceAndroid;
    }
    else
      this.subscriptions = subscriptionServiceNG;   
   }

  async GetCurrenUserRoles(): Promise<Array<string>> {
    const currentUserProfile = await this.storage.GetCurrentUserProfile();
    if (currentUserProfile && currentUserProfile != null) {
      const roles = await this.GetRoles(currentUserProfile.email);
      return roles;
    }
  }

  private async GetRoles(email: string): Promise<string[]> {
    const trialDaysLeft = await this.trial.GetTrialDaysLeft(email);
    const subscriptionDaysLeft = await this.subscriptions.GetSubscriptionDaysLeft(email);

    const roles: string[] = [];

    if (subscriptionDaysLeft && subscriptionDaysLeft > 0) {
      roles.push('subscribed');
    } else if (trialDaysLeft && trialDaysLeft > 0) {
      roles.push('trial');
    }
    return roles;
  }
}
