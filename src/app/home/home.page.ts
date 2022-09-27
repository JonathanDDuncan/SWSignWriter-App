import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { UserFormPage } from '../user-form/user-form.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public showBackdrop = false;

  constructor(
    public router: Router,
    public loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {  
    SplashScreen.hide(); 
  
      this.openModal();  

    
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

  async openModal() {
    console.log('hi');   
      const modal = await this.modalCtrl.create({
        component: UserFormPage,
        cssClass: 'small-modal',
      });
      this.showBackdrop = true;
      modal.present();  
  

        // Remove backdrop when dismissed
        const { data } = await modal.onWillDismiss();
        this.showBackdrop = !data.dismissed;
    
  }
}
