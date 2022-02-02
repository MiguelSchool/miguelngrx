import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AppStateInterface} from '../../shared/types/appState.interface';
import {ArticleStateInterface} from '../types/articleStateInterface';

export const actionFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface>('article');

export const isLoadingSelector = createSelector(
  actionFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const errorSelector = createSelector(
  actionFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

export const articleSelector = createSelector(
  actionFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);

