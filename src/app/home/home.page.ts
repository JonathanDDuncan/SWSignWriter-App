import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { LoadingController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
public loggedin: boolean = false;
public isSubscribedTrial: boolean = false;

  constructor(
    public router: Router,
    private storage: StorageService,   
    public loadingCtrl: LoadingController 
  ) {}

  async ngOnInit() {  
    SplashScreen.hide(); 
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }

  goPolicy() {
    this.router.navigate(['/policy']);
  }

  goContinue() {
    this.router.navigate(['/edit']);
  }

  goSubscribe() {
    this.router.navigate(['/subscribe']);
  }
}
