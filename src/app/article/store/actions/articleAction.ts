import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {ArticleInterface} from '../../../shared/types/article.interface';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{slug: string}>()
);

export  const getArticleActionsSuccess = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const getArticleActionFailure = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{slug: string}>()
);

export const deleteArticleActionSuccess = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS
);

export const deleteArticleActionFailure = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
