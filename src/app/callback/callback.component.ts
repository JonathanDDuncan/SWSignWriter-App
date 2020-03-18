import { StripeService } from './../stripe.service';
import { StorageService } from './../storage.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService,
    private storage: StorageService,
    private stripeService: StripeService
    ) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(async userProfile => {

      if (userProfile) {
        this.storage.SaveCurrentUserProfile(userProfile);
        this.stripeService.GetandSaveStripeSubscriptionData(userProfile.email);
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
