import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { fromEvent, ObjectUnsubscribedError } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ChooseSignPage } from '../choose-sign/choose-sign.page';
import { NormalizationService } from '../normalization.service';
import { SignsLookupService, EntryResult } from '../signs-lookup.service';
import { v4 as uuid } from 'uuid';
import { DocumentService, Document } from '../document.service';

interface EdittedDocument {
  editedsigns: EditedSign[];
}

interface EditedSign extends EntryResult {
  index: number;
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
    private documentService: DocumentService
  ) {}

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
        const signs = this.searchFrase(text);
        this.updateSigns(signs);
      });
  }

  private updateSigns(signs: EntryResult[]) {
    this.documentService.updateSigns(signs);
    this.showDocument(this.documentService.getDocument());
  }

  showDocument(document: Document): void {
    const editedsigns: EditedSign[] = document.signs.map((item: any, index) => {
      return this.setIndex(item, index);
    });

    this.editedDocument = <EdittedDocument>{ editedsigns: editedsigns };
  }

  private setIndex(item, index: number): EditedSign {
    const editedSign = Object.assign({}, item);
    editedSign.index = index;
    return editedSign;
  }

  searchFrase(text: string): EntryResult[] {
    const texts = text.split(' ');

    return texts
      .filter(str => !(!str || 0 === str.length))
      .map(str => {
        return this.findSign(str);
      });
  }

  private findSign(text: string) {
    const founds: EntryResult[] = this.signsLookupService.search(text);
    let found: EntryResult;
    if (founds.length > 0) {
      found = this.findmatchingresult(founds, text);
    }
    if (found) {
      found.sign = ssw.svg(found.fsw);
      found.gloss = text;
    } else {
      found = {
        sign: '',
        key: uuid(),
        fsw: '',
        gloss: text + ' sign not found',
        normalized: ''
      };
    }
    return found;
  }

  findmatchingresult(founds: EntryResult[], searchText: string) {
    const normalized = this.normalize.normalizeForSearch(searchText);
    const foundexact = founds.find(item => item.gloss === searchText);
    if (foundexact) {
      return foundexact;
    }

    const foundsimilar = founds.find(item => item.normalized === normalized);
    if (foundsimilar) {
      return foundsimilar;
    }

    const foundsubstring = founds.find(item =>
      item.normalized.includes(normalized)
    );
    if (foundsubstring) {
      return foundsubstring;
    }

    const first = founds[0];
    return first;
  }

  async replace(index: number) {
    const document = this.documentService.getDocument();
    const clickedEntry = document.signs[index];

    const modal = await this.modalController.create({
      component: ChooseSignPage,
      componentProps: {
        searchword: clickedEntry.gloss
      }
    });
    const result = await modal.present();
    const { data } = await modal.onDidDismiss();

    console.log(data);

    // Replace existing item in list
    document.signs = this.replaceElement(
      this.documentService.getDocument().signs,
      index,
      data
    );
    this.documentService.updateDocument(document);
    this.showDocument(this.documentService.getDocument());
    return result;
  }

  replaceElement(signs, index, data) {
    const toChange = signs[index];
    const changeWith = this.signsLookupService.getsign(data.result);

    if (toChange && changeWith) {
      const toChangeindex = signs.indexOf(toChange);

      if (toChangeindex >= 0) {
        signs[toChangeindex] = {
          sign: ssw.svg(changeWith.fsw),
          key: changeWith.key,
          gloss: changeWith.gloss,
          fsw: changeWith.fsw
        };
      }
    }
    return signs;
  }
}
