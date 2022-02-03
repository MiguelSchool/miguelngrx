import {ArticleStateInterface} from '../../types/articleStateInterface';
import {Action, createReducer, on} from '@ngrx/store';
import {getArticleAction, getArticleActionFailure, getArticleActionsSuccess} from '../actions/articleAction';


const initialState: ArticleStateInterface = {
  data: null,
  error: null,
  isLoading: false
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    getArticleActionsSuccess,
    (state, action): ArticleStateInterface  => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),

  on(
    getArticleActionFailure,
    (state, action) => ({
      ...state,
      isLoading: false
    })
  )
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
