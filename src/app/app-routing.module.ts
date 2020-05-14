import { AuthorizationGuard } from './authorization.guard';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginPageModule',
    canActivateChild: [AuthorizationGuard],
    pathMatch: 'full'
  },
  {
    path: 'view',
    loadChildren: './view/view.module#ViewPageModule',
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'edit',
    loadChildren: './edit/edit.module#EditPageModule',
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule',
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'choose-sign',
    loadChildren: './choose-sign/choose-sign.module#ChooseSignPageModule',
    canActivate: [AuthorizationGuard],

    data: {
      allowedRoles: ['subscribed', 'trial']
    }
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutPageModule',
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
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'logout',
    loadChildren: './logout/logout.module#LogoutPageModule'
  },
  {
    path: 'subscribe',
    loadChildren: './subscribe/subscribe.module#SubscribePageModule'
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'stripesuccess',
    loadChildren: './stripesuccess/stripesuccess.module#StripesuccessPageModule'
  },
  {
    path: 'stripecancel',
    loadChildren: './stripecancel/stripecancel.module#StripecancelPageModule'
  },  { path: 'stripesuccess', loadChildren: './stripesuccess/stripesuccess.module#StripesuccessPageModule' },
  { path: 'stripecancel', loadChildren: './stripecancel/stripecancel.module#StripecancelPageModule' },
  { path: 'share-ios', loadChildren: './share-ios/share-ios.module#ShareIOSPageModule' },
  { path: 'share-desktop', loadChildren: './share-desktop/share-desktop.module#ShareDesktopPageModule' },
  { path: 'share-android', loadChildren: './share-android/share-android.module#ShareAndroidPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
