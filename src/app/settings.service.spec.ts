import { IonicStorageModule } from '@ionic/storage';
import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [IonicStorageModule.forRoot({
    name: '__testquicksigndocumentdb'
  })]}));

  it('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });
});
