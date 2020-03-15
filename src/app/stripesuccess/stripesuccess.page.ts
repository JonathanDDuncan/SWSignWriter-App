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
    const profile = await this.storage.GetCurrentUserProfile();
    this.route.queryParamMap
      .subscribe((params: any) => {
      const sessionid = params.params['session_id'];
      const subscriptionData = {
        privatekey: '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
        email: profile.email,
        sessionId: sessionid
      };

      this.http.post(this.serverUrl + 'api/stripe/session', subscriptionData, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    }).subscribe((data: any) => {
      console.log(data);
      this.storage.SaveSubscriptionEndDate(data.email, data.SubscriptionEndDate);
    });
    });
  }
}
