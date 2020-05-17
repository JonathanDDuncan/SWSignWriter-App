import { TrialService } from './../services/trial.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public daysleft: number;
  public subscribed: boolean;
  constructor(
    public router: Router,
    private trial: TrialService,
    private storage: StorageService
  ) { }

  async ngOnInit() {
    const profile = await this.storage.GetCurrentUserProfile();
    if (!profile || profile === null) {
      this.router.navigate(['/login']);
    }
    this.daysleft = await this.trial.GetTrialDaysLeft(profile.email);

    const subscription = await this.storage.GetSubscription(profile.email);
    this.subscribed = false;
    if (subscription) {
      if (new Date(subscription.endDate)  > new Date()) {
        this.subscribed = true;
      }
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
