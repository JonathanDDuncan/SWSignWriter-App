import { UserProfile } from './user/user-profile';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Puddle } from './spml.service';
import { JWTService } from './services/jwt.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  private puddleskey = 'puddles';
  private defaultkey = 'default';
  private uiLanguagekey = 'uiLanguage';
  private userCurrentProfilekey = 'userCurrentProfile';
  private firstTimekey = 'firstTime';
  private serverUrl = "https://swsignwriterapi.azurewebsites.net/";

  constructor(private storage: Storage, 
    private jwtService: JWTService,
    private http: HttpClient) { }

  async puddlesExists(): Promise<boolean> {
    const puddles = await this.storage.get(this.puddleskey);

    if (puddles) {
      return true;
    } else {
      return false;
    }
  }

  async savePuddle(puddlename: string, result: Puddle): Promise<{name: string, puddlename: string, entries: number }> {
    await this.storage.set(puddlename, result);
    const name = result.puddleInfo.puddleName;
    // Save to list of existing puddles
    await this.savePuddleName(puddlename);
    return { name: name, puddlename: puddlename, entries: result.entries.length };
  }

  private async savePuddleName(puddlename: string): Promise<void> {
    let puddles = await this.storage.get(this.puddleskey);

    if (!puddles) {
      puddles = [];
    }
    if (!puddles.includes(puddlename)) {
      puddles.push(puddlename);
      await this.storage.set(this.puddleskey, puddles);
    }
    return;
  }

  async setDefaultPuddleLoaded(defaultPuddle: boolean): Promise<any> {
    return await this.storage.set(this.defaultkey, defaultPuddle);
  }

  async getDefaultPuddleLoaded(): Promise<string> {
    return await this.storage.get(this.defaultkey);
  }

  async removeDefaultPuddles(): Promise<void> {
    const defaultPuddle = await this.getDefaultPuddleLoaded();
    if (defaultPuddle) {
      await this.removeAllPuddles();
    }
    return;
  }

  async removeAllPuddles() {
    await this.storage.get(this.puddleskey).then(async (puddles: string[]) => {
      if (puddles) {
        puddles.forEach(async (puddle: string) => {
          if (puddle && puddle.startsWith('puddle_')) {
            await this.storage.remove(puddle);
          }
        });
        await this.storage.remove(this.puddleskey);
      }
    });
  }

  saveUILanguage(language: string) {
    this.storage.set(this.uiLanguagekey, language);
  }

  async getUILanguage(): Promise<string> {
    return await this.storage.get(this.uiLanguagekey);
  }

  SaveCurrentUserProfile(userProfile: UserProfile) {
    // Save locally
    debugger;
    this.storage.set(this.userCurrentProfilekey, userProfile);

    // Save in DB
    this.SaveUserDB();

  }

  SaveUserDB(){

    var token = environment.jwtToken;
    var verifiedJWT = this.jwtService.getSignatureVerifyResult(environment.jwtToken);

    if(verifiedJWT){
      this.http.post(this.serverUrl + 'Authenticate/test', {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        })
      }).subscribe(response => {
        console.log('response', response)
        //this._jwtToken.next(response.json())
      });
    }
    

  }

  async GetCurrentUserProfile(): Promise<UserProfile> {
    console.log(this.userCurrentProfilekey);
    return await this.storage.get(this.userCurrentProfilekey);
  }

  async getFirstTime(): Promise<boolean> {
    try {
      return await this.storage.get(this.firstTimekey);
    } catch {
      return true;
    }
  }

  async saveFirstTime() {
    await this.storage.set(this.firstTimekey, false);
  }

  SaveSubscription(email: string, endDate: Date, cancelatperiodend: boolean): void {
    const key = this.Obfuscate(email + 'subscriptionEndDate');
    const subscription = this.Obfuscate( JSON.stringify({ endDate: endDate, cancelatperiodend: cancelatperiodend}) );
    this.storage.set(key, subscription);
  }

  async GetSubscription(email: string): Promise<{endDate: Date, cancelatperiodend: boolean }> {
    const key = this.Obfuscate(email + 'subscriptionEndDate');
    const value = await this.storage.get(key);
    let subscription: {endDate: Date, cancelatperiodend: boolean };
    if (value) {
      const cleaned = this.Clean(value);
      subscription  = JSON.parse(atob(cleaned));
    }
    return subscription;
  }

  Clean(value: string): string {
    if (value) {
      const stripped = value.replace(/[^A-Za-z0-9+-]/g, '');
      return stripped;
    }
    return null;
  }

  Obfuscate(str: string): string {
    let obf1 = '%%' + btoa(str) + '%%';
    const insert = ['!', '"', '#', '$', '%', '&', '(', ')', '*'];
    let count = 0;
    for (let index = 0; index < obf1.length; index++) {
      const element = obf1[index];
      if (index % 5 === 0) {
        count = count > 8 ? 0 : count;
        obf1 = this.InsertChar(obf1, insert[count], index);
      }
    }
    return obf1;
  }

  InsertChar(a: string, b: string, index: number): string {
    return a.substr(0, index) + b + a.substr(index);
  }

  async GetTrialStartDate(email: string) {
    const key = this.Obfuscate(email + 'trialStartDate');
    const value = await this.storage.get(key);
    const cleaned = atob(this.Clean(value));

    if (cleaned && cleaned !== 'ée') {
      const endDate = new Date(cleaned);
      return endDate;
    } else {
      return null;
    }
  }

  SaveTrialStartDate(email: string, startDate: Date): void {
    const key = this.Obfuscate(email + 'trialStartDate');
    const date = this.Obfuscate(startDate.toString());
    this.storage.set(key, date);
  }
}
