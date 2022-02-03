import {createAction, props} from '@ngrx/store';
import {ActionTypesUpdateFavorites} from '../actionTypesUpdateFavorites';
import {ArticleInterface} from '../../../../types/article.interface';

export const addFavoritesAction = createAction(
  ActionTypesUpdateFavorites.ADD_FAVORITES,
  props<{isFavorite: boolean, slug: string}>()
);

export const addFavoritesSuccessAction = createAction(
  ActionTypesUpdateFavorites.ADD_FAVORITES_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const addFavoritesFailureAction = createAction(
  ActionTypesUpdateFavorites.ADD_FAVORITES_FAILURE
);
