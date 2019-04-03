import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UploadFile } from 'ngx-file-drop';
import { SpmlService, Puddle } from './spml.service';




@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public files: UploadFile[] = [];
  private file: any;

  constructor(private storage: Storage, private spmlService: SpmlService) { }

  async loadDefaultPuddles() {
    // const puddlesExists = await this.puddlesExists();
    // if (!puddlesExists) {
    //   this.loadDefaultSpml();
    // }
  }

  loadFile(file: any): any {
    const reader = new FileReader();
    reader.onload = () => {
      const xml: string | ArrayBuffer = reader.result as string;
      this.saveSpml(xml);
    };
    reader.readAsText(file);
  }

  loadDefaultSpml(): any {
    this.file.name = 'sgn2000.spml';
    this.file
      .readAsText(
        this.file.applicationDirectory + 'www/assets/spml',
        'data.text'
      )
      .then((xml: string) => {
        this.saveSpml(xml);
      });
  }
  async puddlesExists(): Promise<boolean> {
    const puddles = await this.storage.get('puddles');

    if (puddles) {
      return true;
    } else {
      return false;
    }
  }

  saveSpml(spml: string) {
    const result: Puddle = this.spmlService.convertspml(spml);
    const puddlename = 'puddle_' + result.puddleInfo.puddle;

    // Save spml
    this.storage.set(puddlename, result);

    alert(result.entries.length + ' entries saved. To ' + puddlename);
    // Save to list of existing puddles
    this.savePuddleName(puddlename);
  }

  private savePuddleName(puddlename: string) {
    this.storage.get('puddles').then(puddles => {
      if (!puddles) {
        puddles = [];
      }
      if (!puddles.includes(puddlename)) {
        puddles.push(puddlename);
        this.storage.set('puddles', puddles);
      }
    });
  }


}
