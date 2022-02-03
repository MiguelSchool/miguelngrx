import {createAction, props} from '@ngrx/store';
import {actionTypesUpdate} from '../actionTypesUpdate';
import {ArticleInterface} from '../../../../shared/types/article.interface';
import {BackendErrorsInterface} from '../../../../shared/types/backendErrors.interface';
import {ArticleInputInterface} from '../../../../shared/types/articleInputInterface';


export const updateArticleAction = createAction(
  actionTypesUpdate.UPDATE_ARTICLE,
  props<{slug: string, articleInput: ArticleInputInterface}>()
);

export const updateArticleSuccessAction = createAction(
  actionTypesUpdate.UPDATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const updateArticleFailureAction = createAction(
  actionTypesUpdate.UPDATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);

export const getArticleAction = createAction(
  actionTypesUpdate.GET_ARTICLE,
  props<{slug: string}>()
);

export  const getArticleActionsSuccess = createAction(
  actionTypesUpdate.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const getArticleActionFailure = createAction(
  actionTypesUpdate.Get_ARTICLE_FAILURE
);
