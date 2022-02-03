import { TestBed } from '@angular/core/testing';

import { SettingsEffectService } from './settings-effect.service';

describe('SettingsEffectService', () => {
  let service: SettingsEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
