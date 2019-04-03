import { StorageService } from './storage.service';
import { Injectable, OnInit } from '@angular/core';

import { UploadFile } from 'ngx-file-drop';
import { SpmlService, Puddle } from './spml.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public files: UploadFile[] = [];
  private file: any;

  constructor(private spmlService: SpmlService, private storageService: StorageService) { }

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

  saveSpml(spml: string) {
    const result: Puddle = this.spmlService.convertspml(spml);
    const puddlename = 'puddle_' + result.puddleInfo.puddle;

    // Save spml
    this.storageService.savePuddle(puddlename, result);
  }
}
