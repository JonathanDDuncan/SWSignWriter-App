import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-stripesuccess',
  templateUrl: './stripesuccess.page.html',
  styleUrls: ['./stripesuccess.page.scss'],
})
export class StripesuccessPage implements OnInit {
  private serverUrl = 'https://swsignwriterapi.azurewebsites.net/';

  constructor(
    private http: HttpClient,
    private storage: StorageService
    ) {}


  async ngOnInit() {
    await this.getSubscriptionInfo();
  }

  async getSubscriptionInfo() {
    const profile = await this.storage.GetCurrentUserProfile();
      const subscriptionData = {
        privatekey: '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
        email: profile.email
      };

      this.http.post(this.serverUrl + 'api/stripe/subscription', subscriptionData, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    });
  }
}
