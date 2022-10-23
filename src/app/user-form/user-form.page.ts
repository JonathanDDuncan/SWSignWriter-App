import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogService } from '../services/log.service';
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
    private storage: StorageService,
    private logService: LogService) { }

  ngOnInit() {
    this.userName = this.storage.userName;
    this.email = this.storage.email;
  }

  public cancel() {
    this.logService.AddLog('App Started');
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  public async saveUserData(){
    await this.storage.saveUserName(this.userName);       
    await this.storage.saveEmail(this.email);  
    this.cancel();
  }
}
