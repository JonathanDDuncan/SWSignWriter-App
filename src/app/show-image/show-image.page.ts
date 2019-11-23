import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.page.html',
  styleUrls: ['./show-image.page.scss'],
})
export class ShowImagePage implements OnInit {
  public imagebase64: string;
  public contentWidth: Number;
  public contentHeight: Number;
  public swCanvas: HTMLCanvasElement; // your canvas element

  @Input() canvas: HTMLCanvasElement;
  constructor(public modalController: ModalController, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.swCanvas = this.canvas;
  }

  close() {
    this.modalController.dismiss({
      result: 'cancel'
    });
  }

  getimage() {
    this.contentHeight = this.swCanvas.height / 4;
    this.contentWidth = this.swCanvas.width / 4;
    return this.sanitizer.bypassSecurityTrustResourceUrl( '' + this.imagebase64);
}
}
