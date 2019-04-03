import { SignsLookupService } from './signs-lookup.service';
import { DocumentService } from './document.service';
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

  constructor(private spmlService: SpmlService,
    private storageService: StorageService,
    private signsLookupService: SignsLookupService,
    private http: HttpClient) { }

  async loadDefaultPuddles() {
    const puddlesExists = await this.storageService.puddlesExists();
    if (!puddlesExists) {
      const filename = 'assets/spml/' + 'sgn2000.spml';

      return this.http.get(filename, { responseType: 'text' })
        .subscribe(async xml => {
          await this.saveSpml(xml);
          this.signsLookupService.loadSigns();
          this.storageService.setDefaultPuddleLoaded(true);
        });
    }
  }

  async loadFile(file: File) {
    const defaultLoaded: string = await this.storageService.getDefaultPuddleLoaded();
    if (defaultLoaded) {
      await this.storageService.removeDefaultPuddles();
    }

    this.readFile(file);
  }

  private  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = async () => {
      const xml: string | ArrayBuffer = reader.result as string;
      await this.saveSpml(xml);
      this.signsLookupService.loadSigns();
      this.storageService.setDefaultPuddleLoaded(false);
    };
    reader.readAsText(file);
  }

  async saveSpml(spml: string) {
    const result: Puddle = this.spmlService.convertspml(spml);
    const puddlename = 'puddle_' + result.puddleInfo.puddle;

    // Save spml
    await this.storageService.savePuddle(puddlename, result);
    return;
  }
}
