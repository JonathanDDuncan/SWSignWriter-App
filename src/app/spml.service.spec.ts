import { TestBed } from '@angular/core/testing';

import { SpmlService } from './spml.service';

describe('SpmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpmlService = TestBed.get(SpmlService);
    expect(service).toBeTruthy();
  });
});
