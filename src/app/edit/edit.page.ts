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
import { SignsLookupService } from '../signs-lookup.service';

interface EditResult {
  sign: string;
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

  constructor(
    public modalController: ModalController,
    private normalize: NormalizationService,
    private signsLookupService: SignsLookupService
  ) {}

  ngOnInit() {
    this.elements = [];
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
      const founds: EditResult[] = this.signsLookupService.search(text1);
      let found: EditResult;
      if (founds.length > 0) {
        found = this.findmatchingresult(founds, text1);
      }
      if (found) {
        found.sign = this.styledSvg(found.fsw);
        found.gloss = text1;
      }

      return found;
    });
  }

  findmatchingresult(founds: EditResult[], searchText: string) {
    const normalized = this.normalize.normalizeForSearch(searchText);
    const foundexact = founds.find(item => item.gloss === searchText);
    if (foundexact) {
      return foundexact;
    }

    const foundsimilar = founds.find(item => item.index === normalized);
    if (foundsimilar) {
      return foundsimilar;
    }

    const foundsubstring = founds.find(item => item.index.includes(normalized));
    if (foundsubstring) {
      return foundsubstring;
    }

    const first = founds[0];
    return first;
  }

  showResult(result) {
    this.elements = result;
  }

  async replace($event, key) {
    const clickedEntry = this.signsLookupService.getSign(key);
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
    this.elements = this.replaceElement(this.elements, key, data);

    return result;
  }

  replaceElement(elements, key, data) {
    const toChange = elements.find(elem => elem.key === key);
    const changeWith = this.signsLookupService.getSign(data.result);

    if (toChange && changeWith) {
      const toChangeindex = elements.indexOf(toChange);

      if (toChangeindex >= 0) {
        elements[toChangeindex] = {
          sign: this.styledSvg(changeWith.fsw),
          key: changeWith.key,
          gloss: changeWith.gloss
        };
      }
    }
    return elements;
  }

  private styledSvg(fsw: string) {
    return (
      '<div style="min-width:100px; padding:5px;">' +
      ssw.svg(fsw) +
      '</div>' +
      '<span">' +
      ' ' +
      '</span>'
    );
  }
}
