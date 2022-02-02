import {ArticleStateInterface} from '../../types/articleStateInterface';
import {Action, createReducer, on} from '@ngrx/store';
import {articleAction, articleActionFailure, articleActionsSuccess} from '../actions/articleAction';


const initialState: ArticleStateInterface = {
  data: null,
  error: null,
  isLoading: false
};

const articleReducer = createReducer(
  initialState,
  on(
    articleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    articleActionsSuccess,
    (state, action): ArticleStateInterface  => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),

  on(
    articleActionFailure,
    (state, action) => ({
      ...state,
      isLoading: false
    })
  )
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
