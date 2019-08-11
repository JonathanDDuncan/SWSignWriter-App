import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginPageModule',
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
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'subscribe', loadChildren: './subscribe/subscribe.module#SubscribePageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
