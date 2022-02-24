import { Injectable } from '@angular/core';
import * as convert from 'xml-js';
//import { elementStart } from '@angular/core/src/render3';

export interface Entry {
  key: string;
  attributes?: any;
  glosses: string[];
  fsw: string;
}

export interface PuddleInfo {
  puddle: number;
  puddleName: string;
}

export interface Puddle {
  puddleInfo: PuddleInfo;
  entries: Entry[];
}

@Injectable({
  providedIn: 'root'
})


export class SpmlService {

  constructor() { }

  convertspml(xml: string): Puddle {
    const spmljs: any = convert.xml2js(xml, { compact: false });
    const smpl = spmljs && spmljs.elements.length > 1 ? spmljs.elements[1] : undefined;
    const puddleInfo: PuddleInfo = smpl ?  smpl.attributes : undefined;
        puddleInfo.puddleName  = smpl
      && smpl.elements
      && smpl.elements.length > 0
      && smpl.elements[0].elements
      && smpl.elements[0].elements.length > 0
    ?  smpl.elements[0].elements[0].cdata : undefined;
    const result: Puddle = {
      puddleInfo: puddleInfo,
      entries: this.createEntries(spmljs, puddleInfo.puddle)
    };
    return result;
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
    const self = this;
    // iterate over spmljs.elements[1].elements[].elements
    if (element && element.elements) {
      element.elements.forEach(entryelement => {
        // iterate over spmljs.elements[1].elements[].elements[].elements
        if (
          entryelement &&
          (entryelement.name === 'term') &&
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
              } else if (node.type === 'cdata') {
                newEntry.glosses.push(self.cleangloss(node.cdata));
              }
            }
          );
        }
      });
    }
  }

  private cleangloss(gloss: string): string {
    if (gloss.indexOf('SWS-TAG') !== -1) {
      gloss = '';
    }
    if (gloss && gloss.length > 1) {
      return gloss.trim().replace('  ', ' ').replace('   ', ' ').replace('    ', ' ').replace('     ', ' ')
      .replace(',', '').replace('.', '').replace('?', '')
      .replace('!', '').replace('(', '').replace(')', '').replace('"', '').replace(/\s+/g, '-')
      .replace('--', '-').replace('---', '-').replace('----', '-');
    } else {
      return gloss;
    }
  }
}
