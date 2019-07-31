import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.page.html',
  styleUrls: ['./show-image.page.scss'],
})
export class ShowImagePage implements OnInit {
  @Input() imagebase64: string;

  constructor(public modalController: ModalController, private sanitizer: DomSanitizer) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss({
      result: 'cancel'
    });
  }
getimage() {
 return this.sanitizer.bypassSecurityTrustResourceUrl('' + this.imagebase64);
}
}
