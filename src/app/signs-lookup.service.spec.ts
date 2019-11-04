import { NormalizationService } from './normalization.service';
import { TestBed } from '@angular/core/testing';
import { Storage, IonicStorageModule } from '@ionic/storage';
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
