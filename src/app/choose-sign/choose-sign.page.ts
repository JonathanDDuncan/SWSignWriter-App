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
  @ViewChild('searchRef', { read: ElementRef }) searchRef: ElementRef;
  private selectedkey: string;
  private isSelected = false;
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
    this.modalController.dismiss({
      result: this.selectedkey
    });
  }

  cancel() {
    this.modalController.dismiss({
      result: 'cancel'
    });
  }

  radioChecked(key: string) {
    this.selectedkey = key;
    this.isSelected = true;
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
