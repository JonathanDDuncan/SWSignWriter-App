import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrialService {
  private serverUrl = "https://swsignwriterapi.azurewebsites.net/";

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) { }

  async StartTrial(sub: string): Promise<TrialResponse>{
    debugger;
    var jwt = await this.storage.GetJWTToken();
    return await this.StartTrialRequest(sub, jwt).toPromise();  
  }

  async HasStartedTrial(sub: string): Promise<boolean>{
    var number = await this.GetTrialDaysLeft(sub);
    return number !== null;
  }

   async GetTrialDaysLeft(sub: string): Promise<number> {
    debugger;
    var jwt = await this.storage.GetJWTToken();
    var response = await this.GetTrial(sub, jwt).toPromise();  
    if(response.TrialStartDate !== null){
      var startDate = new Date(response.TrialStartDate);
      const diff = Math.abs(Date.now() - startDate.getTime());
      return 15 - Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }

    return null;
    


   
    // const trialLength = 15;
    // const trialStartDate: Date = await this.storage.GetTrialStartDate(email);
    // let daysLeft: number;
    // if (trialStartDate != null) {
    //   const diff = Math.abs(new Date().getTime() - trialStartDate.getTime());
    //   daysLeft = trialLength - Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    // }
    // return (trialStartDate != null && daysLeft > 0) ? daysLeft : 0;
  }

  private GetTrial( sub: string, jwt: string ): Observable<TrialResponse>{   

    const options = {
      headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt),
      params: new HttpParams().append('sub', sub)
    }     
    
    return this.http.get<TrialResponse>(this.serverUrl + 'api/Users/GetTrial', options);
  }

  private StartTrialRequest( sub: string, jwt: string ): Observable<TrialResponse>{   

    const options = {
      headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json').append('Authorization', jwt),
      params: new HttpParams().append('sub', sub)
    } 
    
    var params = new HttpParams().append('sub', sub);
    debugger;
    return this.http.get<TrialResponse>(this.serverUrl + 'api/Users/StartTrial?sub=' + sub, { headers: { 'Authorization': jwt} });
  }
}

export interface TrialResponse {  
  TrialStartDate: string;
  TrialEndDate: string; 
}
