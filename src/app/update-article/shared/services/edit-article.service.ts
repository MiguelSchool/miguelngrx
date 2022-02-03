import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleInputInterface} from '../../../shared/types/articleInputInterface';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../../../shared/types/article.interface';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {ArticleResponseInterface} from '../../../shared/types/ArticleResponseInterface';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  constructor(private http: HttpClient) { }

  updateArticle(articleInput: ArticleInputInterface, slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.put(fullUrl, {article: articleInput}).pipe(
      map((response: ArticleResponseInterface) => response.article));
  }
}
