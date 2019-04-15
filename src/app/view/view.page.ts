import { Component, OnInit, OnChanges } from '@angular/core';
import { DocumentService } from '../document.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SocialSharingService } from '../social-sharing.service';
import * as htmlToImage from 'html-to-image';
import { ShowImagePage } from '../show-image/show-image.page';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss']
})
export class ViewPage implements OnInit {
  constructor(
    public modalController: ModalController,
    private documentService: DocumentService,
    private socialSharingService: SocialSharingService,
    private router: Router
  ) {
    // Force fonts to load before anything is shown
    this.preloadFonts = ssw.paragraph('M547x518S2ff00482x483S11911518x488S26600531x451');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('ssw', ssw);
        const fsw = this.documentService.getFSW();
        this.document = ssw.paragraph(fsw);
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }
    });
  }
  public document: string;
  public preloadFonts: string;
  public signtextHeight: number;

  ngOnInit() { }

  ionViewWillEnter() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw);
  }

  public share() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw, 'png');

    requestAnimationFrame(() => this.sharecontinuation(fsw));
  }

  public copy() {
    const fsw = this.documentService.getFSW();
    this.document = ssw.paragraph(fsw, 'png');

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

    const imgsrc = await htmlToImage.toPng(node);

    const img = new Image();
    img.src = imgsrc;
    this.socialSharingService.share(img);

    // reset back to the way it was with svg
    this.document = ssw.paragraph(fsw);
  }

  private async copycontinuation(fsw: string) {
    const node: any = document.getElementsByClassName('signtext')[0];

    const modal = await this.modalController.create({
      component: ShowImagePage,
      componentProps: {
        imagebase64: await htmlToImage.toPng(node)
      }
    });

    await modal.present();
    await modal.onDidDismiss();
    // reset back to the way it was with svg
    this.document = ssw.paragraph(fsw);
  }

  isCordova() {
    return !!window.cordova;
  }
}
