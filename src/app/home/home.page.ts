import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { AuthAngularService } from '../services/authAngular.service';
import { AuthServiceMobile } from '../services/auth.service';
import { Capacitor } from '@capacitor/core';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';
import { SubscriptionService } from '../services/subscription.service';
import { LoadingController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { AuthServiceModel } from '../core/models/authService.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
public loggedin: boolean = false;
public isSubscribedTrial: boolean = false;
private subscriptionService;
private authServiceLocal: AuthServiceModel;

  constructor(
    public router: Router,
    private storage: StorageService,   
    private subscriptionServiceAndroid: AndroidSubscriptionService,
    private subscriptionServiceNG: SubscriptionService,
    private authServiceAndroid : AuthServiceMobile,
    private authServiceNG : AuthAngularService,
    public loadingCtrl: LoadingController 
  ) { 


    //this.subService.GetIAPSubscription();
    if(Capacitor.isNativePlatform()){
      this.subscriptionService = subscriptionServiceAndroid;
      this.authServiceLocal = authServiceAndroid;
    }
    else {
    this.subscriptionService = subscriptionServiceNG;
    this.authServiceLocal = authServiceNG;
    }

  }

  async ngOnInit() {   
    this.authServiceLocal.isLoggedIn.subscribe((loggedin) => this.loggedin = loggedin);
        
    var user = await this.storage.GetCurrentUserProfile();
    if(user && user !== null)
    setTimeout(async () => {
      this.isSubscribedTrial = await this.subscriptionService.IsSubscribedOrTrial(user.sub);    
    }, 5000);
      

    SplashScreen.hide();
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }

  goPolicy() {
    this.router.navigate(['/policy']);
  }

  goContinue() {
    this.router.navigate(['/edit']);
  }

  goSubscribe() {
    this.router.navigate(['/subscribe']);
  }
}
