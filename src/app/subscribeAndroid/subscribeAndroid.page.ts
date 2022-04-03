import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import { SentryService } from './../sentry.service';
import { Platform } from '@ionic/angular';
import { SubscriptionService } from '../services/subscription.service';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-subscribeAndroid',
  templateUrl: './subscribeAndroid.page.html',
  styleUrls: ['./subscribeAndroid.page.scss'],
})
export class SubscribeAndroidPage implements OnInit {
  public buttonDisabled: boolean | null = null;
  public subscriptionEndDate: string;
  public autoRenewal: boolean;
  private profile : any;
  products: IAPProduct[] = [];
  public subsService;

  constructor(private http: HttpClient,
  private storage: StorageService,
  private alertController: AlertController,
  private translateService: TranslateService,    
  private router: Router,
  private sentry: SentryService,
  public platform: Platform,
  private store: InAppPurchase2,
  private ref: ChangeDetectorRef,
  private subscriptionServiceNG : SubscriptionService,
  private subscriptionServiceAndroid : AndroidSubscriptionService
  )   
  { 
    if (Capacitor.isNativePlatform()) {    
      this.subsService = subscriptionServiceAndroid;
    }
    else
      this.subsService = subscriptionServiceNG;   
   

    //test this
    // platform.ready().then(() => {
    //   console.log("Platform Ready");
    // });

    //debugger;
    //this.subsService.GetIAPSubscription();
    debugger;    

    this.store.verbosity = this.store.DEBUG; 
    this.products = this.subsService.getProducts();  
  }



  private serverUrl =
    (window.location
      && window.location.hostname
      && window.location.hostname.includes('localhost'))
  ? 'https://localhost:44309/'
  : 'https://swsignwriterapi.azurewebsites.net/';

  async ngOnInit() {
    this.profile = await this.storage.GetCurrentUserProfile();
    console.log(this.profile);
    if (!this.profile || this.profile === null) {
      this.router.navigate(['/login']);
    }
     else {
      const subscription = await this.storage.GetSubscription(this.profile.email);
      console.log(subscription);
      if (subscription) {
        this.SetButtonDisabled(subscription.endDate);
        const d = new Date(subscription.endDate);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        this.subscriptionEndDate = `${da}-${mo}-${ye}`;

        console.log(this.subscriptionEndDate, "subscription endDate");

        this.autoRenewal = !subscription.cancelatperiodend;
     }
    }
  } 

//   registerProducts(){
// debugger;
//     // this.store.when('product').registered((product: IAPProduct) => {
//     //   console.log('Registered: ' + JSON.stringify(product));
//     //   this.sentry.sentryMessage('Registered: ' + JSON.stringify(product));
//     // });

//     // Register Product
//     console.log('Registering Product ' + JSON.stringify("12345678"));
//     this.sentry.sentryMessage('Registering Product ' + JSON.stringify("12345678"));

//     this.store.register({
//       id: "12345678",        
//       type: this.store.PAID_SUBSCRIPTION
//     });

//     this.store.refresh();
//     this.products = this.store.products;
//   }

  restore() {
    this.subsService.restore();
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

  //  configurePurchasing(productId: string) {    
  //   debugger;
  //   // const profile = await this.storage.GetCurrentUserProfile();
  //   // if (!profile || profile === null) {
  //   //   this.router.navigate(['/login']);
  //   // }

  //   // const subscription = await this.storage.GetSubscription(profile.email);
  //   // let subscriptionEndDate: Date = new Date();
  //   // if (subscription) {
  //   //   subscriptionEndDate = subscription.endDate;
  //   // }

  //   console.log('Starting Configurations');
  //   this.sentry.sentryMessage("Starting Configuration");

  //   try {            
      
      
  //     this.sentry.sentryMessage('Registered');
  //     // Handlers
  //     this.store.when('product').approved((product: IAPProduct) => {
  //       debugger;
  //       // Purchase was approved
  //       console.log('purchase_approved', /*{programId: this.program._id}*/);
  //       this.sentry.sentryMessage('purchase_approved');
  //       //product.finish();       
  //       return product.verify();
  //       //this.subscribe(this.profile.email, subscriptionEndDate);        
  //     }).verified((p: IAPProduct) => { 
  //       p.finish()
  //       this.sentry.sentryMessage('finished pa');
  //       this.showAlert();
  //     });

  //     this.store.when("12345678").owned((p: IAPProduct) => {
  //       debugger;
  //       console.log('Owned' + JSON.stringify(p));
  //       this.sentry.sentryMessage('Owned' + JSON.stringify(p));
  //     });

  //     // this.store.when(productId).updated((product: IAPProduct) => {
  //     //   console.log('Loaded' + JSON.stringify(product));
  //     //   this.sentry.sentryMessage('Loaded' + JSON.stringify(product));
  //     // });

  //     this.store.when(productId).cancelled((product) => {
  //       console.log('purchase_cancelled', {});
  //       this.sentry.sentryMessage('purchase_cancelled');
  //     });

  //     this.store.error((err) => {
  //       debugger;
  //       console.log('store_error', {});
  //       this.sentry.sentryMessage('store_error');
  //       this.sentry.sentryMessage(JSON.stringify(err));
  //     });      

  //     // Errors
  //     this.store.when(productId).error((error) => {
  //       debugger;
  //       console.log('An Error Occured' + JSON.stringify(error));
  //       this.sentry.sentryMessage('An Error Occured' + JSON.stringify(error));
  //     });

  //     // Refresh Always     
  //     this.store.refresh();      
  //   } catch (err) {
  //     console.log('Error On Store Issues' + JSON.stringify(err));
  //     this.sentry.sentryMessage('Error On Store Issues' + JSON.stringify(err));
  //   }
  // }
  
  // async purchase(product: IAPProduct) {  
  //    debugger;
  //   this.sentry.sentryMessage("Purchase");     
    
  //   try {     
      
  //     console.log('Product Info: ' + JSON.stringify(product));
  //     this.sentry.sentryMessage('Product Info: ' + JSON.stringify(product));

  //     this.store.order(product).then( () => {     
  //       debugger  
        
  //       console.log('Purchase Initiated');  
  //       this.sentry.sentryMessage('Purchase Initiated');    
  //     }, e => {
  //       debugger;
  //       console.log('Error Ordering ', e);  
  //       this.sentry.sentryMessage('Error Ordering ' + JSON.stringify(e));    
  //     })
  //   } catch (err) {
  //     debugger;
  //     console.log('Error Ordering ' + JSON.stringify(err)); 
  //     this.sentry.sentryMessage('Error Ordering ' + JSON.stringify(err));           
  //   }
  // }

  async purchase(product: IAPProduct) {  
    this.subsService.purchase(product.id);
  }

  

  // async CancelRenewal() {
  //   const alert = await this.alertController.create({
  //     header: this.translateService.instant('Cancel automatic renewal'),
  //     message: this.translateService.instant('Are you <strong>sure</strong> you want to remove automatic renewal?'),
  //     buttons: [
  //       {
  //         text: 'Disagree',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //         }
  //       }, {
  //         text: 'Agree',
  //         handler: async () => {
  //           const profile = await this.storage.GetCurrentUserProfile();
  //           if (!profile || profile === null) {
  //             this.router.navigate(['/login']);
  //           }
  //           const request = {
  //             privatekey:
  //               '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
  //             email: profile.email
  //           };
  //           location.href = "https://apps.apple.com/account/subscriptions";

  //           //Stripe Code Was Here
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }
}



// import { TranslateService } from '@ngx-translate/core';
// import { StripeService } from '../stripe.service';
// import { Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { StorageService } from '../storage.service';
// import { AlertController } from '@ionic/angular';

// @Component({
//   selector: 'app-subscribe',
//   templateUrl: './subscribe.page.html',
//   styleUrls: ['./subscribe.page.scss'],
// })
// export class SubscribePage implements OnInit {
//   public buttonDisabled: boolean | null = null;
//   public subscriptionEndDate: string;
//   public autoRenewal: boolean;

//   constructor(private http: HttpClient,
//     private storage: StorageService,
//     private alertController: AlertController,
//     private translateService: TranslateService,
//     private stripeservice: StripeService,
//     private router: Router
//   ) { }
//   private serverUrl =
//     (window.location
//       && window.location.hostname
//       && window.location.hostname.includes('localhost'))
//       ? 'https://localhost:44309/'
//       : 'https://swsignwriterapi.azurewebsites.net/';

//   async ngOnInit() {
//     const profile = await this.storage.GetCurrentUserProfile();
//     if (!profile || profile === null) {
//       this.router.navigate(['/login']);
//     } else {
//       const subscription = await this.storage.GetSubscription(profile.email);
//       if (subscription) {
//         this.SetButtonDisabled(subscription.endDate);
//         const d = new Date(subscription.endDate);
//         const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
//         const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
//         const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
//         this.subscriptionEndDate = `${da}-${mo}-${ye}`;
//         this.autoRenewal = !subscription.cancelatperiodend;
//       }
//     }
//   }

//   private SetButtonDisabled(endDate: Date) {
//     const subscribed = new Date(endDate) >= new Date();

//     this.buttonDisabled = subscribed;
//   }

//   async SubscribeMonthly() {
//     const planId = 'plan_HHKPHgsv5Vdy49';
//     await this.createSession(planId);
//   }

//   async SubscribeYearly() {
//     const planId = 'plan_HHKPf6K2bmpeN7';
//     await this.createSession(planId);
//   }

//   private async createSession(planId: string) {
//     const profile = await this.storage.GetCurrentUserProfile();
//     if (!profile || profile === null) {
//       this.router.navigate(['/login']);
//     }

//     const subscription = await this.storage.GetSubscription(profile.email);
//     let subscriptionEndDate: Date = new Date();
//     if (subscription) {
//       subscriptionEndDate = subscription.endDate;
//     }
//     const trialStartDate = await this.storage.GetTrialStartDate(profile.email);

//     const request: any = profile;
//     request.planId = planId;
//     request.trialStartDate = trialStartDate;
//     request.subscriptionEndDate = subscriptionEndDate;

//     this.http.post(this.serverUrl + 'api/stripe/createsession', request, {
//       headers: new HttpHeaders({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       })
//     })
//       .subscribe(data => {
//         console.log(data);
//         const CHECKOUT_SESSION_ID = data;
//         const stripe = Stripe('pk_live_Q4UaSLy3gZtg16efKx9JUhCh009AFVCrne');
//         stripe.redirectToCheckout({
//           sessionId: CHECKOUT_SESSION_ID
//         }).then(function (result) {
//           if (result.error) {
//             console.log('There was an error with the checkout.');
//           } else {
//             console.log('Checkout was a success.');
//             console.log(result);
//           }
//           // If `redirectToCheckout` fails due to a browser or network
//           // error, display the localized error message to your customer
//           // using `result.error.message`.
//         });
//       }, error => {
//         console.log(error);
//       });
//   }
//   async CancelRenewal() {
//     const alert = await this.alertController.create({
//       header: this.translateService.instant('Cancel automatic renewal'),
//       message: this.translateService.instant('Are you <strong>sure</strong> you want to remove automatic renewal?'),
//       buttons: [
//         {
//           text: 'Disagree',
//           role: 'cancel',
//           cssClass: 'secondary',
//           handler: (blah) => {
//           }
//         }, {
//           text: 'Agree',
//           handler: async () => {
//             const profile = await this.storage.GetCurrentUserProfile();
//             if (!profile || profile === null) {
//               this.router.navigate(['/login']);
//             }
//             const request = {
//               privatekey:
//                 '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
//               email: profile.email
//             };
//             await this.http.post(this.serverUrl + 'api/stripe/cancelrenewal', request, {
//               headers: new HttpHeaders({
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//               })
//             }).toPromise();
//             this.stripeservice.GetandSaveStripeSubscriptionData(profile.email);
//             const subscription: any = await this.storage.GetSubscription(profile.email);
//             const d = subscription.endDate;
//             const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
//             const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
//             const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
//             this.subscriptionEndDate = `${da}-${mo}-${ye}`;
//             this.autoRenewal = subscription.CancelAtPeriodEnd;
//             this.SetButtonDisabled(subscription.endDate);
//           }
//         }
//       ]
//     });

//     await alert.present();
//   }
// }
