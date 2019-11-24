import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  constructor(private http: HttpClient, private storage: StorageService  ) { }
  private serverUrl = 'https://localhost:44309/';
  ngOnInit() {
  }

  async SubscribeMonthly() {
    const profile = await this.storage.GetCurrentUserProfile();
    const subscriptionEndDate = await this.storage.GetSubscriptionEndDate(profile.email);
    const trialStartDate = await this.storage.GetTrialStartDate(profile.email);

    console.log(profile);
    const planId = 'plan_GEcB3WZYgKsVER';
    const subscriptionRequest = {
      client: profile,
      planId: planId,
      subscriptionEndDate: subscriptionEndDate,
      trialStartDate: trialStartDate
    };

    this.http.post(this.serverUrl + 'api/stripe/createsession', subscriptionRequest, { headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }) })
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  SubscribeYearly() {

  }
}
