import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { AuthAngularService } from '../services/authAngular.service';
import { AuthServiceMobile } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  authService;
  constructor(private authMobile: AuthServiceMobile,    
    public authAngular: AuthAngularService) { 
    if (Capacitor.isNativePlatform()) {    
      this.authService = authMobile;
    }
    else
      this.authService = authAngular;    
  }

  ngOnInit() {
  }

}
