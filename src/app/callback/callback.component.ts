import { SentryService } from './../sentry.service';
import { StorageService } from './../storage.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { AuthAngularService } from '../services/authAngular.service';
import { AuthService, IdToken } from '@auth0/auth0-angular';
import { UserProfile } from '../user/user-profile';
import { SubscriptionService } from '../services/subscription.service';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';
import { Capacitor } from '@capacitor/core';
import { AuthServiceMobile } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit { 
  user: any;
  public subService;
  public authLocalService;
  constructor(private auth: AuthService,
    private storage: StorageService,
    private sentry: SentryService,
    private authNG: AuthAngularService,
    private authMobile : AuthServiceMobile,
    private router: Router,
    private subscriptionServiceNG: SubscriptionService,
    private subscriptonServiceAndroid: AndroidSubscriptionService){   
      if (Capacitor.isNativePlatform())   
      { 
        this.subService = subscriptonServiceAndroid;  
        this.authLocalService = authMobile
      }
      else{
        this.subService = subscriptionServiceNG;     
        this.authLocalService = authNG;
      }
     }
    

  ngOnInit() {      
    this.auth.isAuthenticated$.subscribe((loggedIn) =>{
      if(loggedIn) this.router.navigate(['/home']);       
    });     
    const tokenClaim = this.auth.idTokenClaims$.subscribe(async user => {      
      if(user != null){      
        var userProfile = this.convertTokenToUserProfile(user);
        this.storage.SaveCurrentUserProfile(user);
        this.storage.SaveJWTToken(user.__raw);             
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
