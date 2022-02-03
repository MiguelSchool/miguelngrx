import {createAction, props} from '@ngrx/store';

import {ActionTypesAuth} from 'src/app/auth/store/actionTypesAuth';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';

export const getCurrentUserAction = createAction(ActionTypesAuth.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypesAuth.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypesAuth.GET_CURRENT_USER_FAILURE
);
