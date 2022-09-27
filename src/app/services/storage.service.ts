import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Puddle } from '../spml.service';
import { HttpService } from './httpService.service';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private puddleskey = 'puddles';
  private defaultkey = 'default';
  private uiLanguagekey = 'uiLanguage';
  private firstTimekey = 'firstTime';

  constructor(private storage: Storage, 
    private httpService: HttpService) { 
      this.storage.create();
    }

  async puddlesExists(): Promise<boolean> {
    const puddles = await this.storage.get(this.puddleskey);

    if (puddles) {
      return true;
    } else {
      return false;
    }
  }

  async savePuddle(puddlename: string, result: Puddle): Promise<{name: string, puddlename: string, entries: number }> {
    await this.storage.set(puddlename, result);
    const name = result.puddleInfo.puddleName;
    // Save to list of existing puddles
    await this.savePuddleName(puddlename);
    return { name: name, puddlename: puddlename, entries: result.entries.length };
  }

  private async savePuddleName(puddlename: string): Promise<void> {
    let puddles = await this.storage.get(this.puddleskey);

    if (!puddles) {
      puddles = [];
    }
    if (!puddles.includes(puddlename)) {
      puddles.push(puddlename);
      await this.storage.set(this.puddleskey, puddles);
    }
    return;
  }

  async setDefaultPuddleLoaded(defaultPuddle: boolean): Promise<any> {
    return await this.storage.set(this.defaultkey, defaultPuddle);
  }

  async getDefaultPuddleLoaded(): Promise<string> {
    return await this.storage.get(this.defaultkey);
  }

  async removeDefaultPuddles(): Promise<void> {
    const defaultPuddle = await this.getDefaultPuddleLoaded();
    if (defaultPuddle) {
      await this.removeAllPuddles();
    }
    return;
  }

  async removeAllPuddles() {
    await this.storage.get(this.puddleskey).then(async (puddles: string[]) => {
      if (puddles) {
        puddles.forEach(async (puddle: string) => {
          if (puddle && puddle.startsWith('puddle_')) {
            await this.storage.remove(puddle);
          }
        });
        await this.storage.remove(this.puddleskey);
      }
    });
  }

  saveUILanguage(language: string) {
    this.storage.set(this.uiLanguagekey, language);
  }

  async getUILanguage(): Promise<string> {
    return await this.storage.get(this.uiLanguagekey);
  }

  async getFirstTime(): Promise<boolean> {
    try {
      return await this.storage.get(this.firstTimekey);
    } catch {
      return true;
    }
  }

  async saveFirstTime() {
    await this.storage.set(this.firstTimekey, false);
  }

  async saveUserName(name: string) {
    await this.storage.set('name', name);
  }

  async getUserName(): Promise<string> {
    return await this.storage.get('name');
  }

  async saveEmail(email: string) {
    await this.storage.set('email', email);
  }

  async getEmail(): Promise<string> {
    return await this.storage.get('email');
  }

  Clean(value: string): string {
    if (value) {
      const stripped = value.replace(/[^A-Za-z0-9+-]/g, '');
      return stripped;
    }
    return null;
  }

  Obfuscate(str: string): string {
    let obf1 = '%%' + btoa(str) + '%%';
    const insert = ['!', '"', '#', '$', '%', '&', '(', ')', '*'];
    let count = 0;
    for (let index = 0; index < obf1.length; index++) {
      const element = obf1[index];
      if (index % 5 === 0) {
        count = count > 8 ? 0 : count;
        obf1 = this.InsertChar(obf1, insert[count], index);
      }
    }
    return obf1;
  }

  InsertChar(a: string, b: string, index: number): string {
    return a.substr(0, index) + b + a.substr(index);
  }

}
