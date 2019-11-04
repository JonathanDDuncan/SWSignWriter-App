import { TestBed } from '@angular/core/testing';

import { SocialSharingService } from './social-sharing.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

describe('SocialSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [SocialSharing] }));

  it('should be created', () => {
    const service: SocialSharingService = TestBed.get(SocialSharingService);
    expect(service).toBeTruthy();
  });
});
