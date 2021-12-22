import { Router } from '@angular/router';
import { TrialService } from './trial.service';
import { StorageService } from './../storage.service';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';
import { SentryService } from '../sentry.service';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  public subscribed = new BehaviorSubject(false); 

  constructor(
    private storage: StorageService,
    private trialService: TrialService,
    private router: Router,
    private store: InAppPurchase2,
    private sentry : SentryService,
    private ref: ChangeDetectorRef,
    private alertController: AlertController,
  ) { 

    this.store.verbosity = this.store.DEBUG;

    this.registerProducts();

    this.sentry.sentryMessage("Configure Purchase");
    console.log("Configure Purchase");
    debugger;
    this.configurePurchasing("12345678");   

    this.store.ready(() => {
      debugger;               
      console.log('Store is Ready');
      this.sentry.sentryMessage('Store is Ready');        
        
      //this.products = this.store.products;
      this.ref.detectChanges();
    });   

    
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

    const owned = (this.verifyAppleSubscription("monthly") || this.verifyAppleSubscription("yearly"));
    
    // TODO what is this for?
   if (!email) {
     const profile = await this.storage.GetCurrentUserProfile();
     email = profile && profile !== null ? profile.email : null;
   }

   const isSubscribedOrTrial = this.IsSubscribedOrTrial(email);
    if (!isSubscribedOrTrial && !owned ) {
      this.router.navigate(['/subscribe']);
    }
  }

  async  verifyAppleSubscription(productId: string){

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

    try {
      // Register Product
      console.log('Registering Product ' + JSON.stringify(productId));
      this.store.verbosity = this.store.DEBUG;


      //Handler
      this.store.when("my_subcription").updated((product: IAPProduct) => {
        if (product.owned) { return true}
        // serve the app with subscription
        else {return false }
        // serve the app without subscription
      });

      this.store.register({
        id: productId,
        alias: productId,
        type: this.store.PAID_SUBSCRIPTION
      });    

    } catch (err) {
      console.log('Error On Store Issues' + JSON.stringify(err));
    }
  }

  async IsSubscribedOrTrial (email: string): Promise<boolean> {
    const isTrial = await this.trialService.GetTrialDaysLeft(email) > 0;
    const isSubscribed = await this.GetSubscriptionDaysLeft(email) > 0;

    const isSubscribedOrTrial = isTrial || isSubscribed;

   return isSubscribed;
  }

  registerProducts(){
    debugger;
        // this.store.when('product').registered((product: IAPProduct) => {
        //   console.log('Registered: ' + JSON.stringify(product));
        //   this.sentry.sentryMessage('Registered: ' + JSON.stringify(product));
        // });
    
        // Register Product
        console.log('Registering Product ' + JSON.stringify("12345678"));
        //this.sentry.sentryMessage('Registering Product ' + JSON.stringify("12345678"));
    
        this.store.register({
          id: "12345678",        
          type: this.store.PAID_SUBSCRIPTION
        });
    
        this.store.refresh();
      }

  async GetIAPSubscription (){
    debugger;
    this.sentry.sentryMessage(this.store.products);
    console.log(this.store.products);
  }

  restore() {
    this.store.refresh();
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
      
      
      this.sentry.sentryMessage('Registered');
      // Handlers
      this.store.when('product').approved((product: IAPProduct) => {
        debugger;
        // Purchase was approved
        console.log('purchase_approved', /*{programId: this.program._id}*/);
        this.sentry.sentryMessage('purchase_approved');
        //product.finish();       
        return product.verify();
        //this.subscribe(this.profile.email, subscriptionEndDate);        
      }).verified((p: IAPProduct) => { 
        p.finish()
        this.sentry.sentryMessage('finished pa');
        this.sentry.sentryMessage("owned" + this.store.products);
        this.showAlert();
      });

      this.store.when("product").updated((product: IAPProduct) => {        
         this.subscribed.next(product.owned);
         console.log("Updated Owned", product.owned);
      });

      this.store.when("product").owned((p: IAPProduct) => {
        debugger;
        console.log('Owned' + JSON.stringify(p));
        this.sentry.sentryMessage('Owned' + JSON.stringify(p));        
      });    

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
      this.store.refresh();      
    } catch (err) {
      console.log('Error On Store Issues' + JSON.stringify(err));
      this.sentry.sentryMessage('Error On Store Issues' + JSON.stringify(err));
    }
  }
  
  async purchase(product: IAPProduct) {  
     debugger;
    this.sentry.sentryMessage("Purchase");     
    
    try {     
      
      console.log('Product Info: ' + JSON.stringify(product));
      this.sentry.sentryMessage('Product Info: ' + JSON.stringify(product));

      this.store.order(product).then( () => {     
        debugger  
        
        console.log('Purchase Initiated');  
        this.sentry.sentryMessage('Purchase Initiated');    
      }, e => {
        debugger;
        console.log('Error Ordering ', e);  
        this.sentry.sentryMessage('Error Ordering ' + JSON.stringify(e));    
      })
    } catch (err) {
      debugger;
      console.log('Error Ordering ' + JSON.stringify(err)); 
      this.sentry.sentryMessage('Error Ordering ' + JSON.stringify(err));           
    }
  }
}