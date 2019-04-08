import { ColorService, Color } from './../color.service';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ChooseSignPage } from '../choose-sign/choose-sign.page';
import { NormalizationService } from '../normalization.service';
import { SignsLookupService, Sign, FoundSign } from '../signs-lookup.service';
import { v4 as uuid } from 'uuid';
import { DocumentService, Document } from '../document.service';

interface EdittedDocument {
  editedsigns: FoundSign[];
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit, AfterViewInit {
  public editedDocument: EdittedDocument;

  @ViewChild('searchRef', { read: ElementRef }) searchRef: ElementRef;

  constructor(
    public modalController: ModalController,
    private normalize: NormalizationService,
    private signsLookupService: SignsLookupService,
    private documentService: DocumentService,
    private color: ColorService,
    private router: Router

  ) { }

  ngOnInit() {
    this.documentService.clearDocument();
    this.showDocument(this.documentService.getDocument());
  }

  resetEntries() {
    this.signsLookupService.loadSigns();
  }

  ngAfterViewInit() {
    fromEvent(this.searchRef.nativeElement, 'keyup')
      .pipe(
        map((evt: any) => evt.target.value),
        debounceTime(100),
        distinctUntilChanged()
      )
      // subscription
      .subscribe((text: string) => {
        const cleaned = this.clean(text);
        const signs = this.searchFrase(cleaned);
        this.updateSigns(signs);
      });
  }

  private updateSigns(signs: FoundSign[]) {
    this.documentService.updateSigns(signs);
    this.showDocument(this.documentService.getDocument());
  }

  showDocument(document: Document): void {
    const editedsigns: FoundSign[] = document.signs;

    this.editedDocument = <EdittedDocument>{ editedsigns: editedsigns };
  }

  trackFound(index, foundSign: FoundSign) {
    return foundSign ? foundSign.id : undefined;
  }

  searchFrase(text: string): FoundSign[] {
    const cleaned = this.clean(text);
    const texts = cleaned.split(' ');

    return texts
      .filter(str => !(!str || 0 === str.length))
      .map(str => {
        return this.findSign(str);
      });
  }

  clean(text: string): string {
    let tobereplaced = text;
    const replaceArr: { f: string, t: string }[] =
      [{ f: '{', t: '' }, { f: '}', t: '' }, { f: '}', t: '' },
      { f: '\\( ', t: '' }, { f: '\\)', t: '' }, { f: ',', t: ' , ' }, { f: '\\.', t: ' . ' },
      { f: '!', t: ' ! ' }, { f: '¡', t: ' ¡ ' }, { f: '\\?', t: ' ? ' }, { f: '¿', t: ' ¿ ' },
      { f: ':', t: ' : ' }, { f: ';', t: ' ; ' }, { f: '\t', t: ' ' },
      { f: '   ', t: ' ' }, { f: '  ', t: ' ' }];

    replaceArr.forEach(repl => {
      tobereplaced = tobereplaced.replace(new RegExp(repl.f, 'g'), repl.t);
    });
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
        color: this.matchColor(matching)
      };
    }
    if (!found) {
      found = {
        sign: null,
        text: text + ' sign not found',
        id: uuid() + text,
        svg: '',
        totalmatches: count,
        color: this.matchColor(null)
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
    const foundexacts = founds.filter(item => item.gloss.toLowerCase() === searchText.toLowerCase());
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

  async replace(index: number) {
    const document = this.documentService.getDocument();
    const clickedEntry = document.signs[index];

    const modal = await this.modalController.create({
      component: ChooseSignPage,
      componentProps: {
        searchword: clickedEntry.text
      }
    });
    const result = await modal.present();
    const { data } = await modal.onDidDismiss();

    console.log(data);

    // Replace existing item in list
    document.signs = this.replaceElement(
      this.documentService.getDocument().signs,
      index,
      data.result
    );
    this.documentService.updateDocument(document);
    this.showDocument(this.documentService.getDocument());
    return result;
  }

  replaceElement(signs: FoundSign[], index: number, key: string): FoundSign[] {
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
          color: this.color.hexcolor(this.color.green)
        };
      }
    }
    return signs;
  }

  accept() {
    return this.router.navigateByUrl('/view');
  }
}
