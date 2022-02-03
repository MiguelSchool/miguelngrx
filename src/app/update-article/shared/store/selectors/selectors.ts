import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../../shared/types/appState.interface';
import {EditArticleStateInterface} from '../../types/editArticleStateInterface';

export const editArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface>('updateArticle');


export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  ((editArticleState: EditArticleStateInterface ) => editArticleState.isSubmitting )
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  ((editArticleState: EditArticleStateInterface) => editArticleState.validationErrors)
);


export const articleSelector = createSelector(
  editArticleFeatureSelector,
  ((editArticleState: EditArticleStateInterface) => editArticleState.article)
);

export const isLoadingArticleSelector = createSelector(
  editArticleFeatureSelector,
  ((editArticleState: EditArticleStateInterface) => editArticleState.isLoading)
);
