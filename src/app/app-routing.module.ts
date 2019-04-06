import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'view',
  },
  { path: 'view', loadChildren: './view/view.module#ViewPageModule' },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule'
  },
  {
    path: 'choose-sign',
    loadChildren: './choose-sign/choose-sign.module#ChooseSignPageModule'
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
