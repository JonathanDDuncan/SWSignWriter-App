import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as convert from 'xml-js';
import { UploadFile } from 'ngx-file-drop';

export interface Entry {
  key: string;
  attributes?: any;
  glosses: string[];
  fsw: string;
}

export interface PuddleInfo {
  puddle: number;
}

export interface Puddle {
  puddleInfo: PuddleInfo;
  entries: Entry[];
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public files: UploadFile[] = [];
  private file: any;

  constructor(private storage: Storage) {}

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
    const result: Puddle = this.convertspml(spml);
    const puddlename = 'puddle_' + result.puddleInfo.puddle;

    // Save spml
    this.storage.set(puddlename, result);

    alert(result.entries.length + ' entries saved. To ' + puddlename);
    // Save to list of existing puddles
    this.savePuddleName(puddlename);
  }

  convertspml(xml: string): Puddle {
    const spmljs: any = convert.xml2js(xml, { compact: false });
    const puddleInfo: PuddleInfo = spmljs.elements[1].attributes;
    const result: Puddle = {
      puddleInfo: puddleInfo,
      entries: this.createEntries(spmljs, puddleInfo.puddle)
    };
    return result;
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

  private createEntries(spmljs: any, puddle: number): Entry[] {
    const entries: Entry[] = [];
    const elements: [any] = spmljs.elements[1].elements;
    // iterate over spmljs.elements[1].elements
    elements.forEach(element => {
      if (element && element.name === 'entry') {
        const entry = this.createEntry(element, puddle);
        if ((entry.fsw && entry.fsw !== '') || entry.glosses.length === 0) {
          entries.push(entry);
        } else {
          console.log('Bad spml entry');
          console.log(element);
          console.log(entry);
        }
      }
    });
    return entries;
  }

  private createEntry(
    element: { attributes: any; elements?: any },
    puddle: number
  ): Entry {
    let key = element.attributes.uuid;
    if (!key) {
      key = puddle + '_' + element.attributes.id;
    }

    const newEntry: Entry = {
      attributes: element.attributes,
      glosses: [],
      key: key,
      fsw: ''
    };

    this.addFswGlosses(element, newEntry);
    return newEntry;
  }

  private addFswGlosses(
    element: { attributes?: any; elements?: any },
    newEntry: Entry
  ) {
    // iterate over spmljs.elements[1].elements[].elements
    if (element && element.elements) {
      element.elements.forEach(entryelement => {
        // iterate over spmljs.elements[1].elements[].elements[].elements
        if (
          entryelement &&
          (entryelement.name === 'term' || entryelement.name === 'text') &&
          entryelement.elements
        ) {
          entryelement.elements.forEach(
            (node: {
              type: string;
              name: string;
              text: string;
              cdata: string;
            }) => {
              if (node.type === 'text') {
                newEntry.fsw = node.text;
              } else if ((node.type = 'cdata')) {
                newEntry.glosses.push(node.cdata.trim());
              }
            }
          );
        }
      });
    }
  }
}
