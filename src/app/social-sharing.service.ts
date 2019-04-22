import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class SocialSharingService {
  constructor(private socialSharing: SocialSharing,
    private translateService: TranslateService) {}

  public share(image: HTMLImageElement) {
    // Check if sharing via email is supported
    this.socialSharing
      .canShareViaEmail()
      .then(() => {
        alert(this.translateService.instant('Sharing via email is possible'));
        // Sharing via email is possible
        // Share via email
        this.socialSharing
          .shareViaEmail(this.translateService.instant('Body') + image, 
          this.translateService.instant('Subject'), ['duncanjonathan@yahoo.ca'])
          .then(() => {
            alert(this.translateService.instant('email sent'));
            // Success!
          })
          .catch(() => {
            alert(this.translateService.instant('Error sending email'));
            // Error!
          });
      })
      .catch(() => {
        // Sharing via email is not possible
        alert(this.translateService.instant('Social sharing by email not available'));
      });

    this.socialSharing
      .canShareVia('whatsapp')
      .then(() => {
        alert(this.translateService.instant('Sharing via whatsapp is possible'));
        // Sharing via whatsapp is possible
        // Share via whatsapp
        this.socialSharing
          .shareViaWhatsApp(this.translateService.instant('Body'), image.src, null)
          .then(() => {
            alert(this.translateService.instant('whatsapp sent'));
            // Success!
          })
          .catch(() => {
            alert(this.translateService.instant('Error sending whatsapp'));
            // Error!
          });
      })
      .catch(() => {
        // Sharing via whatsapp is not possible
        alert(this.translateService.instant('Social sharing by whatsapp not available'));
      });
  }
}
