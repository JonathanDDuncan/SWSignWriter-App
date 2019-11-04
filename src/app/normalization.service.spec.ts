import { TestBed } from '@angular/core/testing';

import { NormalizationService } from './normalization.service';

describe('NormalizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NormalizationService = TestBed.get(NormalizationService);
    expect(service).toBeTruthy();
  });
});

describe('NormalizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be normalize the accents', () => {
    const service: NormalizationService = TestBed.get(NormalizationService);
    const given = 'æäåáàãâçčéêèëēîïíiœöñóõôśšüùúŭßё';
    const expectedresult = 'aeaeaaaaaacceeeeeiiiioeoenooossueuuussе';

    expect(service.normalizeForSearch(given)).toEqual(expectedresult);
  });
});

describe('NormalizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be normalize the upercase accents', () => {
    const service: NormalizationService = TestBed.get(NormalizationService);
    const given = 'æäåáàãâçčéêèëēîïíiœöñóõôśšüùúŭßё'.toUpperCase();
    const expectedresult = 'aeaeaaaaaacceeeeeiiiioeoenooossueuuussе';

    expect(service.normalizeForSearch(given)).toEqual(expectedresult);
  });
});
