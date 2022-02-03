import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from 'src/app/auth/auth.module';
import {environment} from 'src/environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {TopBarModule} from 'src/app/shared/modules/topBar/topBar.module';
import {PersistanceService} from './shared/services/persistance.service';
import {AuthInterceptor} from './shared/services/authinterceptor.service';
import {GlobalFeedModule} from './globalFeed/globalFeed.module';
import {YourFeedModule} from './yourFeed/yourFeed.module';
import {TagFeedModule} from 'src/app/tagFeed/tagFeed.module';
import {ArticleModule} from './article/article.module';
import {CreateArticleModule} from './create-article/create-article.module';
import {UpdateArticleModule} from './update-article/update-article.module';
import {SettingsModule} from './settings/settings.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {UserProfileModule} from "./user-profile/user-profile.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule, // => order here is very important!!
    ArticleModule,
    UpdateArticleModule,
    SettingsModule,
    UserProfileModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
