import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormsComponent } from './article-forms.component';

describe('ArticleFormsComponent', () => {
  let component: ArticleFormsComponent;
  let fixture: ComponentFixture<ArticleFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
