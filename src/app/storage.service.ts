import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Puddle } from './spml.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private puddleskey = 'puddles';
  private defaultkey = 'default';
  constructor(private storage: Storage) { }

  async puddlesExists(): Promise<boolean> {
    const puddles = await this.storage.get(this.puddleskey);

    if (puddles) {
      return true;
    } else {
      return false;
    }
  }

  savePuddle(puddlename: string, result: Puddle) {
    this.storage.set(puddlename, result);
    alert(result.entries.length + ' entries saved. To ' + puddlename);
    // Save to list of existing puddles
    this.savePuddleName(puddlename);
  }

  private savePuddleName(puddlename: string) {
    this.storage.get(this.puddleskey).then(puddles => {
      if (!puddles) {
        puddles = [];
      }
      if (!puddles.includes(puddlename)) {
        puddles.push(puddlename);
        this.storage.set(this.puddleskey, puddles);
      }
    });
  }

  setDefaultPuddleLoaded(defaultPuddle: boolean): void {
    this.storage.set(this.defaultkey, defaultPuddle);
  }

  async getDefaultPuddleLoaded(): Promise<boolean> {
    return await this.storage.get(this.defaultkey);
  }

  async removeDefaultPuddles(): Promise<void> {
    const defaultPuddle = await this.getDefaultPuddleLoaded();
    if (defaultPuddle) {
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
    return;
  }
}
