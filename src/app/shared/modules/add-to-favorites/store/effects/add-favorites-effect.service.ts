import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UpdateFavoritesService} from '../../shared/update-favorites.service';
import {
  addFavoritesAction,
  addFavoritesFailureAction,
  addFavoritesSuccessAction
} from '../actions/favoriteActions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ArticleInterface} from '../../../../types/article.interface';
import {of} from 'rxjs';

@Injectable()
export class AddFavoritesEffectService {

  constructor(
    private actions$: Actions,
    private updateFavoritesService: UpdateFavoritesService
  ) {
  }

  addFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFavoritesAction),
      switchMap(({isFavorite, slug}) => {
        const article$ = !isFavorite ?
          this.updateFavoritesService.addFavorite(slug) : this.updateFavoritesService.removeFavorite(slug);
        return article$.pipe(
          map((article: ArticleInterface) => addFavoritesSuccessAction({article}))
        );
      }),
      catchError(() => of(addFavoritesFailureAction()))
    )
  );

}
