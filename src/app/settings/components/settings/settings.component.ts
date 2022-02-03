import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {
  currentUserSelector,
  isSubmittingSelector,
  validationErrorsSelector
} from '../../../auth/store/selectors';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';
import {CurrentUserInputInterface} from '../../../shared/types/CurrentUserInputInterface';
import {updateCurrentUserAction} from '../../../auth/store/actions/updateCurrentUser';
import {logoutAction} from "../../../auth/store/actions/syncActions";

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  formGroup: FormGroup;
  currentUser$: Observable<CurrentUserInterface | null> | undefined;
  isSubmitting$: Observable<boolean> | undefined;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  private initializeForm(
    currentUserImage: string,
    currentUserUserName: string,
    currentUserBio: string,
    currentUserEmail): void {

    this.formGroup = this.formBuilder.group({
      image: currentUserImage,
      username: currentUserUserName,
      bio: currentUserBio,
      email: currentUserEmail,
      password: ''
    });
  }

  private initializeListeners(): void {
    this.currentUser$ = this.store.pipe(
      select(currentUserSelector),
      filter(Boolean),
      map((currentUser: CurrentUserInterface) => {
        this.initializeForm(
          currentUser.image,
          currentUser.username,
          currentUser.bio,
          currentUser.email,
        );
        return currentUser;
      }));
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(currentUser: CurrentUserInterface): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...currentUser,
      ...this.formGroup.value
    };
    console.log(currentUserInput)
    this.store.dispatch(updateCurrentUserAction({currentUserInput}));
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
