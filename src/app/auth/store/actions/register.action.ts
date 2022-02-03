import {createAction, props} from '@ngrx/store';

import {ActionTypesAuth} from 'src/app/auth/store/actionTypesAuth';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';

export const registerAction = createAction(
  ActionTypesAuth.REGISTER,
  props<{request: RegisterRequestInterface}>()
);

export const registerSuccessAction = createAction(
  ActionTypesAuth.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const registerFailureAction = createAction(
  ActionTypesAuth.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
