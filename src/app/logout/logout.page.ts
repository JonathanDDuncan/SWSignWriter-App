import { SentryService } from './../sentry.service';
import { StorageService } from './../storage.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceMobile } from '../services/auth.service';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { AuthAngularService } from '../services/authAngular.service';
import { AuthServiceModel } from '../core/models/authService.model';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  private authService: AuthServiceModel;
  private unsubscribe = new Subject();

  constructor(
    private storage: StorageService,
    private sentry: SentryService,
    private authMobile: AuthServiceMobile,
    public platform: Platform,
    public authAngular: AuthAngularService,
    private router: Router
  ) {   
      if (Capacitor.isNativePlatform()) {    
        this.authService = authMobile;
      }
      else
        this.authService = authAngular;    
   }

  ngOnInit() {
    this.authService.isLoggedIn.pipe(takeUntil(this.unsubscribe)).subscribe((loggedIn) => {
      if(!loggedIn) {
        this.unsubscribe.complete();
        this.router.navigate(['/home']);        
      }
    });
    
    this.authService.logout();
  }

}
