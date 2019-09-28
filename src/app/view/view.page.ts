import * as htmlToImage from 'html-to-image';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { DocumentService } from '../document.service';
import { SocialSharingService } from '../social-sharing.service';
import { ShowImagePage } from '../show-image/show-image.page';

import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss']
})
export class ViewPage implements OnInit {
  public imageheight = 199;
  public document: string;
  public preloadFonts: string;
  public signtextHeight: number;

  constructor(
    public modalController: ModalController,
    private documentService: DocumentService,
    private socialSharingService: SocialSharingService,
    public translate: TranslateService,
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

  ngOnInit() { }

  ionViewWillEnter() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw);
  }

  public share() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw);

    requestAnimationFrame(() => this.sharecontinuation(fsw));
  }

  public copy() {
    const fsw = this.documentService.getFSW();
    const node: any = document.getElementsByClassName('signtext')[0];
    const size = getFSWWidth(fsw, 20.0, this.imageheight);
    const self = this;
    htmlToImage.toCanvas(node).then(async function (canvas) {
      // const img = new Image();
      // img.crossOrigin = 'Anonymous';
      // img.src = dataUrl;
      // debugger;
      // document.body.appendChild(img);
      // const canvas = a;
      // document.body.appendChild(canvas);
      const modal = await self.modalController.create({
        component: ShowImagePage,
        componentProps: { canvas: canvas}
      });

      await modal.present();
      await modal.onDidDismiss();

  })
  .catch(function (error) {
      console.error('oops, something went wrong!', error);
  });
    // htmlToImage.toCanvas(node, {width: size[0], height: size[1]}).then(async function (canvas) {
    //   document.body.appendChild(canvas);
    //   const modal = await self.modalController.create({
    //     component: ShowImagePage,
    //     componentProps: { canvas: canvas}
    //   });

    //   await modal.present();
    //   await modal.onDidDismiss();
    // })
    //   .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    //   });
  }

  public copy2() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw);

    requestAnimationFrame(() => this.copycontinuation(fsw));
  }

  heightChange(ev: any) {
    this.signtextHeight = ev.detail.value;
  }

  public edit() {
    return this.router.navigateByUrl('/edit');
  }

  private async sharecontinuation(fsw: string) {
    const node: any = document.getElementsByClassName('signtext')[0];

    const img = new Image();
    console.log('sharecontinuation');

     await htmlToImage.toPng(node).then(function (dataUrl) {
      img.src = dataUrl;
      img.crossOrigin = 'anonymous';
      this.socialSharingService.share(img);
      // reset back to the way it was with svg
      this.document = ssw.paragraph(fsw);
    });
  }

  private async copycontinuation(fsw: string) {
    const node: any = document.getElementsByClassName('signtext')[0];
    const size = getFSWWidth(fsw, 20.0, this.imageheight);
    const self = this;
    debugger;
    htmlToImage.toPng(node, {width: size[0], height: size[1]}).then(async function (dataUrl) {

      console.log(dataUrl);
      const modal = await self.modalController.create({
        component: ShowImagePage,
        componentProps: { imagebase64: dataUrl }
      });

      await modal.present();
      await modal.onDidDismiss();
      // reset back to the way it was with svg
      self.document = ssw.paragraph(fsw);
    })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  isCordova() {
    return !!window.cordova;
  }
}
