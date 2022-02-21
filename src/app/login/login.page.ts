import { TrialService } from './../services/trial.service';
import { AuthServiceMobile } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Capacitor } from '@capacitor/core';
import { AuthAngularService } from '../services/authAngular.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public authService;
  public daysleft: number;
  public subscribed: boolean;
  constructor(
    private router: Router,
    private trial: TrialService,
    private storage: StorageService,
    public authMobile: AuthServiceMobile,
    public authAngular: AuthAngularService,
  ) 
  {    
    if (Capacitor.isNativePlatform()) {    
      this.authService = authMobile;
    }
    else
      this.authService = authAngular;    
  }

  async ngOnInit() { 
    const currentUserProfile = await this.storage.GetCurrentUserProfile();

    if (!currentUserProfile || currentUserProfile == null) {
      await this.authService.login();
    }
    
    try {    
      this.daysleft = await this.trial.GetTrialDaysLeft(currentUserProfile.email);
    } catch { }
    
    let subscription;
    try {
      subscription = await this.storage.GetSubscription(currentUserProfile.email);
    } catch { }

    this.subscribed = false;
    if (subscription && new Date(subscription.endDate) >= new Date()) {
      this.subscribed = true;
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
