import { SentryService } from './../sentry.service';
import { StorageService } from './../storage.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  user: any;
  constructor(private auth: AuthService,
    private storage: StorageService,
    private sentry: SentryService
  ) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(async userProfile => {

      if (userProfile && userProfile !== null) {
        this.sentry.sentryMessage('Logged in: ' + JSON.stringify(userProfile));
        this.storage.SaveCurrentUserProfile(userProfile);

        const trialDate = await this.storage.GetTrialStartDate(userProfile.email);
        if (!trialDate) {
          this.storage.SaveTrialStartDate(userProfile.email, new Date());
        }
      }
    }
    );

    this.auth.handleAuthCallback();

  }
}
