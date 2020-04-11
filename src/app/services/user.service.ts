import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { SubscriptionService } from './subscription.service';
import { TrialService } from './trial.service';
import { UserProfile } from '../user/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storage: StorageService,
    private subscriptions: SubscriptionService,
    private trial: TrialService
  ) { }

  async GetCurrenUserRoles(): Promise<Array<string>> {
    const currentUserProfile = await this.storage.GetCurrentUserProfile();
    if (currentUserProfile) {
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
