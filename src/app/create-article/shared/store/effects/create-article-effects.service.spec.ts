import { TestBed } from '@angular/core/testing';

import { CreateArticleEffectsService } from './create-article-effects.service';

describe('CreateArticleEffectsService', () => {
  let service: CreateArticleEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateArticleEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
