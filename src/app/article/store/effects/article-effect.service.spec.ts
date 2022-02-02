import { TestBed } from '@angular/core/testing';

import { ArticleEffectService } from './article-effect.service';

describe('ArticleEffectService', () => {
  let service: ArticleEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
