import {AuthStateInterface} from 'src/app/auth/types/authState.interface';
import {FeedStateInterface} from 'src/app/shared/modules/feed/types/feedState.interface';
import {PopularTagsStateInterface} from '../modules/popularTags/types/popularTagsState.interface';
import {ArticleStateInterface} from '../../article/types/articleStateInterface';
import {CreateArticleState} from '../../create-article/shared/types/createArticleState';
import {EditArticleStateInterface} from '../../update-article/shared/types/editArticleStateInterface';
import {SettingsStateInterface} from '../../settings/types/SettingsState';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleState;
  updateArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
}
