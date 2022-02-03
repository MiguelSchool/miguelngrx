import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CreateArticleService} from '../../services/create-article.service';
import {createArticleAction, createArticleActionFailure, createArticleActionSuccess} from '../actions/actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {ArticleInterface} from '../../../../shared/types/article.interface';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class CreateArticleEffectsService {

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router) { }

  createArticle$ = createEffect(() =>
  this.actions$.pipe(
    ofType(createArticleAction),
    switchMap(({articleInput}) => {
      return this.createArticleService.createArticle(articleInput).pipe(
        map((article: ArticleInterface) => {
          return createArticleActionSuccess({article});
        }),
        catchError((errorResponse: HttpErrorResponse) =>
          of(createArticleActionFailure({errors: errorResponse.error.errors})))
      );
    })
  ));

  redirectAfterSubmit$ = createEffect(() =>
  this.actions$.pipe(
    ofType(createArticleActionSuccess),
    tap(({article}) => this.router.navigate(['/articles', article.slug]))
  ),
    {dispatch: false}
  );
}
