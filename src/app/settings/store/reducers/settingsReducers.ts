import {SettingsStateInterface} from '../../types/SettingsState';
import {Action, createReducer, on} from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUSerActionFailure,
  updateCurrentUserActionSuccess
} from '../../../auth/store/actions/updateCurrentUser';

const initialState: SettingsStateInterface = {
  isSubmitting: false, validationErrors: null
};

const settingsReducers = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateCurrentUserActionSuccess,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateCurrentUSerActionFailure,
    (state, action): SettingsStateInterface => ( {
      isSubmitting: false,
      validationErrors: action.error
    })
  )
);

export function settingsReducer(state: SettingsStateInterface, action: Action) {
  return settingsReducers(state, action);
}
