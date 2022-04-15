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
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Capacitor } from '@capacitor/core';
import { Observable } from 'rxjs';
import { AuthServiceMobile } from './auth.service';


@Injectable({
  providedIn: 'root'
})
//Fix auth url
export class AndroidSubscriptionService {
  //public isSubscribed = new BehaviorSubject(false); 

  private profile: UserProfile;
  private serverUrl = "https://swsignwriterapi.azurewebsites.net/";
  public isSubscribed = new BehaviorSubject(false);

  constructor(
    private storage: StorageService,
    private trialService: TrialService,
    private router: Router,
    private store: InAppPurchase2,
    private sentry : SentryService,
    //private ref: ChangeDetectorRef,
    private alertController: AlertController,
    public platform: Platform,
    private http: HttpClient,
    private authServiceAndroid: AuthServiceMobile
  ) { 

    this.store.verbosity = this.store.DEBUG;
    // debugger;
    if(Capacitor.isNativePlatform()){
      
      this.registerProducts();
      this.configurePurchasing("12345678");  
      // setTimeout(() => this.checkSubscription(), 5000);       
      this.checkSubscription();
      
    }
    
    // this.sentry.sentryMessage("Configure Purchase");
    // console.log("Configure Purchase");
    // debugger;
    

    // this.store.ready(() => {
    //   debugger;               
    //   console.log('Store is Ready');
    //   this.sentry.sentryMessage('Store is Ready');        
        
    //   //this.products = this.store.products;
    //   //this.ref.detectChanges();
    // });   


   
    //platform.ready().then(() => {
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
      
    }

    //this.router.navigate(['/subscribe']);
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

  async IsSubscribedOrTrial (sub: string): Promise<boolean> {
    const isTrial = await this.trialService.GetTrialDaysLeft(sub) > 0;
    //const isSubscribed = await this.GetSubscriptionDaysLeft(email) > 0;

    //const isSubscribedOrTrial = isTrial || this.isSubscribed;
    //if(isSubscribed)
   return isTrial || this.isSubscribed.getValue();
  }

  saveSubscriptionDB(){
      
  }

  async registerProducts(){
    debugger;
        this.store.when('product').registered((product: IAPProduct) => {
          console.log('Registered: ' + JSON.stringify(product));
          this.sentry.sentryMessage('Registered: ' + JSON.stringify(product));
          this.checkSubscription();
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

  async checkSubscription(){
    debugger;
    var isLoggedIn = this.authServiceAndroid.isLoggedIn.getValue();
    var jwt = await this.storage.GetJWTToken();  
    // console.log('loggedIn sub', isLoggedIn);     
    // if(isLoggedIn) {
       const profile = await this.storage.GetCurrentUserProfile();
    //   this.store.products.forEach((product) => {  
    //     console.log('product owned', product.owned);
    //     debugger;      
    //     if(product.owned) {
                 
    //     }
    //   })

            
        this.IsUsersSubscribeRequest(jwt, profile).subscribe((response) => {
          if(!response.IsSubscribed){
            this.store.products.forEach((product) => {  
              console.log('product owned', product.owned);
              debugger;      
              if(product.owned) {
                response.IsSubscribed = true;
                var transaction = product.transaction as any;
                this.UserLinkRequest(jwt, profile.sub, transaction.purchaseToken);  
              }
              
            })
            
          }
          this.isSubscribed.next(response.IsSubscribed);
        })
           
    //};
  }

  IsUsersSubscribeRequest( jwt: string, user: UserProfile ): Observable<IsUserSubscribedResponse>{   

    const options = {
      headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt),
      params: new HttpParams().append('sub', user.sub).append('checkAndroid', 'false')
    }     
    
    return this.http.post<IsUserSubscribedResponse>(this.serverUrl + 'api/Users/IsUserSubscribed', { }, options);
  }

  UserLinkRequest( jwt: string, sub: string, purchaseToken: string ): Observable<IsUserSubscribedResponse>{   

    const options = {
      headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt),
      params: new HttpParams().append('sub', sub).append('purchaseToken', purchaseToken)
    }     
    
    return this.http.post<IsUserSubscribedResponse>(this.serverUrl + 'api/Users/CheckUserLinkedToAndroidSubscription', { }, options);
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

  async configurePurchasing(productId: string) {    
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
      this.store.when('product').approved(async (product: IAPProduct) => {
        console.log(product.transaction);
        this.sentry.sentryMessage(product.transaction);
        debugger;
        var transaction = product.transaction as any;

        // var token = await this.storage.GetJWTToken();
        // var user = await this.stora
        // const options = {
        //   headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json'),          
        // }        
        // var requestBody = { "email":  };
        // this.http.post(this.serverUrl + 'api/Users/SaveUser', { }, options)
        // .subscribe(response => console.log('response', response));    
      


        //this.http.get(`https://androidpublisher.googleapis.com/androidpublisher/v3/applications/pro.jonathanduncan.swsignwriter/purchases/subscriptions/${transaction.id}/tokens/${transaction.purchaseToken}`).subscribe(response => { debugger; console.log('response', response);});

        // Purchase was approved
        console.log('purchase_approved', /*{programId: this.program._id}*/);
        this.sentry.sentryMessage('purchase_approved');
        //product.finish();       
        return product.verify();
        //this.subscribe(this.profile.email, subscriptionEndDate);        
      }).verified((p) => { 
        p.finish()
        this.sentry.sentryMessage('finished pa');
        this.showAlert();
        console.log(this.profile);
        debugger;
        this.isSubscribed.next(true); 
        //this.subscribe(this.profile.email, moment().add(1, "month").toDate());        
      });

      this.store.when("product").owned(async (p: IAPProduct) => {
        debugger;
        console.log('Owned' + JSON.stringify(p));
        this.sentry.sentryMessage('Owned' + JSON.stringify(p));
      //   var jwt = await this.storage.GetJWTToken(); 
   
      //  const profile = await this.storage.GetCurrentUserProfile();
      //   this.isSubscribed.next(true);        
      //     var transaction = p.transaction as any;
      //     console.log('transaction', transaction);
      //     this.UserLinkRequest(jwt, profile.sub, transaction.purchaseToken);  
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
    //this.checkSubscription();   
  }
  
  async purchase(productId: string) {  
     debugger;

     this.store.order(productId).then(()=> this.checkSubscription());
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

interface IsUserSubscribedResponse {
  Sub: string;
  IsSubscribed: boolean;
  Type: string; 
}