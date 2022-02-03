import { TestBed } from '@angular/core/testing';

import { UpdateArticleEffectService } from './update-article-effect.service';

describe('UpdateArticleEffectService', () => {
  let service: UpdateArticleEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateArticleEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
