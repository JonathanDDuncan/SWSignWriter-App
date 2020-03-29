import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { SharePage } from '../share/share.page';

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
  public modalCtrl: HTMLIonModalElement;
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
    return this.sanitizer.bypassSecurityTrustResourceUrl('' + this.imagebase64);
  }

  async socialShare() {
    const navShare = (window.navigator as any);
    if (navShare.share) {
      this.canvas.toBlob(
        function (blob) {
          const filename = 'signWriting.png';
          const fd = new FormData();
          const files = [];
          fd.append('SignWriting', blob, filename);
          for (const newfile of fd.getAll('file')) {
            files.push(newfile);
          }
          navShare.share({
            files: files
          }).then(() => {
            console.log('Thanks for sharing!');
          })
            .catch(console.error);
        });

    } else {
      this.modalCtrl = await this.modalController.create({
        component: SharePage,
        componentProps: { canvas: this.canvas }
      });

      await this.modalCtrl.present();
      await this.modalCtrl.onDidDismiss();
    }
  }
}
