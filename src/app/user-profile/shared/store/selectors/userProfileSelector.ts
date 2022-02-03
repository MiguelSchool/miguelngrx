import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../../shared/types/appState.interface';
import {UserProfileStateInterface} from '../../../types/UserProfileStateInterface';

export const userProfileFeatureSelector = createFeatureSelector <AppStateInterface, UserProfileStateInterface>('userProfile');

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.data
);

export const userProfileIsLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.isLoading
);

export const userProfileErrorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.error
);
