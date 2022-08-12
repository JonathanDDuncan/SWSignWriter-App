import { Injectable, OnInit } from '@angular/core';
import { NormalizationService } from './normalization.service';
import { Storage } from '@ionic/storage-angular';

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
export class SignsLookupService implements OnInit {
  private entrylist: any[];
  private words: { gloss: string, normalized: string }[];

 constructor(
    private storage: Storage,
    private normalize: NormalizationService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadSigns();
  }

  async loadSigns() {
    const self = this;
    this.entrylist = [];
    const puddles = await this.storage.get('puddles');

      if (puddles) {
        puddles.forEach(async puddle => {
          const puddleentries = await this.storage.get(puddle);

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
            this.words = this.getAvailableWords();
          });
      }
  }

  search(text: string): Sign[] {
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
      }
    }

    // show substring matches if no start of line found
    if (count === 0 && substringcount > 0) {
      result = substring;
    }
    let finalresult: Sign[];
    const unique = this.arrayUnique(result);

    if (unique.length > 25) {
      finalresult = unique.filter(x => x.gloss.length === text.length);
    } else {
      finalresult = unique;
    }
    finalresult.sort(function (a, b) {
      if (a.gloss > b.gloss) {
        return 1;
      }
      if (a.gloss < b.gloss) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return finalresult;
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

  getAvailableWords(): { gloss: string, normalized: string }[] {
    const uniqueWords = [];
    const map = new Map();
    for (let i = 0; i < this.entrylist.length; i++) {
      const entry = this.entrylist[i];
      const gloss = entry.gloss;
      if (!map.has(gloss)) {
        map.set(gloss, true);
        uniqueWords.push({ gloss, normalized: entry.normalized });
      }
    }

    const sorted = uniqueWords.sort((x: { gloss: string, normalized: string }, y: { gloss: string, normalized: string }) => {
      if (x.gloss < y.gloss) {
        return -1;
      } else if (x > y) {
        return 1;
      } else {
        return 0;
      }
    });
    return sorted;
  }

  // Available words
  showAvailableWords(text: string) {
    const words = text.split(' ');

    const keyword = words.length > 0 ? words[words.length - 1] : '';
    return this.getResults(this.words, keyword);
  }

  getResults(availableWords: { gloss: string, normalized: string }[], keyword: string) {
    if (availableWords && keyword && keyword !== '') {
      const maxResults = 12;
      const startsWith = [];
      const contains = [];
      const lwrCaseKeyword = keyword.toLowerCase();
      let i = 0;
      for (const element of availableWords) {
        if (element && element.gloss && element.gloss.toLowerCase().startsWith(lwrCaseKeyword)) {
          startsWith.push(element);
          i++;
        } else if (element && element.normalized && element.normalized.toLowerCase().startsWith(lwrCaseKeyword)) {
          startsWith.push(element);
          i++;
        } else if (element && element.gloss && element.gloss.toLowerCase().indexOf(lwrCaseKeyword) !== -1) {
          contains.push(element);
        } else if (element && element.normalized && element.normalized.toLowerCase().indexOf(lwrCaseKeyword) !== -1) {
          contains.push(element);
        }

        if (i >= maxResults) {
          break;
        }
      }

      let result = [];
      result = startsWith.slice(0, maxResults);
      if (result.length < maxResults) {
        result.concat(contains.slice(0, maxResults - result.length));
      }

      return result;
    } else {
      return [];
    }
  }
}
