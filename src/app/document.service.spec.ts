import { TestBed } from '@angular/core/testing';

import { DocumentService } from './document.service';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { SignsLookupService } from './signs-lookup.service';
describe('DocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SignsLookupService], imports: [IonicStorageModule.forRoot({
      name: '__testquicksigndocumentdb'
    })]
  }));

  it('should be created', () => {
    const service: DocumentService = TestBed.get(DocumentService);
    expect(service).toBeTruthy();
  });
});
