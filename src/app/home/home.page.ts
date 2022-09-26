import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { LoadingController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public router: Router,
    public loadingCtrl: LoadingController 
  ) {}

  async ngOnInit() {  
    SplashScreen.hide(); 
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
}
