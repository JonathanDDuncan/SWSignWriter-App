import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
//import { SubscriptionService } from '../services/subscription.service'; 
import { AuthAngularService } from '../services/authAngular.service';
import { AuthServiceMobile } from '../services/auth.service';
import { Capacitor } from '@capacitor/core';
import { AuthService } from '@auth0/auth0-angular';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
public loggedin: boolean = false;
public isSubscribedTrial: boolean = false;
//private authService;
  constructor(
    //private subService : SubscriptionService,
    public router: Router,
    private storage: StorageService,
    private auth: AuthAngularService,
    private authMobile: AuthServiceMobile,
    private authService: AuthService,
    private subscriptionService: AndroidSubscriptionService
  ) { 
    //this.subService.GetIAPSubscription();
    // if(Capacitor.isNativePlatform())
    //   this.authService = authMobile;
    // else
    //   this.authService = auth;

  }

  async ngOnInit() {
    // const profile = await this.storage.GetCurrentUserProfile();
    // this.loggedin = (!profile || profile === null);
    // if (!this.loggedin) {
    //   this.router.navigate(['/login']);
    // }
    this.authService.isAuthenticated$.subscribe((loggedin) => this.loggedin = loggedin);

    var user = await this.storage.GetCurrentUserProfile();
    if(user && user !== null)
      this.isSubscribedTrial = await this.subscriptionService.IsSubscribedOrTrial(user.sub);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }

  goContinue() {
    this.router.navigate(['/edit']);
  }

  goSubscribe() {
    this.router.navigate(['/subscribe']);
  }
}
