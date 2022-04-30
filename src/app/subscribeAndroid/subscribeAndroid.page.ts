import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import { Platform } from '@ionic/angular';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';
import { TrialService } from '../services/trial.service';

@Component({
  selector: 'app-subscribeAndroid',
  templateUrl: './subscribeAndroid.page.html',
  styleUrls: ['./subscribeAndroid.page.scss'],
})
export class SubscribeAndroidPage implements OnInit {
  public buttonDisabled: boolean | null = null;
  public subscriptionEndDate: string;
  public autoRenewal: boolean;
  products: IAPProduct[] = [];  
  public showTrialButton = false;
  public hasStartedTrial = false;
  public trialDaysLeft = 0;

  constructor(
  private storage: StorageService,
  private alertController: AlertController,
  private translateService: TranslateService,    
  public platform: Platform,
  private store: InAppPurchase2,
  public subscriptionService : AndroidSubscriptionService,
  private trialService : TrialService
  )   
  {     
    this.store.verbosity = this.store.DEBUG; 
    this.products = this.subscriptionService.getProducts();  
  } 

  async ngOnInit() {   
    await this.ShowTrialButton();    
  } 

  async ShowTrialButton(){
    var user = await this.storage.GetCurrentUserProfile();
    this.hasStartedTrial = await this.trialService.HasStartedTrial(user.sub);
    this.showTrialButton = !(this.subscriptionService.isSubscribed.getValue()) && !this.hasStartedTrial;
    if(this.hasStartedTrial){
      this.trialDaysLeft = await this.trialService.GetTrialDaysLeft(user.sub);
    }
  }

  async StartTrial(){
    var user = await this.storage.GetCurrentUserProfile();
    var trial = await this.trialService.StartTrial(user.sub);

    if(trial.TrialStartDate !== null){
      this.showAlert();
      this.ShowTrialButton();
    }   
  }

  async CheckSubscription(){
      this.subscriptionService.checkSubscription();
  }

  restore() {
    this.subscriptionService.restore();
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

  async purchase(product: IAPProduct) {  
    this.subscriptionService.purchase(product.id);    
  }
}

