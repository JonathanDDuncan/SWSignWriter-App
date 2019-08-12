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

    const trialDaysLeft = await this.GetTrialDaysLeft(currentUserProfile.email);
    const subscriptionDaysLeft = this.GetSubscriptionDaysLeft(currentUserProfile.email);

    this.roles = [];

    if (await subscriptionDaysLeft > 0) {
      this.roles.push('subscribed');
    } else if (trialDaysLeft > 0) {
      this.roles.push('trial');
    }
  }

  async GetSubscriptionDaysLeft(email: string): Promise<number> {
    const subscriptionEndDate: Date = await this.subscriptions.GetSubscriptionEndDate(email);
    const diff = Math.abs(subscriptionEndDate.getTime() - new Date().getTime());
    const daysLeft: number = Math.ceil(diff / (1000 * 3600 * 24));

    return (daysLeft > 0) ? daysLeft : 0;
  }

  async GetTrialDaysLeft(email: string): Promise<number> {
    const trialLength = 15;
    const trialStartDate: Date = await this.trial.GetTrialStartDate(email);
    const diff = Math.abs(new Date().getTime() - trialStartDate.getTime());
    const daysLeft: number = trialLength - Math.ceil(diff / (1000 * 3600 * 24));

    return (daysLeft > 0) ? daysLeft : 0;
  }
}
