import {EditArticleStateInterface} from '../../types/editArticleStateInterface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
  getArticleAction,
  getArticleActionFailure,
  getArticleActionsSuccess
} from '../actions/updateArticleActions';

const initialState: EditArticleStateInterface = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null
};

const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    ((state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true
    }))
  ),
  on(
    updateArticleSuccessAction,
    ((state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false
    }))
  ),
  on(
    updateArticleFailureAction,
    (((state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })))
  ),

  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleActionsSuccess,
    (state, action):EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleActionFailure,
    ((state): EditArticleStateInterface => ({
      ...state,
      isLoading: false
    }))
  )
);

export function reducers(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
