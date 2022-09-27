import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {

  userName: string;

  email: string;

  constructor(private modalCtrl: ModalController, 
    private storage: StorageService) { }

  ngOnInit() {
    this.userName = this.storage.userName;
    this.email = this.storage.email;
  }

  public cancel() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  public async saveUserData(){
    await this.storage.saveUserName(this.userName);       
    await this.storage.saveEmail(this.email);   
  }
}
