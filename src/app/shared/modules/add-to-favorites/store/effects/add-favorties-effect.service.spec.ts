import { TestBed } from '@angular/core/testing';

import { AddFavoritesEffectService } from './add-favorites-effect.service';

describe('AddFavortiesEffectService', () => {
  let service: AddFavoritesEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFavoritesEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
