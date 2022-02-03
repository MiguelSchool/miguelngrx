import { TestBed } from '@angular/core/testing';

import { UpdateFavoritesService } from './update-favorites.service';

describe('UpdateFavoritesService', () => {
  let service: UpdateFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
