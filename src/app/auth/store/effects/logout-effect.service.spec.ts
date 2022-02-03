import { TestBed } from '@angular/core/testing';

import { LogoutEffectService } from './logout-effect.service';

describe('LogoutEffectService', () => {
  let service: LogoutEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
