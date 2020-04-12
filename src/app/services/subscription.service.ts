import { Router } from '@angular/router';
import { TrialService } from './trial.service';
import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {


  constructor(
    private storage: StorageService,
    private trialService: TrialService,
    private router: Router
  ) { }

  async GetSubscriptionEndDate(email: string): Promise<Date> {
    const subscription = await this.storage.GetSubscription(email);
    let subscriptionEndDate: Date;
    if (subscription) {
      subscriptionEndDate  = subscription.endDate;
    }
    return subscriptionEndDate;
  }

  async GetSubscriptionDaysLeft(email: string): Promise<number> {
    const subscriptionEndDate: Date = await this.GetSubscriptionEndDate(email);
    const diff = Math.abs(new Date(subscriptionEndDate).getTime() - new Date().getTime());
    const daysLeft: number = Math.ceil(diff / (1000 * 3600 * 24));

    return (daysLeft > 0) ? daysLeft : 0;
  }

  async CanUse(email: string = null) {
    // TODO what is this for?
   if (!email) {
     const profile = await this.storage.GetCurrentUserProfile();
     email = profile && profile !== null ? profile.email : null;
   }

   const isSubscribedOrTrial = this.IsSubscribedOrTrial(email);
    if (!isSubscribedOrTrial ) {
      this.router.navigate(['/subscribe']);
    }
  }

  async IsSubscribedOrTrial (email: string): Promise<boolean> {
    const isTrial = await this.trialService.GetTrialDaysLeft(email) > 0;
    const isSubscribed = await this.GetSubscriptionDaysLeft(email) > 0;

    const isSubscribedOrTrial = isTrial || isSubscribed;

   return isSubscribed;
  }
}
