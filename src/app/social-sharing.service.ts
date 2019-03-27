import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Injectable({
  providedIn: 'root'
})
export class SocialSharingService {
  constructor(private socialSharing: SocialSharing) {}

  public share() {
    // Check if sharing via email is supported
    this.socialSharing
      .canShareViaEmail()
      .then(() => {
        alert('Sharing via email is possible');
        // Sharing via email is possible
        // Share via email
        this.socialSharing
          .shareViaEmail('Body', 'Subject', ['duncanjonathan@yahoo.ca'])
          .then(() => {
            alert('email sent');
            // Success!
          })
          .catch(() => {
            alert('Error sending email');
            // Error!
          });
      })
      .catch(() => {
        // Sharing via email is not possible
        alert('Social sharing by email not available');
      });

    this.socialSharing
      .canShareVia('whatsapp')
      .then(() => {
        alert('Sharing via whatsapp is possible');
        // Sharing via whatsapp is possible
        // Share via whatsapp
        this.socialSharing
          .shareViaWhatsApp('Body', null, null)
          .then(() => {
            alert('whatsapp sent');
            // Success!
          })
          .catch(() => {
            alert('Error sending whatsapp');
            // Error!
          });
      })
      .catch(() => {
        // Sharing via whatsapp is not possible
        alert('Social sharing by whatsapp not available');
      });
  }
}
