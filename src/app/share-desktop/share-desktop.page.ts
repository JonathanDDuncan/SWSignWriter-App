import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { uuid } from 'uuidv4';
declare class ClipboardItem {
  constructor(data: { [mimeType: string]: Blob });
}

@Component({
  selector: 'app-share-desktop',
  templateUrl: './share-desktop.page.html',
  styleUrls: ['./share-desktop.page.scss'],
})
export class ShareDesktopPage implements OnInit {
  public imagebase64: string;
  public contentWidth: Number;
  public contentHeight: Number;
  public swCanvas: HTMLCanvasElement; // your canvas element
  public modalCtrl: HTMLIonModalElement;
  public imageId: string;

  @Input() canvas: HTMLCanvasElement;
  constructor(public modalController: ModalController,
    public toastController: ToastController,
    private sanitizer: DomSanitizer,
    private translateService: TranslateService,
    private http: HttpClient) { }

  ngOnInit() {
    this.swCanvas = this.canvas;
    this.saveToRemote(this.imagebase64);
  }

  async saveToRemote(imagebase64: string) {
    this.imageId = uuid();
    const serverUrl = 'https://swsignwriterapi.azurewebsites.net/';

    // const serverUrl = 'https://localhost:44309/';
    const path = 'api/image/save';
    const requestBody = {
      'imageId': this.imageId,
      'privatekey': '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
      'dataUrl': imagebase64
    };

    this.http.post(serverUrl + path, requestBody)
      .toPromise()
      .then(() => { },
        error => {
          console.log(error);
        });
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

  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  getRemoteImage() {
    this.sleep(200);
    const serverUrl = 'https://swsignwriterapi.azurewebsites.net/';
    // const serverUrl = 'https://localhost:44309/';
    return serverUrl + 'Content/SignWriting/' + this.imageId + '.png';
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
            await self.presentToast(this.translateService.instant('Thanks for sharing!'));
            console.log('Thanks for sharing!');
          })
            .catch(console.error);
        });

    } else {
      await self.presentToast(this.translateService.instant('Share is not available.'));
    }
  }

  async copyToClipboard(event) {
    const self = this;

    try {
      const canvas = this.canvas;
      this.canvas.toBlob(async function (blob) {
        if (navigator['clipboard']) {
          // Safe to use Async Clipboard API!
          const clip = navigator['clipboard'] as any;
          try {
            clip.write([new ClipboardItem({ 'image/png': blob })]).then(async function () {
              await self.presentToast('Copied to clipboard successfully!');
              console.log('Copied to clipboard successfully!');
            }, async function (err) {
              console.error(err);
              await self.presentToast('Unable to write to clipboard. :-(');
              console.error('Unable to write to clipboard. :-(');
            });
          } catch (error) {
            clip.setImageData( blob, 'image/png');
          }
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
          const wascopied = document.execCommand('copy');
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
      await self.presentToast('Unable to write to clipboard. :-(');
      console.error('Unable to write to clipboard. :-(');
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
