import { Component, OnInit } from '@angular/core';
import {ArticleInterface} from '../../../shared/types/article.interface';
import {ArticleInputInterface} from '../../../shared/types/articleInputInterface';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getArticleAction, updateArticleAction} from '../../shared/store/actions/updateArticleActions';
import {ActivatedRoute} from '@angular/router';
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';
import {
  articleSelector,
  isLoadingArticleSelector,
  validationErrorsSelector,
  isSubmittingSelector
} from '../../shared/store/selectors/selectors';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  initialValues$: Observable<ArticleInputInterface> | undefined;
  isSubmitting$: Observable<boolean> | undefined;
  backendErrors$: Observable<BackendErrorsInterface | null > | undefined;
  isLoading$: Observable<boolean> | undefined;
  slug: string | undefined;

  constructor(private store: Store, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    this.slug = this.router.snapshot.paramMap.get('slug');
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        };
      })
    );
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingArticleSelector));
  }

  onSubmit(articleInput: ArticleInterface) {
    this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}));
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }
}
