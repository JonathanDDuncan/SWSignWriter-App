import { NormalizationService } from './normalization.service';
import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SignsLookupService } from './signs-lookup.service';

describe('SignsLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [NormalizationService],
    imports: [IonicStorageModule.forRoot({
      name: '__testswsignwriterdb'
    })]
  }));

  it('should be created', () => {
    const service: SignsLookupService = TestBed.get(SignsLookupService);
    expect(service).toBeTruthy();
  });
});
