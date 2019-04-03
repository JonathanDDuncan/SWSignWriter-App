import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

import { UploadFile } from 'ngx-file-drop';
import { SpmlService, Puddle } from './spml.service';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public files: UploadFile[] = [];
  data: string;

  constructor(private spmlService: SpmlService, private storageService: StorageService, private http: HttpClient) { }

  async loadDefaultPuddles() {
    const puddlesExists = await this.storageService.puddlesExists();
    if (!puddlesExists) {
      const filename = 'assets/spml/' + 'sgn2000.spml';

      return this.http.get(filename, { responseType: 'text' })
        .subscribe(xml => {
          this.saveSpml(xml);
          this.storageService.setDefaultPuddleLoaded(true);
        });
    }
  }

  async loadFile(file: File) {
    const defaultLoaded: boolean = await this.storageService.getDefaultPuddleLoaded();
    if (defaultLoaded) {
      await this.storageService.removeDefaultPuddles();
      this.readFile(file);
    } else {
      this.readFile(file);
    }
  }

  private readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const xml: string | ArrayBuffer = reader.result as string;
      this.saveSpml(xml);
      this.storageService.setDefaultPuddleLoaded(false);
    };
    reader.readAsText(file);
  }

  saveSpml(spml: string) {
    const result: Puddle = this.spmlService.convertspml(spml);
    const puddlename = 'puddle_' + result.puddleInfo.puddle;

    // Save spml
    this.storageService.savePuddle(puddlename, result);
  }
}
