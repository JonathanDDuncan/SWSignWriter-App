import { Router } from '@angular/router';
import { TrialService } from './trial.service';
import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { InAppPurchase2, IAPProduct } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import { SentryService } from '../sentry.service';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { AuthServiceMobile } from './auth.service';
import { HttpService } from './httpService.service';

@Injectable({
  providedIn: 'root'
})
//Fix auth url
export class AndroidSubscriptionService {

  public isSubscribed = new BehaviorSubject(false);

  public subscriptionType: string;

  constructor(
    private storage: StorageService,
    private trialService: TrialService,
    private store: InAppPurchase2,
    private sentry : SentryService,
    private alertController: AlertController,
    private platform: Platform,   
    private authServiceAndroid: AuthServiceMobile,  
    private httpService: HttpService  
  ) { 

    this.store.verbosity = this.store.DEBUG;
    
    if(Capacitor.isNativePlatform()){      
      this.registerProducts();
      this.configurePurchasing("12345678");  
    }
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
    return isTrial || this.isSubscribed.getValue();
  }

  async registerProducts(){
    this.store.when('product').registered((product: IAPProduct) => {
      this.sentry.sentryMessage('Registered: ' + JSON.stringify(product));
      this.checkSubscription();
    });   
              
    this.store.register({
      id: "12345678",        
      type: this.store.PAID_SUBSCRIPTION
    });             
  }

  async checkSubscription(){  
    console.log("start check");
    var jwt = await this.storage.GetJWTToken(); 
    console.log("get profile");     
    const profile = await this.storage.GetCurrentUserProfile();  

    if(jwt && profile){     
      console.log("issub req");    
      this.httpService.IsUsersSubscribeRequest(jwt, profile, false).subscribe((response) => { 
        console.log("res");          
        this.subscriptionType = response.Type;         
        if(!response.IsSubscribed && this.store.products){
          this.store.products.forEach((product) => {                
            if(product.owned) {
              response.IsSubscribed = true;
              this.subscriptionType = response.Type;
              var transaction = product.transaction as any;
              this.httpService.UserLinkRequest(jwt, profile.sub, transaction.purchaseToken);  
            }              
          })            
        }
        this.isSubscribed.next(response.IsSubscribed);
      })
    }   
    console.log("no jwt");       
  }  

  restore() {
    this.store.refresh();
  }

  subscribe(email: string, endDate: Date) {    
    this.storage.SaveSubscription(email,endDate,false);    
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

  async configurePurchasing(productId: string) {    
    console.log('Starting Configurations');
    this.sentry.sentryMessage("Starting Configuration");

    try {               
      // Handlers
      this.store.when('product').approved(async (product: IAPProduct) => {             
        return product.verify();
      }).verified(async (p) => { 
        p.finish()
        this.showAlert();

        this.isSubscribed.next(true); 
        this.subscriptionType = 'Android';
        var jwt = await this.storage.GetJWTToken();
        var user = await this.storage.GetCurrentUserProfile();
        this.httpService.VerifyUserSubscriptionAndroidRequest(user, p.id, p.transaction.purchaseToken, jwt);        
      });

      this.store.when("product").owned(async (p: IAPProduct) => {
        console.log('Owned' + JSON.stringify(p));
        this.sentry.sentryMessage('Owned' + JSON.stringify(p));    
      });   

      // this.store.when(productId).cancelled((product) => {      
      // });

      this.store.error((err) => {       
        console.log('store_error', err);
        this.sentry.sentryMessage('store_error');
        this.sentry.sentryMessage(JSON.stringify(err));
      });      

      // Errors
      this.store.when(productId).error((error) => {
        console.log('An Error Occured' + JSON.stringify(error));
        this.sentry.sentryMessage('An Error Occured' + JSON.stringify(error));
      });

    } catch (err) {
      console.log('Error On Store Issues' + JSON.stringify(err));
      this.sentry.sentryMessage('Error On Store Issues' + JSON.stringify(err));
    }
    this.store.refresh();       
  }
  
  async purchase(productId: string) {  
    this.store.order(productId).then(()=> this.checkSubscription());
  }
}