import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrialService {
  constructor(
    private storage: StorageService,
  ) { }

  async GetTrialStartDate(email: string): Promise<Date> {
    const subscriptionEndDate: Date = await this.storage.GetSubscriptionEndDate(email);

    return subscriptionEndDate;
  }

  async GetTrialDaysLeft(email: string): Promise<number> {
    const trialLength = 15;
    const trialStartDate: Date = await this.GetTrialStartDate(email);
    const diff = Math.abs(new Date().getTime() - trialStartDate.getTime());
    const daysLeft: number = trialLength - Math.ceil(diff / (1000 * 3600 * 24));

    return (daysLeft > 0) ? daysLeft : 0;
  }
}
