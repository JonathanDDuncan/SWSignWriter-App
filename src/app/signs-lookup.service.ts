import { Injectable } from '@angular/core';
import { NormalizationService } from './normalization.service';
import { Storage } from '@ionic/storage';

export interface Sign {
  sign: string;
  key: string;
  fsw: string;
  gloss: string;
  normalized: string;
}

export interface FoundSign {
  sign: Sign;
  text: string;
  id: string;
  svg: string;
  totalmatches: number;
  color: string;
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
    this.loadSigns();
  }

  loadSigns() {
    this.entrylist = [];
    this.storage.get('puddles').then(puddles => {
      if (puddles) {
        puddles.forEach(puddle => {
          this.storage.get(puddle).then(puddleentries => {
            puddleentries.entries.forEach(entry => {
              entry.glosses.forEach(gloss => {
                this.entrylist.push({
                  normalized: this.normalize.normalizeForSearch(gloss),
                  gloss: gloss,
                  key: entry.key,
                  fsw: entry.fsw
                });
              });
            });
          });
        });
      }
    });
  }

  search(text: string): Sign[] {
    const max = 25;
    const result = [];
    let count = 0;
    const searchtext = this.normalize.normalizeForSearch(text.trim());
    if (this.entrylist) {
      for (let i = 0; i < this.entrylist.length; i++) {
        const entry = this.entrylist[i];

        if (searchtext.length > 2) {
          if (entry.normalized.includes(searchtext)) {
            result.push(entry);
            count++;
          }
        } else if (searchtext.length > 0) {
          if (entry.normalized === searchtext || entry.normalized.startsWith(searchtext + '-')) {
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

  private arrayUnique(arr: Sign[]): Sign[] {
    const existingkeys = [];
    const keep: Sign[] = [];
    arr.forEach(element => {
      if (!existingkeys.includes(element.key)) {
        existingkeys.push(element.key);
        keep.push(element);
      }
    });
    return keep;
  }

  getsign(key: string) {
    return this.entrylist.find(entry => entry.key === key);
  }
}
