import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {UpdateFavoritesService} from './shared/update-favorites.service';
import {EffectsModule} from '@ngrx/effects';
import {AddFavoritesEffectService} from './store/effects/add-favorites-effect.service';


const routes: Routes = [
  {
    path: 'articles/:slug/favorite',
    component: AddToFavoritesComponent
  }
];

@NgModule({
    declarations: [AddToFavoritesComponent],
    exports: [
        AddToFavoritesComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([AddFavoritesEffectService]),
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    UpdateFavoritesService
  ]
})
export class AddToFavoritesModule { }
