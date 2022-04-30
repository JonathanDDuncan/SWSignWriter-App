import { AuthServiceMobile } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { AuthAngularService } from '../services/authAngular.service';
import { SubscriptionService } from '../services/subscription.service';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';
import { AuthService } from '@auth0/auth0-angular';
import { AuthServiceModel } from '../core/models/authService.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public authService: AuthServiceModel;
  public daysleft: number;
  public subService;
  public subscribed: boolean;
  constructor(
    private router: Router,    
    public authMobile: AuthServiceMobile,
    public authAngular: AuthAngularService,
    public subscriptionServiceNG: SubscriptionService,
    public subscriptionServiceAndroid: AndroidSubscriptionService,
    public authServiceMain : AuthService
  ) 
  {    
    if (Capacitor.isNativePlatform()) {    
      this.authService = authMobile;
      this.subService = subscriptionServiceAndroid
    }
    else
    {
      this.authService = authAngular;    
      this.subService = subscriptionServiceNG;
    }
  }

  async ngOnInit() { 
    var loggedIn = this.authService.isLoggedIn.getValue(); 
    if (!loggedIn) {
      this.authService.login();
    }   
  }

  goSettings() {
    this.router.navigate(['settings']);
  }

  goSubscribe() {
    this.router.navigate(['subscribe']);
  }

  goEdit() {
    this.router.navigate(['edit']);
  }
}
