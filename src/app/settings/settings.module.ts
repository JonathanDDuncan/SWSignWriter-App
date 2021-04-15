import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { NgxFileDropModule } from 'ngx-file-drop';
import { SharedModule } from '../shared/shared.module';
 
const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxFileDropModule,
    SharedModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
