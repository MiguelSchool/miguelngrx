import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../../shared/types/appState.interface';
import {CreateArticleState} from '../../types/createArticleState';

export const createActionFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateArticleState
  >('createArticle');


export const createArticleIsSubmittingSelector = createSelector(
  createActionFeatureSelector,
  (createArticleState: CreateArticleState) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createActionFeatureSelector,
  (createArticleState: CreateArticleState) => createArticleState.validationErrors
);


