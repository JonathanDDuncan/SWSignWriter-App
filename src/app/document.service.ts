import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { FoundSign, SignsLookupService, Sign, Lane } from './signs-lookup.service';
import { ColorService } from './color.service';
import { NormalizationService } from './normalization.service';
import { SynchArraysService } from './synch-arrays.service';

export interface Document {
  signs: FoundSign[];
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private document: Document;

  constructor(private signsLookupService: SignsLookupService,
    private color: ColorService,
    private synchArray: SynchArraysService,
    private normalize: NormalizationService) {
    this.clearDocument();
  }

  clearDocument(): void {
    this.document = this.newDocument();
  }

  newDocument(): Document {
    return { signs: [] };
  }

  getDocument(): Document {
    return this.cloneDocument(this.document);
  }

  updateDocument(document: Document): void {
    this.document = document;
  }

  updateSigns(signs: FoundSign[]): void {
    const document = this.getDocument();
    document.signs = signs;
    this.updateDocument(document);
  }

  cloneDocument(document: Document): Document {
    const clonedDocument: Document = this.cloneObject(document);
    clonedDocument.signs = this.cloneArray(clonedDocument.signs);
    return clonedDocument;
  }

  cloneArray(arr) {
    return Object.assign([], arr);
  }

  cloneObject(obj) {
    return Object.assign({}, obj);
  }

  getFSW(): string {
    let fsw = '';
    this.document.signs.filter(found => found.sign && found.sign.fsw).forEach(found => {
      fsw += this.changeLane(found.sign.fsw, found.lane) + ' ';
    });

    return fsw;
  }

  private changeLane(fsw: string, lane: Lane): string {
    const newLane = lane === Lane.Left ? 'L' : (lane === Lane.Right ? 'R' : 'M');
    return fsw.replace('M', newLane);
  }

  searchFrase(text: string): void {
    const cleaned = this.clean(text);
    const texts = cleaned.split(' ');

    const glosses = texts
      .filter(str => !(!str || 0 === str.length));

    const blankFoundSign = {
      sign: '',
      text: '',
      id: '',
      svg: '',
      totalmatches: 0,
      color: 'red'
    };

    const signs = this.synchArray.synchzip(glosses, this.document.signs,
      (item) => item, (item: any) => item.text, blankFoundSign)
      .map((element: { item1: string, item2: FoundSign }) => {
        if (element.item2 && element.item1 === element.item2.text) {
          return element.item2;
        } else { return this.findSign(element.item1); }
      });

    this.updateSigns(signs);
  }

  clean(text: string): string {
    let tobereplaced = text;
    const replaceArr: { f: string, t: string }[] =
      [{ f: '{', t: '' }, { f: '}', t: '' }, { f: '}', t: '' },
      { f: '\\( ', t: '' }, { f: '\\)', t: '' }, { f: ',', t: ' , ' }, { f: '\\.', t: ' . ' },
      { f: '!', t: ' ! ' }, { f: '¡', t: ' ¡ ' }, { f: '\\?', t: ' ? ' }, { f: '¿', t: ' ¿ ' },
      { f: ':', t: ' : ' }, { f: ';', t: ' ; ' }, { f: '\t', t: ' ' },
      { f: '   ', t: ' ' }, { f: '  ', t: ' ' }];

    if (tobereplaced && tobereplaced.length > 1) {
      replaceArr.forEach(repl => {
        tobereplaced = tobereplaced.replace(new RegExp(repl.f, 'g'), repl.t);
      });
    }
    return tobereplaced;
  }

  private findSign(text: string): FoundSign {
    const signs: Sign[] = this.signsLookupService.search(text);
    const count: number = signs.length;
    let found: FoundSign;
    if (signs.length > 0) {
      const matching = this.findmatchingresult(signs, text);
      found = {
        sign: matching.sign,
        text: text,
        id: matching.sign.key + text,
        svg: ssw.svg(matching.sign.fsw),
        totalmatches: count,
        color: this.matchColor(matching),
        lane: Lane.Middle
      };
    }
    if (!found) {
      found = {
        sign: null,
        text: text,
        id: uuid() + text,
        svg: '',
        totalmatches: count,
        color: this.matchColor(null),
        lane: Lane.Middle
      };
    }
    return found;
  }

  matchColor(matching: { type: string; sign: Sign; count: number; }): string {
    let finalcolor: string;
    if (matching) {
      switch (matching.type) {
        case 'exact':
          if (matching.count === 1) {
            finalcolor = this.color.hexcolor(this.color.green);
          } else {
            finalcolor = this.color.colorgradient(matching.count, this.color.green, this.color.yelllow);
          }
          break;
        case 'similar':
          finalcolor = this.color.colorgradient(matching.count, this.color.yelllow, this.color.orange);
          break;
        case 'substring':
          finalcolor = this.color.colorgradient(matching.count, this.color.orange, this.color.red);
          break;
        case 'notmatching':
        default:
          finalcolor = this.color.hexcolor(this.color.red);
      }
    } else {
      finalcolor = this.color.hexcolor(this.color.red);
    }

    return finalcolor;
  }

  findmatchingresult(founds: Sign[], searchText: string): { type: string, sign: Sign, count: number } {
    const normalized = this.normalize.normalizeForSearch(searchText);

    let type = 'exact';
    const foundexacts = founds.filter(item => item && item.gloss && searchText && item.gloss.toLowerCase() === searchText.toLowerCase());
    const exactCount = foundexacts.length;
    let foundexact: Sign;
    if (exactCount > 0) { foundexact = foundexacts[0]; }

    if (foundexact) {
      return { type: type, sign: foundexact, count: exactCount };
    }

    type = 'similar';
    const foundsimilars = founds.filter(item => item.normalized === normalized);
    const similarCount = foundexacts.length;
    let foundsimilar: Sign;
    if (similarCount > 0) { foundsimilar = foundsimilars[0]; }
    if (foundsimilar) {
      return { type: type, sign: foundsimilar, count: similarCount };
    }

    type = 'substring';
    const foundsubstrings = founds.filter(item =>
      item.normalized.includes(normalized)
    );
    const substringCount = foundexacts.length;
    let foundsubstring: Sign;
    if (substringCount > 0) { foundsubstring = foundsubstrings[0]; }
    if (foundsubstring) {
      return { type: type, sign: foundsubstring, count: substringCount };
    }

    type = 'notmatching';
    const first = founds[0];
    return { type: type, sign: first, count: 0 };
  }

  resetEntries() {
    this.signsLookupService.loadSigns();
  }

  replaceElement(index: number, key: string): void {
    const signs = this.document.signs;
    const toChange = signs[index];
    const changeWith = this.signsLookupService.getsign(key);

    if (toChange && changeWith) {
      const toChangeindex = signs.indexOf(toChange);

      if (toChangeindex >= 0) {
        signs[toChangeindex] = {
          sign: changeWith,
          text: changeWith.gloss,
          id: changeWith.key + changeWith.gloss,
          svg: ssw.svg(changeWith.fsw),
          totalmatches: 1,
          color: this.color.hexcolor(this.color.green),
          lane: toChange.lane
        };
      }
    }
  }

  getSearchWord(index: number): string {
    if (index <= this.document.signs.length - 1) {
      return (this.document.signs[index]).text;
    } else { return ''; }
  }

  getSearchSentence(): string {
    let sentence = '';
    this.document.signs.forEach(sign => {
      sentence += sign.text + ' ';
    });

    return sentence;
  }

  showAvailableWords(text: string) {
    return this.signsLookupService.showAvailableWords(text);
  }
}
