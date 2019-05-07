import { Component, OnInit } from '@angular/core';
import {
  UploadEvent,
  FileSystemFileEntry,
  FileSystemDirectoryEntry
} from 'ngx-file-drop';

import { SettingsService } from '../settings.service';
import { AlertController } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  public UILanguage: string;

  constructor(private settingsService: SettingsService,
    private alertController: AlertController,
    private translate: TranslateService) { }

  upload(event) {
    const file = event.target.files[0];
    this.settingsService.loadFile(file);
  }

  async ngOnInit() {
    this.UILanguage = await this.currentUILanguage()
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
    return await this.settingsService.getUILanguage();
  }
}

