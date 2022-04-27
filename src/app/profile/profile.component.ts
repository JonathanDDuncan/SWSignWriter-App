import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { AuthAngularService } from '../services/authAngular.service';
import { AuthServiceMobile } from '../services/auth.service';
import { AuthServiceModel } from '../core/models/authService.model';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public authService: AuthServiceModel; 
  constructor(private authMobile: AuthServiceMobile,    
    public authAngular: AuthAngularService,
    public authSDK: AuthService) { 
    if (Capacitor.isNativePlatform()) {    
      this.authService = authMobile;
    }
    else
      this.authService = authAngular;    
  }

  ngOnInit() {
  }

}
