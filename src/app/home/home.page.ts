import { Storage } from '@ionic/storage';
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
  constructor(
    public router: Router,
    private trial: TrialService,
    private storage: StorageService
  ) { }

  async ngOnInit() {
    const profile = await this.storage.GetCurrentUserProfile();
    this.daysleft = await this.trial.GetTrialDaysLeft(profile.email);
  }

  goSubscribe() {
    this.router.navigate(['subscribe']);
  }

  goEdit() {
    this.router.navigate(['edit']);
  }
}
