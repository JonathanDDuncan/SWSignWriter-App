import { StorageService } from './../storage.service';
import { Component, OnInit } from '@angular/core';
import {
  UploadEvent,
  FileSystemFileEntry,
  FileSystemDirectoryEntry
} from 'ngx-file-drop';
import { Router } from '@angular/router';

import { SettingsService } from '../settings.service';
import { AlertController } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  public UILanguage: string;
  public puddleID: string;
  
  constructor(private settingsService: SettingsService,
    private alertController: AlertController,
    private translate: TranslateService,
    public toastController: ToastController,
    private translateService: TranslateService,
    private http: HttpClient,
    private router: Router) { }

  upload(event) {
    const file = event.target.files[0];
    this.settingsService.loadFile(file);
  }

  next() {
    return this.router.navigateByUrl('/edit');
  }

  async ngOnInit() {
    this.UILanguage = await this.currentUILanguage();
    this.settingsService.setFirstTime();
  }

  dropped(event: UploadEvent) {
    const files = event.files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (droppedFile.relativePath.toLowerCase().endsWith('.spml')) {
            this.settingsService.loadFile(file);
          }
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  fileOver(event) {
    // console.log(event);
  }

  fileLeave(event) {
    // console.log(event);
  }

  async clearSigns() {
    const alert = await this.alertController.create({
      header: this.translate.instant('Clear Signs!'),
      message: this.translate.instant('Do you <strong>really</strong> want to delete all the signs!!!'),
      buttons: [
        {
          text: this.translate.instant('No'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
          }
        }, {
          text: this.translate.instant('Yes'),
          handler: () => {
            this.settingsService.removeAllSigns();
          }
        }
      ]
    });

    await alert.present();
  }

  onLanguageChange(event) {
    this.settingsService.setUILanguage(event.detail.value);
    this.UILanguage = event.detail.value;
  }

  async currentUILanguage(): Promise<string> {
    const language = await this.settingsService.getUILanguage();
    return language ? language : 'en';
  }

  async downloadPuddle() {
    await this.showToast(this.translateService.instant('Downloading'), 3000);
    await this.showToast(this.translateService.instant('This may take a few minutes'), 3000);
    this.xhrDownloadPuddle();
  }

  private xhrDownloadPuddle() {
    const data = 'action=Download&ex_source=All';
    let puddle = 0;
     puddle = parseInt(this.puddleID, 10);
    if (isNaN(puddle)) {
      puddle = 4;
    }
    const url = 'https://cors-anywhere.herokuapp.com/http://www.signbank.org/signpuddle2.0/export.php?ui=1&sgn=' + puddle.toString();
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    const thispage = this;
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        thispage.settingsService.loadPuddle(this.responseText);
      }
    });
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/xml');
    xhr.send(data);
  }

  onPuddleChange(event) {
    this.puddleID = event.detail.value;
  }

  async showToast(message, duration) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
}
