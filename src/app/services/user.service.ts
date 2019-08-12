import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { SubscriptionService } from './subscription.service';
import { TrialService } from './trial.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private roles: Array<string>;

  constructor(
    private storage: StorageService,
    private subscriptions: SubscriptionService,
    private trial: TrialService
  ) { }

  async GetCurrenUserRoles(): Promise<Array<string>> {
    await this.CreateRoles();

    return this.roles;
  }

  private async CreateRoles() {
    const currentUserProfile = await this.storage.GetCurrentUserProfile();

    const trialDaysLeft = await this.trial.GetTrialDaysLeft(currentUserProfile.email);
    const subscriptionDaysLeft = this.subscriptions.GetSubscriptionDaysLeft(currentUserProfile.email);

    this.roles = [];

    if (await subscriptionDaysLeft > 0) {
      this.roles.push('subscribed');
    } else if (trialDaysLeft > 0) {
      this.roles.push('trial');
    }
  }

}
