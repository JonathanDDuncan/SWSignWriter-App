import { TrialService } from './../services/trial.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public daysleft: number;
  public subscribed: boolean;
  constructor(
    public auth: AuthService,
    private router: Router,
    private trial: TrialService,
    private storage: StorageService
  ) { }

  async ngOnInit() {
    this.auth.localAuthSetup();

    const currentUserProfile = await this.storage.GetCurrentUserProfile();

    debugger;
    if (!currentUserProfile || currentUserProfile == null) {
      this.auth.login();
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
