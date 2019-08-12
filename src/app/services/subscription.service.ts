import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {


  constructor(private storage: StorageService) { }

  async GetSubscriptionEndDate(email: string): Promise<Date> {
    const subscriptionEndDate: Date = await this.storage.GetSubscriptionEndDate(email);

    return subscriptionEndDate;
  }
}
