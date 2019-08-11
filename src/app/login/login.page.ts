import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
    private storage: StorageService
    ) { }

  async ngOnInit() {
    this.auth.localAuthSetup();

    const currentUserProfile = await this.storage.GetCurrentUserProfile();

    if (!currentUserProfile) {
      this.auth.login();
    } else {
      this.router.navigate(['/subscribe']);
    }
  }

}
