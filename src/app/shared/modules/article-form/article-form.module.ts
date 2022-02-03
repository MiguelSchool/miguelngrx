import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormsComponent } from './components/article-forms/article-forms.component';
import {BackendErrorMessagesModule} from '../backendErrorMessages/backendErrorMessages.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ArticleFormsComponent],
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    ReactiveFormsModule
  ],
  exports: [
    ArticleFormsComponent
  ]
})
export class ArticleFormModule { }
