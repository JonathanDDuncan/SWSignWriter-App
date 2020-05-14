import { BrowserTypeService } from './../browser-type.service';
import { ShareDesktopPage } from './../share-desktop/share-desktop.page';
import { ShareAndroidPage } from './../share-android/share-android.page';
import { SubscriptionService } from './../services/subscription.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { DocumentService } from '../document.service';
import { ShowImagePage } from '../show-image/show-image.page';
import { ShareIOSPage } from '../share-ios/share-ios.page';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss']
})
export class ViewPage implements OnInit {
  public imageheight = 900;
  public document: string;
  public preloadFonts: string;
  public signtextHeight: number;

  constructor(
    public modalController: ModalController,
    private documentService: DocumentService,
    private subscriptionService: SubscriptionService,
    public translate: TranslateService,
    public btUtil: BrowserTypeService,
    private router: Router
  ) {
    // Force fonts to load before anything is shown
    this.preloadFonts = ssw.paragraph('M547x518S2ff00482x483S11911518x488S26600531x451');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const fsw = this.documentService.getFSW();
        this.document = ssw.paragraph(fsw);
        this.imageheight = 200;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }
    });
  }

  ngOnInit() {
    this.subscriptionService.CanUse();
  }

  ionViewWillEnter() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw);
  }

  public share1() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw);

    requestAnimationFrame(() => this.sharecontinuation1(fsw));
  }

  public async share() {
    const fsw = this.documentService.getFSW();
    const btUtils = this.btUtil.utils();
    if (fsw && fsw !== null) {
      if (btUtils.Android()) {
        await this.ShareAndroid(fsw);
      } else if (btUtils.iOS() || btUtils.iPad() || btUtils.iPhone() || btUtils.iPod()) {
        await this.ShareIOS(fsw);
      } else {
        await this.ShareDesktop(fsw);
      }
    }
  }

  private async ShareIOS(fsw: string) {
    const canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight) as HTMLCanvasElement;
    const modal = await this.modalController.create({
      component: ShareIOSPage,
      componentProps: { canvas: canvas1, imagebase64: canvas1.toDataURL('image/png') }
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  private async ShareAndroid(fsw: string) {
    const canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight) as HTMLCanvasElement;
    const modal = await this.modalController.create({
      component: ShareAndroidPage,
      componentProps: { canvas: canvas1, imagebase64: canvas1.toDataURL('image/png') }
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  private async ShareDesktop(fsw: string) {
    const canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight) as HTMLCanvasElement;
    const modal = await this.modalController.create({
      component: ShareDesktopPage,
      componentProps: { canvas: canvas1, imagebase64: canvas1.toDataURL('image/png') }
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  heightChange(ev: any) {
    this.signtextHeight = ev.detail.value;
  }

  public edit() {
    return this.router.navigateByUrl('/edit');
  }

  private async sharecontinuation1(fsw: string) { }

  isCordova() {
    return !!window.cordova;
  }
}
