import { StripeService } from './../stripe.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  public buttonDisabled: boolean | null = null;
  public subscriptionEndDate: string;
  public autoRenewal: boolean;

  constructor(private http: HttpClient,
    private storage: StorageService,
    private alertController: AlertController,
    private stripeservice: StripeService,
    private router: Router
  ) { }
  private serverUrl = 'https://swsignwriterapi.azurewebsites.net/';

  async ngOnInit() {
    const profile = await this.storage.GetCurrentUserProfile();
    if (!profile || profile === null) {
      this.router.navigate(['/login']);
    } else {
      const subscription = await this.storage.GetSubscription(profile.email);
      if (subscription) {
        this.SetButtonDisabled(subscription.endDate);
        const d = new Date(subscription.endDate);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        this.subscriptionEndDate = `${da}-${mo}-${ye}`;
        this.autoRenewal = !subscription.cancelatperiodend;
      }
    }
  }

  private SetButtonDisabled(endDate: Date) {
    const subscribed = new Date(endDate) >= new Date();

    this.buttonDisabled = subscribed;
  }

  async SubscribeMonthly() {
    const planId = 'plan_HHKPHgsv5Vdy49';
    await this.createSession(planId);
  }

  async SubscribeYearly() {
    const planId = 'plan_HHKPf6K2bmpeN7';
    await this.createSession(planId);
  }

  private async createSession(planId: string) {
    const profile = await this.storage.GetCurrentUserProfile();
    if (!profile || profile === null) {
      this.router.navigate(['/login']);
    }

    const subscription = await this.storage.GetSubscription(profile.email);
    let subscriptionEndDate: Date = new Date();
    if (subscription) {
      subscriptionEndDate = subscription.endDate;
    }
    const trialStartDate = await this.storage.GetTrialStartDate(profile.email);

    const request: any = profile;
    request.planId = planId;
    request.trialStartDate = trialStartDate;
    request.subscriptionEndDate = subscriptionEndDate;

    this.http.post(this.serverUrl + 'api/stripe/createsession', request, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    })
      .subscribe(data => {
        console.log(data);
        const CHECKOUT_SESSION_ID = data;
        const stripe = Stripe('pk_live_Q4UaSLy3gZtg16efKx9JUhCh009AFVCrne');
        stripe.redirectToCheckout({
          sessionId: CHECKOUT_SESSION_ID
        }).then(function (result) {
          if (result.error) {
            console.log('There was an error with the checkout.');
          } else {
            console.log('Checkout was a success.');
            console.log(result);
          }
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
      }, error => {
        console.log(error);
      });
  }
  async CancelRenewal() {
    const alert = await this.alertController.create({
      header: 'Cancel automatic renewal',
      message: 'Are you <strong>sure</strong> you want to remove automatic renewal?',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Agree',
          handler: async () => {
            const profile = await this.storage.GetCurrentUserProfile();
            if (!profile || profile === null) {
              this.router.navigate(['/login']);
            }
            const request = {
              privatekey:
                '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
              email: profile.email
            };
            await this.http.post(this.serverUrl + 'api/stripe/cancelrenewal', request, {
              headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              })
            }).toPromise();
            this.stripeservice.GetandSaveStripeSubscriptionData(profile.email);
            const subscription: any = await this.storage.GetSubscription(profile.email);
            const d = subscription.endDate;
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            this.subscriptionEndDate = `${da}-${mo}-${ye}`;
            this.autoRenewal = subscription.CancelAtPeriodEnd;
            this.SetButtonDisabled(subscription.endDate);
          }
        }
      ]
    });

    await alert.present();
  }
}
