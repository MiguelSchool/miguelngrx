import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import {RouterModule, Routes} from '@angular/router';
import {ArticleFormModule} from '../shared/modules/article-form/article-form.module';
import {CreateArticleService} from './shared/services/create-article.service';
import {EffectsModule} from '@ngrx/effects';
import {CreateArticleEffectsService} from './shared/store/effects/create-article-effects.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './shared/store/reducers/reducers';
import {BackendErrorMessagesModule} from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
];
const router = RouterModule.forChild(routes);

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ArticleFormModule,
    router,
    BackendErrorMessagesModule,
    EffectsModule.forFeature([CreateArticleEffectsService]),
    StoreModule.forFeature('createArticle', reducers)
  ],
  providers: [CreateArticleService]
})
export class CreateArticleModule { }
