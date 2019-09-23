import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrialService {
  constructor(
    private storage: StorageService,
  ) { }

   async GetTrialDaysLeft(email: string): Promise<number> {
    const trialLength = 15;
    const trialStartDate: Date = await this.storage.GetTrialStartDate(email);
    let daysLeft: number;
    if (trialStartDate != null) {
      const diff = Math.abs(new Date().getTime() - trialStartDate.getTime());
      daysLeft = trialLength - Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }
    return (trialStartDate != null && daysLeft > 0) ? daysLeft : 0;
  }
}
