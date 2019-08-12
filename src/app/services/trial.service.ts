import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrialService {
  constructor(private storage: StorageService) { }

  async GetTrialStartDate(email: string): Promise<Date> {
    const subscriptionEndDate: Date = await this.storage.GetSubscriptionEndDate(email);

    return subscriptionEndDate;
  }

}
