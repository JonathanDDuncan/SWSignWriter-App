import * as crypto from "crypto";
import base64 from 'base64url';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { IServerCredential } from "../core/models/serverCredential.models"

// request

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  private _jwtToken = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) { }

  private serverUrl = "https://swsignwriterapi.azurewebsites.net/";

  fetchJWTToken(credentials: IServerCredential){
    this.http.post(this.serverUrl + 'Authenticate/login', credentials , {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        })
      }).subscribe(response => {
        console.log('response', response)
        //this._jwtToken.next(response.json())
      });
  }

  getSignatureVerifyResult(JWT) {
    if (!JWT || JWT === '') return false;
  
    const verifyFunction = crypto.createVerify('RSA-SHA256');
  
    const PUB_KEY = Buffer.from(environment.publicKey, 'utf-8').toString();
  
    const jwtToken = JWT.split('.');
    const jwtHeader = jwtToken[0];
    const jwtPayload = jwtToken[1];
    const jwtSignature = jwtToken[2];
  
    verifyFunction.write(`${jwtHeader}.${jwtPayload}`);
    verifyFunction.end();
  
    const jwtSignatureBase64 = base64.toBase64(jwtSignature);
    const signatureIsValid = verifyFunction.verify(PUB_KEY, jwtSignatureBase64, 'base64');
  
    return signatureIsValid; // true
  }
}
