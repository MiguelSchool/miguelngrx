import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ArticleInterface} from '../types/article.interface';
import {environment} from '../../../environments/environment';
import {ArticleResponseInterface} from '../types/ArticleResponseInterface';

@Injectable()
export class SharedArticleService {

  constructor(private http: HttpClient) { }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<ArticleResponseInterface>(fullUrl).pipe(
      map((response: ArticleResponseInterface) => response.article));
  }
}
