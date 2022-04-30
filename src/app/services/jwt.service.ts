import { createVerify } from 'crypto-browserify';
import base64 from 'base64url';
import { JWKS } from '../jwk/jwk';
import * as jwkToPem from 'jwk-to-pem';
import { Injectable } from '@angular/core';
import { HttpService } from './httpService.service';

@Injectable({
  providedIn: 'root',
})
export class JWTService { 

  constructor(private httpService: HttpService) { }

  async getSignatureVerifyResult(JWT: string) {   
   
    var key = await this.getKey(JWT);    
    var pubKey = jwkToPem(key);

    if (!JWT || JWT === '') return false;
  
    const verifyFunction = createVerify('RSA-SHA256');
    
    const jwtToken = JWT.split('.');
    const jwtHeader = jwtToken[0];
    const jwtPayload = jwtToken[1];
    const jwtSignature = jwtToken[2];
  
    verifyFunction.write(`${jwtHeader}.${jwtPayload}`);
    verifyFunction.end();
  
    const jwtSignatureBase64 = base64.toBase64(jwtSignature);
    const signatureIsValid = verifyFunction.verify(pubKey, jwtSignatureBase64, 'base64');
  
    return signatureIsValid; // true
  }

  async getKey(token: string){
    var stringHeader = atob(token.split(".")[0]);
    var kid = JSON.parse(stringHeader).kid;
    var keys = await this.fetchKeys();

    return keys.keys.find(key => key.kid === kid);        
  }

  fetchKeys(): Promise<JWKS> {
    return new Promise(resolve => {
     this.httpService.JWK().subscribe(response => resolve(response as JWKS));    
    });  
  } 
}
