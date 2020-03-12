import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-stripesuccess',
  templateUrl: './stripesuccess.page.html',
  styleUrls: ['./stripesuccess.page.scss'],
})
export class StripesuccessPage implements OnInit {
  private serverUrl = 'https://swsignwriterapi.azurewebsites.net/';

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
    ) {}


  async ngOnInit() {
    const profile = await this.storage.GetCurrentUserProfile();
    if (!profile) {
      this.router.navigate(['/login']);
    }
    await this.getSubscriptionInfo();
  }

  async getSubscriptionInfo() {
    const session_id  = this.route.snapshot.paramMap.get('session_id');
    const profile = await this.storage.GetCurrentUserProfile();

      const subscriptionData = {
        privatekey: '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
        email: profile.email,
        sessionId: session_id
      };

      this.http.post(this.serverUrl + 'api/stripe/subscription', subscriptionData, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    });

    
  }
}
