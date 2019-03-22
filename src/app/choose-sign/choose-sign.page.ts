import {
  Input,
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NormalizationService } from '../normalization.service';
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
  public elements: { sign: string; key: string }[];
  constructor(
    navParams: NavParams,
    public modalController: ModalController,
    private normalize: NormalizationService,
    private signsLookupService: SignsLookupService
  ) {
    // componentProps can also be accessed at construction time using NavParams
  }

  ngOnInit() {
    this.elements = [];
    console.log(this.entrys);
    console.log(this.searchword);
    this.searchRef.nativeElement.value = this.searchword;
    const result = this.signsLookupService.search(this.searchword);
    console.log(result);
    this.showResult(result);
  }

  ngAfterViewInit() {
    fromEvent(this.searchRef.nativeElement, 'keyup')
      .pipe(
        // get value
        map((evt: any) => evt.target.value),
        // text length must be > 2 chars
        // .filter(res => res.length > 2)
        // emit after 1s of silence
        debounceTime(100),
        // emit only if data changes since the last emit
        distinctUntilChanged()
      )
      // subscription
      .subscribe((text: string) => {
        const result = this.signsLookupService.search(text);
        console.log(result);
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
    console.log(this.selectedkey);
  }

  showResult(result) {
    this.elements = [];
    result.forEach(entry => {
      this.elements.push({
        sign:
          '<div style="min-width:100px;">' +
          ssw.svg(entry.fsw) +
          '</div>' +
          '<span">' +
          entry.gloss +
          '</span>',
        key: entry.key
      });
    });
  }
}
