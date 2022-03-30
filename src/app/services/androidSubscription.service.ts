import { Router } from '@angular/router';
import { TrialService } from './trial.service';
import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { InAppPurchase2, IAPProduct } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import { SentryService } from '../sentry.service';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { profile } from 'console';
import { UserProfile } from '../user/user-profile';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
//Fix auth url
export class AndroidSubscriptionService {
  public subscribed = new BehaviorSubject(false); 
  private profile: UserProfile;

  constructor(
    private storage: StorageService,
    private trialService: TrialService,
    private router: Router,
    private store: InAppPurchase2,
    private sentry : SentryService,
    //private ref: ChangeDetectorRef,
    private alertController: AlertController,
    public platform: Platform,
    private http: HttpClient
  ) { 

    this.store.verbosity = this.store.DEBUG;
    // debugger;
    this.registerProducts();

    // this.sentry.sentryMessage("Configure Purchase");
    // console.log("Configure Purchase");
    // debugger;
    this.configurePurchasing("12345678");   

    // this.store.ready(() => {
    //   debugger;               
    //   console.log('Store is Ready');
    //   this.sentry.sentryMessage('Store is Ready');        
        
    //   //this.products = this.store.products;
    //   //this.ref.detectChanges();
    // });   


    debugger;
    //platform.ready().then(() => {
      debugger;
      //onsole.log("register");
      // this.store.register({
      //   id: "12345678",
      //   type: this.store.PAID_SUBSCRIPTION,
      // });
      // this.store.when("12345678")
      //   .approved(p => p.verify())
      //   .verified(p => p.finish());
      // this.store.refresh();
     //});
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

  async CanUse(email: string = null) {

    // const owned = (this.verifyAppleSubscription("monthly") || this.verifyAppleSubscription("yearly"));   
    
   if (!email) {
     this.profile = await this.storage.GetCurrentUserProfile();
     email = this.profile && this.profile !== null ? this.profile.email : null;
   }

   const isSubscribedOrTrial = this.IsSubscribedOrTrial(email);
    if (!isSubscribedOrTrial) {
      this.router.navigate(['/subscribe']);
    }
  }

  // async  verifyAppleSubscription(productId: string){

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

  //   try {
  //     // Register Product
  //     console.log('Registering Product ' + JSON.stringify(productId));
  //     this.store.verbosity = this.store.DEBUG;


  //     //Handler
  //     this.store.when("my_subcription").updated((product: IAPProduct) => {
  //       if (product.owned) { return true}
  //       // serve the app with subscription
  //       else {return false }
  //       // serve the app without subscription
  //     });

  //     this.store.register({
  //       id: productId,
  //       alias: productId,
  //       type: this.store.PAID_SUBSCRIPTION
  //     });    

  //   } catch (err) {
  //     console.log('Error On Store Issues' + JSON.stringify(err));
  //   }
  // }

  async IsSubscribedOrTrial (email: string): Promise<boolean> {
    const isTrial = await this.trialService.GetTrialDaysLeft(email) > 0;
    const isSubscribed = await this.GetSubscriptionDaysLeft(email) > 0;

    const isSubscribedOrTrial = isTrial || isSubscribed;
    if(isSubscribed)


   return isSubscribed;
  }

  saveSubscriptionDB(){
      
  }

  registerProducts(){
    debugger;
        this.store.when('product').registered((product: IAPProduct) => {
          console.log('Registered: ' + JSON.stringify(product));
          this.sentry.sentryMessage('Registered: ' + JSON.stringify(product));
        });
    
        // Register Product
        console.log('Registering Product ' + JSON.stringify("12345678"));
        //this.sentry.sentryMessage('Registering Product ' + JSON.stringify("12345678"));
    
        //this.store.refresh();
        this.store.register({
          id: "12345678",        
          type: this.store.PAID_SUBSCRIPTION
        });
    
        
  }

  // async GetIAPSubscription (){
  //   debugger;
  //   this.sentry.sentryMessage(this.store.products);
  //   console.log(this.store.products);
  // }

  restore() {
    //this.store.refresh();
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

  getProducts():IAPProduct[] {
    return this.store.products;
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

  configurePurchasing(productId: string) {    
    debugger;
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
      
      
      //this.sentry.sentryMessage('Registered');
      // Handlers
      this.store.when('product').approved((product: IAPProduct) => {
        console.log(product.transaction);
        this.sentry.sentryMessage(product.transaction);
        debugger;
        var transaction = product.transaction as any;
        this.http.get(`https://androidpublisher.googleapis.com/androidpublisher/v3/applications/pro.jonathanduncan.swsignwriter/purchases/subscriptions/${transaction.id}/tokens/${transaction.purchaseToken}`).subscribe(response => { debugger; console.log('response', response);});

        // Purchase was approved
        console.log('purchase_approved', /*{programId: this.program._id}*/);
        this.sentry.sentryMessage('purchase_approved');
        //product.finish();       
        return product.verify();
        //this.subscribe(this.profile.email, subscriptionEndDate);        
      }).verified((p: IAPProduct) => { 
        p.finish()
        this.sentry.sentryMessage('finished pa');
        this.showAlert();
        console.log(this.profile);
        debugger;
        //this.subscribe(this.profile.email, moment().add(1, "month").toDate());
        
      });

      this.store.when("12345678").owned((p: IAPProduct) => {
        debugger;
        console.log('Owned' + JSON.stringify(p));
        this.sentry.sentryMessage('Owned' + JSON.stringify(p));
      });

      // this.store.when(productId).updated((product: IAPProduct) => {
      //   console.log('Loaded' + JSON.stringify(product));
      //   this.sentry.sentryMessage('Loaded' + JSON.stringify(product));
      // });

      this.store.when(productId).cancelled((product) => {
        console.log('purchase_cancelled', {});
        this.sentry.sentryMessage('purchase_cancelled');
      });

      this.store.error((err) => {
        debugger;
        console.log('store_error', {});
        this.sentry.sentryMessage('store_error');
        this.sentry.sentryMessage(JSON.stringify(err));
      });      

      // Errors
      this.store.when(productId).error((error) => {
        debugger;
        console.log('An Error Occured' + JSON.stringify(error));
        this.sentry.sentryMessage('An Error Occured' + JSON.stringify(error));
      });

      // Refresh Always     
      //this.store.refresh();      
    } catch (err) {
      console.log('Error On Store Issues' + JSON.stringify(err));
      this.sentry.sentryMessage('Error On Store Issues' + JSON.stringify(err));
    }
    this.store.refresh();      
  }
  
  async purchase(productId: string) {  
     debugger;

     this.store.order(productId);
  //   var product = this.store.products.find(x => x.id == productId);
  //   this.sentry.sentryMessage("Purchase");     
    
  //   try {     
      
  //     console.log('Product Info: ' + JSON.stringify(product));
  //     this.sentry.sentryMessage('Product Info: ' + JSON.stringify(product));

  //     this.store.order(productId).then( () => {     
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
  }
}