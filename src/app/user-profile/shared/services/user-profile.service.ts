import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserProfileInterface} from '../../types/UserProfileInterface';
import {environment} from '../../../../environments/environment';
import {GetUserProfileResponseInterface} from '../../types/GetUserProfleResponse';
import {map} from 'rxjs/operators';

@Injectable()
export class UserProfileService {

  constructor(private http: HttpClient) { }
  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const fullUrl = `${environment.apiUrl}/profiles/${slug}`;
    return this.http.get<GetUserProfileResponseInterface>(fullUrl).pipe(
      map(response => response.userProfile)
    );
  }
}
