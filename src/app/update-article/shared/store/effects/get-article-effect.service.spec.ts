import { TestBed } from '@angular/core/testing';

import { GetArticleEffectService } from './get-article-effect.service';

describe('GetArticleEffectService', () => {
  let service: GetArticleEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetArticleEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
