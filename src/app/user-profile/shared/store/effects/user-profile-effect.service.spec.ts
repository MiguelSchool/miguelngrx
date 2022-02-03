import { TestBed } from '@angular/core/testing';

import { UserProfileEffectService } from './user-profile-effect.service';

describe('UserProfileEffectService', () => {
  let service: UserProfileEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
