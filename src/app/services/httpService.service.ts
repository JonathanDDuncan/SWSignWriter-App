import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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

    GetPuddle(puddle: string): Observable<object>{
        const options = {        
            params: new HttpParams().append('UI', "1").append("sign", puddle)
        }    

        return this.http.post(this.serverUrl + 'api/Puddle/GetPuddle', { }, options);    
    }
}