/// <reference path="./../../declarations.d.ts" />

import {
  Input,
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SignsLookupService } from '../signs-lookup.service';

@Component({
  selector: 'app-choose-sign',
  templateUrl: './choose-sign.page.html',
  styleUrls: ['./choose-sign.page.scss']
})
export class ChooseSignPage implements OnInit, AfterViewInit {
  @Input() entrys: any[];
  @Input() searchword: string;
  @ViewChild('searchRef', { read: ElementRef, static: true }) searchRef: ElementRef;
  private selectedkey: string;
  public elements: { sign: string; key: string; gloss: string }[];
  constructor(
        public modalController: ModalController,
        private signsLookupService: SignsLookupService
  ) {
    // componentProps can also be accessed at construction time using NavParams
  }

  ngOnInit() {
    this.elements = [];
    this.searchRef.nativeElement.value = this.searchword;
    const result = this.signsLookupService.search(this.searchword);
    this.showResult(result);
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
        const result = this.signsLookupService.search(text);
        this.showResult(result);
      });
  }

  accept() {
    const element = this.elements.find( x => x.key === this.selectedkey);
    this.modalController.dismiss({
      result: element
    });
  }

  cancel() {
    this.modalController.dismiss({
      result: 'cancel'
    });
  }

  radioChecked(key: string) {
    this.selectedkey = key;
  }

  showResult(result) {
    this.elements = [];
    result.forEach(entry => {
      this.elements.push({
        sign: ssw.svg(entry.fsw),
        key: entry.key,
        gloss: entry.gloss
      });
    });
  }
}
