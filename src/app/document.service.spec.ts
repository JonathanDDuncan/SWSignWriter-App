import { TestBed } from '@angular/core/testing';

import { DocumentService } from './document.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SignsLookupService } from './signs-lookup.service';
describe('DocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SignsLookupService], imports: [IonicStorageModule.forRoot({
      name: '__testswsignwriterdb'
    })]
  }));

  it('should be created', () => {
    const service: DocumentService = TestBed.get(DocumentService);
    expect(service).toBeTruthy();
  });
});
