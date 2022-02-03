import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SharedArticleService} from '../../../shared/services/shared-article.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  getArticleActionFailure,
  getArticleAction,
  getArticleActionsSuccess,
  deleteArticleAction
} from '../actions/articleAction';
import {of} from 'rxjs';
import {ArticleInterface} from '../../../shared/types/article.interface';

@Injectable()
export class GetArticleEffectService {

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) { }

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
    ofType(getArticleAction),
    switchMap(({slug}) => {
      return this.sharedArticleService.getArticle(slug).pipe(
        map((article: ArticleInterface) => {
          return getArticleActionsSuccess({article});
        }),
        catchError(() => of(getArticleActionFailure()))
      );
    })));
}
