import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedArticleService} from '../shared/services/shared-article.service';
import {ArticleComponent} from './components/article/article.component';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {GetArticleEffectService} from './store/effects/GetArticle-effect.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducer/reducers';
import {LoadingModule} from "../shared/modules/loading/loading.module";
import {ErrorMessageModule} from "../shared/modules/errorMessage/errorMessage.module";
import {TagListModule} from "../shared/modules/tagList/tagList.module";

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
];

const router = RouterModule.forChild(routes);
@NgModule({
  imports: [
    CommonModule,
    router,
    EffectsModule.forFeature([GetArticleEffectService]),
    StoreModule.forFeature('article', reducers),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService]
})
export class ArticleModule {}
