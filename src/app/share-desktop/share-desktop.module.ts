import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShareDesktopPage } from './share-desktop.page';

const routes: Routes = [
  {
    path: '',
    component: ShareDesktopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShareDesktopPage]
})
export class ShareDesktopPageModule {}
