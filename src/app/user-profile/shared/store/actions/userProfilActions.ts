import {createAction, props} from '@ngrx/store';
import {UserProfileActionTypes} from '../actiontypes/userProfileActionTypes';
import {UserProfileInterface} from '../../../types/UserProfileInterface';

export const getUserProfileAction = createAction(
  UserProfileActionTypes.GET_USER_PROFILE,
  props<{slug: string}>()
);

export const getUserProfileActionSuccess = createAction(
  UserProfileActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{userProfile: UserProfileInterface}>()
);

export const getUserProfileActionFailure = createAction(
  UserProfileActionTypes.GET_USER_PROFILE_FAILURE
);
