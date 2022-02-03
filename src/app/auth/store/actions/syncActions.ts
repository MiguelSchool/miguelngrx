import {createAction} from '@ngrx/store';
import {ActionTypesAuth} from 'src/app/auth/store/actionTypesAuth';

export const logoutAction = createAction(
  ActionTypesAuth.LOGOUT
);
