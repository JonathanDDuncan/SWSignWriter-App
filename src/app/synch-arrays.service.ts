import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SynchArraysService {
  constructor() { }

  synchzip(a: any[], b: any[], gettera: (item: any) => any, getterb: (item: any) => any, blank: any): { item1: any, item2: any }[] {
    const [array1, array2] = this.synch(a, b, gettera, getterb, blank);
    return this.zip(array1, array2);
  }

  zip(a: any[], b: any[]): { item1: any, item2: any }[] {
    if (a.length !== b.length) {
      throw new Error('Both arrays must be of the same length');
    }
    const c: { item1: any, item2: any }[] = [];
    for (let i = 0; i < a.length; i++) {
      c.push({ item1: a[i], item2: b[i] });
    }
    return c;
  }

  synch(a: any[], b: any[], gettera: (item: any) => any, getterb: (item: any) => any, blank: any): [any[], any[]] {
    const diff = a.length - b.length;
    let result: [any[], any[]];
    switch (diff) {
      case -1: result = this.remove1(a, b, gettera, getterb);
        break;
      case 0: result = [a, b];
        break;
      case 1: result = this.add1(a, b, gettera, getterb, blank);
        break;
      default:
        if (diff < -1) {
          result = this.removemore(a, b, gettera, getterb, blank);
        } else if (diff > 1) {
          result = this.add1(a, b, gettera, getterb, blank);
        }
    }
    return result;
  }

  add1(a: any[], b: any[], gettera: (item: any) => any, getterb: (item: any) => any, blank: any): [any[], any[]] {
    const aprime: any[] = [];
    const bprime: any[] = [];
    let offset = 0;
    for (let i = 0; i < a.length; i++) {
      if (a && a[i] && b && b[i - offset] && gettera(a[i]) === getterb(b[i - offset])) {
        aprime.push(a[i]);
        bprime.push(b[i - offset]);
      } else {
        aprime.push(a[i]);
        bprime.push(blank);
        offset = 1;
      }
    }
    return [aprime, bprime];
  }
  remove1(a: any[], b: any[], gettera: (item: any) => any, getterb: (item: any) => any): [any[], any[]] {
    const aprime: any[] = [];
    const bprime: any[] = [];
    const offset = 1;
    for (let i = 0; i < a.length; i++) {
      if (gettera(a[i] === getterb(b[i]))) {
        aprime.push(a[i]);
        bprime.push(b[i]);
      } else if (gettera(a[i] === getterb(b[i + offset]))) {
        aprime.push(a[i]);
        bprime.push(b[i + offset]);
      }
    }
    return [aprime, bprime];
  }

  removemore(a: any[], b: any[], gettera: (item: any) => any, getterb: (item: any) => any, blank: any): [any[], any[]] {
    const aprime: any[] = [];
    const bprime: any[] = [];
    for (let i = 0; i < a.length; i++) {
      aprime.push(a[i]);
      if (gettera(a[i] === getterb(b[i]))) {
        bprime.push(b[i]);
      } else {
        let match: string;
        for (let j = i + 1; j < b.length; j++) {
          if (gettera(a[i] === getterb(b[j]))) {
            match = b[j];
          }
        }
        if (match) {
          bprime.push(match);
        } else {
          bprime.push(blank);
        }
      }
    }
    return [aprime, bprime];
  }
}
