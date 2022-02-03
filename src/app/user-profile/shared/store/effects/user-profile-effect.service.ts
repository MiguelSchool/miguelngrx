import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserProfileService} from '../../services/user-profile.service';
import {
  getUserProfileAction,
  getUserProfileActionFailure,
  getUserProfileActionSuccess
} from '../actions/userProfilActions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UserProfileInterface} from '../../../types/UserProfileInterface';

@Injectable()
export class UserProfileEffectService {

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService) { }

  getUserProfile$ = createEffect( () =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({slug}) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfileInterface) => getUserProfileActionSuccess({userProfile}))
        );
      }),
      catchError(() => getUserProfileActionFailure)
    ));
}
