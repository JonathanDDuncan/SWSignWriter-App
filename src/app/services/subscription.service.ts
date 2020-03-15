import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {


  constructor(
    private storage: StorageService,
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
    const diff = Math.abs(subscriptionEndDate.getTime() - new Date().getTime());
    const daysLeft: number = Math.ceil(diff / (1000 * 3600 * 24));

    return (daysLeft > 0) ? daysLeft : 0;
  }
}
