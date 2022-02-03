import {Component, OnInit} from '@angular/core';
import {UserProfileInterface} from '../../types/UserProfileInterface';
import {combineLatest, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getUserProfileAction} from '../../shared/store/actions/userProfilActions';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {
  userProfileErrorSelector,
  userProfileIsLoadingSelector,
  userProfileSelector
} from '../../shared/store/selectors/userProfileSelector';
import {currentUserSelector} from '../../../auth/store/selectors';
import {filter, map} from 'rxjs/operators';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile$: Observable<UserProfileInterface>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  slug: string;
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(userProfileIsLoadingSelector));
    this.error$ = this.store.pipe(select(userProfileErrorSelector));
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          UserProfileInterface
        ]) => {
          return currentUser.username === userProfile.username;
        }
      )
    );
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }

  initializeListeners(): void {
    this.store
      .pipe(select(userProfileSelector)).subscribe(t => console.log('t', t));


    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}));
  }
}
