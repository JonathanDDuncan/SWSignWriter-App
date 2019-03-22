import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicksigndocPage } from './quicksigndoc.page';

const routes: Routes = [
  {
    path: '',
    component: QuicksigndocPage,
    children: [
      {
        path: 'view',
        children: [
          {
            path: '',
            loadChildren: '../view/view.module#ViewPageModule'
          }
        ]
      },
      {
        path: 'edit',
        children: [
          {
            path: '',
            loadChildren: '../edit/edit.module#EditPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/quicksigndoc/view',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/quicksigndoc/view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuicksigndocPageRoutingModule {}
