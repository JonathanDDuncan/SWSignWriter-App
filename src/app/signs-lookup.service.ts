import { Injectable } from '@angular/core';
import { NormalizationService } from './normalization.service';
import { Storage } from '@ionic/storage';

interface EditResult {
  sign: string;
  key: string;
  fsw: string;
  gloss: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignsLookupService {
  private entrylist: any[];

  constructor(
    private storage: Storage,
    private normalize: NormalizationService
  ) {
    this.makelist();
  }

  search(text: string): EditResult[] {
    const max = 25;
    const result = [];
    let count = 0;
    const searchtext = this.normalize.normalizeForSearch(text.trim());
    if (this.entrylist) {
      for (let i = 0; i < this.entrylist.length; i++) {
        const entry = this.entrylist[i];

        if (searchtext.length > 2) {
          if (entry.index.includes(searchtext)) {
            result.push(entry);
            count++;
          }
        } else if (searchtext.length > 0) {
          if (entry.index === searchtext) {
            result.push(entry);
            count++;
          }
        }
        // limit to max entries
        if (count >= max) {
          break;
        }
      }
    }

    return this.arrayUnique(result);
  }

  arrayUnique(arr: EditResult[]): EditResult[] {
    const existingkeys = [];
    const keep: {
      fsw: string;
      key: string;
      gloss: string;
      sign: string;
    }[] = [];
    arr.forEach(element => {
      if (!existingkeys.includes(element.key)) {
        existingkeys.push(element.key);
        keep.push(element);
      }
    });
    return keep;
  }

  makelist() {
    this.entrylist = [];
    this.storage.get('puddles').then(puddles => {
      puddles.forEach(puddle => {
        this.storage.get(puddle).then(puddleentries => {
          puddleentries.entries.forEach(entry => {
            entry.glosses.forEach(gloss => {
              this.entrylist.push({
                index: this.normalize.normalizeForSearch(gloss),
                gloss: gloss,
                key: entry.key,
                fsw: entry.fsw
              });
            });
          });
        });
      });
    });
  }

  getsign(key: string) {
    return this.entrylist.find(entry => entry.key === key);
  }
}
