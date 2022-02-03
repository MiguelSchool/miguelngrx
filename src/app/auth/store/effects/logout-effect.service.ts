import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {logoutAction} from '../actions/syncActions';
import {tap} from 'rxjs/operators';
import {PersistanceService} from '../../../shared/services/persistance.service';
import {Router} from '@angular/router';

@Injectable()
export class LogoutEffectService {
  constructor(
    private actions$: Actions,
    private persistenceService: PersistanceService,
    private router: Router
  ) { }

  logout$ = createEffect(() =>
  this.actions$.pipe(
    ofType(logoutAction),
    tap(() => {
      this.persistenceService.set('accessToken', '');
      this.router.navigateByUrl('/');
    })
  ),
    {dispatch: false});
}
