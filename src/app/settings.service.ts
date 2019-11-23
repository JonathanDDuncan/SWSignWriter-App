import { SignsLookupService } from './signs-lookup.service';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

import { UploadFile } from 'ngx-file-drop';
import { SpmlService, Puddle } from './spml.service';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

    public files: UploadFile[] = [];
  data: string;

  constructor(private spmlService: SpmlService,
    private storageService: StorageService,
    private signsLookupService: SignsLookupService,
    public toastController: ToastController,
    private translateService: TranslateService,
    private http: HttpClient) { }

  async loadDefaultPuddles() {
    const puddlesExists = await this.storageService.puddlesExists();
    if (!puddlesExists) {
      const filename = 'assets/spml/' + 'sgn2000.spml';

      return this.http.get(filename, { responseType: 'text' })
        .subscribe(async xml => {
          const saveresult = await this.saveSpml(xml);
          await this.presentToast(saveresult);
          this.signsLookupService.loadSigns();
          this.storageService.setDefaultPuddleLoaded(true);
        });
    }
  }

  async loadFile(file: File) {
    const defaultLoaded: string = await this.storageService.getDefaultPuddleLoaded();
    if (defaultLoaded) {
      await this.storageService.removeDefaultPuddles();
    }

    this.readFile(file);
  }

  private readFile(file: File) {
    const reader = new FileReader();
    reader.onload = async () => {
      const xml: string | ArrayBuffer = reader.result as string;
      await this.loadPuddle(xml);
    };
    reader.readAsText(file);
  }

  async loadPuddle(xml: string) {
    const saveresult = await this.saveSpml(xml);
    await this.presentToast(saveresult);
    this.signsLookupService.loadSigns();
    this.storageService.setDefaultPuddleLoaded(false);
  }

  async saveSpml(spml: string): Promise<{ puddlename: string, entries: number }> {
    const result: Puddle = this.spmlService.convertspml(spml);
    const puddlename = 'puddle_' + result.puddleInfo.puddle;

    // Save spml
    const saveresult = await this.storageService.savePuddle(puddlename, result);
    return saveresult;
  }

  async presentToast(saved: { puddlename: string, entries: number }) {
    const toast = await this.toastController.create({
      message: saved.entries + this.translateService.instant('entries saved To') + saved.puddlename,
      duration: 2000
    });
    toast.present();
  }

  async removeAllSigns() {
    await this.storageService.removeAllPuddles();
    this.signsLookupService.loadSigns();
  }

  setUILanguage(language: string) {
    this.translateService.use(language);
    this.storageService.saveUILanguage(language);
  }
  async getUILanguage(): Promise<string> {
    return await this.storageService.getUILanguage();
  }

  setFirstTime() {
    this.storageService.saveFirstTime();
  }

  async getFirstTime() {
    return await this.storageService.getFirstTime();
  }
}
