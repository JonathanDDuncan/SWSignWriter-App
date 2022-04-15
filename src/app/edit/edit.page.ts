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
import { Capacitor } from '@capacitor/core';
import { AndroidSubscriptionService } from '../services/androidSubscription.service';

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
  public matchingWords: { gloss: string, normalized: string }[];
  public subscriptionService;

  @ViewChild('searchRef', { read: ElementRef, static: true }) searchRef: ElementRef;
  @ViewChild('content', { static: true }) private content: any;

  constructor(
    public modalController: ModalController,
    private documentService: DocumentService,
    private settingsService: SettingsService,
    private subscriptionServiceNG: SubscriptionService,
    private sentry: SentryService,
    private router: Router,
    private subscriptionServiceAndroid : AndroidSubscriptionService
  ) {
      if (Capacitor.isNativePlatform()) {    
      this.subscriptionService = subscriptionServiceAndroid;
    }
    else
      this.subscriptionService = subscriptionServiceNG;   
   } 

  async ngOnInit() {
    //this.subscriptionService.CanUse();
    this.editedDocument = {
      editedsigns: []
    };

    const isFirstTime = await this.settingsService.getFirstTime();
    if (isFirstTime == null) {
      return this.router.navigateByUrl('/settings');
    }
    await this.documentService.loadSigns();
    this.documentService.clearDocument();
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
        if (text && text.includes('  ')) {
          this.searchRef.nativeElement.value = this.searchRef.nativeElement.value.replace('  ', '-');
          text = text.replace('  ', '-');
        }
        this.showAvailableWords(text);
        this.documentService.searchFrase(text);
        this.showDocument(this.documentService.getDocument());
        this.scrollToBottom();
      });
  }

  showAvailableWords(text) {
    this.matchingWords = this.documentService.showAvailableWords(text);
  }

  showDocument(document: Document): void {
    this.editedDocument = <EdittedDocument>{ editedsigns: document.signs };
  }

  trackFound(index, foundSign: FoundSign) {
    return foundSign ? foundSign.id : undefined;
  }

  public addWord(word) {
    const sentence = this.documentService.getSearchSentence();
    let sentenceSplit = sentence.split(' ').filter(x => x !== '' && x !== ' ');
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
    if (data) {
      // Replace existing item in list
      this.documentService.replaceElement(index, data.result);
      this.showDocument(this.documentService.getDocument());
      this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 50);
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
