import { TranslateService } from '@ngx-translate/core';
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
    private translateService: TranslateService,    
    private router: Router
  ) { }
  private serverUrl =
    (window.location
      && window.location.hostname
      && window.location.hostname.includes('localhost'))
      ? 'https://localhost:44309/'
      : 'https://swsignwriterapi.azurewebsites.net/';

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
    //const planId = 'plan_HHKPHgsv5Vdy49';
    //await this.createSession(planId);
  }

  async SubscribeYearly() {
    //const planId = 'plan_HHKPf6K2bmpeN7';
    //await this.createSession(planId);
  }
  
  async CancelRenewal() {
    const alert = await this.alertController.create({
      header: this.translateService.instant('Cancel automatic renewal'),
      message: this.translateService.instant('Are you <strong>sure</strong> you want to remove automatic renewal?'),
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
            //Stripe Code Was Here
          }
        }
      ]
    });

    await alert.present();
  }
}
