import { TestBed } from '@angular/core/testing';

import { DeleteArticleEffectService } from './delete-article-effect.service';

describe('DeleteArticleEffectService', () => {
  let service: DeleteArticleEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteArticleEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
