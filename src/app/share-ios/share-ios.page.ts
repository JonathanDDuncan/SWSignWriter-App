import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { uuid } from 'uuidv4';

@Component({
  selector: 'app-share-ios',
  templateUrl: './share-ios.page.html',
  styleUrls: ['./share-ios.page.scss'],
})
export class ShareIOSPage implements OnInit {
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
    private http: HttpClient) { }
  private serverUrl =
    (window.location
      && window.location.hostname
      && window.location.hostname.includes('localhost'))
      ? 'https://localhost:44309/'
      : 'https://swsignwriterapi.azurewebsites.net/';
  ngOnInit() {
    this.swCanvas = this.canvas;
    this.saveToRemote(this.imagebase64);
  }

  async saveToRemote(imagebase64: string) {
    this.imageId = uuid();
    const path = 'api/image/save';
    const requestBody = {
      'imageId': this.imageId,
      'privatekey': '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
      'dataUrl': imagebase64
    };

    this.http.post(this.serverUrl + path, requestBody)
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

    return this.serverUrl + 'Content/SignWriting/' + this.imageId + '.png';
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();

  }
}
