import { AuthorizationGuard } from './authorization.guard';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivateChild: [AuthorizationGuard],
    pathMatch: 'full'
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then(m => m.ViewPageModule),
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditPageModule),
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'choose-sign',
    loadChildren: () => import('./choose-sign/choose-sign.module').then(m => m.ChooseSignPageModule),
    canActivate: [AuthorizationGuard],

    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule),
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./subscribe/subscribe.module').then(m => m.SubscribePageModule)
  },
  {
    path: 'callback',
    component: CallbackComponent
  }, 
  
  { path: 'share-ios', loadChildren: () => import('./share-ios/share-ios.module').then(m => m.ShareIOSPageModule) },
  { path: 'share-desktop', loadChildren: () => import('./share-desktop/share-desktop.module').then(m => m.ShareDesktopPageModule) },
  { path: 'share-android', loadChildren: () => import('./share-android/share-android.module').then(m => m.ShareAndroidPageModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
