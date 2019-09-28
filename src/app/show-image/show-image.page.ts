import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.page.html',
  styleUrls: ['./show-image.page.scss'],
})
export class ShowImagePage implements OnInit {
  @Input() imagebase64: string;
  @Input() canvas: HTMLCanvasElement;
  @ViewChild('tiffCanvasContainer') public tiffCanvasContainer: HTMLCanvasElement;
  public tiffCanvas: HTMLCanvasElement; // your canvas element
  constructor(public modalController: ModalController, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.tiffCanvas = this.canvas;
    const ele = document.getElementById('tiffCanvasContainer');
    ele.appendChild(this.tiffCanvas);
  }

  close() {
    this.modalController.dismiss({
      result: 'cancel'
    });
  }
getimage() {
//  return this.sanitizer.bypassSecurityTrustResourceUrl('' + this.imagebase64);
}
}
