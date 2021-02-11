import { SentryService } from './../sentry.service';
import { SubscriptionService } from './../services/subscription.service';
import { SettingsService } from './../settings.service';
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
import { FoundSign, Lane } from '../signs-lookup.service';

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
  Lane = Lane;
  public editedDocument: EdittedDocument;
  private availableWords: string[];
  public matchingWords: string[];

  @ViewChild('searchRef', { read: ElementRef }) searchRef: ElementRef;

  constructor(
    public modalController: ModalController,
    private documentService: DocumentService,
    private settingsService: SettingsService,
    private subscriptionService: SubscriptionService,
    private sentry: SentryService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.subscriptionService.CanUse();
    this.editedDocument = {
      editedsigns: []
    };

    const isFirstTime  = await this.settingsService.getFirstTime();
    if (isFirstTime == null) {
      return this.router.navigateByUrl('/settings');
    }
    this.documentService.clearDocument();
    this.availableWords = this.documentService.editWordArray();

    this.showDocument(this.documentService.getDocument());
  }

  ionViewWillEnter() {
    this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
    this.showDocument(this.documentService.getDocument());
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
        this.showAvailableWords(text);
        this.documentService.searchFrase(text);
        this.showDocument(this.documentService.getDocument());
      });
  }

  showAvailableWords(text: string) {
    const words = text.split(' ');

    const keyword = words.length > 0 ? words[words.length - 1] : '';
    this.matchingWords =  this.getResults(this.availableWords, keyword);
  }

  getResults(availableWords: string[], keyword: string) {
    if (availableWords && keyword && keyword !== '') {
      const result = availableWords
      .filter(item => item.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 )
      .slice(0, 12);
      return result;
    } else {
      return [];
    }
  }

  showDocument(document: Document): void {
    this.editedDocument = <EdittedDocument>{ editedsigns: document.signs };
  }

  trackFound(index, foundSign: FoundSign) {
    return foundSign ? foundSign.id : undefined;
  }
  public addWord(word) {
    const sentence = this.documentService.getSearchSentence() ;
    let sentenceSplit = sentence.split(' ').filter( x => x !== '' && x !== ' ');
    sentenceSplit = sentenceSplit.slice(0, -1);

    const allExceptLast = sentenceSplit.join(' ');
    this.documentService.searchFrase(allExceptLast + ' ' + word);
    this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
    this.showDocument(this.documentService.getDocument());
    this.matchingWords = [];
  }

  accept() {
    this.sentry.sentryMessage('Entered text : ' + this.documentService.getSearchSentence());
    return this.router.navigateByUrl('/view');
  }

  async replace(index: number) {
    const searchWord: string = this.documentService.getSearchWord(index);
    const modal = await this.modalController.create({
      component: ChooseSignPage,
      componentProps: {
        searchword: searchWord
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    // Replace existing item in list
    this.documentService.replaceElement(index, data.result);
    this.showDocument(this.documentService.getDocument());
    this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
  }

  resetEntries() { }

  laneStyle(lane: Lane) {
    switch (lane) {
      case (Lane.Left): return 'lane-left';
      case (Lane.Right): return 'lane-right';
      default: return 'lane-middle';
    }
  }
}
