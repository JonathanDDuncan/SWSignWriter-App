import { SentryService } from './../sentry.service';
import { StripeService } from './../stripe.service';
import { StorageService } from './../storage.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { AuthAngularService } from '../services/authAngular.service';
import { AuthService, IdToken } from '@auth0/auth0-angular';
import { UserProfile } from '../user/user-profile';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit { 
  user: any;
  constructor(private auth: AuthService,
    private storage: StorageService,
    private sentry: SentryService,
    private auth0: AuthAngularService){      
     }
    

  ngOnInit() {
    const tokenClaim = this.auth.idTokenClaims$.subscribe(async user => {      
      if(user != null){
        this.sentry.sentryMessage('Logged in: ' + JSON.stringify(user));
        var userProfile = this.convertTokenToUserProfile(user);
        this.storage.SaveCurrentUserProfile(user);
      

        this.storage.GetTrialStartDate(userProfile.email).then(trialDate => {
          if (!trialDate) {
            this.storage.SaveTrialStartDate(userProfile.email, new Date());
          }
        });
      }
    });    
  }  

  convertTokenToUserProfile (token : IdToken): UserProfile {
    return {
      email: token.email,
      email_verified: token.email_verified,
      family_name: token.family_name,
      given_name: token.given_name,
      locale: token.locale,
      name: token.name,
      nickname: token.nickname,
      picture: token.picture,
      sub: token.sub,
      updated_at: token.updated_at
    }
  }
}
