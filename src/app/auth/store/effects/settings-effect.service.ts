import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from '../../services/auth.service';
import {
  updateCurrentUserAction,
  updateCurrentUSerActionFailure,
  updateCurrentUserActionSuccess
} from '../actions/updateCurrentUser';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsEffectService {

  constructor(
    private actions$: Actions,
    private authService: AuthService) {
  }

  updateCurrentUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({currentUserInput}) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) => updateCurrentUserActionSuccess({currentUser}))
        );
      }),
      catchError((httpErrorResponse: HttpErrorResponse) =>
        of(updateCurrentUSerActionFailure(httpErrorResponse.error.errors)))
    )
  );
}
