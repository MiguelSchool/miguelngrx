import {createAction, props} from '@ngrx/store';
import {actionTypes} from '../actionTypes';
import {ArticleInputInterface} from '../../../../shared/types/articleInputInterface';
import {ArticleInterface} from '../../../../shared/types/article.interface';
import {BackendErrorsInterface} from '../../../../shared/types/backendErrors.interface';

export const createArticleAction = createAction(
  actionTypes.CREATE_ARTICLE,
  props<{articleInput: ArticleInputInterface}>()
);

export const createArticleActionSuccess = createAction(
  actionTypes.CREATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const createArticleActionFailure = createAction(
  actionTypes.CREATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
