import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quicksigndoc/view',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'quicksigndoc',
    loadChildren: './quicksigndoc/quicksigndoc.module#QuicksigndocPageModule'
  },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'choose-sign', loadChildren: './choose-sign/choose-sign.module#ChooseSignPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
