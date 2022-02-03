import {createAction, props} from '@ngrx/store';
import {ActionTypesAuth} from '../actionTypesAuth';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {CurrentUserInputInterface} from '../../../shared/types/CurrentUserInputInterface';
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';



export const updateCurrentUserAction = createAction(
  ActionTypesAuth.UPDATE_CURRENT_USER,
  props<{currentUserInput: CurrentUserInputInterface}>()
);

export const updateCurrentUserActionSuccess = createAction(
  ActionTypesAuth.UPDATE_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const updateCurrentUSerActionFailure = createAction(
  ActionTypesAuth.UPDATE_CURRENT_USER_FAILURE,
  props<{error: BackendErrorsInterface}>()
);
