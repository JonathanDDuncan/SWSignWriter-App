import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IsUserSubscribedResponse } from "../core/models/isUserSubscribedResponse.model";
import { TrialResponse } from "../core/models/trialResponse.models";
import { UserProfile } from "../user/user-profile";

@Injectable({
    providedIn: 'root'
  })
  export class HttpService {    
    private serverUrl = "https://swsignwriterapi.azurewebsites.net/";
    //private serverUrl = "https://localhost:44310/";
    constructor(
        private http: HttpClient  
    ){       
    }

    VerifyUserSubscriptionAndroidRequest(user: UserProfile, subscriptionId: string, purchaseToken: string, jwt: string){
      const options = {
        headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt)       
      }         
        
      return this.http.post(this.serverUrl + 'api/Users/VerifyUserSubscriptionAndroid', { email: user.email, sub: user.sub, subscriptionId, purchaseToken }, options);
    }

    IsUsersSubscribeRequest( jwt: string, user: UserProfile, checkAndroid: boolean ): Observable<IsUserSubscribedResponse>{   

      const options = {
        headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt),
        params: new HttpParams().append('sub', user.sub).append('checkAndroid', String(checkAndroid))
      }         
        
      return this.http.post<IsUserSubscribedResponse>(this.serverUrl + 'api/Users/IsUserSubscribed', { }, options);
    }

    GetPuddle(puddle: string): Observable<object>{
        const options = {        
            params: new HttpParams().append('UI', "1").append("sign", puddle)
        }    

        return this.http.post(this.serverUrl + 'api/Puddle/GetPuddle', { }, options);    
    }

    public StartTrialRequest( sub: string, jwt: string ): Observable<TrialResponse>{   

        const options = {
          headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt),
          params: new HttpParams().append('sub', sub)
        }         
        
        return this.http.get<TrialResponse>(this.serverUrl + 'api/Users/StartTrial?sub=' + sub, { headers: { 'Authorization': jwt} });
    }

    public GetTrial( sub: string, jwt: string ): Observable<TrialResponse>{   

        const options = {
          headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt),
          params: new HttpParams().append('sub', sub)
        }     
        
        return this.http.get<TrialResponse>(this.serverUrl + 'api/Users/GetTrial', options);
    }

    public JWK(){
        return this.http.get("https://swsignwriter-dev.auth0.com/.well-known/jwks.json" , {
            headers: new HttpHeaders({
              Accept: 'application/json',
              'Content-Type': 'application/json'
            })
        })
    }

    public UserLinkRequest( jwt: string, sub: string, purchaseToken: string ): Observable<IsUserSubscribedResponse>{   

        const options = {
          headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt),
          params: new HttpParams().append('sub', sub).append('purchaseToken', purchaseToken)
        }     
        
        return this.http.post<IsUserSubscribedResponse>(this.serverUrl + 'api/Users/CheckUserLinkedToAndroidSubscription', { }, options);
    }

    public SaveUserSubscription(token: string, isSubscribed: boolean, type: string){
        const options = {
            headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json'),
            params: new HttpParams().append('token', token).append('isSubscribed', isSubscribed.toString()).append('subscriptionType', type)
          }        
  
        return this.http.post(this.serverUrl + 'api/Users/SaveUserSubscription', { }, options)
    }

    public SaveUser(token:string){
        const options = {
            headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json'),
            params: new HttpParams().append('token', token)
          }        
  
        return this.http.post(this.serverUrl + 'api/Users/SaveUser', { }, options)
    }
}