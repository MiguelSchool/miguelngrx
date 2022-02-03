import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../../../types/article.interface';
import {map} from 'rxjs/operators';
import {ArticleResponseInterface} from '../../../types/ArticleResponseInterface';

@Injectable()
export class UpdateFavoritesService {

  constructor(
    private http: HttpClient) { }
  private static getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  private static getArticle(articleResponse: ArticleResponseInterface): ArticleInterface {
    return articleResponse.article;
  }

  addFavorite(slug: string): Observable<ArticleInterface> {
    const fullUrl = UpdateFavoritesService.getUrl(slug);
    return this.http.post<ArticleResponseInterface>(fullUrl, {}).pipe(
      map(UpdateFavoritesService.getArticle));
  }
  removeFavorite(slug: string): Observable<ArticleInterface> {
    const fullUrl = UpdateFavoritesService.getUrl(slug);
    return this.http.delete(fullUrl, {}).pipe(
      map(UpdateFavoritesService.getArticle));
  }
}
