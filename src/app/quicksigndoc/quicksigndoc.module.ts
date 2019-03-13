import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuicksigndocPage } from './quicksigndoc.page';
import { QuicksigndocPageRoutingModule } from './quicksigndoc-routing.module';

const routes: Routes = [
  {
    path: '',
    component: QuicksigndocPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    QuicksigndocPageRoutingModule
  ],
  declarations: [QuicksigndocPage]
})
export class QuicksigndocPageModule {}
