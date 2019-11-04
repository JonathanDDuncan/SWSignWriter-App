import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Puddle } from './spml.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private puddleskey = 'puddles';
  private defaultkey = 'default';
  private uiLanguagekey = 'uiLanguage';
  private firstTimekey = 'firstTime';
  constructor(private storage: Storage) { }

  async puddlesExists(): Promise<boolean> {
    const puddles = await this.storage.get(this.puddleskey);

    if (puddles) {
      return true;
    } else {
      return false;
    }
  }

  async savePuddle(puddlename: string, result: Puddle): Promise<{ puddlename: string, entries: number }> {
    await this.storage.set(puddlename, result);

    // Save to list of existing puddles
    await this.savePuddleName(puddlename);
    return { puddlename: puddlename, entries: result.entries.length };
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

  setDefaultPuddleLoaded(defaultPuddle: boolean): void {
    this.storage.set(this.defaultkey, defaultPuddle);
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
}
