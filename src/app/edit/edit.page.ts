import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';

import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ChooseSignPage } from '../choose-sign/choose-sign.page';
import { NormalizationService } from '../normalization.service';
import * as uuid from 'uuid';
interface EditResult {
  sign: SafeHtml;
  key: string;
  fsw: string;
  gloss: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit, AfterViewInit {
  public elements: EditResult[];
  @ViewChild('emailRef', { read: ElementRef }) emailRef: ElementRef;
  private entrylist: any[];

  constructor(
    private storage: Storage,
    private sanitizer: DomSanitizer,
    public modalController: ModalController,
    private normalize: NormalizationService
  ) {}

  ngOnInit() {
    this.elements = [];
    this.makelist();
  }

  ngAfterViewInit() {
    fromEvent(this.emailRef.nativeElement, 'keyup')
      .pipe(
        map((evt: any) => evt.target.value),
        debounceTime(100),
        distinctUntilChanged()
      )
      // subscription
      .subscribe((text: string) => {
        const result = this.searchFrase(text);
        this.showResult(result);
      });
  }

  searchFrase(text: string) {
    const texts = text.split(' ');

    return texts.map(text1 => {
      const founds: EditResult[] = this.search(text1);
      let found: EditResult;
      if (founds.length > 0) {
        found = this.findmatchingresult(founds, text1);
      }
      if (found) {
        found.sign = this.sanitizeSvg(found.fsw);
        found.gloss = text1;
      }

      return found;
    });
  }

  findmatchingresult(founds: EditResult[], searchText: string) {
    const foundexact = founds.find(item => item.gloss === searchText);
    if (foundexact) {
      return foundexact;
    }

    const foundsimilar = founds.find(
      item => item.index === this.normalize.normalizeForSearch(searchText)
    );
    if (foundsimilar) {
      return foundsimilar;
    }

    const foundsubstring = founds.find(item =>
      item.index.includes(this.normalize.normalizeForSearch(searchText))
    );
    if (foundsubstring) {
      return foundsubstring;
    }

    const first = founds[0];
    return first;
  }

  showResult(result) {
    this.elements = result;
  }

  search(text: string): EditResult[] {
    const max = 25;
    const result = [];
    let count = 0;
    const searchtext = this.normalize.normalizeForSearch(text.trim());
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

    return this.arrayUnique(result);
  }

  arrayUnique(arr: EditResult[]): EditResult[] {
    const existingkeys = [];
    const keep: {
      fsw: string;
      key: string;
      gloss: string;
      sign: SafeHtml;
    }[] = [];
    arr.forEach(element => {
      if (!existingkeys.includes(element.key)) {
        existingkeys.push(element.key);
        keep.push(element);
      }
    });
    return keep;
  }
  async replace($event, key) {
    const clickedEntry = this.entrylist.find(entry => entry.key === key);
    const modal = await this.modalController.create({
      component: ChooseSignPage,
      componentProps: {
        entrylist: this.entrylist,
        searchword: clickedEntry.gloss
      }
    });
    const result = await modal.present();
    const { data } = await modal.onDidDismiss();

    console.log(data);

    // Replace existing item in list
    this.elements = this.replaceElement(this.elements, key, data);

    return result;
  }

  replaceElement(elements, key, data) {
    const toChange = elements.find(elem => elem.key === key);
    const changeWith = this.entrylist.find(entry => entry.key === data.result);

    if (toChange && changeWith) {
      const toChangeindex = elements.indexOf(toChange);

      if (toChangeindex >= 0) {
        elements[toChangeindex] = {
          sign: this.sanitizeSvg(changeWith.fsw),
          key: changeWith.key,
          gloss: changeWith.gloss
        };
      }
    }
    return elements;
  }

  private sanitizeSvg(fsw: string) {
    return this.sanitize(
      '<div style="min-width:100px; padding:5px;">' +
        ssw.svg(fsw) +
        '</div>' +
        '<span">' +
        ' ' +
        '</span>'
    );
  }

  sanitize(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  makelist() {
    const list = [];
    this.storage.get('puddles').then(puddles => {
      puddles.forEach(puddle => {
        this.storage.get(puddle).then(puddleentries => {
          puddleentries.entries.forEach(entry => {
            entry.glosses.forEach(gloss => {
              list.push({
                index: this.normalize.normalizeForSearch(gloss),
                gloss: gloss,
                key: entry.key,
                fsw: entry.fsw
              });
            });
          });
        });
      });

      this.entrylist = list;
    });
  }

  read(xml: string) {
    // Or to get a key/value pair
    this.storage.get('puddle').then(val => {
      console.log('Your name is', val);
      this.makelist();
    });
  }
}
