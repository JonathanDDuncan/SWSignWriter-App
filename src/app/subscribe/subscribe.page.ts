import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  constructor(private http: HttpClient, private storage: StorageService  ) { }
  private serverUrl = 'https://localhost:44309/'
  ngOnInit() {
  }

  async SubscribeMonthly(){
    const profile = await this.storage.GetCurrentUserProfile();
    console.log(profile);

    this.http.post(this.serverUrl + 'api/stripe/sendclient', profile, { headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }) })
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  SubscribeYearly() {

  }
}
