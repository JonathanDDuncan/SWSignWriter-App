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
  lane: Lane;
}

export enum Lane {
  Left,
  Middle,
  Right
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
    let result = [];
    const substring = [];
    let count = 0;
    let substringcount = 0;
    const text1 = text ? text.trim() : '';
    const searchtext = this.normalize.normalizeForSearch(text1);
    if (this.entrylist) {
      for (let i = 0; i < this.entrylist.length; i++) {
        const entry = this.entrylist[i];

        if (searchtext.length > 2) {
          if (entry.normalized.startsWith(searchtext)) {
            result.push(entry);
            count++;
          } else if (entry.normalized.includes(searchtext)) {
            substring.push(entry);
            substringcount++;
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

    // show substring matches if no start of line found
    if (count === 0 && substringcount > 0) {
      result = substring;
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

  availableWords(): {gloss: string, normalized: string}[] {
    const uniqueWords = [];
    for (let i = 0; i < this.entrylist.length; i++) {
      const entry = this.entrylist[i];
      const gloss = entry.gloss;
      if (uniqueWords.indexOf(gloss) === -1) {
        uniqueWords.push({gloss, normalized: entry.normalized});
      }
    }
    return uniqueWords.sort( (x: string, y: string) => {
      if (x < y) {
        return -1;
      } else if (x > y) {
        return 1;
      } else {
        return 0;
      }

    } );
  }
}
