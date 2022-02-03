import {UserProfileStateInterface} from '../../../types/UserProfileStateInterface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  getUserProfileAction,
  getUserProfileActionFailure,
  getUserProfileActionSuccess
} from '../actions/userProfilActions';

const initialState: UserProfileStateInterface = { data: null, error: null, isLoading: false };

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state => ({
      ...state,
        isLoading: true
    }))
  ),

  on(
    getUserProfileActionSuccess,
    (state, action) => ({
      ...state,
      isLoading: false,
      data: action.userProfile
    })
  ),

  on(
    getUserProfileActionFailure,
    (state) => ({
      ...state,
      isLoading: false
    })
  ),
);

export function userProfileReducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action);
}
