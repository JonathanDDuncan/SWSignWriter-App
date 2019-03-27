import { Component, OnInit, OnChanges } from '@angular/core';
import { DocumentService, Document } from '../document.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { SocialSharingService } from '../social-sharing.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss']
})
export class ViewPage implements OnInit, OnChanges {
  constructor(
    private documentService: DocumentService,
    private socialSharingService: SocialSharingService,
    private router: Router
  ) {
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

  ngOnInit() {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {}

  public share() {
    this.socialSharingService.share();
  }
}
