import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {ArticleInterface} from '../../../shared/types/article.interface';

export const articleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{slug: string}>()
);

export  const articleActionsSuccess = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const articleActionFailure = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
