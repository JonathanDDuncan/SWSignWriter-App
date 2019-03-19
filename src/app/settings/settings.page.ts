import { Component, OnInit } from '@angular/core';
import {
  UploadEvent,
  UploadFile,
  FileSystemFileEntry,
  FileSystemDirectoryEntry
} from 'ngx-file-drop';
import * as convert from 'xml-js';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  constructor(private storage: Storage) {}
  private reader = new FileReader();
  public files: UploadFile[] = [];

  ngOnInit() {
    this.reader.onload = () => {
      const xml: string | ArrayBuffer = this.reader.result as string;
      this.saveSpml(xml);
    };
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // // Here you can access the real file
          // console.log(droppedFile.relativePath, file);
          if (droppedFile.relativePath.toLowerCase().endsWith('.spml')) {
            this.reader.readAsText(file);
          }
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  saveSpml(spml: string) {
    const result = this.convertspml(spml);
    const puddlename = 'puddle_' + result.puddleInfo.puddle;

    // Save spml
    this.storage.set(puddlename, result);

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

  convertspml(xml: string) {
    const spmljs: any = convert.xml2js(xml, { compact: false });

    const result = {
      puddleInfo: spmljs.elements[1].attributes,
      entries: this.createEntries(spmljs)
    };
    return result;
  }

  private createEntries(spmljs: any) {
    const entries = [];
    const elements: [any] = spmljs.elements[1].elements;
    // iterate over spmljs.elements[1].elements
    elements.forEach(element => {
      if (element && element.name === 'entry') {
        entries.push(this.createEntry(element));
      }
    });
    return entries;
  }

  private createEntry(element: { attributes: any; elements?: any }) {
    const newEntry: { attributes?: any; glosses: any; fsw?: any } = {
      attributes: element.attributes,
      glosses: []
    };
    this.addFswGlosses(element, newEntry);
    return newEntry;
  }

  private addFswGlosses(
    element: { attributes?: any; elements?: any },
    newEntry: { attributes?: any; glosses: any; fsw?: any }
  ) {
    // iterate over spmljs.elements[1].elements[].elements
    if (element && element.elements) {
      element.elements.forEach(entryelement => {
        // iterate over spmljs.elements[1].elements[].elements[].elements
        if (entryelement && entryelement.elements) {
          entryelement.elements.forEach(
            (node: { type: string; text: string; cdata: string }) => {
              if (node.type === 'text') {
                newEntry.fsw = node.text;
              } else if ((node.type = 'cdata')) {
                newEntry.glosses.push(node.cdata);
              }
            }
          );
        }
      });
    }
  }
}
