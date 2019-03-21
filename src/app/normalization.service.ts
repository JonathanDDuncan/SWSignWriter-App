import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormalizationService {
  constructor() {}

  // Excerpted from https://github.com/ikr/normalize-for-search/blob/master/src/normalize.js added ñ
  normalizeForSearch(s: string): string {
    function filter(c: string) {
      switch (c) {
        case 'æ':
        case 'ä':
          return 'ae';

        case 'å':
          return 'aa';

        case 'á':
        case 'à':
        case 'ã':
        case 'â':
          return 'a';

        case 'ç':
        case 'č':
          return 'c';

        case 'é':
        case 'ê':
        case 'è':
        case 'ë':
        case 'ē':
          return 'e';

        case 'î':
        case 'ï':
        case 'í':
          return 'i';

        case 'œ':
        case 'ö':
          return 'oe';

        case 'ñ':
          return 'n';

        case 'ó':
        case 'õ':
        case 'ô':
          return 'o';

        case 'ś':
        case 'š':
          return 's';

        case 'ü':
          return 'ue';

        case 'ù':
        case 'ú':
        case 'ŭ':
          return 'u';

        case 'ß':
          return 'ss';

        case 'ё':
          return 'е';

        default:
          return c;
      }
    }

    let normalized = '';
    let i: number, l: number;
    s = s.toLowerCase();
    for (i = 0, l = s.length; i < l; i = i + 1) {
      normalized = normalized + filter(s.charAt(i));
    }
    return normalized;
  }
}
