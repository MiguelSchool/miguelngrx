import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleInputInterface} from '../../../shared/types/articleInputInterface';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ArticleResponseInterface} from '../../../shared/types/ArticleResponseInterface';
import {map} from 'rxjs/operators';
import {ArticleInterface} from '../../../shared/types/article.interface';

@Injectable()
export class CreateArticleService {

  constructor(private http: HttpClient) { }

  createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles';
    return this.http.post<ArticleResponseInterface>(fullUrl, {article: articleInput}).pipe(
      map((articleResponse: ArticleResponseInterface) => articleResponse.article));
  }
}
