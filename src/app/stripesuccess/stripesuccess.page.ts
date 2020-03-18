import { StripeService } from './../stripe.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stripesuccess',
  templateUrl: './stripesuccess.page.html',
  styleUrls: ['./stripesuccess.page.scss']
})
export class StripesuccessPage implements OnInit {

  public subscriptionEndDate: string;
  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private route: ActivatedRoute,
    private stripeservice: StripeService,
    private router: Router
  ) { }

  async ngOnInit() {
    const profile = await this.storage.GetCurrentUserProfile();
    if (!profile) {
      this.router.navigate(['/login']);
    }
    await this.getSubscriptionInfo();
  }

  async getSubscriptionInfo() {
    const profile = await this.storage.GetCurrentUserProfile();
    this.route.queryParamMap.subscribe(async (params: any) => {
      const sessionid = params.params['session_id'];

      await this.stripeservice.GetandSaveStripeSubscriptionData(profile.email, sessionid);
      const subscription: any = await this.storage.GetSubscription(profile.email);
      debugger;
      console.log('subscription');
      console.log(subscription);
      const d = new  Date(subscription.endDate);
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      this.subscriptionEndDate = `${da}-${mo}-${ye}`;
    });
  }
}
