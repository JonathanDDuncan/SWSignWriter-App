import { TestBed } from '@angular/core/testing';

import { BrowserTypeService } from './browser-type.service';

describe('BrowserTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserTypeService = TestBed.get(BrowserTypeService);
    expect(service).toBeTruthy();
  });
});
