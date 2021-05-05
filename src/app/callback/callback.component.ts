import { SentryService } from './../sentry.service';
import { StorageService } from './../storage.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { AuthService } from '../auth.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  user: any;
  constructor(private auth: AuthService,
    private storageService: StorageService,
    private storage: Storage,   
    private sentry: SentryService
  ) { }
  //On Auth Service (PWA) first login, then redirects to this component, here (on the commented code) 
  //we susbcribe to userprofile,
  // in the case that this is our first login there will not be any data on userprofile so it will not save any data
  //after this, it calls handleatuhcallback where it checks log in , emits new event with the logged in user, 
  //subscription receives it and it saves the data to storage, Am I right?
  ngOnInit() {
    async () => {
      // this.auth.userProfile$.subscribe(async userProfile => {

      //   if (userProfile && userProfile !== null) {
      //     this.sentry.sentryMessage('Logged in: ' + JSON.stringify(userProfile));
      //     this.storage.SaveCurrentUserProfile(userProfile);

      //     const trialDate = await this.storage.GetTrialStartDate(userProfile.email);
      //     if (!trialDate) {
      //       this.storage.SaveTrialStartDate(userProfile.email, new Date());
      //     }
      //   }
      // }
      // );


      // this.auth.handleAuthCallback();
      debugger;
      this.storage.get('profile').then(user => this.user = user);
      console.log(this.user);
      if (this.user && this.user !== null) {
        this.sentry.sentryMessage('Logged in: ' + JSON.stringify(this.user));
         await this.storageService.SaveCurrentUserProfile(this.user);

        const trialDate = await this.storageService.GetTrialStartDate(this.user.email);
        if (!trialDate) {
          this.storageService.SaveTrialStartDate(this.user.email, new Date());
        }
      }
    }
  }
}
