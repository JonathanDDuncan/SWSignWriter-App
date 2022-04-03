import { SubscriptionService } from './../services/subscription.service';
import { Component, OnInit } from '@angular/core';
import {
  NgxFileDropEntry, 
  FileSystemFileEntry, 
  FileSystemDirectoryEntry
} from 'ngx-file-drop';
import { Router } from '@angular/router';

import { SettingsService } from '../settings.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Capacitor } from '@capacitor/core';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  public UILanguage: string;
  public puddleID: string;
  public spmldropExpanded: boolean;
  public loading: HTMLIonLoadingElement;
  public installedPuddles: Array<string>;
  public files: NgxFileDropEntry[] = [];
  private serverUrl = "https://swsignwriterapi.azurewebsites.net/";
  public subscriptionService

  constructor(private settingsService: SettingsService,
    private alertController: AlertController,
    private translate: TranslateService,
    public toastController: ToastController,
    private translateService: TranslateService,
    private subscriptionServiceNG: SubscriptionService,
    private subscriptionServiceAndroid: AndroidSubscriptionService,
    public loadingController: LoadingController,
    private router: Router,
    private http: HttpClient) {
    this.spmldropExpanded = false;

    if (Capacitor.isNativePlatform()) {    
      this.subscriptionService = subscriptionServiceAndroid;
    }
    else
      this.subscriptionService = subscriptionServiceNG;   
  }

  installedPuddlesNames() {

  }

  upload(event) {
    const file = event.target.files[0];
    this.settingsService.loadFile(file);
  }

  next() {
    return this.router.navigateByUrl('/edit');
  }

  async ngOnInit() {
    this.subscriptionService.CanUse();
    this.UILanguage = await this.currentUILanguage();
    this.settingsService.setFirstTime();
    this.installedPuddlesNames();
  }

  dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file(async (file: File) => {
          if (droppedFile && droppedFile.relativePath && droppedFile.relativePath.toLowerCase().endsWith('.spml')) {
            await this.presentLoading();
            await this.settingsService.loadFile(file);
          }
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  async fileOver(event) {
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
    await this.presentLoading();
    this.xhrDownloadPuddle();
  }

  private xhrDownloadPuddle() {
    try {
      let puddle = 0;
    puddle = parseInt(this.puddleID, 10);
    if (isNaN(puddle)) {
      puddle = 4;
    }
      const options = {        
        params: new HttpParams().append('UI', "1").append("sign", puddle.toString())
      }        

    this.http.post(this.serverUrl + 'api/Puddle/GetPuddle', { }, options)
    .subscribe(async response => { 
      console.log('response', response);
      try {
        await this.settingsService.loadPuddle(response.toString());
        await this.signsLoaded();
      } catch (error) {
        console.log(error);
      }
    });     
  } catch (error) {
    console.log(error);
  }
  }

  async signsLoaded() {
    await this.loading.dismiss();
  }

  onPuddleChange(event) {
    this.puddleID = event.detail.value;
    this.downloadPuddle();
  }

  async showToast(message, duration) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  expandItem() {
    this.spmldropExpanded = !this.spmldropExpanded;
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      backdropDismiss: false
    });
    this.loading.present();
    // const { role, data } = await this.loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}
