import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleService} from '../shared/services/article.service';
import {ArticleComponent} from './components/article/article.component';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {ArticleEffectService} from './store/effects/article-effect.service';
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
    EffectsModule.forFeature([ArticleEffectService]),
    StoreModule.forFeature('article', reducers),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService]
})
export class ArticleModule {}
