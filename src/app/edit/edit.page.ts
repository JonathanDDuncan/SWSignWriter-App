
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
import { FoundSign } from '../signs-lookup.service';

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
    private documentService: DocumentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.documentService.clearDocument();
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
        this.documentService.searchFrase(text);
        this.showDocument(this.documentService.getDocument());
      });
  }

  showDocument(document: Document): void {
    this.editedDocument = <EdittedDocument>{ editedsigns: document.signs };
  }

  trackFound(index, foundSign: FoundSign) {
    return foundSign ? foundSign.id : undefined;
  }

  accept() {
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

    console.log(data);

    // Replace existing item in list
    this.documentService.replaceElement(index, data.result);
    this.showDocument(this.documentService.getDocument());
    this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
  }

  resetEntries() {}
  segmentChanged($event, i) {
    console.log(i);
  }
}
