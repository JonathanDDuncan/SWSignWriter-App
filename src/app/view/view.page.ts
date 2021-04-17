/// <reference path="./../../declarations.d.ts" />

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
    this.AddLink(canvas1);
    const modal = await this.modalController.create({
      component: ShareIOSPage,
      componentProps: { canvas: canvas1, imagebase64: canvas1.toDataURL('image/png') }
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  private AddLink(canvas: HTMLCanvasElement) {
    const temp_cnvs = this.tempCanvas(canvas);
    const ctx = this.reSizeCanvas(canvas, temp_cnvs);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'blue';
    ctx.textAlign = 'center';
    ctx.fillText('SWSW SwSignWriter.jonathanduncan.pro', canvas.width / 2, canvas.height - 10 );
  }

  private reSizeCanvas(canvas: HTMLCanvasElement, temp_cnvs: HTMLCanvasElement) {
    canvas.height += 35;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(temp_cnvs, 0, 0);
    return ctx;
  }

  private tempCanvas(canvas: HTMLCanvasElement) {
    const temp_cnvs = document.createElement('canvas');
    const temp_cntx = temp_cnvs.getContext('2d');
    temp_cnvs.width = canvas.width;
    temp_cnvs.height = canvas.height;
    temp_cntx.fillStyle = 'white';
    temp_cntx.fillRect(0, 0, canvas.width, canvas.height);
    temp_cntx.drawImage(canvas, 0, 0);
    return temp_cnvs;
  }

  private async ShareAndroid(fsw: string) {
    const canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight) as HTMLCanvasElement;
    this.AddLink(canvas1);
    const modal = await this.modalController.create({
      component: ShareAndroidPage,
      componentProps: { canvas: canvas1, imagebase64: canvas1.toDataURL('image/png') }
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  private async ShareDesktop(fsw: string) {
    const canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight) as HTMLCanvasElement;
    this.AddLink(canvas1);
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
    return !!window['cordova'];
  }
}
