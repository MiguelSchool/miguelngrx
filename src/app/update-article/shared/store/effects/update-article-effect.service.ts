import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EditArticleService} from '../../services/edit-article.service';
import {Router} from '@angular/router';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from '../actions/updateArticleActions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {ArticleInterface} from '../../../../shared/types/article.interface';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UpdateArticleEffectService {

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {
  }

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({articleInput, slug}) => {
        return this.editArticleService.updateArticle(articleInput, slug).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({article});
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(updateArticleFailureAction(errorResponse.error.error))));
      })
    ));

  redirectAfterUpdate$ = createEffect(() =>
  this.actions$.pipe(
    ofType(updateArticleSuccessAction),
    tap(({article}) => this.router.navigate(['/articles', article.slug ]))
  ), { dispatch: false });
}
