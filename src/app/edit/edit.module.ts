import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPage } from './edit.page';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EditPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        PipesModule,
        SharedModule
    ],
    declarations: [EditPage]
})
export class EditPageModule {}
