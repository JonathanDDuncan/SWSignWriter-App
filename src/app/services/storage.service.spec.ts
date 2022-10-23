import { IonicStorageModule } from '@ionic/storage';
import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [IonicStorageModule.forRoot({
    name: '__testswsignwriterdb'
  })]}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });
});
