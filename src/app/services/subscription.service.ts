import { Router } from '@angular/router';
import { TrialService } from './trial.service';
import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthAngularService } from './authAngular.service';
import { HttpService } from './httpService.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  public isSubscribed = new BehaviorSubject(false);  
  public subscriptionType = new BehaviorSubject(null);
  public autoRenewal = new BehaviorSubject<boolean>(null);
  public subscriptionEndDate = new BehaviorSubject<Date>(null);
  constructor(
    private storage: StorageService,
    private trialService: TrialService,
    private router: Router,    
    private authService: AuthAngularService,      
    private httpService: HttpService
  ) {     
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      if(loggedIn){
      this.checkSubscription();
      }
    });  
  }

  async checkSubscription(){
    var jwt = await this.storage.GetJWTToken(); 
    const profile = await this.storage.GetCurrentUserProfile();
    this.httpService.IsUsersSubscribeRequest(jwt, profile, true).subscribe((response) => {
      this.isSubscribed.next(response.IsSubscribed);
      this.subscriptionType.next(response.Type);
      this.autoRenewal.next(!response.CancelAtPeriodEnd);
      if(response.SubscriptionEndDate)
        this.subscriptionEndDate.next(new Date(response.SubscriptionEndDate));
    })    
  }

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

  async IsSubscribedOrTrial (sub: string): Promise<boolean> {
    const isTrial = await this.trialService.GetTrialDaysLeft(sub) > 0;
    //const isSubscribed = await this.GetSubscriptionDaysLeft(email) > 0;

    // const isSubscribedOrTrial = isTrial || isSubscribed;
    // if(isSubscribed) await this.storage.SaveUserSubscription(isSubscribed);

   return isTrial || this.isSubscribed.getValue();
  }



  
}