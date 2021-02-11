import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

declare class ClipboardItem {
  constructor(data: { [mimeType: string]: Blob });
}

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
  constructor(public modalController: ModalController,
    public toastController: ToastController,
    private sanitizer: DomSanitizer) { }

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
    const self = this;
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
          }).then(async () => {
            await self.presentToast('Thanks for sharing!');
            console.log('Thanks for sharing!');
          })
            .catch(console.error);
        });

    } else {
      await self.presentToast('Share is not available.');
    }
  }

  copyToClipboard(event) {
    const self = this;

    try {
      const canvas = this.canvas;
      this.canvas.toBlob(async function (blob) {
        if (navigator['clipboard']) {
          // Safe to use Async Clipboard API!
          const clip = navigator['clipboard'] as any;
          clip.write([new ClipboardItem({ 'image/png': blob })]).then(async function () {
            await self.presentToast('Copied to clipboard successfully!');
            console.log('Copied to clipboard successfully!');
          }, async function (err) {
            console.error(err);
            await self.presentToast('Unable to write to clipboard. :-(');
            console.error('Unable to write to clipboard. :-(');
          });
        } else {
          const img = document.createElement('img');
          img.src = canvas.toDataURL();
          document.body.appendChild(img);
          const r = document.createRange();
          r.setStartBefore(img);
          r.setEndAfter(img);
          r.selectNode(img);
          const sel = window.getSelection();
          sel.addRange(r);
          const wascopied = document.execCommand('Copy');
          if (!wascopied) {
            await self.presentToast('You need to right click or long press on image to copy it.');
            alert('You need to right click or long press on image to copy it.');
          } else {
            await self.presentToast('Image was copied.');
          }
          img.remove();
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();

  }
}
