import { SentryService } from './../sentry.service';
import { StorageService } from './../storage.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private auth: AuthService,
    private storage: StorageService,
    private sentry: SentryService
  ) { }

  ngOnInit() {
    this.storage.SaveCurrentUserProfile(null);
    const userProfile = this.storage.GetCurrentUserProfile();
    this.sentry.sentryMessage('Logged out: ' + JSON.stringify(userProfile));
    this.auth.logout();
  }

}
