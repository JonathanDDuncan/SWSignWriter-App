import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';
import { SentryService } from './../sentry.service';
import { Platform } from '@ionic/angular';

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
    private router: Router,
    private sentry: SentryService,
    public platform: Platform,
    private store: InAppPurchase2
  ) { }
  private serverUrl =
    (window.location
      && window.location.hostname
      && window.location.hostname.includes('localhost'))
      ? 'https://localhost:44309/'
      : 'https://swsignwriterapi.azurewebsites.net/';

  async ngOnInit() {
    // const profile = await this.storage.GetCurrentUserProfile();
    // console.log(profile);
    // if (!profile || profile === null) {
    //   this.router.navigate(['/login']);
    // } else {
    //   const subscription = await this.storage.GetSubscription(profile.email);
    //   console.log(subscription);
    //   if (subscription) {
    //     this.SetButtonDisabled(subscription.endDate);
    //     const d = new Date(subscription.endDate);
    //     const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    //     const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    //     const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    //     this.subscriptionEndDate = `${da}-${mo}-${ye}`;

    //     console.log(this.subscriptionEndDate);

    //     this.autoRenewal = !subscription.cancelatperiodend;
    //  }
    //}
  } 

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.sentry.sentryMessage("Configure Purchase");

      this.configurePurchasing("12345678");      
    });
  }

  async showAlert() {  
    const alert = await this.alertController.create({  
      header: 'Alert',  
      subHeader: 'SubTitle',  
      message: 'This is an alert message',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

  private SetButtonDisabled(endDate: Date) {
    const subscribed = new Date(endDate) >= new Date();

    this.buttonDisabled = subscribed;
  }

  async SubscribeMonthly() {
    //const planId = 'plan_HHKPHgsv5Vdy49';
    //await this.createSession(planId);
    this.sentry.sentryMessage("Start Payment Monthly");
    this.purchase("12345678");
  }

  async SubscribeYearly() {
    //const planId = 'plan_HHKPf6K2bmpeN7';
    //await this.createSession(planId);
    this.purchase("AppleProductIdHere");
  }

  async cancelSubscription(){
    location.href = "https://apps.apple.com/account/subscriptions";
  }

  async configurePurchasing(productId: string) {    

    // const profile = await this.storage.GetCurrentUserProfile();
    // if (!profile || profile === null) {
    //   this.router.navigate(['/login']);
    // }

    // const subscription = await this.storage.GetSubscription(profile.email);
    // let subscriptionEndDate: Date = new Date();
    // if (subscription) {
    //   subscriptionEndDate = subscription.endDate;
    // }

    console.log('Starting Configurations');
    this.sentry.sentryMessage("Starting Configuration");

    try {   
      // Register Product
      console.log('Registering Product ' + JSON.stringify(productId));
      this.sentry.sentryMessage('Registering Product ' + JSON.stringify(productId));

      this.store.verbosity = this.store.DEBUG;
      debugger;
      
      this.store.register({
        id: productId,
        alias: productId,
        type: this.store.NON_RENEWING_SUBSCRIPTION
      });
      this.sentry.sentryMessage('Registered');
      // Handlers
      this.store.when(productId).approved((product: IAPProduct) => {
        debugger;
        // Purchase was approved
        console.log('purchase_approved', /*{programId: this.program._id}*/);
        this.sentry.sentryMessage('purchase_approved');
        product.finish();
        this.sentry.sentryMessage('finished pa');
        this.showAlert();
        //this.subscribe(profile.email, subscriptionEndDate);        
      });

      this.store.when(productId).registered((product: IAPProduct) => {
        console.log('Registered: ' + JSON.stringify(product));
        this.sentry.sentryMessage('Registered: ' + JSON.stringify(product));
      });

      this.store.when(productId).updated((product: IAPProduct) => {
        console.log('Loaded' + JSON.stringify(product));
        this.sentry.sentryMessage('Loaded' + JSON.stringify(product));
      });

      this.store.when(productId).cancelled((product) => {
        console.log('purchase_cancelled', {});
        this.sentry.sentryMessage('purchase_cancelled');
      });

      this.store.error((err) => {
        console.log('store_error', {});
        this.sentry.sentryMessage('store_error');
        this.sentry.sentryMessage(JSON.stringify(err));
      });

      this.store.ready((status) => {
        console.log('store_ready', {});
        this.sentry.sentryMessage('store_ready');
        console.log(JSON.stringify(this.store.get(productId)));
        this.sentry.sentryMessage(JSON.stringify(this.store.get(productId)));
        console.log('Store is Ready: ' + JSON.stringify(status));
        this.sentry.sentryMessage('Store is Ready: ' + JSON.stringify(status));
        console.log('Products: ' + JSON.stringify(this.store.products));
        this.sentry.sentryMessage('Products: ' + JSON.stringify(this.store.products));
      });

      // Errors
      this.store.when(productId).error((error) => {
        console.log('An Error Occured' + JSON.stringify(error));
        this.sentry.sentryMessage('An Error Occured' + JSON.stringify(error));
      });

      // Refresh Always
      console.log('Refresh Store');
      this.sentry.sentryMessage('Refresh Store');
      this.store.refresh();
      this.sentry.sentryMessage('Refreshed');
    } catch (err) {
      console.log('Error On Store Issues' + JSON.stringify(err));
      this.sentry.sentryMessage('Error On Store Issues' + JSON.stringify(err));
    }
  }
  
  async purchase(productId: string) {  
     
    this.sentry.sentryMessage("Purchase");     
    
    try {
      let product = this.store.get(productId);
      console.log(product)
      this.sentry.sentryMessage(JSON.stringify(product));
      debugger;
      console.log('Product Info: ' + JSON.stringify(product));
      this.sentry.sentryMessage('Product Info: ' + JSON.stringify(product));
      this.store.order(productId).then( () => {       
        console.log('Purchase Succesfull');  
        this.sentry.sentryMessage('Purchase Succesfull');    
      }).catch( () => {
        console.log('Error Ordering From Store');    
        this.sentry.sentryMessage('Error Ordering From Store');       
      });
    } catch (err) {
      console.log('Error Ordering ' + JSON.stringify(err)); 
      this.sentry.sentryMessage('Error Ordering ' + JSON.stringify(err));           
    }
  }

  subscribe(email: string, endDate: Date) {
    this.sentry.sentryMessage('Saving Sub');     
    this.storage.SaveSubscription(
      email,
      endDate,
      false
    );
    this.sentry.sentryMessage('Saved Sub');     
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
            location.href = "https://apps.apple.com/account/subscriptions";

            //Stripe Code Was Here
          }
        }
      ]
    });

    await alert.present();
  }
}
