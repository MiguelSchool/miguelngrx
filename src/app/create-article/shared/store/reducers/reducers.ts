import {CreateArticleState} from '../../types/createArticleState';
import {Action, createReducer, on} from '@ngrx/store';
import {createArticleAction, createArticleActionFailure, createArticleActionSuccess} from '../actions/actions';

const initialState: CreateArticleState = {
  isSubmitting: false,
  validationErrors: null
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleState => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    createArticleActionSuccess,
    (state): CreateArticleState => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    createArticleActionFailure,
    (state, action): CreateArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);

export function reducers(state: CreateArticleState, action: Action) {
  return createArticleReducer(state, action);
}
