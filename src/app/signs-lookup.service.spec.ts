import { TestBed } from '@angular/core/testing';

import { SignsLookupService } from './signs-lookup.service';

describe('SignsLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignsLookupService = TestBed.get(SignsLookupService);
    expect(service).toBeTruthy();
  });
});
