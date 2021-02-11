import { SubscriptionService } from './../services/subscription.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { DocumentService } from '../document.service';
import { ShowImagePage } from '../show-image/show-image.page';


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
    private subscriptionService: SubscriptionService,
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

  ngOnInit() {
    this.subscriptionService.CanUse();
  }

  ionViewWillEnter() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw);
  }

  public share() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw);

    requestAnimationFrame(() => this.sharecontinuation(fsw));
  }

  public async copy() {
    const fsw = this.documentService.getFSW();
    const canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight) as HTMLCanvasElement;
    const modal = await this.modalController.create({
      component: ShowImagePage,
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

  private async sharecontinuation(fsw: string) { }

  isCordova() {
    return !!window.cordova;
  }
}
