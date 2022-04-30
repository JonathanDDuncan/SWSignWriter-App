import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrialResponse } from '../core/models/trialResponse.models';
import { StorageService } from '../storage.service';
import { HttpService } from './httpService.service';

@Injectable({
  providedIn: 'root'
})
export class TrialService {  

  constructor(
    private storage: StorageService,
    private httpService: HttpService
  ) { }

  async StartTrial(sub: string): Promise<TrialResponse>{
    var jwt = await this.storage.GetJWTToken();
    return await this.httpService.StartTrialRequest(sub, jwt).toPromise();  
  }

  async HasStartedTrial(sub: string): Promise<boolean>{
    var number = await this.GetTrialDaysLeft(sub);
    return number !== null;
  }

   async GetTrialDaysLeft(sub: string): Promise<number> {
    var jwt = await this.storage.GetJWTToken();
    var response = await this.httpService.GetTrial(sub, jwt).toPromise();  
    if(response.TrialStartDate !== null){
      var startDate = new Date(response.TrialStartDate);
      const diff = Math.abs(Date.now() - startDate.getTime());
      return 15 - Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }
    return null;     
  }  
}