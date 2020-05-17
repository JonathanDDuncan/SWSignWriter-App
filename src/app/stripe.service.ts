import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private http: HttpClient,
    private storage: StorageService
  ) { }
  private serverUrl = 'https://swsignwriterapi.azurewebsites.net/';
  public async  GetandSaveStripeSubscriptionData(
    email: string,
    sessionId: string = null
  ) {

    const subscriptionData = {
      privatekey:
        '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
      email: email,
      sessionId: sessionId
    };

    const observer = {
      next: (data: any) => {
        if ((data)) {
          this.storage.SaveSubscription(
            data.Email,
            data.SubscriptionEndDate,
            data.CancelAtPeriodEnd
          );
        }
      },
      error: err => console.error('Error occured: ' + err),
      complete: () => console.log('Execution completed')
    };
    this.http.post(this.serverUrl + 'api/stripe/session', subscriptionData, {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    }).subscribe(observer);
  }
}
