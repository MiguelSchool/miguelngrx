import {createAction, props} from '@ngrx/store';

import {ActionTypesAuth} from 'src/app/auth/store/actionTypesAuth';
import {LoginRequestInterface} from 'src/app/auth/types/loginRequest.interface';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';

export const loginAction = createAction(
  ActionTypesAuth.LOGIN,
  props<{request: LoginRequestInterface}>()
);

export const loginSuccessAction = createAction(
  ActionTypesAuth.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const loginFailureAction = createAction(
  ActionTypesAuth.LOGIN_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
