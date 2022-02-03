import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SharedArticleService} from '../../../../shared/services/shared-article.service';
import {getArticleAction, getArticleActionsSuccess, getArticleActionFailure} from '../actions/updateArticleActions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ArticleInterface} from '../../../../shared/types/article.interface';
import {of} from 'rxjs';

@Injectable()
export class GetArticleEffectService {

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService) { }

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
    })
  ));
}
