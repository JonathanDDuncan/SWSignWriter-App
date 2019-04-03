import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Puddle } from './spml.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  async puddlesExists(): Promise<boolean> {
    const puddles = await this.storage.get('puddles');

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
    this.storage.get('puddles').then(puddles => {
      if (!puddles) {
        puddles = [];
      }
      if (!puddles.includes(puddlename)) {
        puddles.push(puddlename);
        this.storage.set('puddles', puddles);
      }
    });
  }
}
