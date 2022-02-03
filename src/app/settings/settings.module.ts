import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import {StoreModule} from '@ngrx/store';
import {settingsReducer} from './store/reducers/settingsReducers';


const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    // if there are not many routes i can do this... but I think a file for routes are better than this
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', settingsReducer)
  ]
})
export class SettingsModule { }
