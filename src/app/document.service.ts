import { Injectable } from '@angular/core';
import { EntryResult } from './signs-lookup.service';

export interface Document {
  signs: EntryResult[];
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private document: Document;

  constructor() {
    this.clearDocument();
  }

  clearDocument(): void {
    this.document = this.newDocument();
  }

  newDocument(): Document {
    return { signs: [] };
  }

  getDocument(): Document {
    return this.cloneDocument(this.document);
  }

  updateDocument(document: Document): void {
    this.document = document;
  }

  updateSigns(signs: EntryResult[]): void {
    const document = this.getDocument();
    document.signs = signs;
    this.updateDocument(document);
  }

  cloneDocument(document: Document): Document {
    const clonedDocument: Document = this.cloneObject(document);
    clonedDocument.signs = this.cloneArray(clonedDocument.signs);
    return clonedDocument;
  }

  cloneArray(arr) {
    return Object.assign([], arr);
  }

  cloneObject(obj) {
    return Object.assign({}, obj);
  }

  getFSW(): string {
    let fsw = '';
    this.document.signs.forEach(sign => {
      fsw += sign.fsw + ' ';
    });
    return fsw;
  }
}
