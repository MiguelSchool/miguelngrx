import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import {ArticleFormModule} from '../shared/modules/article-form/article-form.module';
import {LoadingModule} from '../shared/modules/loading/loading.module';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {UpdateArticleEffectService} from './shared/store/effects/update-article-effect.service';
import {GetArticleEffectService} from './shared/store/effects/get-article-effect.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './shared/store/reducers/reducers';
import {EditArticleService} from './shared/services/edit-article.service';
import {SharedArticleService} from '../shared/services/shared-article.service';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
];
const router = RouterModule.forChild(routes);

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    ArticleFormModule,
    LoadingModule,
    router,
    EffectsModule.forFeature([UpdateArticleEffectService, GetArticleEffectService]),
    StoreModule.forFeature('updateArticle', reducers)
  ],
  providers: [EditArticleService, SharedArticleService]
})
export class UpdateArticleModule { }
