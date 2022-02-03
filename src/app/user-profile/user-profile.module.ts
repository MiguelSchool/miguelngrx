import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {UserProfileService} from "./shared/services/user-profile.service";
import {EffectsModule} from "@ngrx/effects";
import {UserProfileEffectService} from "./shared/store/effects/user-profile-effect.service";
import {StoreModule} from "@ngrx/store";
import {userProfileReducers} from "./shared/store/reducers/userProfileReducer";

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent
  }
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UserProfileEffectService ]),
    StoreModule.forFeature('userProfile', userProfileReducers)
  ],
  providers: [
    UserProfileService
  ]
})
export class UserProfileModule { }
