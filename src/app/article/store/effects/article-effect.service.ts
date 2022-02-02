import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ArticleService} from '../../../shared/services/article.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {articleActionFailure, articleAction, articleActionsSuccess} from '../actions/articleAction';
import {of} from 'rxjs';
import {ArticleInterface} from '../../../shared/types/article.interface';

@Injectable()
export class ArticleEffectService {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) { }

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
    ofType(articleAction),
    switchMap(({slug}) => {
      return this.articleService.getArticle(slug).pipe(
        map((article: ArticleInterface) => {
          return articleActionsSuccess({article});
        }),
        catchError(() => of(articleActionFailure()))
      );
    })));

}
