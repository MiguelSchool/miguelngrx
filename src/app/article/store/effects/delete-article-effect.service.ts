import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ArticleService} from '../../shared/services/article.service';
import {deleteArticleAction, deleteArticleActionFailure, deleteArticleActionSuccess} from "../actions/articleAction";
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class DeleteArticleEffectService {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) {
  }

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({slug}) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => deleteArticleActionSuccess()),
          catchError(() => of(deleteArticleActionFailure)
          ));
      })
    ));

  /* don't need any changes in the reducer because I don't change the state */
  redirectAfterDelete$ = createEffect(() =>
      this.actions$.pipe(
        ofType(deleteArticleActionSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    {dispatch: false});
}
