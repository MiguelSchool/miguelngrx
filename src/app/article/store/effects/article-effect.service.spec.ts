import { TestBed } from '@angular/core/testing';

import { GetArticleEffectService } from './GetArticle-effect.service';

describe('ArticleEffectService', () => {
  let service: GetArticleEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetArticleEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
