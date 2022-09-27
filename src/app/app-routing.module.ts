import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Capacitor } from '@capacitor/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then(m => m.ViewPageModule),
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditPageModule),

  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
  },
  {
    path: 'choose-sign',
    loadChildren: () => import('./choose-sign/choose-sign.module').then(m => m.ChooseSignPageModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule),
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then(m => m.PolicyPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
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
