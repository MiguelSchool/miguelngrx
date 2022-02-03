import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {deleteArticleAction, getArticleAction} from '../../store/actions/articleAction';
import {ActivatedRoute} from '@angular/router';
import {ArticleInterface} from '../../../shared/types/article.interface';
import {combineLatest, Observable} from 'rxjs';
import {articleSelector, errorSelector, isLoadingSelector} from '../../store/selectors';
import {currentUserSelector} from '../../../auth/store/selectors';
import {map} from 'rxjs/operators';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  slug: string | undefined;
  article$: Observable<ArticleInterface> | undefined;
  isLoading$: Observable<boolean> | undefined;
  error$: Observable<string | null> | undefined;
  isAuthor$: Observable<boolean> | undefined;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))).pipe(
        map(
          ([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) =>  {
            if (!article || !currentUser) { return false; }
            return currentUser.username === article.author.username;
          }));
  }

  private initializeListeners(): void {
      this.article$ = this.store.pipe(select(articleSelector));
  }
  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}));
  }
}
